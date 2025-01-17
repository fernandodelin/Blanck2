import {IncomingMessage, ServerResponse} from 'http';
import { serviceListEpisodes } from '../services/list-episodes';
import { serviceFilterEpisodes } from '../services/filter-episodes';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';



const CONTENT_DEFAULT = {'Content-Type': ContentType.JSON}

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
   
    const content: PodcastTransferModel = await serviceListEpisodes();
    res.writeHead(content.statusCode, CONTENT_DEFAULT);
    res.write(JSON.stringify(content.body));
    res.end();
};


export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const queryString = req.url?.split("?p=")[1] || "";
    const content: PodcastTransferModel = await serviceFilterEpisodes(queryString);

    res.writeHead(content.statusCode, CONTENT_DEFAULT);
    res.write(JSON.stringify(content.body));
    res.end();
}