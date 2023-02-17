import '@/styles/globals.css';
import React from 'react';

import Footer from '@/ui/Footer';
import NavBar from '@/ui/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark bg-degen">
      <body className="font-winchester space-y-8 overflow-y-scroll text-gray-100 md:space-y-16">
        <div className="container">
          <NavBar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
