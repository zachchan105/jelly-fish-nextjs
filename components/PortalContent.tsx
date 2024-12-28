'use client'

import { useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

export default function PortalContent() {
  const { toast } = useToast()
  const { publicKey, connected } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)
  const [lastClaimTime, setLastClaimTime] = useState<Date | null>(null)
  const [canClaim, setCanClaim] = useState(false)

  useEffect(() => {
    if (connected && publicKey) {
      // Fetch balance and last claim time
      fetchBalance()
      fetchLastClaimTime()
    }
  }, [connected, publicKey])

  useEffect(() => {
    if (lastClaimTime) {
      const now = new Date()
      const timeSinceClaim = now.getTime() - lastClaimTime.getTime()
      const canClaimNow = timeSinceClaim >= 24 * 60 * 60 * 1000 // 24 hours
      setCanClaim(canClaimNow)
    }
  }, [lastClaimTime])

  const fetchBalance = async () => {
    // Implement balance fetching logic here
    // This is a placeholder
    setBalance(100)
  }

  const fetchLastClaimTime = async () => {
    // Implement last claim time fetching logic here
    // This is a placeholder
    setLastClaimTime(new Date(Date.now() - 25 * 60 * 60 * 1000)) // Set to 25 hours ago for testing
  }

  const handleClaim = async () => {
    if (!canClaim) {
      toast({
        title: "Cannot claim yet",
        description: "You can only claim once every 24 hours.",
        variant: "destructive",
      })
      return
    }

    // Implement claim logic here
    // This is a placeholder
    toast({
      title: "Claimed successfully",
      description: "You've received 10 Jelly Fish Coins!",
    })
    setLastClaimTime(new Date())
    setBalance((prevBalance) => (prevBalance || 0) + 10)
  }

  return (
    <>
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-700"
        >
          Jelly Fish Coin Portal
        </motion.div>
        <WalletMultiButton className="bg-purple-700 text-white py-2 px-4 rounded-lg" />
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Image src="/jelly-removebg-preview.png" alt="Jelly Fish Coin Logo" width={150} height={150} className="mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-purple-700 mb-4">Welcome to the Jelly Fish Coin Portal</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect your wallet to view your balance and claim your daily Jelly Fish Coins!
          </p>
        </motion.div>

        {connected ? (
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Your Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-700">{balance !== null ? `${balance} JFC` : 'Loading...'}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Daily Claim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Claim 10 Jelly Fish Coins every 24 hours!</p>
                <Button 
                  onClick={handleClaim} 
                  disabled={!canClaim}
                  className="bg-purple-700 text-white hover:bg-purple-800"
                >
                  {canClaim ? 'Claim Now' : 'Next Claim Available Soon'}
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl text-gray-600 mb-4">Connect your wallet to access the portal features.</p>
            <WalletMultiButton className="bg-purple-700 text-white py-2 px-4 rounded-lg" />
          </motion.div>
        )}
      </main>
    </>
  )
}

