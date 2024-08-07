import { auth } from "@/auth";
import AuthButton from "./components/AuthButton.server";

export default async function Home() {
	const session = await auth();

	return (
		<>
			<h1>Home</h1>
			<pre>{JSON.stringify(session)}</pre>
			<br />
			<AuthButton />
		</>
	);
}
