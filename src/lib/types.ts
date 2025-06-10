export interface EggEntry {
  id: string;
  date: string;
  count: number;
}

export interface FeedEntry {
  id: string;
  date: string;
  feedType: string;
  amount: number;
  unit: string; // e.g., "kg", "lbs"
}

export interface BreedEntry {
  id: string;
  name: string;
  description: string;
  imageUrl?: string; //  URL to an image of the breed
  imageHint?: string; // Hint for the image, e.g., "A picture of a Rhode Island Red"
}
