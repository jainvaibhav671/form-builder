"use client";

import { signOut, signIn } from "@/auth/helpers";
import { useSession } from "next-auth/react";

export default function AuthButton() {
	const session = useSession();

	if (typeof session.data?.user === "undefined")
		return <button onClick={async () => await signIn()}>Sign In</button>;

	return (
		<button onClick={async () => await signOut()}>
			{session.data.user.name} Sign Out
		</button>
	);
}
