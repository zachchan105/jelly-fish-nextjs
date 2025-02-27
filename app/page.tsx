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
import { GlowingButton } from '@/components/GlowingButton'
//import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

// type Video = {
//   id: string;
//   title: string;
//   thumbnail: string;
//   url: string;
// };

// function decodeHtmlEntities(text: string): string {
//   const textarea = document.createElement('textarea');
//   textarea.innerHTML = text;
//   return textarea.value;
// }

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
  // const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const contractAddress = "GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump"

  useEffect(() => {
    setIsClient(true)
    // async function fetchVideos() {
    //   const response = await fetch('/api/youtube');
    //   const data: Video[] = await response.json();
    //   setRecentVideos(data);
    // }
    // fetchVideos();
  }, []);


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
        <nav className="flex items-center space-x-4">
          <ul className="flex flex-wrap justify-center space-x-4">
            {["About", "Features", "Trading", "Team"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-purple-700">{item}</a>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="https://discord.gg/XNFstnBRfY" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">Discord</a>
            </motion.li>
          </ul>
          {/* <div className="hidden sm:block ml-4">
            <WalletMultiButton className="bg-purple-700 text-white py-2 px-4 rounded-lg" />
          </div> */}
        </nav>
      </header>

      <main>
        <section id="about" className="container mx-auto text-center py-12 sm:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/jelly-removebg-preview.png" alt="Jelly Fish Coin Logo" width={200} height={200} className="mx-auto mb-8" />
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
                    <Button variant="outline" size="icon" onClick={copyToClipboard} className="ml-2 bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800">
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

          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
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

        <section className="relative py-20 sm:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/jellybanner.webp')" }}>
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50" />
      <div className="container relative mx-auto px-4 flex justify-center items-center h-full">
        <GlowingButton href="https://web3.jellyfc.com">
          Jelly Web3 Portal
        </GlowingButton>
      </div>
    </section>

        <section id="features" className="bg-purple-100 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8"></h2>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {features.map((feature, index) => (
                  <motion.div key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white text-gray-800 shadow-md rounded-lg mb-6">
                      <CardHeader className="border-b border-gray-200">
                        <CardTitle className="flex items-center">
                          <span className="text-2xl mr-2">{feature.icon}</span>
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <p>{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="flex-1">
                <style jsx>{`
                  #dexscreener-embed {
                    position: relative;
                    width: 100%;
                    height: 100%;
                  }
                  #dexscreener-embed iframe {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    border: 0;
                  }
                `}</style>
                <div id="dexscreener-embed" className="h-full">
                  <iframe src="https://dexscreener.com/solana/6BbXEfMfEVby5UpkLd8eKpUeEzVBDS1iEY24TN7zAx1q?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=light&chartStyle=0&chartType=usd&interval=15"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      

        <section id="roadmap" className="py-12 sm:py-16 bg-cover bg-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8">Roadmap</h2>
            <div className="flex justify-center mb-8">
              <Image src="/roadmap.png" alt="Jelly Fish Coin Roadmap" width={900} height={850} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Button asChild className="bg-purple-700 text-white hover:bg-purple-800 py-3 px-6 text-base">
                <Link href="https://github.com/SerpentXSF/Jelly-Fish-Coin/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                  View Extended Roadmap
                </Link>
              </Button>
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

        {/* <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Recent Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentVideos.slice(0, 3).map((video) => (
                <Link 
                  href={video.url} 
                  key={video.id}
                  className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <Card className="flex flex-col border-0 bg-white relative overflow-hidden group h-full shadow-md">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <CardContent className="p-4 flex flex-col h-full border-0 text-gray-800 relative">
                      <Image
                        src={video.thumbnail}
                        alt={decodeHtmlEntities(video.title)}
                        width={300}
                        height={150}
                        className="rounded-lg mb-2 w-full"
                      />
                      <h3 className="font-semibold mb-2">{decodeHtmlEntities(video.title)}</h3>
                      <div className="mt-auto pt-4">
                        <Button 
                          variant="outline" 
                          className="w-full text-white pointer-events-none bg-purple-700 hover:bg-transparent"
                        >
                          <Youtube className="text-white mr-2 h-4 w-4" /> Watch Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section> */}


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
              { icon: FaDiscord, href: "https://discord.gg/XNFstnBRfY" },
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

