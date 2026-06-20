import { Painting } from "../types";

/**
 * HOW TO UPDATE YOUR GALLERY:
 * 1. Add your original image files to the `public/paintings/` directory (you will need to create it).
 * 2. Give the file a simple name (e.g., `artwork-1.jpg`).
 * 3. Add a new object to the array below.
 * 4. Set the `imageUrl` property to point to your new image: `/paintings/artwork-1.jpg`
 * 
 * Note: The current image URLs are high-quality photographic placeholders to demonstrate the masonry grid.
 */
export const paintings: Painting[] = [
  {
    id: "1",
    title: "Ethereal Landscapes",
    technique: "Oil on Canvas",
    dimensions: "120x100 cm",
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
    description: "A study in atmospheric perspective and fading memories."
  },
  {
    id: "2",
    title: "Midnight Symphony",
    technique: "Acrylic and Ink",
    dimensions: "90x90 cm",
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1580136608260-4ebceb30538a?auto=format&fit=crop&q=80&w=800",
    description: "Capturing the rhythm of the city at night through deep textures."
  },
  {
    id: "3",
    title: "Ochre & Rust",
    technique: "Mixed Media on Wood",
    dimensions: "150x80 cm",
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800",
    description: "Exploring the decay and oxidation of industrial elements."
  },
  {
    id: "4",
    title: "The Quiet Room",
    technique: "Charcoal & Pastel",
    dimensions: "60x80 cm",
    year: 2022,
    imageUrl: "https://images.unsplash.com/photo-1533158307587-828f0a76cf46?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    title: "Fluid Dynamics",
    technique: "Resin and Pigment",
    dimensions: "100x100 cm",
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    title: "Cobalt Depth",
    technique: "Oil on Linen",
    dimensions: "80x120 cm",
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=800",
    description: "A deep dive into monochromatic intensity."
  },
  {
    id: "7",
    title: "Somber Reflections",
    technique: "Oil and Wax",
    dimensions: "70x70 cm",
    year: 2021,
    imageUrl: "https://images.unsplash.com/photo-1501472312651-726affe119ac?auto=format&fit=crop&q=80&w=800",
  }
];
