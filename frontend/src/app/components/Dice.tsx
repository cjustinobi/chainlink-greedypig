import { FC, useEffect, useState } from 'react'
import Die1 from '@/assets/img/dice_1.png'
import Die2 from '@/assets/img/dice_2.png'
import Die3 from '@/assets/img/dice_3.png'
import Die4 from '@/assets/img/dice_4.png'
import Die5 from '@/assets/img/dice_5.png'
import Die6 from '@/assets/img/dice_6.png'
import Image from 'next/image'
import useAudio from '@/hooks/useAudio'
import { formatNumber } from '@/lib/utils'
import toast from 'react-hot-toast'
import Button from './Button'
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { wagmiContractConfig } from '@/lib/wagmi'

const die = [Die1, Die2, Die3, Die4, Die5, Die6]

interface ApparatusProps {
  game: any
}


const Dice: FC<ApparatusProps> = ({ game }) => {

  // const rollups = useRollups(dappAddress)
  // const [{ wallet }] = useConnectWallet()
  const diceRollSound = useAudio('/sounds/diceRoll.mp3')
  // const players = useSelector((state: any) =>
  //   selectParticipantAddresses(state.games)
  // )

  const [rollCount, setRollCount] = useState<number>(0)
  const [isRolling, setIsRolling] = useState<boolean>(false)
  const [result, setResult] = useState<number>(1)
  const [revealMove, setRevealMove] = useState<boolean>(false)
  const [revealing, setRevealing] = useState<boolean>(false)
  const [commiting, setCommiting] = useState<boolean>(false)
  const [revealed, setRevealed] = useState<boolean>(false)
  const [canRollDice, setCanRollDice] = useState<boolean>(false)
  const [deposited, setDeposited] = useState<boolean>(false)
  const [joining, setJoining] = useState<boolean>(false)
  const [gameEnded, setGameEnded] = useState<boolean>(false)

  const { address } = useAccount();
  const { data: hash, isPending, writeContract } = useWriteContract();


  const joinGame = async () => {

    console.log(address)

const gameId = formatNumber(game[0])
    // if (wallet?.accounts[0].address) {

    //   const playerAddress = wallet.accounts[0].address



      // const id = window.location.pathname.split('/').pop()
      // if (!id) return toast.error('Game not found')

      setJoining(true)

      writeContract({
        ...wagmiContractConfig,
        functionName: 'joinGame',
        args: [gameId],
      });
  }

   if (hash) {
    console.log('tx hash ', hash);
   }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  console.log(isConfirmed);

  const rollDice = async () => {
    // try {
    //   const jsonPayload = JSON.stringify({
    //     method: 'rollDice',
    //     data: {
    //       gameId: game.id,
    //       playerAddress: game.activePlayer,
    //     },
    //   })

    //   if (game.activePlayer === wallet?.accounts[0].address) {
    //     const tx = await addInput(
    //       JSON.stringify(jsonPayload),
    //       dappAddress,
    //       rollups
    //     )

    //     const result = await tx.wait(1)
    //     // reset()
    //     console.log('tx for the game roll', result)
    //   }
    // } catch (error) {
    //   console.error('Error during game roll:', error)
    // }
  }

  const playGame = async (response: string) => {

    // if (gameEnded || game.status === 'Ended') {
    //   return toast.error('Game has ended')
    // }

    // if (game.commitPhase || game.revealPhase) {
    //   return toast.error('Can\'t play game now')
    // }

    // const playerAddress = wallet?.accounts[0].address

    // if (!playerAddress) return toast.error('Connect account')

    // if (game.activePlayer !== playerAddress) {
    //   return toast.error('Not your turn')
    // }

    // if (players.length >= 2) {

      // try {

      //   const jsonPayload = JSON.stringify({
      //     method: 'playGame',
      //     data: {
      //       gameId: game.id,
      //       playerAddress,
      //       response,
      //       commitment: await generateCommitment(playerAddress)
      //     },
      //   })

      //   const tx = await addInput(
      //     JSON.stringify(jsonPayload),
      //     dappAddress,
      //     rollups
      //   )

      //   const result = await tx.wait(1)
      //   console.log('tx for the game play ', result)
      // } catch (error) {
      //   console.error('Error during game play: ', error)
      // }
    // } else {
    //   toast.error('Not enough players to play')
    // }
  }


  const commit = async () => {
    // const playerAddress = wallet?.accounts[0].address
    // if (!playerAddress) return toast.error('Connect account')

      // Ensure user has not commited before
      // const currentPlayer = game?.participants.find(
      //   (participant: any) => participant.address === playerAddress)

      // if (currentPlayer.commitment) return toast.error('Already commited')

    // const jsonPayload = JSON.stringify({
    //   method: 'commit',
    //   gameId: game.id,
    //   commitment: await generateCommitment(playerAddress)
    // })

    // setCommiting(true)
    // const tx = await addInput(JSON.stringify(jsonPayload), dappAddress, rollups)
    // const res = await tx.wait(1)
    // if (res) {
    //   setCommiting(false)
    //   toast.success('Move committed successfully!')
    // }
  }

  // const reveal = async () => {

  //   const playerAddress = wallet?.accounts[0].address

  //   if (playerAddress && !players.includes(playerAddress)) return toast.error('You are not a player')

  //     const currentPlayer = game?.participants.find(
  //       (participant: any) => participant.address === playerAddress
  //     )

  //   if (currentPlayer.move) return toast.error('Already revealed')
    
  //   setRevealing(true)

  //   const nonce = localStorage.getItem(`nonce${playerAddress}`)
  //   const move = localStorage.getItem(`move${playerAddress}`)

  //    const jsonPayload = JSON.stringify({
  //      method: 'reveal',
  //      gameId: game.id,
  //      move,
  //      nonce
  //    })

  //  try {
  //    const tx = await addInput(
  //      JSON.stringify(jsonPayload),
  //      dappAddress,
  //      rollups
  //    )
 
  //    const res = await tx.wait(1)
  //    if (res) {
  //      setRevealing(false)
  //     //  setRevealed(true)
  //      toast.success('Move revealed successfully!')
  //    }
  //  } catch (error) {
  //    setRevealing(false)
  //  }

  // }

  // const reset = () => {
  //   setRevealed(false)
  // }

  // const transfer = async () => {

  //    const jsonPayload = JSON.stringify({
  //     method: 'withdraw',
  //     args: {
  //       amount: ethers.utils.parseEther(String(game.bettingAmount))
  //     }
  //   })



  //   await addInput(JSON.stringify(jsonPayload), dappAddress, rollups)
  // }

  // const depositHandler = async () => {
  //   if (!game.gameSettings.bet) return toast.error('Not a betting game')

  //   try {
  //     await sendEther(dappAddress, game.id, game.bettingAmount, rollups)
  //     setDeposited(true)
  //     setTimeout(joinGame, 7000)
  
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }


  // useEffect(() => {
  //   console.log('inside reveal useeffect')
  //   if (game && game.participants && game.participants.length > 0) {
  //     const allPlayersCommitted = game?.participants.every((participant: any) => {
  //       return participant.commitment
  //     })

  //     if (allPlayersCommitted) {
  //       toast.success('All set to reveal!')
  //       setRevealMove(true)
  //     }
  //   }
  // }, [game?.participants.map((participant: any) => participant.commitment).join(',')])

  // useEffect(() => {
  //    console.log('inside all moved useeffect')
  //   if (game && game.participants && game.participants.length > 0) {
  //     const allPlayersMoved = game?.participants.every((participant: any) => {
  //       return participant.move
  //     })

  //     if (allPlayersMoved) {
  //       toast.success('Dice set to roll!')
  //       setCanRollDice(true)
  //       setRevealMove(false)
  //     }
  //   }
  // }, [game?.participants.map((participant: any) => participant.move).join(',')])


  // useEffect(() => {
  //   setRollCount((prevCount) => prevCount + 1)
  // }, [result])

  // useEffect(() => {
  //   const checkDeposit = async () => {
  //     if (wallet?.accounts[0].address && game.gameSettings.bet) {
  //       const playerAddress = wallet.accounts[0].address
  //       const reports = await inspectCall(
  //         `balance/${playerAddress}`,
  //         connectedChain
  //       )

  //       const hasUserDeposited = hasDeposited(game.bettingAmount, reports)
  //       setDeposited(hasUserDeposited)
  //     }
  //   }

  //   checkDeposit()
  // }, [wallet, game?.gameSettings.bet, connectedChain])

  // useEffect(() => {
  //   if (canRollDice) {
  //     rollDice()
  //   }
  // }, [canRollDice])

  // useEffect(() => {
    
  //   if (game?.rollOutcome && game?.rollOutcome !== 0) {
  //     console.log(game?.rollOutcome)
  //     setIsRolling(true)

  //     const interval = setInterval(() => {
  //       diceRollSound?.play()
  //       setResult(Math.floor(Math.random() * 6) + 1)
  //     }, 80)

  //     // Stop rolling after a certain time and show the final result
  //     setTimeout(() => {
  //       clearInterval(interval)
        
  //       setResult(game?.rollOutcome)
  //       setIsRolling(false)
  //       setCanRollDice(false)
  //     }, 4000)

  //     return () => clearInterval(interval)
  //   } else {
  //     setResult(1)
  //   }
  // }, [game?.rollOutcome, game?.dateCreated, diceRollSound])

  //  useEffect(() => {
  //    if (game?.status === 'Ended') {
  //     setGameEnded(true)
  //    }
  //  }, [game?.status, game?.winner])


  return (
    <div className="flex flex-col justify-center">
      <button
        className={`hover:scale-105 active:scale-100 duration-300 md:w-auto w-[200px]`}
        onClick={() => playGame('yes')}
        disabled={isRolling}
      >
        {result !== null && (
          <Image
            src={die[result - 1]}
            alt={`Die ${result}`}
            className={`die ${rollCount}`}
          />
        )}
      </button>

      <div className="flex flex-col justify-center">
        {/* {game &&
          game.status === 'New' &&
          game.gameSettings.bet &&
          wallet &&
          !deposited &&
          !game.commitPhase &&
          !game.revealPhase && (
            <div className="flex justify-center">
              <Button className="my-6" onClick={depositHandler}>
                Deposit
              </Button>
            </div>
          )} */}
        {/* <Button className="my-6" onClick={depositHandler}>
          Deposit
        </Button> */}
        {/* {game &&
          game.status === 'In Progress' &&
          !game.commitPhase &&
          game?.activePlayer === wallet?.accounts[0].address &&
          !game.revealPhase && (
            <div className="flex justify-center">
              <Button className="mt-6" onClick={() => playGame('no')}>
                Pass
              </Button>
            </div>
          )} */}
        {game &&
          game[7] === 0 &&
          (
            <div className="flex justify-center">
              <Button onClick={joinGame} className="mb-10" type="button">
                {joining ? 'Joining ...' : 'Join Game'}
              </Button>
            </div>
          )}
        {/* <span onClick={test}>Test</span> */}
        <div className="flex justify-center">
          {/* <Button
            onClick={commit}
            className={`
              w-[200px]
              ${
              !wallet ||
              revealMove ||
              !players.includes(wallet.accounts[0].address) ||
              game?.activePlayer === wallet.accounts[0].address ||
              (game &&
                !game?.commitPhase &&
                game?.participants &&
                game?.participants.length) ||
              game?.participants.some(
                (participant: any) =>
                  participant.playerAddress === wallet.accounts[0].address &&
                  participant.commitment !== null
              )
              ? 'hidden'
              : ''
            }
            `}
          >
            {commiting ? 'Commiting ...' : 'Commit'}
          </Button> */}
        </div>

        <div className="flex justify-center">
          {/* <Button
            onClick={reveal}
            className={`w-[200px] ${revealMove ? '' : 'hidden'}`}
            disabled={!revealMove || revealing}
          >
            {revealing ? 'Revealing ....' : 'Reveal'}
          </Button> */}
        </div>
      </div>
      {/* <Button onClick={sendRelayAddress}>Set Relay Address</Button>
      <Button onClick={transfer}>Transfer</Button> */}
    </div>
  )
}

export default Dice