export interface GetReadingsResProps {
  uuid: string;
  book: {
    bookId: string;
    title: string;
  }
  startPage: number;
  lastPage?: number;
  startDate: string; // aaaa-mm-dd+hh:mm
  endDate?: string;
  evolution?: string;
  open: boolean;
  logs: LogsReadings[];
  durationSc: number;
}

interface LogsReadings {
  createdAt: string;
  action: 'start' | 'pause' | 'stop'
}

export interface PostReadingEntryProps {
  bookId: string;
  startPage: number;
  startDate: string; // aaaa-mm-dd+hh:mm
}

export interface PutReadingEntryProps {
  uuid: string;
  action: 'pause' | 'stop' | 'edit'
  lastPage?: number;
  endDate?: string;
  startPage?: number;
  startDate?: string; // aaaa-mm-dd+hh:mm
}