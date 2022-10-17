import React from "react";
import {
  ConnectButton,
  useConnectModal,
  useDisconnect,
} from "@web3modal/react";
import { useAccount,useBalance } from "@web3modal/react";
import Disconnect from "../components/disconnect";
export default function Home() {
  const { address, connector, isConnected } = useAccount();
  const { data, error, isLoading, refetch } = useBalance({
    addressOrName: address,
  });
  const disconnect = useDisconnect();


   function discon()
  {
    return disconnect();
  }

  return (
    <div style={{ textAlign: "center" }}>
      Your Connected Address is :<div>{address}</div>
        <ConnectButton />
      {!error ? (
        <div>
          <ul>
            <li>
              Balance Data:
              <span>
                {isLoading ? (
                  "Loading..."
                ) : (
                  JSON.stringify(data)
                )}
              </span>
            </li>
            <li>
              Error: <span>{error ? error.message : "No Error"}</span>
            </li>
          </ul>
          <button onClick={async () => refetch()}>Refetch</button>
        </div>
      ) : null}

            <button onClick={discon}>Disconnect</button>
    </div>
  );
}
