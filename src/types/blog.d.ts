interface IBlogCard {
  id: number;
  slug: string;
  excerpt: string;
  title: string;
  coverImageUrl: string;
  createdAt: string; // ISO date string
}
interface IBlogPost {
  content: string;
  pdfUrl: null | string;
  updatedAt: string; // ISO date string
  title: string;
  coverImageUrl: string;
  createdAt: string; // ISO date string
}
