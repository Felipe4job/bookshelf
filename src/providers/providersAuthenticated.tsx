'use client';

import { GlobalProvider } from '@/contexts/globalProvider';

export const ProvidersAuthenticated = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      { children }
    </GlobalProvider>
  );
};