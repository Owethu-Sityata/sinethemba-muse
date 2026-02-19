const ContactSection = () => {
  return (
    <section id="contact" className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-cream/5 rotate-12 translate-x-16 -translate-y-16 rounded-full" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border border-terracotta/10 -rotate-12 -translate-x-8 translate-y-8" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-terracotta" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-terracotta">
              Get In Touch
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-6">
            Let's Create
            <br />
            <span className="italic font-normal text-terracotta">Something.</span>
          </h2>

          <p className="font-body text-base text-cream/50 font-light leading-relaxed mb-12 max-w-md">
            Available for bookings, collaborations, and creative conversations. Reach out and let's tell a story together.
          </p>

          {/* Contact email */}
          <a
            href="mailto:sinethembanguta@email.com"
            className="inline-flex items-center gap-4 group mb-16"
          >
            <span className="font-body text-lg md:text-xl text-cream/80 group-hover:text-terracotta transition-colors duration-300 border-b border-cream/20 group-hover:border-terracotta pb-1">
              sinethembanguta@email.com
            </span>
            <span className="text-terracotta group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>

          {/* Social links */}
          <div className="flex flex-wrap gap-6 items-center">
            <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/30">
              Follow
            </span>
            {[
            { label: "Facebook", href: "https://www.facebook.com/UPTOWN SNIZZY" },
              { label: "Instagram", href: "https://www.instagram.com/uptownsnizzyworld" },
              { label: "TikTok", href: "https://www.tiktok.com/@TheeOnlySnizzy" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-body text-sm tracking-wider text-cream/50 hover:text-terracotta transition-colors duration-300 underline-offset-4 hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-24 border-t border-cream/10 pt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="font-display text-cream/30 text-sm italic">
            Sinethemba Nguta
          </span>
          <span className="font-body text-xs text-cream/20 tracking-wider">
            © {new Date().getFullYear()} · Khayelitsha · Cape Town · Johannesburg
          </span>
          <span className="font-body text-xs tracking-[0.2em] uppercase text-terracotta/40">
            Model · Cultural Thinker · Creative
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
