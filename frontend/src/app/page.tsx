"use client";

import { ConnectBtn } from "./components/ConnectButton";
import Header from "./components/layout/Header";
import Hero from './components/Hero'
import Stats from "./components/Stats";
import GamesList from "./components/GamesList";
import Features from "./components/Features";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { wagmiContractConfig } from "./lib/wagmi";

export default function Home() {

  const { address } = useAccount();

  const { data: hash, isPending, writeContract } = useWriteContract();

  const createGame = async () => {

    writeContract({
      ...wagmiContractConfig,
      functionName: "createGame",
      args: ["Test game", 22, 1],
    });
  }

  console.log(hash)

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
      useWaitForTransactionReceipt({
        hash,
      }); 

  return (
    <div className="md:px-custom p-custom-sm text-gray-500">
      <Header />
      <Hero />
      <Stats />
      <GamesList />
      <Features />
      {/* <button onClick={createGame}>Create Game</button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ConnectBtn />
      </div> */}
    </div>
  );
}
