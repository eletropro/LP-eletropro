import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/images';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';

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
    <section id="galeria" className="py-10 sm:py-14 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título simples e direto */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
            Galeria de <span className="text-yellow-400">Fotos Reais</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Clique em qualquer imagem para ampliar
          </p>
        </div>

        {/* Grade Limpa de Fotos - Sem poluição de texto */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-yellow-400/60 transition-all duration-200 cursor-pointer shadow-md"
            >
              <img
                src={item.src}
                alt={item.alt}
                onError={(e) => {
                  // Se o arquivo ainda não existir na pasta public, exibe um placeholder minimalista de foto
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.photo-fallback') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Fallback limpo caso o arquivo esteja carregando */}
              <div className="photo-fallback hidden absolute inset-0 flex-col items-center justify-center bg-slate-900 text-slate-500">
                <ImageIcon className="w-8 h-8 mb-1 text-slate-600 group-hover:text-yellow-400 transition-colors" />
                <span className="text-[11px] font-mono font-bold text-slate-400">Foto {item.id}</span>
              </div>

              {/* Ícone de zoom suave no hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-2 bg-yellow-400 text-slate-950 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox de Foto Ampliada */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute top-4 right-4 p-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Foto Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Próxima Foto"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center"
          >
            <img
              src={GALLERY_IMAGES[activeImageIndex].src}
              alt={`Foto ${activeImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-800"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full font-mono">
              Foto {activeImageIndex + 1} de {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
