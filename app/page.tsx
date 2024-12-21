'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube, FaDiscord, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState, useEffect } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'

const features = [
  {
    title: "Fair Launch on Pump.fun",
    description: "Ensuring a level playing field for all participants from the start.",
    icon: "🚀"
  },
  {
    title: "No Pre-sale",
    description: "Equal opportunity for everyone to acquire tokens at launch.",
    icon: "🔒"
  },
  {
    title: "Dedicated Core Team",
    description: "A committed group of professionals working tirelessly for the project's success.",
    icon: "👥"
  },
  {
    title: "Disclosed Team Wallets",
    description: "Transparency in token distribution and team holdings.",
    icon: "💼"
  },
  {
    title: "Weekly Livestreams",
    description: "Regular updates and engagement with the community to maintain transparency.",
    icon: "📺"
  }
]

const teamMembers = [
  { name: "Brandon", role: "Captain", image: "/team-1.jpg" },
  { name: "NubMan", role: "First Mate", image: "/team-2.jpg" },
  { name: "Logan", role: "Rigger", image: "/team-3.jpg" },
  { name: "DeckHandz", role: "Bosun", image: "/team-4.jpg" }
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const contractAddress = "GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump"

  useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-[#faf1ec] text-gray-800">
      <header className="container mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-700 mb-4 sm:mb-0"
        >
          Jelly Fish Coin
        </motion.div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4">
            {["About", "Features", "Trading", "Team"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-purple-700">{item}</a>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="https://discord.gg/RHQqJ7Fec2" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">Discord</a>
            </motion.li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="container mx-auto text-center py-12 sm:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/jelly.webp" alt="Jelly Fish Coin Logo" width={200} height={200} className="mx-auto mb-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold text-purple-700 mb-4"
          >
            Jelly Fish Coin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            A vibrant cryptocurrency platform dedicated to providing valuable insights and building a strong community known as the &apos;jelly gang&apos;.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center mb-6"
          >
            <span className="text-sm sm:text-base text-gray-600 mb-2">Official Contract Address:</span>
            <div className="flex items-center bg-gray-100 p-2 rounded-md">
              <code className="text-xs sm:text-sm break-all">{contractAddress}</code>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={copyToClipboard} className="ml-2">
                      {copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copied ? 'Copied!' : 'Copy to clipboard'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>

          <div className="flex justify-center space-x-2">
            {[
              { name: "Raydium", href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in&inputMint=sol&outputMint=GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump", icon: "/raydium.svg" },
              { name: "Jupiter", href: "https://jup.ag/swap/SOL-GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump", icon: "/jupiter.svg" },
              { name: "Birdeye", href: "https://www.birdeye.so/token/GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump?chain=solana", icon: "/birdseye.png" }
            ].map((platform, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-purple-700 text-white hover:bg-purple-800 py-3 px-4 text-base flex items-center justify-center space-x-2">
                  <Link href={platform.href} target="_blank" rel="noopener noreferrer">
                    <Image src={platform.icon} alt={`${platform.name} icon`} width={20} height={20} className="inline-block" />
                    <span>{platform.name === "Birdeye" ? `View on ${platform.name}` : `Trade on ${platform.name}`}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>
        

        <section id="features" className="bg-purple-100 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8">Key Features</h2>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-2xl mr-2">{feature.icon}</span>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="trading" className="container mx-auto py-12 sm:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8">Trading Information</h2>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contract Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                <code className="text-sm sm:text-base break-all">{contractAddress}</code>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={copyToClipboard}>
                        {copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? 'Copied!' : 'Copy to clipboard'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {[
              { name: "Raydium", href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in&inputMint=sol&outputMint=GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump", icon: "/raydium.svg" },
              { name: "Jupiter", href: "https://jup.ag/swap/SOL-GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump", icon: "/jupiter.svg" },
              { name: "Birdeye", href: "https://www.birdeye.so/token/GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump?chain=solana", icon: "/birdseye.png" }
            ].map((platform, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Button asChild className="w-full bg-purple-700 text-white hover:bg-purple-800 py-3 px-4 text-base flex items-center justify-center space-x-2">
                  <Link href={platform.href} target="_blank" rel="noopener noreferrer">
                    <Image src={platform.icon} alt={`${platform.name} icon`} width={20} height={20} className="inline-block white-svg" />
                    <span>{platform.name === "Birdeye" ? `View on ${platform.name}` : `Trade on ${platform.name}`}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </section> */}
{/* 
        <section id="team" className="bg-purple-100 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8">Meet the Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div key={index} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-purple-700">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      

        <section id="roadmap" className="py-12 sm:py-16 bg-cover bg-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8">Roadmap</h2>
            <div className="flex justify-center mb-8">
              <Image src="/roadmap.png" alt="Jelly Fish Coin Roadmap" width={900} height={850} className="object-contain" />
            </div>
            <div className="text-gray-800 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Phase 6: Launch Jelly Faucet</h3>
              <ul className="list-disc list-inside mb-6">
                <li>Introduce the Jelly Faucet, which allows users to earn free Jelly Fish Coins by interacting with it daily.</li>
                <li>Promote the faucet across social media and community platforms to attract new users.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Phase 7: Achieve a $3 Million Market Cap</h3>
              <ul className="list-disc list-inside mb-6">
                <li>Announce the venue and dates for the exclusive Jelly Holders Conference.</li>
                <li>Plan keynote speeches, workshops, and networking opportunities for Jelly Coin holders.</li>
                <li>Provide early bird registration incentives to drive attendance.</li>
                <li>Collaborate with industry experts and influencers to promote the conference.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Phase 8: Achieve a $5 Million Market Cap</h3>
              <ul className="list-disc list-inside mb-6">
                <li>Get listed and updated on major platforms including Birdeye, CoinMarketCap (CMC), CoinGecko, and others.</li>
                <li>Launch a comprehensive marketing campaign to highlight the new listings.</li>
                <li>Partner with analytics platforms to improve visibility and credibility.</li>
                <li>Host AMA (Ask Me Anything) sessions to engage with the community and build trust.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Phase 9: Achieve a $10 Million Market Cap</h3>
              <ul className="list-disc list-inside mb-6">
                <li>Begin listing Jelly Fish Coin on platforms like Unmineable to reach a wider audience of miners and investors.</li>
                <li>Introduce additional token use cases, such as DeFi integration or NFT collaborations.</li>
                <li>Continue scaling marketing efforts to maintain momentum and attract institutional interest.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Future Phases (Beyond $10 Million Market Cap)</h3>
              <ul className="list-disc list-inside">
                <li>Explore centralized exchange (CEX) listings for increased liquidity and accessibility.</li>
                <li>Expand partnerships with ecosystem projects to diversify Jelly Coin use cases.</li>
                <li>Launch Jelly Fish Coin educational initiatives to promote blockchain adoption and awareness.</li>
                <li>Further Development TBD (To Be Determined) as the project grows.</li>
              </ul>
            </div>
          </div>
        </section>



        <section id="team" className="bg-purple-100 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8">Meet the Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div key={index} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-purple-700">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      </main>

      

      <footer className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p>2024 Jelly Fish Coin</p>
            <p>Email: coinjellyfish@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: FaYoutube, href: "https://www.youtube.com/@JellyFishCoin" },
              { icon: FaDiscord, href: "https://discord.gg/RHQqJ7Fec2" },
              { icon: FaTwitter, href: "https://x.com/CoinJellyf54307" }
            ].map((social, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Link href={social.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200">
                  <social.icon size={24} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

