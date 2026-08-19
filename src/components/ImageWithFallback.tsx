import React, { useState, useEffect } from 'react';
import { Camera, ImagePlus, CheckCircle2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  storageKey?: string;
  fallbackLabel?: string;
  subLabel?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  storageKey,
  fallbackLabel = 'Foto Real da Obra',
  subLabel = 'EletroPRO Brasília',
}) => {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    if (storageKey) {
      const saved = localStorage.getItem(`eletropro_img_${storageKey}`);
      if (saved) return saved;
    }
    return src;
  });
  const [hasError, setHasError] = useState<boolean>(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setHasError(false);
          if (storageKey) {
            try {
              localStorage.setItem(`eletropro_img_${storageKey}`, result);
            } catch (err) {
              console.warn('Storage quota exceeded');
            }
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (hasError) {
    return (
      <div className={`relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group ${className}`}>
        <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 flex items-center justify-center mb-3">
          <Camera className="w-6 h-6" />
        </div>
        <div className="text-xs font-bold text-white mb-1">{fallbackLabel}</div>
        <div className="text-[11px] text-slate-400 mb-3">{subLabel}</div>
        
        {/* Botão de carregar a foto original do computador */}
        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-[11px] font-extrabold uppercase rounded-lg transition-all shadow-md active:scale-95">
          <ImagePlus className="w-3.5 h-3.5" />
          <span>Carregar Minha Foto</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group overflow-hidden">
      <img
        src={imgSrc}
        alt={alt}
        onError={() => setHasError(true)}
        className={className}
      />
      {/* Botão sutil para trocar a foto se desejar */}
      <label className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer bg-slate-950/80 hover:bg-yellow-400 hover:text-slate-950 text-slate-300 border border-slate-700 text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
        <Camera className="w-3 h-3" />
        <span>Alterar</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};
