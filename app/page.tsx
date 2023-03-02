'use client';

import Image from 'next/image';

import { useState, useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import degen from '@/public/images/img_degen_new.png';
import logo from '@/public/images/logo/webaverse_logo.png';
import SocialBar from '@/ui/bars/SocialBar';
import MintDialog from '@/ui/dialog/MintDialog';
import { AppContext } from '@/ui/hooks/AccountProvider';
import { whiteList } from '@/ui/hooks/whitelist';
import ConnectMintButton from '@/ui/bars/ConnectMintButton';

export default function Page() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { whitelist, setWhitelist } = useContext(AppContext);

  useEffect(() => {
    setWhitelist(whiteList);
  }, [whiteList]);

  return (
    <>
      <main className="verPositionToScreen relative mx-auto flex flex-col-reverse justify-center text-gray-100 sm:mt-0 lg:-mt-[(var(--total-height))] lg:h-full lg:flex-row lg:justify-between">
        <Image priority src={logo} alt="degen" className="webaverse-logo" />
        <div className="flex flex-col justify-center rounded-sm text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="main-title mb-6 text-center text-6xl font-bold leading-none duration-1000 motion-safe:animate-pulse-slow sm:text-6xl lg:text-8xl">
            Degens
            <span>of The Street</span>
          </h1>
          <ConnectMintButton openModal={handleOpen} />
          <SocialBar />
        </div>
        <Image
          priority
          src={degen}
          alt="degen"
          width={800}
          height={750}
          className="degen-img right-0 bottom-0 mb-8 self-center object-contain opacity-[95%] shadow-xl sm:w-[450px] lg:mb-0 lg:w-[600px] xl:w-[650px] 2xl:absolute 2xl:w-[850px]"
        />
        <MintDialog open={open} handleOpen={handleOpen} />
        {/* This displays toast */}
        <Toaster />
      </main>
    </>
  );
}
