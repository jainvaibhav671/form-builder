import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "text",
					placeholder: "johndoe@gmail.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const users = [
					{
						id: "5413b7ab-6be6-49ee-b4c6-c3d74ea40a85",
						username: "johndoe",
						name: "John Doe",
						password: "pass",
						email: "johndoe@gmail.com",
					},
				];

				const user = users.find(
					(user) =>
						user.email === credentials.email &&
						user.password === credentials.password,
				);

				return user ?? null;
			},
		}),
		Github({
			name: "Github",
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	basePath: BASE_PATH,
	secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
