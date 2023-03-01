/* eslint-disable import/no-named-as-default */
'use client';

import type { ButtonProps, DialogHandler } from '@webaverse-studios/uikit';

import Image from 'next/image';

import { ChangeEvent, useCallback, useState, useContext, useEffect } from 'react';
import { MerkleTree } from 'merkletreejs';
import { ethers, BigNumber } from 'ethers';
import { keccak256, toUtf8Bytes } from 'ethers/lib/utils';
import toast from 'react-hot-toast';

import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid';
import { Button, Dialog, DialogFooter, DialogHeader, DialogBody } from '@webaverse-studios/uikit';
import { clamp } from 'rambdax';

import modalHeaderImg from '@/public/images/modal_head.png';
import { AppContext } from '@/ui/hooks/AccountProvider';
import { epsAbi } from '@/ui/hooks/constant/epsAbi';
import { pfpAbi } from '@/ui/hooks/constant/pfpAbi';
import { epsAddress, passAddress, pfpAddress } from '@/ui/hooks/constant/address';

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
  const [mintedDegens, setMintedDegens] = useState<number>(0);
  const [mintedMaxDegens, setMintedMaxDegens] = useState<number>(0);
  const [mintColdWallet, setMintColdWallet] = useState<string>();
  const [title, setTitle] = useState<string>('Select the number of Degens that you want to mint!');
  const { provider, loading, setLoading, whitelist, coldwallets } = useContext(AppContext);

  const [allowMintCheck, setAllowMintCheck] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      if (coldwallets && whitelist && !loading) {
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const pfpContract = new ethers.Contract(pfpAddress, pfpAbi, ethersProvider);
        let mintAmount = 0;
        let mintWallet = '';
        for (let i = 0; i < coldwallets.length; i++) {
          let coldWallet = coldwallets[i].toLowerCase();
          if (whitelist[coldWallet as keyof typeof whitelist]) {
            let allowance = whitelist[coldWallet as keyof typeof whitelist];
            let ca = await pfpContract.getClaimedAmount(coldWallet);
            let balance = parseInt(BigNumber.from(ca).toString());
            if (mintAmount <= allowance - balance) {
              mintAmount = allowance - balance;
              mintWallet = coldWallet;
            }
          }
        }

        setMintedMaxDegens(mintAmount);
        setMintColdWallet(mintWallet);

        if (mintWallet == '') {
          setTitle('Please sign in with a wallet which contains Webaverse pass on 17th Feb, 2023.');
          setAllowMintCheck(false);
        } else if (mintAmount == 0) {
          setTitle('You already minted the maximum amount of Degens.');
          setAllowMintCheck(false);
        }
      }
    })();
  }, [coldwallets, whitelist, loading]);

  const addDegen = () => {
    if (mintedDegens < mintedMaxDegens) {
      setMintedDegens(clampMintAmount(mintedDegens + 1));
    }
  };

  const subtractDegen = () => {
    if (mintedDegens > 0) {
      setMintedDegens(clampMintAmount(mintedDegens - 1));
    }
  };

  const onMintChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 4) {
      return;
    }
    const value = Number(e.target.value);
    if (value <= mintedMaxDegens) {
      setMintedDegens(clampMintAmount(value));
    }
  }, []);

  const onMint = async () => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const pfpContract = new ethers.Contract(pfpAddress, pfpAbi, ethersProvider.getSigner());

    if (!mintedDegens || !mintColdWallet) return;

    setLoading(true);
    const leafNodes = Object.keys(whitelist).map((addr: any) =>
      keccak256(toUtf8Bytes(addr.toLowerCase() + '_' + whitelist[addr])),
    );
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    let claimingAllowance = whitelist[mintColdWallet as keyof typeof whitelist];
    let claimingColdWallet = keccak256(
      toUtf8Bytes(mintColdWallet.toLowerCase() + '_' + claimingAllowance),
    );
    let hexProof = merkleTree.getHexProof(claimingColdWallet);
    try {
      let tx = await pfpContract.claimTokens(hexProof, mintedDegens, claimingAllowance);
      let res = await tx.wait();
      if (res.transactionHash) {
        setLoading(false);
        toast.success(`Successfully minted ${mintedDegens} degens!`);
      }
    } catch (err: any) {
      let errorContainer = err.error && err.error.message ? err.error.message : '';
      let errorBody = errorContainer.substr(errorContainer.indexOf(':') + 1);
      toast.error(`This just happened: ${errorBody.toString()}`);
      setLoading(false);
    }
  };

  // This calls the toast promise and passes in the promise, the loading message, the error message, and the success message
  // Hook into the success message / error message to display whatever you need with the returned data from the promise. Also,
  // remove the custom promise and instead use whatever api functionjality we are doing here
  // const notify = useCallback(
  //   () =>
  //     toast.promise(
  //       new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
  //         handleOpen(false);
  //       }),
  //       {
  //         loading: 'Attempting to mint...',
  //         error: (err) => `This just happened: ${err.toString()}`,
  //         // eslint-disable-next-line no-unused-vars
  //         success: (_data) => `Successfully minted ${mintedDegens} degens!`,
  //       },
  //       {
  //         success: { icon: '🔥' },
  //         className: 'text-center z-[9999] max-w-[250px]',
  //       },
  //     ),
  //   [handleOpen],
  // );

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

      <DialogBody
        className={`modal-title w-2/3 pt-[var(--modal-head-offset)] text-center text-2xl font-normal ${
          !allowMintCheck ? 'text-[#7ed4ff]' : 'text-white'
        }`}
      >
        <span> {title} </span>
      </DialogBody>

      {allowMintCheck && (
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
              disabled={mintColdWallet == '' || mintedMaxDegens == 0}
              className="m-0 h-full w-full appearance-none bg-[#020406] text-center text-5xl"
            />
          </div>

          <MintButton onClick={addDegen}>
            <PlusSmallIcon className="mint-amount-btn" />
          </MintButton>
        </DialogBody>
      )}
      <DialogFooter
        className={`flex-col-reverse justify-center p-6 md:flex-row ${!allowMintCheck && 'pt-0'}`}
      >
        <DialogFooterButton color="white" onClick={handleOpen}>
          Close
        </DialogFooterButton>
        {allowMintCheck && (
          <>
            {loading ? (
              <DialogFooterButton color="green">Minting</DialogFooterButton>
            ) : (
              <DialogFooterButton
                color="green"
                onClick={onMint}
                disabled={mintColdWallet == '' || mintedMaxDegens == 0}
              >
                Mint
              </DialogFooterButton>
            )}
          </>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default MintDialog;
