import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCode } from "../utils/status-code";



export const serviceFilterEpisodes = async (podcastName: string): Promise<PodcastTransferModel> => {
  
    //Define a interface de resposta
    let responseFormat: PodcastTransferModel = {
        statusCode:0,
        body:[],
    };
    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);
    //verifica se encontrou dados
    
    responseFormat = {
        statusCode: [data].length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT,
        body: [data],
    };

    return responseFormat;
};