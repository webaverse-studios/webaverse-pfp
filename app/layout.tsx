'use client';
import React from 'react';

import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

import AccountProvider from '@/ui/hooks/AccountProvider';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider, 'any')
    library.pollingInterval = 15000
    return library
  }

  return (
    <html
      lang="en"
      className="dark h-full w-full overflow-y-auto overflow-x-hidden bg-degen bg-cover bg-no-repeat !font-body lg:overflow-y-hidden"
    >
      <body className="h-full space-y-8 overflow-y-auto overflow-x-hidden text-gray-100 md:space-y-16 lg:overflow-y-hidden">
        <div className="container mx-auto h-full p-4 font-tt-square ultra:max-w-[1850px] md:my-0 lg:px-12 xl:px-16 2xl:px-20 2xl:pb-0 3xl:max-w-[1850px]">
          <Web3ReactProvider getLibrary={getLibrary}>
            <AccountProvider>{children}</AccountProvider>
          </Web3ReactProvider>
        </div>
      </body>
    </html>
  );
}
