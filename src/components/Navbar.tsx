import Logo from "@/components/Logo";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center border-b border-border h-16 px-4 py-2">
			<Logo />
			{/* <UserButton afterSignOutUrl="/sign-in" />*/}
		</nav>
	);
}
