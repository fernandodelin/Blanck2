import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";




export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {


    //querystring
    const baseUrl = req.url?.split("?")[0];


    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST_EPISODES) {
        await getListEpisodes(req, res);
    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.FILTER_EPISODES) {
        await getFilterEpisodes(req, res);
    }
}