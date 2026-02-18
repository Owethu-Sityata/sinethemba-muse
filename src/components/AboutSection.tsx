import photoBlue from "@/assets/photo-blue.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src={photoBlue}
                alt="Sinethemba Nguta portrait"
                className="w-full max-w-sm mx-auto lg:mx-0 object-cover object-top"
                style={{ aspectRatio: "3/4" }}
              />
              {/* Editorial overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                <span className="font-display italic text-cream/80 text-sm">
                  "Creativity tells my story"
                </span>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-terracotta/30 -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sand -z-10 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terracotta">
                About
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Between Two
              <br />
              <span className="italic font-normal text-terracotta">Worlds.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground font-body font-light text-base leading-relaxed">
              <p>
                My name is <strong className="text-foreground font-medium">Sinethemba Nguta</strong> — an innovative model who thrives on collaboration with local clothing brands, bridging culture and fashion.
              </p>
              <p>
                I consider myself a cultural thinker who stays deeply connected to my roots. My love for creation led me to start designing outfits for myself, expressing how I want to be seen — and how I want the world to feel seen through me.
              </p>
              <p>
                Born in <span className="text-terracotta font-medium">Khayelitsha, Cape Town</span> and raised in Johannesburg, I have lived both township and suburban life. These worlds, so different yet intertwined, shaped every part of my perspective and creative voice.
              </p>
              <p>
                Through modeling, visuals, and storytelling, I express where I come from and who I am becoming. I believe creativity is not just an art form — it is a language that tells my story and has the power to inspire others.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Cape Town", "Johannesburg", "Local Brands", "Self-Expression", "Cultural Identity"].map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs tracking-wider uppercase border border-border px-4 py-2 text-muted-foreground hover:border-terracotta hover:text-terracotta transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
