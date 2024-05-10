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
  authors?: string[];
  canonicalVolumeLink?: string;
  categories: string[];
  contentVersion: string;
  description?: string;
  imageLinks?: {
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

export interface GetBooksResProps {
  uuid: string;
  volumeInfo: VolumeInfo;
  lastReading?: LastReading;
  Reviews?: {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    text: string;
  }[];
  characters?: {
    uuid: string;
    name: string;
  }[];
}

interface LastReading {
  uuid: string;
  startPage: number;
  lastPage: number;
  startDate: string; // aaaa-mm-dd+hh:mm
  endDate: string;
  evolution: string;
}

export interface PostBookEntryProps {
  bookShelfId: string; 
  volumeInfo: VolumeInfo;
}

export interface PutBookEntryProps {
  uuid: string;
  volumeInfo: {
    description: string;
  };
}