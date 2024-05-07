export interface GetGoogleBooksResProps {
  id: string;
  etag: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}

interface SaleInfo {
  buyLink: string;
  country: string;
  listPrice: {
    amount: number;
    currencyCode: string;
  };
}

interface VolumeInfo {
  authors: string[];
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string
  };
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  language: string;
  pageCount: number;
  publishedDate: string; // aaaa-mm-dd
  publisher: string;
  title: string;
  subtitle?: string;
}