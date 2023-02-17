'use client';

import React from 'react';

import Image from 'next/image';

import logo from '@/public/images/webaverse_logo.png';

const NavBar = () => {
  return (
    <nav className="mt-8">
      <div className="container mx-auto flex h-16 justify-between">
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

        <ul className="hidden bg-panel md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
            >
              Insert Char Image Here
            </a>
          </li>
          <li className="flex">
            <button
              type="button"
              className="self-center rounded border bg-white px-4 py-1 font-semibold uppercase text-black dark:border-gray-100"
            >
              Conntect Wallet
            </button>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
