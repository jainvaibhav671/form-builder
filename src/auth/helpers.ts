"use server";
import { signIn as naSignIn, signOut as naSignOut } from "@/auth";

export async function signIn(...params: Parameters<typeof naSignIn>) {
	await naSignIn(...params);
}

export async function signOut(...params: Parameters<typeof naSignOut>) {
	await naSignOut(...params);
}
