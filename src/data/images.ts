export interface GalleryImage {
  id: number;
  title: string;
  fallbackText: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, title: 'Instalação Wallbox GWM', fallbackText: 'Foto 1 - Wallbox GWM' },
  { id: 2, title: 'Centro de Medição 12 Caixas', fallbackText: 'Foto 2 - Centro Medição' },
  { id: 3, title: 'Painel Modular de Medição', fallbackText: 'Foto 3 - Painel Medição' },
  { id: 4, title: 'Quadro QDC 3 Trilhos', fallbackText: 'Foto 4 - QDC 3 Trilhos' },
  { id: 5, title: 'Serviço em Poste de Energia', fallbackText: 'Foto 5 - Poste Padrão' },
  { id: 6, title: 'QDC Reformado NBR 5410', fallbackText: 'Foto 6 - QDC Depois' },
  { id: 7, title: 'Quadro Antigo NEMA', fallbackText: 'Foto 7 - QDC Antes' },
  { id: 8, title: 'Caixa Externa Pergolado', fallbackText: 'Foto 8 - Caixa Externa' },
  { id: 9, title: 'Totem de Recarga com Grade', fallbackText: 'Foto 9 - Totem Grade' },
  { id: 10, title: 'Totem de Recarga Frontal', fallbackText: 'Foto 10 - Totem Frontal' },
];
