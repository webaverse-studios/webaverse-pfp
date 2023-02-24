'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@webaverse-studios/uikit';

import degen from '@/public/images/img_degen.png';
import SocialBar from '@/ui/bars/SocialBar';
import MintDialog from '@/ui/dialog/MintDialog';

export default function Page() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <main className="relative mx-auto mt-4 flex flex-col-reverse justify-center text-gray-100 sm:mt-0 lg:-mt-[(var(--total-height))] lg:h-full lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center rounded-sm text-center lg:max-w-md lg:text-left xl:max-w-lg">
        <h1 className="title_glow text-5xl font-bold leading-none motion-safe:animate-pulse-slow sm:text-6xl">
          The Degens
        </h1>

        <p className="mt-6 mb-8 text-lg sm:mb-12">
          We are the Degens. Join us! The future of the open metaverse is in our hands! Let&apos;s
          forge a world that&apos;s free, equitable, and connected. Band together in a spirit of
          collaboration and innovation and we will seize the reins of our virtual destiny today!
        </p>

        <Button
          fullWidth
          type="button"
          onClick={handleOpen}
          className="text-lg uppercase hover:motion-safe:animate-pulse-low lg:self-center"
        >
          Claim
        </Button>

        <SocialBar />
      </div>

      <Image
        priority
        src={degen}
        alt="degen"
        width={800}
        height={750}
        // bottom glow/shadow cyan in tailwind
        className="degen-img right-0 bottom-0 mb-8 self-center object-contain opacity-[95%] shadow-xl sm:w-[450px] lg:mb-0 lg:w-[600px] xl:w-[650px] 2xl:absolute 2xl:w-[850px]"
      />

      <MintDialog open={open} handleOpen={handleOpen} />
    </main>
  );
}
