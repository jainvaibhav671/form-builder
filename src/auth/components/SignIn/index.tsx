"use client";

import { useForm } from "react-hook-form";
import { formSchema, FormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

import * as Form from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProviders } from "next-auth/react";
import { signIn } from "@/auth/helpers";
import { useEffect, useState } from "react";

export type ProvidersType = Awaited<ReturnType<typeof getProviders>>;

export default function SignIn() {
	const [providers, setProviders] = useState<ProvidersType | null>();

	useEffect(() => {
		getProviders().then((providers) => setProviders(providers));
	}, []);

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (formValues: FormSchema) => {};

	return (
		<div className="w-96">
			<Form.Form {...form}>
				<form
					className="flex flex-col gap-2"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<Form.FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<Form.FormItem>
								<Form.FormLabel>Email</Form.FormLabel>
								<Form.FormControl>
									<Input placeholder="johndoe@xxx.com" {...field} />
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
					<Form.FormField
						name="password"
						control={form.control}
						render={({ field }) => (
							<Form.FormItem>
								<Form.FormLabel>Password</Form.FormLabel>
								<Form.FormControl>
									<Input type="password" {...field} />
								</Form.FormControl>
								<Form.FormMessage />
							</Form.FormItem>
						)}
					/>
					<Button>Sign in</Button>
				</form>
			</Form.Form>
			<hr className="my-4" />
			<ul className="flex flex-col gap-2 mt-3">
				{providers &&
					Object.values(providers).map((provider) =>
						provider.type === "credentials" ? null : (
							<li key={provider.name}>
								<Button
									className="w-full"
									onClick={async () => await signIn(provider.id)}
								>
									Sign in with {provider.name}
								</Button>
							</li>
						),
					)}
			</ul>
		</div>
	);
}
