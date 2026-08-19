// Utilitário de persistência de imagens originais via IndexedDB e Servidor Local

const DB_NAME = 'EletroPRO_Photos_DB';
const STORE_NAME = 'original_photos';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function savePhotoLocally(id: number, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put({ id, dataUrl });

    // Salvar também no disco do servidor via API
    fetch('/api/save-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filename: `foto${id}.jpg`,
        dataBase64: dataUrl,
      }),
    }).catch(() => {
      // Falha silenciosa no servidor se offline
    });
  } catch (err) {
    console.error('Erro ao salvar no IndexedDB:', err);
  }
}

export async function getStoredPhotos(): Promise<Record<number, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const result: Record<number, string> = {};
        const items = request.result as { id: number; dataUrl: string }[];
        items.forEach((item) => {
          result[item.id] = item.dataUrl;
        });
        resolve(result);
      };
      request.onerror = () => resolve({});
    });
  } catch (err) {
    return {};
  }
}
