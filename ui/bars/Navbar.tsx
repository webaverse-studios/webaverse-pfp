'use client';

import Image from 'next/image';

import React from 'react';

import { Button } from '@webaverse-studios/uikit';

import character from '@/public/images/icon/character_image.png';
import logo from '@/public/images/logo/webaverse_logo.png';

const NavBar = () => {
  return (
    <nav className="container relative z-[999] mx-auto mt-4 flex h-12 justify-between md:mt-[var(--header-margin-desktop)]">
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
          className="hover-opacity"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </a>

      <div className="parallelogram flex w-60 items-center justify-center gap-4">
        <Image width={50} height={50} src={character} alt="webaverse_character" />

        <Button size="sm" color="white" variant="filled">
          Conntect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
