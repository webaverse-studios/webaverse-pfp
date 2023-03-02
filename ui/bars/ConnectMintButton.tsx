'use client';

import React, { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import { Button } from '@webaverse-studios/uikit';
import { AppContext } from '@/ui/hooks/AccountProvider';
import { chainId } from '@/ui/hooks/constant/address';
import { epsAbi } from '@/ui/hooks/constant/epsAbi';
import { epsAddress, passAddress, pfpAddress } from '@/ui/hooks/constant/address';

const ConnectMintButton = (props: any) => {
  const [walletAddress, setWalletAddress] = useState('');
  const { account, setAccount, setLibrary, setProvider, setColdwallets } = useContext(AppContext);

  const { openModal } = props;

  useEffect(() => {
    setWalletAddress(account);
  }, [account]);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        network: 'goerli',
        theme: 'light',
        cacheProvider: false,
        providerOptions: {},
      });
      const web3Provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(web3Provider);
      const web3Accounts = await library.listAccounts();
      const network = await library.getNetwork();
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
      setAccount(web3Accounts[0]);
      setProvider(web3Provider);
      setLibrary(library);
      // get cold wallets a
      const ethersProvider = new ethers.providers.Web3Provider(web3Provider);
      const epsContract = new ethers.Contract(epsAddress, epsAbi, ethersProvider);
      const epsAddresses = await epsContract.getAddresses(
        web3Accounts[0],
        passAddress,
        1,
        true,
        true,
      );
      setColdwallets(epsAddresses);
    } catch (error) {
      console.log(error);
    }
  };

  const disConnectWallet = async () => {
    // const res = await web3Modal.clearCachedProvider();
    setAccount(null);
    setLibrary(null);
    setProvider(null);
    setColdwallets(null);
  };

  return (
    <>
      {walletAddress ? (
        <>
          <p>Connected with: {walletAddress.slice(0, 4) + `...` + walletAddress.slice(-5)}</p>
          <Button
            fullWidth
            color="white"
            variant="filled"
            className="text-lg connectMintButton uppercase hover:motion-safe:animate-pulse-low lg:self-center"
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
          className="text-lg connectMintButton uppercase hover:motion-safe:animate-pulse-low lg:self-center"
          onClick={connectWallet}
        >
          Conntect Wallet
        </Button>
      )}
    </>
  );
};

export default ConnectMintButton;
