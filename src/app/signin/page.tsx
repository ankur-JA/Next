"use client"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-800">
      <Button variant="outline" onClick={() => signIn('google')}>
        Sign in with Google
      </Button>
    </div>
  )
}
