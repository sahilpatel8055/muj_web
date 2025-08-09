import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-glow-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s' }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
            Hello World
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Welcome to the future of web development.<br />
            Where code meets creativity and dreams become reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:border-primary/50">
              Learn More
            </Button>
          </div>

          {/* Code snippet decoration */}
          <div className="mx-auto max-w-md p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl">
            <div className="text-left text-sm font-mono text-muted-foreground">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs">main.tsx</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-primary">function</span> <span className="text-accent">App</span>() {'{'}</div>
                <div className="ml-4"><span className="text-primary">return</span> (</div>
                <div className="ml-8">&lt;<span className="text-accent">h1</span>&gt;Hello World&lt;/<span className="text-accent">h1</span>&gt;</div>
                <div className="ml-4">);</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Hero;