import photoHoodie from "@/assets/photo-hoodie.jpeg";
import photoBlue from "@/assets/photo-blue.jpeg";
import photoEllesse from "@/assets/photo-ellesse.jpeg";
import photoStreet from "@/assets/photo-street.jpeg";
import photoLocalCelebrity from "@/assets/photo-local-celebrity.jpeg";
import photoEllesse2 from "@/assets/photo-ellesse2.jpeg";
import photoWhiteHoodie from "@/assets/photo-white-hoodie.jpeg";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-charcoal py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terracotta">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight">
              The Lookbook
            </h2>
          </div>
          <p className="font-body text-sm text-cream/40 max-w-xs font-light leading-relaxed">
            A visual narrative of fashion, identity, and the streets that shaped me.
          </p>
        </div>

        {/* Gallery — Row 1: 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
          {/* Large tall left — Ellesse editorial */}
          <div className="col-span-1 row-span-2 relative overflow-hidden group" style={{ height: "560px" }}>
            <img
              src={photoEllesse}
              alt="Sinethemba Nguta - Ellesse editorial"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/80">Editorial</span>
            </div>
          </div>

          {/* Top middle — Local Celebrity full-body */}
          <div className="col-span-1 relative overflow-hidden group" style={{ height: "270px" }}>
            <img
              src={photoLocalCelebrity}
              alt="Sinethemba Nguta - Local Celebrity brand shoot"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/80">Brand Collab</span>
            </div>
          </div>

          {/* Top right — Hoodie */}
          <div className="col-span-1 relative overflow-hidden group" style={{ height: "270px" }}>
            <img
              src={photoHoodie}
              alt="Sinethemba Nguta - Local Celebrity hoodie"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/80">Street Wear</span>
            </div>
          </div>

          {/* Bottom middle — White hoodie action */}
          <div className="col-span-1 relative overflow-hidden group" style={{ height: "270px" }}>
            <img
              src={photoWhiteHoodie}
              alt="Sinethemba Nguta - White hoodie pose"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/80">Editorial</span>
            </div>
          </div>

          {/* Bottom right — Ellesse 2 portrait */}
          <div className="col-span-1 relative overflow-hidden group" style={{ height: "270px" }}>
            <img
              src={photoEllesse2}
              alt="Sinethemba Nguta - Ellesse portrait"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/80">Brand Collab</span>
            </div>
          </div>
        </div>

        {/* Gallery — Row 2: wide + portrait side by side */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Blue portrait */}
          <div className="col-span-1 relative overflow-hidden group" style={{ height: "340px" }}>
            <img
              src={photoBlue}
              alt="Sinethemba Nguta - Blue sweater portrait"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/80">Portrait</span>
            </div>
          </div>

          {/* Street — spans 2 cols */}
          <div className="col-span-1 md:col-span-2 relative overflow-hidden group" style={{ height: "340px" }}>
            <img
              src={photoStreet}
              alt="Sinethemba Nguta - Street fashion"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/80">Street Style</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
