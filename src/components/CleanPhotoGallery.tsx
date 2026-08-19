import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_IMAGES } from '../data/images';
import { savePhotoLocally, getStoredPhotos } from '../utils/photoStorage';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Upload, CheckCircle2, ImagePlus, AlertCircle } from 'lucide-react';

export const CleanPhotoGallery: React.FC = () => {
  const [photosMap, setPhotosMap] = useState<Record<number, string>>({});
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [uploadedCount, setUploadedCount] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carrega fotos salvas de forma permanente no IndexedDB
  useEffect(() => {
    getStoredPhotos().then((stored) => {
      setPhotosMap(stored);
      setUploadedCount(Object.keys(stored).length);
    });
  }, []);

  const handleMultipleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList: File[] = Array.from(files);
    fileList.forEach((file: File, index: number) => {
      const targetId = index + 1;
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          savePhotoLocally(targetId, dataUrl);
          setPhotosMap((prev) => ({ ...prev, [targetId]: dataUrl }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSingleSlotUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        savePhotoLocally(id, dataUrl);
        setPhotosMap((prev) => ({ ...prev, [id]: dataUrl }));
      }
    };
    reader.readAsDataURL(file);
  };

  const openLightbox = (index: number) => {
    if (photosMap[GALLERY_IMAGES[index].id]) {
      setActiveImageIndex(index);
    }
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
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold rounded-full">
            <Camera className="w-3.5 h-3.5" />
            <span>Portfólio de Obras Reais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Fotos dos <span className="text-yellow-400">Serviços Executados</span>
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm">
            Fotos reais das nossas instalações de Wallbox, QDC e Centros de Medição no DF.
          </p>
        </div>

        {/* Bloco de Upload das Fotos Originais */}
        <div className="mb-8 p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span>Carregar Fotos Originais</span>
                {uploadedCount > 0 && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    {uploadedCount} foto{uploadedCount > 1 ? 's' : ''} salva{uploadedCount > 1 ? 's' : ''} permanentemente
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Clique ao lado e selecione suas 10 fotos originais. Elas são salvas permanentemente no banco local e não somem ao atualizar a página.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-lg transition-all cursor-pointer active:scale-95"
            >
              <ImagePlus className="w-4 h-4 fill-slate-950" />
              <span>Selecionar 10 Fotos Originais</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleMultipleFiles}
              className="hidden"
            />
          </div>
        </div>

        {/* Grade de Fotos (Exibição Limpa) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((item, idx) => {
            const hasPhoto = !!photosMap[item.id];
            const currentSrc = photosMap[item.id];

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border ${
                  hasPhoto ? 'border-slate-800 hover:border-yellow-400/80 cursor-pointer' : 'border-slate-800/60'
                } transition-all duration-200 shadow-lg flex flex-col items-center justify-center`}
              >
                {hasPhoto ? (
                  <>
                    <img
                      src={currentSrc}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Botão sutil para substituir foto individual */}
                    <label
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-slate-950/80 hover:bg-yellow-400 text-slate-300 hover:text-slate-950 rounded-lg border border-slate-700 cursor-pointer z-10 shadow"
                      title="Substituir esta foto"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleSingleSlotUpload(item.id, e)}
                        className="hidden"
                      />
                    </label>

                    {/* Ícone de zoom no hover */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="p-2.5 bg-yellow-400 text-slate-950 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <label className="cursor-pointer p-4 w-full h-full flex flex-col items-center justify-center text-center group-hover:bg-slate-800/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-yellow-400 group-hover:bg-slate-700 transition-colors mb-2">
                      <ImagePlus className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white">
                      Foto {item.id}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {item.title}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleSingleSlotUpload(item.id, e)}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Modal de Tela Cheia */}
      {activeImageIndex !== null && photosMap[GALLERY_IMAGES[activeImageIndex].id] && (
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
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img
              src={photosMap[GALLERY_IMAGES[activeImageIndex].id]}
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
