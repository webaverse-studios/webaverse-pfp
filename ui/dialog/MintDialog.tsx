'use client';

import type { ButtonProps, DialogHandler } from '@webaverse-studios/uikit';

import Image from 'next/image';

import { useState } from 'react';

import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid';
import { Button, Dialog, DialogFooter, DialogHeader, DialogBody } from '@webaverse-studios/uikit';

import modalHeaderImg from '@/public/images/modal_head.png';

export interface MintDialogProps {
  open: boolean;
  handleOpen: DialogHandler;
}

const MintButton = ({ children, className, ...props }: Omit<ButtonProps, 'ref'>) => {
  return (
    <Button variant="text" className={`bg-transparent p-0 ${className}`} {...props}>
      {children}
    </Button>
  );
};

const MintDialog = ({ open, handleOpen }: MintDialogProps) => {
  const [mintedDegens, setMintedDegens] = useState<number>(25);

  const addDegen = () => setMintedDegens(mintedDegens + 1);
  const subtractDegen = () => setMintedDegens(mintedDegens - 1);

  return (
    <Dialog
      size="xl"
      transparent
      open={open}
      handler={handleOpen}
      className="degen-modal color-[#05C4B5] m-0"
    >
      <DialogHeader className="absolute top-0 z-10 -translate-y-2/4 justify-center  p-0">
        <Image
          width={600}
          height={600}
          alt="modal_header"
          src={modalHeaderImg}
          className="w-20 md:w-24 xl:w-24"
        />
      </DialogHeader>

      <DialogBody
        className="w-[85%] p-0 pt-10 text-center font-tt-square text-sm font-thin text-white 
          xs:w-4/5 xs:text-base sm:w-2/3 sm:p-0 sm:text-xl
          md:w-2/3 lg:w-3/4 lg:text-3xl"
      >
        <span>Select the number of The Degens that you would like to mint:</span>
      </DialogBody>

      <DialogBody className="m-2 flex w-full items-center justify-center p-0 text-center font-tt-square text-white lg:p-2 xl:p-4">
        <MintButton onClick={subtractDegen}>
          <MinusSmallIcon className="mint-amount-btn" />
        </MintButton>

        <div className="mint-amount bg-[#020406] font-tt-square font-bold text-[#05C4B5] xs:h-full">
          <span>{mintedDegens}</span>
        </div>

        <MintButton onClick={addDegen}>
          <PlusSmallIcon className="mint-amount-btn" />
        </MintButton>
      </DialogBody>

      <DialogFooter className="m-2 justify-center p-0 font-tt-square lg:p-2 xl:p-4">
        <Button size="sm" color="white" onClick={handleOpen} className="mint-footer-btn">
          Close
        </Button>

        <Button
          size="sm"
          color="green"
          className="mint-footer-btn"
          onClick={() => {
            alert('You Minted!');
          }}
        >
          Mint
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default MintDialog;
