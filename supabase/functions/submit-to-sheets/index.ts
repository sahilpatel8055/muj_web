import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormData {
  name: string;
  email: string;
  mobile: string;
  course: string;
  trigger?: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, mobile, course, trigger = 'form' }: FormData = await req.json();

    // Get Google service account credentials from environment
    const serviceAccountJson = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_JSON');
    if (!serviceAccountJson) {
      throw new Error('Google service account credentials not found');
    }

    const serviceAccount = JSON.parse(serviceAccountJson);
    
    // Create JWT for Google API authentication
    const now = Math.floor(Date.now() / 1000);
    const jwtHeader = {
      alg: 'RS256',
      typ: 'JWT'
    };

    const jwtPayload = {
      iss: serviceAccount.client_email,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600
    };

    // Create JWT signature
    const encoder = new TextEncoder();
    const headerBase64 = btoa(JSON.stringify(jwtHeader)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    const payloadBase64 = btoa(JSON.stringify(jwtPayload)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    const unsignedToken = `${headerBase64}.${payloadBase64}`;
    
    // Import private key and sign
    const privateKeyPem = serviceAccount.private_key;
    const privateKeyDer = Uint8Array.from(
      atob(privateKeyPem.replace(/-----BEGIN PRIVATE KEY-----/, '').replace(/-----END PRIVATE KEY-----/, '').replace(/\s/g, '')),
      c => c.charCodeAt(0)
    );

    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8',
      privateKeyDer,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      cryptoKey,
      encoder.encode(unsignedToken)
    );

    const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

    const jwt = `${unsignedToken}.${signatureBase64}`;

    // Get access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Prepare data for Google Sheets
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const rowData = [timestamp, name, email, mobile, course, trigger || 'form'];

    // Google Sheet configuration
    const SPREADSHEET_ID = '1_kdzz44E2w4AV5Sr2i00XTpRtQ9jDlzdml8Bg5hOvnM';
    const RANGE = 'MUJ!A:F'; // Using your sheet name "MUJ"

    // Append data to Google Sheets
    const sheetsResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        }),
      }
    );

    if (!sheetsResponse.ok) {
      const errorText = await sheetsResponse.text();
      console.error('Google Sheets API error:', errorText);
      throw new Error(`Google Sheets API error: ${sheetsResponse.status}`);
    }

    const result = await sheetsResponse.json();
    console.log('Successfully added row to Google Sheets:', result);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Data submitted successfully',
        result 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in submit-to-sheets function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});