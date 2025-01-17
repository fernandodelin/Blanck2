import { PodcastModel } from "./podcasts-model";

export interface PodcastTransferModel {
    statusCode: number,
    body: PodcastModel[],
}