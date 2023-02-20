'use client';

import Image from 'next/image';

import React from 'react';

import { Button } from '@webaverse-studios/uikit';

import character from '@/public/images/icon/character_image.png';
import logo from '@/public/images/logo/webaverse_logo.png';

const NavBar = () => {
  return (
    <nav className="container mx-auto mt-4 flex h-12 justify-between md:mt-[var(--header-margin-desktop)]">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Back to homepage"
        className="flex items-center p-2"
      >
        <Image
          src={logo}
          width={40}
          height={50}
          alt="webaverse_logo"
          style={{ filter: 'brightness(0) invert(1)' }}
          className="hover-opacity"
        />
      </a>

      <div className="parallelogram sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/5 flex items-center justify-center gap-4 xs:w-full xs:max-w-xs">
        <Image width={50} height={50} src={character} alt="webaverse_character" />

        <Button size="sm" color="white" variant="outlined">
          Conntect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
