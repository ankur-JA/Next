"use client"
import Link from "next/link"
import { useState } from "react"

export function Hero() {
  const [wallet, setWallet] = useState<{address: string, privateKey: string} | null>(null)
  const generateWallet = async () => {
    const res = await fetch('/api/wallet', { method: 'POST' })
    if (res.ok) {
      const data = await res.json()
      setWallet(data)
    }
  }
  return (
    <div className="flex flex-col min-h-[100dvh] bg-zinc-800">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Secure Your Crypto with Our Wallet Generator
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-white">
                    Generate a secure, private crypto wallet in minutes with our easy-to-use tool. Powered by Google Auth for seamless, secure access.
                  </p>
                  <button onClick={generateWallet} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Create Ethereum Wallet</button>
                  {wallet && (
                    <div className="text-white mt-2 break-all">
                      <p>Address: {wallet.address}</p>
                      <p>Private Key: {wallet.privateKey}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-t-zinc-300">
        <p className="text-xs text-muted-foreground text-white">
          &copy; 2024 Crypto Wallet Generator. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-white" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-white" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
