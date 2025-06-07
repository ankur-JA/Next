import { NextResponse } from "next/server";
import { Wallet, HDNodeWallet } from "ethers";
import { authOptions } from "@/lib/auth";
import prisma from "@/db";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const phrase = body.mnemonic as string | undefined;
  if (!phrase) {
    return NextResponse.json({ error: "Mnemonic required" }, { status: 400 });
  }

  await prisma.wallet.upsert({
    where: { userId: session.user.id },
    update: { mnemonic: phrase },
    create: { userId: session.user.id, mnemonic: phrase },
  });

  const path = `m/44'/60'/0'/0/0`;
  const derived = HDNodeWallet.fromPhrase(phrase, undefined, path);

  return NextResponse.json({ address: derived.address, privateKey: derived.privateKey });
}

export const dynamic = 'force-dynamic';
