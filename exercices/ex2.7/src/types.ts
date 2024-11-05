interface Film {
    id: number;
    title: string; // Titre
    director: string; // Réalisateur
    duration: number; // Durée en minutes
    imageUrl?: string; // Lien vers une image (facultatif)
    description?: string; // Description (facultatif)
    budget?: number; // Budget en millions (facultatif)
  }
  
  
export type { Film };  
  