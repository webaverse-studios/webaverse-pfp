'use client';

import React, { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
// import Web3Modal from 'web3modal';

import { Button } from '@webaverse-studios/uikit';
import { AppContext } from '@/ui/hooks/AccountProvider';
import { chainId } from '@/ui/hooks/constant/address';
import { epsAbi } from '@/ui/hooks/constant/epsAbi';
import { epsAddress, passAddress, pfpAddress } from '@/ui/hooks/constant/address';

const ConnectMintButton = (props: any) => {
  // const [walletAddress, setWalletAddress] = useState('');
  const { setAccount, setLibrary, setProvider, setColdwallets } = useContext(AppContext);

  const { openModal } = props;

  const {
    activate,
    deactivate,
    library,
    account
  } = useWeb3React();
  
  const injected = new InjectedConnector({
    supportedChainIds: [1],
  });

  useEffect(() => {
    (async () => {
      if(account) {
        const epsContract = new ethers.Contract(epsAddress, epsAbi, ethers.getDefaultProvider('mainnet'));
        const epsAddresses = await epsContract.getAddresses(
          account,
          passAddress,
          1,
          true,
          true,
        );
        setColdwallets(epsAddresses);
      }
    })();
  }, [account]);

  const connectWallet = async () => {
    try {
      // const web3Modal = new Web3Modal({
      //   network: 'goerli',
      //   theme: 'light',
      //   cacheProvider: false,
      //   providerOptions: {},
      // });
      // const web3Provider = await web3Modal.connect();
      // const library = new ethers.providers.Web3Provider(web3Provider);
      // const web3Accounts = await library.listAccounts();
      // const network = await library.getNetwork();
      await activate(injected);

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

      console.log("account:", account)
      // setProvider(web3Provider);
      // setLibrary(library);
      // get cold wallets a
      // const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
      // const ethersProvider = new ethers.providers.Web3Provider(signer);

      // const epsContract = new ethers.Contract(epsAddress, epsAbi, ethers.getDefaultProvider('mainnet'));
      // const epsAddresses = await epsContract.getAddresses(
      //   account,
      //   passAddress,
      //   1,
      //   true,
      //   true,
      // );
      // setColdwallets(epsAddresses);
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
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default ConnectMintButton;
