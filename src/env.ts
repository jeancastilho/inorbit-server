import z from "zod";

//zod é um tipo de validador de arquivo então ele está garantindo que a variavel 'DATABASE_URL' seja uma string e uma url, caso contrario vai dar um throw

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)