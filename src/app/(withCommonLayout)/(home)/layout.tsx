import Footer from '@/app/components/shared/Footer';
import Navbar from '@/app/components/shared/Navbar';
import React from 'react';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1545px] mx-auto">
      <div className="max-w-[1170px] mx-auto px-2 2xl:px-0">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default HomePageLayout;
