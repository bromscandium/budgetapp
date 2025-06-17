import {CorsOptions} from "cors";
import { env } from "./dotenv";

const frontendUrl: string = `https://localhost:${env.FRONTEND_PORT}`;

export const corsConfig: CorsOptions = {
    origin: [frontendUrl],
    credentials: true,
}