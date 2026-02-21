const images = [
  {
    src: "https://github.com/techmobilesolucoes/Home/blob/main/telaquebradasamsung.jpg?raw=true",
    alt: "Troca de tela Samsung",
  },
  {
    src: "https://github.com/techmobilesolucoes/Home/blob/main/assistencia_tecnica_macbook_brasilia_aguas_claras_1080x.jpg?raw=true",
    alt: "Reparo em MacBook",
  },
  {
    src: "https://github.com/techmobilesolucoes/Home/blob/main/vidrotraseiroquebradoiphone.jpg?raw=true",
    alt: "Troca de vidro traseiro iPhone",
  },
  {
    src: "https://github.com/techmobilesolucoes/Home/blob/main/assistencia%20notebook.jpg?raw=true",
    alt: "Reparo em notebook",
  },
  {
    src: "https://github.com/techmobilesolucoes/imagensdeservi-os/blob/main/reparo%20em%20mac.jpg?raw=true",
    alt: "Reparo em Mac",
  },
];

export function Carousel() {
  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-8 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="carousel-track flex gap-4">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 lg:w-80 h-48 lg:h-56 rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
