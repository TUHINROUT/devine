import Image from "next/image";

export interface BandImage {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageBand({ images }: { images: BandImage[] }) {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16 -mt-6">
      <div className={`grid gap-5 ${images.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>
        {images.map((img) => (
          <div
            key={img.src + img.alt}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/70 shadow-xl shadow-dark/10"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
            {img.caption && (
              <span className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium tracking-wide">
                {img.caption}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
