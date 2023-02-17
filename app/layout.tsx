import '@/styles/globals.css';
import React from 'react';
import NavBar from '@/ui/Navbar';
import Footer from '@/ui/Footer';

// Font files can be colocated inside of `pages`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark">
      <body className={`container space-y-8 md:space-y-16 overflow-y-scroll bg-gray-800 text-gray-100 font-winchester"`}>
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
