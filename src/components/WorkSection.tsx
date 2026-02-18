const services = [
  {
    number: "01",
    title: "Fashion Modeling",
    description:
      "Editorial and lookbook shoots with local and international clothing brands. Bold, authentic, and culturally grounded.",
  },
  {
    number: "02",
    title: "Commercial Modeling",
    description:
      "Product campaigns, lifestyle shoots, and advertising work. Bringing real stories to commercial visuals.",
  },
  {
    number: "03",
    title: "Brand Collaborations",
    description:
      "Long-form creative partnerships with SA brands who value authenticity, identity, and community-rooted storytelling.",
  },
  {
    number: "04",
    title: "Music Video Appearances",
    description:
      "Visual performer and featured talent for music video productions — capturing energy, emotion, and narrative.",
  },
  {
    number: "05",
    title: "Event Hosting",
    description:
      "MC and hosting services for cultural, fashion, and creative industry events. Presence, personality, professionalism.",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="bg-background py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-terracotta" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-terracotta">
            Services
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            What I Do
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-xs font-light">
            Available for bookings across South Africa and beyond.
          </p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8 md:py-10 hover:pl-4 transition-all duration-300"
            >
              <span className="font-body text-xs tracking-widest text-terracotta/60 font-light pt-1 shrink-0 w-8">
                {service.number}
              </span>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 flex-1">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-terracotta transition-colors duration-300 shrink-0 min-w-[220px]">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="hidden md:flex items-center self-center ml-auto">
                <span className="text-terracotta/30 group-hover:text-terracotta group-hover:translate-x-2 transition-all duration-300 text-lg">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
