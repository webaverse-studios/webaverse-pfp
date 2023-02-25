/* eslint-disable import/no-named-as-default */
'use client';

import type { ButtonProps, DialogHandler } from '@webaverse-studios/uikit';

import Image from 'next/image';

import { ChangeEvent, useCallback, useState } from 'react';
import toast from 'react-hot-toast';

import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid';
import { Button, Dialog, DialogFooter, DialogHeader, DialogBody } from '@webaverse-studios/uikit';
import { clamp } from 'rambdax';

import modalHeaderImg from '@/public/images/modal_head.png';

export interface MintDialogProps {
  open: boolean;
  handleOpen: DialogHandler;
}

const clampMintAmount = (value: number) => clamp(0, 9999, value);

const MintButton = ({ children, className, ...props }: Omit<ButtonProps, 'ref'>) => {
  return (
    <Button variant="text" className={`w-16 bg-transparent p-0 ${className}`} {...props}>
      {children}
    </Button>
  );
};

const DialogFooterButton = ({ children, ...props }: Omit<ButtonProps, 'ref'>) => {
  return (
    <Button size="md" className="m-4 w-40 text-xl hover:motion-safe:animate-pulse-low" {...props}>
      {children}
    </Button>
  );
};

const MintDialog = ({ open, handleOpen }: MintDialogProps) => {
  const [mintedDegens, setMintedDegens] = useState<number>(25);

  const addDegen = () => setMintedDegens(clampMintAmount(mintedDegens + 1));
  const subtractDegen = () => setMintedDegens(clampMintAmount(mintedDegens - 1));

  const onMintChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 4) {
      return;
    }

    const value = Number(e.target.value);
    setMintedDegens(clampMintAmount(value));
  }, []);

  // This calls the toast promise and passes in the promise, the loading message, the error message, and the success message
  // Hook into the success message / error message to display whatever you need with the returned data from the promise. Also,
  // remove the custom promise and instead use whatever api functionjality we are doing here
  const notify = useCallback(
    () =>
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
          handleOpen(false);
        }),
        {
          loading: 'Attempting to mint...',
          error: (err) => `This just happened: ${err.toString()}`,
          // eslint-disable-next-line no-unused-vars
          success: (_data) => `Successfully minted ${mintedDegens} degens!`,
        },
        {
          success: { icon: '🔥' },
          className: 'text-center z-[9999] max-w-[250px]',
        },
      ),
    [handleOpen],
  );

  return (
    <Dialog
      size="xl"
      transparent
      open={open}
      handler={handleOpen}
      className="degen-modal color-[#05C4B5] w-inherit z-0 m-0 h-full w-full min-w-fit max-w-fit bg-[#020406]/[.85] md:h-auto md:w-auto md:bg-transparent"
    >
      <DialogHeader className="top-0 z-10 justify-center p-0 md:absolute md:-translate-y-2/4">
        <Image
          priority
          width={600}
          height={600}
          alt="modal_header"
          src={modalHeaderImg}
          className="w-28 md:w-[var(--modal-head-size)]"
        />
      </DialogHeader>

      <DialogBody className="w-2/3 pt-[var(--modal-head-offset)] text-center text-2xl font-normal text-white">
        <span>Select the number of The Degens that you would like to mint:</span>
      </DialogBody>

      <DialogBody className="text-centertext-white flex w-full items-center justify-center p-6">
        <MintButton onClick={subtractDegen}>
          <MinusSmallIcon className="mint-amount-btn" />
        </MintButton>

        <div className="mint-amount h-[75px] w-[165px] appearance-none px-6 font-tt-square text-6xl font-bold text-[#05C4B5]">
          <input
            required
            min="0"
            max="9999"
            maxLength={2}
            type="number"
            id="mintedDegens"
            value={mintedDegens}
            onChange={onMintChange}
            className="m-0 h-full w-full appearance-none bg-[#020406] text-center text-5xl"
          />
        </div>

        <MintButton onClick={addDegen}>
          <PlusSmallIcon className="mint-amount-btn" />
        </MintButton>
      </DialogBody>

      <DialogFooter className="flex-col-reverse justify-center p-6 md:flex-row">
        <DialogFooterButton color="white" onClick={handleOpen}>
          Close
        </DialogFooterButton>

        <DialogFooterButton color="green" onClick={notify}>
          Mint
        </DialogFooterButton>
      </DialogFooter>
    </Dialog>
  );
};

export default MintDialog;
