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

  return (
    <div className="md:px-custom p-custom-sm text-gray-500">
      <Header />
      <Hero />
      <Stats />
      <GamesList />
      <Features /> 
      </div>
  );
}
