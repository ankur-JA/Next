import { NextResponse } from "next/server";
import { Wallet } from "ethers";

export async function POST() {
  const wallet = Wallet.createRandom();
  return NextResponse.json({
    address: wallet.address,
    privateKey: wallet.privateKey,
  });
}

export const dynamic = 'force-dynamic';
