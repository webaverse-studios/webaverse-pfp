'use client';

import type { ButtonProps, DialogHandler } from '@webaverse-studios/uikit';

import Image from 'next/image';

import {
  forwardRef,
  MouseEventHandler,
  ReactNode,
  SVGAttributes,
  useState,
} from 'react';

import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid';
import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogBody,
} from '@webaverse-studios/uikit';

import modalHeaderImg from '@/public/images/modal_head.png';

export interface MintDialogProps {
  open: boolean;
  handleOpen: DialogHandler;
}

const MintButton = ({
  children,
  className,
  ...props
}: Omit<ButtonProps, 'ref'>) => {
  console.log(`mint-button ${className}`);
  return (
    <Button variant="text" className={`mint-button ${className}`} {...props}>
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
      className="degen-modal color-[#05C4B5]"
    >
      <DialogHeader className="justify-center p-0">
        <Image
          width={600}
          height={600}
          alt="modal_header"
          src={modalHeaderImg}
          className="mint-head absolute top-0 h-auto w-full -translate-y-2/4"
        />
      </DialogHeader>

      <DialogBody className="flex w-full items-center justify-center p-0 text-center text-white xs:my-8">
        <MintButton onClick={subtractDegen}>
          <MinusSmallIcon className="h-8 w-8 text-white  xs:h-16 xs:w-16" />
        </MintButton>

        <div className="mint-amount h-3/4 bg-[#020406] text-[#05C4B5] xs:h-full">
          {mintedDegens}
        </div>

        <MintButton onClick={addDegen}>
          <PlusSmallIcon className="h-8 w-8 text-white xs:h-16 xs:w-16" />
        </MintButton>
      </DialogBody>

      <DialogFooter className="justify-center  p-0">
        <Button
          size="lg"
          color="white"
          onClick={handleOpen}
          className="mx-1 w-24 sm:w-48 2xl:w-60"
        >
          Close
        </Button>

        <Button
          size="lg"
          color="green"
          className="mx-1 w-24 sm:w-48 2xl:w-60"
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
