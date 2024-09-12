import fastify from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { createGoalCompletion } from "../functions/create-goal-completion";
import { createGoalRoute } from "./routes/create-goal";
import { createCompletionRoute } from "./routes/create-completion";
import { getPendingGoalslRoute } from "./routes/get-pending-goals";
import { getWeekSummaryRoute } from "./routes/get-week-summary";
import fastifyCors from "@fastify/cors";


const app = fastify().withTypeProvider<ZodTypeProvider>()

//Config para que o back seja acessivel pelo front
app.register(fastifyCors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//Faz a chamada para que os endpoints que estão na pasta 'routes' sejam acessiveis
app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingGoalslRoute)
app.register(getWeekSummaryRoute)


app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server runnig!')
})