'use client';

import StoreProvider from '@/providers/StoreProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}

export default Providers;
