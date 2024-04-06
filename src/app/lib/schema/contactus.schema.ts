import { z } from "zod";

// Define Zod schema
export const ContactusZodSchema = z.object({
    Name: z.string().min(2).max(50),
    email: z.string().email(),
    Title: z.string().min(5).max(50),
    Message: z.string().min(10).max(1000),
});