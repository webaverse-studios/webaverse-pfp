'use client';

import React, { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import Web3Modal from 'web3modal';

import type { ButtonProps, DialogHandler } from '@webaverse-studios/uikit';
import { Button, Dialog, DialogFooter, DialogHeader, DialogBody } from '@webaverse-studios/uikit';
import { AppContext } from '@/ui/hooks/AccountProvider';
import { chainId } from '@/ui/hooks/constant/address';
import { epsAbi } from '@/ui/hooks/constant/epsAbi';
import { epsAddress, passAddress, pfpAddress } from '@/ui/hooks/constant/address';

declare var window: any;

const ConnectMintButton = (props: any) => {
  // const [walletAddress, setWalletAddress] = useState('');
  const [showWalletModal, setShowWalletModal] = useState(false);
  const { setAccount, setLibrary, setProvider, setColdwallets } = useContext(AppContext);
  const { openModal } = props;

  const { activate, deactivate, library, account } = useWeb3React();

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
  });

  const walletconnect = new WalletConnectConnector({
    rpc: {
      1: "https://mainnet.infura.io/v3/",
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
  });

  useEffect(() => {
    (async () => {
      if (account && library) {
        await library.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId }],
        });
        const signer = library.getSigner(account).connectUnchecked()
        const epsContract = new ethers.Contract(epsAddress, epsAbi, signer);
        const epsAddresses = await epsContract.getAddresses(account, passAddress, 1, true, true);
        setColdwallets(epsAddresses);
      }
    })();
  }, [account, library]);

  const connectWallet = async (walletType: string) => {
    try {
      if (walletType == 'Metamask') {
        await activate(injected);
      } else if (walletType == 'Walletconnect') {
        await activate(walletconnect);
      }

      if (typeof window !== 'undefined') {
        if (parseInt(window.ethereum.networkVersion) !== parseInt(chainId, 16)) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: chainId }], // 0x4 is rinkeby. Ox1 is ethereum mainnet. 0x89 polygon mainnet  0x5: // Goerli testnet
            });
          } catch (err) {
            return false;
          }
        }
      }
      setAccount(account);
      setShowWalletModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const disConnectWallet = async () => {
    // const web3Modal = new Web3Modal({
    //   network: 'goerli',
    //   theme: 'light',
    //   cacheProvider: false,
    //   providerOptions: {},
    // });
    // const res = await web3Modal.clearCachedProvider();
    deactivate();
    setAccount(null);
    // setLibrary(null);
    // setProvider(null);
    setColdwallets(null);
  };

  const handleOpen = () => {
    setShowWalletModal(!showWalletModal);
  };

  const DialogButton = ({ children, ...props }: Omit<ButtonProps, 'ref'>) => {
    return (
      <Button size="md" className="m-4 w-40 text-xl hover:motion-safe:animate-pulse-low" {...props}>
        {children}
      </Button>
    );
  };

  return (
    <>
      {account ? (
        <>
          <p className="address-bar">
            {account.slice(0, 4) + `... ` + account.slice(-5)}
            <span onClick={disConnectWallet}>Disconnect</span>
          </p>
          <Button
            fullWidth
            color="white"
            variant="filled"
            className="connectMintButton text-lg uppercase hover:motion-safe:animate-pulse-low lg:self-center"
            onClick={openModal}
          >
            Mint your Degens
          </Button>
        </>
      ) : (
        <Button
          fullWidth
          color="white"
          variant="filled"
          className="connectMintButton text-lg uppercase hover:motion-safe:animate-pulse-low lg:self-center"
          onClick={() => setShowWalletModal(true)}
        >
          Connect Wallet
        </Button>
      )}

      <Dialog
        size="xl"
        transparent
        open={showWalletModal}
        handler={handleOpen}
        className="degen-modal color-[#05C4B5] w-inherit z-0 m-0 h-full w-full min-w-fit max-w-fit bg-[#020406]/[.85] md:h-auto md:w-auto md:bg-transparent"
      >
        <DialogBody
          className={`modal-title w-2/3 pt-[var(--modal-head-offset)] text-center text-2xl font-normal text-[#7ed4ff] `}
        >
          <DialogButton style={{width: "320px"}} color="white" onClick={() => connectWallet('Metamask')}>
            Metamask
          </DialogButton>
          <DialogButton style={{width: "320px"}} color="white" onClick={() => connectWallet('Walletconnect')}>
            WalletConnect
          </DialogButton>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default ConnectMintButton;
