import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCode } from "../utils/status-code";



export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    
    let responseFormat: PodcastTransferModel = {
        statusCode:0,
        body:[],
    };
    const data = await repoPodcast();

    responseFormat = {
        statusCode: [data].length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT,
        body: [data],
    };
  
    return responseFormat;
};