import {CorsOptions} from "cors";
import { env } from "./dotenv";

const frontendUrl: string = `https://${env.LOCAL_HOTSPOT_PHONE}:${env.FRONTEND_PORT}`;

export const corsConfig: CorsOptions = {
    origin: [frontendUrl],
    credentials: true,
}