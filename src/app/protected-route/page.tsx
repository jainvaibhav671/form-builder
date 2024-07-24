import { auth } from "@/auth";
import AuthButton from "../components/AuthButton.server";
import WhoAmIServerAction from "./whoAmIServerAction";

export default async function ProtectedRoute() {
	async function onGetUserAction() {
		"use server";
		const session = await auth();
		return session?.user?.name ?? null;
	}

	return (
		<main>
			<h1>Protected Route</h1>
			<WhoAmIServerAction onGetUserAction={onGetUserAction} />
			<br />
			<AuthButton />
		</main>
	);
}
