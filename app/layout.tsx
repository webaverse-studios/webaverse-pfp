import '@/styles/globals.css';
import React from 'react';

import NavBar from '@/ui/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark h-full w-full overflow-x-hidden overflow-y-hidden bg-degen bg-cover bg-no-repeat">
      <body className="font-winchester h-full space-y-8 text-gray-100 md:space-y-16">
        <div className="container mx-auto h-full max-w-[1850px] px-4 lg:px-12 xl:px-16 2xl:px-20">
          <NavBar />

          {children}
        </div>
      </body>
    </html>
  );
}
