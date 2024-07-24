import { z } from "zod";

export const formSchema = z.object({
	email: z.string().min(2).max(100),
	password: z.string().min(8).max(12),
});

export type FormSchema = z.infer<typeof formSchema>;
