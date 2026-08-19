import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/images';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

export const CleanPhotoGallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="galeria" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Limpo */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Camera className="w-3.5 h-3.5" />
            <span>Portfólio de Obras e Instalações</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Fotos dos <span className="text-yellow-400">Serviços Executados</span>
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm">
            Clique em qualquer foto para ampliar e visualizar os detalhes
          </p>
        </div>

        {/* Grade de Imagens Limpas (Sem poluição de textos) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-yellow-400/70 transition-all duration-200 cursor-pointer shadow-lg"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Ícone de zoom sutil no hover */}
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="p-2.5 bg-yellow-400 text-slate-950 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal de Tela Cheia */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
        >
          {/* Botão Fechar */}
          <button
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute top-4 right-4 p-2.5 bg-slate-900/90 hover:bg-yellow-400 hover:text-slate-950 text-slate-200 rounded-full border border-slate-700 transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Botão Anterior */}
          <button
            onClick={prevImage}
            aria-label="Foto Anterior"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-slate-900/90 hover:bg-yellow-400 hover:text-slate-950 text-slate-200 rounded-full border border-slate-700 transition-colors z-50 cursor-pointer shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={nextImage}
            aria-label="Próxima Foto"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-slate-900/90 hover:bg-yellow-400 hover:text-slate-950 text-slate-200 rounded-full border border-slate-700 transition-colors z-50 cursor-pointer shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Foto Aberta */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img
              src={GALLERY_IMAGES[activeImageIndex].src}
              alt={`Foto ${activeImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-slate-800"
            />
            
            <div className="mt-3 bg-slate-900/90 border border-slate-800 text-slate-300 text-xs px-4 py-1.5 rounded-full font-semibold">
              Foto {activeImageIndex + 1} de {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
