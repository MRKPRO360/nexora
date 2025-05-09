import Footer from '@/app/components/shared/Footer';
import Navbar from '@/app/components/shared/Navbar';
import React from 'react';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1170px] mx-auto px-2 2xl:px-0">{children}</div>
      <Footer />
    </div>
  );
}

export default HomePageLayout;
