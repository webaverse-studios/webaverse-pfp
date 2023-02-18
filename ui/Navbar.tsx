'use client';

import React from 'react';

import Image from 'next/image';

import character from '@/public/images/character_image.png';
import logo from '@/public/images/webaverse_logo.png';

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
          alt="webaverse_logo"
          width={40}
          height={50}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </a>

      <div className="parallelogram sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/5 flex items-center justify-center gap-4 xs:w-full xs:max-w-xs">
        <Image
          width={50}
          height={50}
          src={character}
          alt="webaverse_character"
        />

        <button
          type="button"
          className="self-center rounded border bg-white px-4 py-0.5 font-semibold uppercase text-black dark:border-gray-100"
        >
          Conntect Wallet
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
