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

  const indexStr = new URL(req.url).searchParams.get("index") ?? "0";
  const index = parseInt(indexStr, 10);

  let wallet = await prisma.wallet.findUnique({ where: { userId: session.user.id } });

  if (!wallet) {
    const newWallet = Wallet.createRandom();
    wallet = await prisma.wallet.create({
      data: {
        userId: session.user.id,
        mnemonic: newWallet.mnemonic?.phrase ?? "",
      },
    });
  }

  const path = `m/44'/60'/0'/0/${index}`;
  const derived = HDNodeWallet.fromPhrase(wallet.mnemonic, undefined, path);

  return NextResponse.json({ address: derived.address, privateKey: derived.privateKey });
}

export const dynamic = 'force-dynamic';
