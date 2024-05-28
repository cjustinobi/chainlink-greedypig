
import { useReadContract, useReadContracts } from 'wagmi'
import { formatUnits, parseUnits } from 'viem'
import GameCard from './GameCard'
import { useState } from 'react'
import { wagmiContractConfig } from '@/lib/wagmi'

const GamesList = () => {

  const contracts: any = []
  const [gameId, setGameId] = useState<number>()

  const {
    data: gameIds,
    isPending,
    error
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getGameId',
    args: [],
  });


  if (gameIds) {
    const idCount = formatUnits(parseUnits(gameIds.toString(), 0), 0);
    // const idCount = formatUnits(gameIds, 0);
    const ids = Array.from({ length: parseInt(idCount) }, (_, index) => index + 1)
   
   
    ids.forEach((i: number) => {
      contracts.push({
        ...wagmiContractConfig,
        functionName: "getGame",
        args: [i],
      });
    });

  }
  const {data: games} = useReadContracts({ contracts });
console.log('rrr ', games)

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.shortMessage || error.message}</div>;

  return (
    <div className="flex">
      {games && games.map((game: any) => <GameCard game={game.result} key={game.result[0]} />)}
    </div>)
};

export default GamesList;
