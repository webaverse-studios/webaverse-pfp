'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@webaverse-studios/uikit';

import degen from '@/public/images/img_degen.png';
import MintDialog from '@/ui/MintDialog';
import SocialBar from '@/ui/SocialBar';

export default function Page() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <main className="mx-auto mt-8 flex flex-col justify-center text-gray-100 lg:-mt-[(var(--total-height))] lg:h-full lg:flex-row lg:justify-between">
      <Image
        src={degen}
        alt="degen"
        width={960}
        height={850}
        className="degen-img self-center ultra:w-[40%] 2xl:absolute"
      />

      <div className="flex flex-col justify-center rounded-sm text-center lg:max-w-md lg:text-left xl:max-w-lg 2xl:ml-auto ">
        <h1 className="title_glow text-5xl font-bold leading-none motion-safe:animate-pulse-slow sm:text-6xl">
          The Degens
        </h1>

        <p className="mt-6 mb-8 text-lg sm:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi.
          Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Sit amet mauris commodo
        </p>

        <Button
          fullWidth
          type="button"
          onClick={handleOpen}
          className="text-lg uppercase lg:self-center"
        >
          Claim
        </Button>

        <SocialBar />
      </div>

      <MintDialog open={open} handleOpen={handleOpen} />
    </main>
  );
}
