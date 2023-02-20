import React from 'react';

import NavBar from '@/ui/Navbar';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark h-full w-full overflow-x-hidden overflow-y-hidden bg-degen bg-cover bg-no-repeat font-electro"
    >
      <body className="font-winchester h-full space-y-8 text-gray-100 md:space-y-16">
        <div className="container mx-auto h-full px-4 ultra:max-w-[1850px] lg:px-12 xl:px-16 2xl:px-20 3xl:max-w-[1850px]">
          <NavBar />

          {children}
        </div>
      </body>
    </html>
  );
}
