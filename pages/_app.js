import "../styles/globals.css";
import { Web3Modal } from "@web3modal/react";
import { chains, providers } from "@web3modal/ethereum";
const modalConfig = {
  theme: "light",
  accentColor: "teal",
  ethereum: {
    appName: "web3modal",
    chains: [chains.goerli, chains.rinkeby],
    providers: [
      providers.walletConnectProvider({
        projectId: "15afe209062b66f5dc02cebb4d52926d",
      }),
    ],
  },
  projectId: "15afe209062b66f5dc02cebb4d52926d",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Web3Modal config={modalConfig} />
    </>
  );
}

export default MyApp;
