export class PlayTrack {
    trackUri: string;
    trackName: string;
    image: string;
    status: string;

    constructor(trackUri: string, trackName: string, image: string, status: string){
        this.trackUri = trackUri;
        this.trackName = trackName;
        this.image = image;
        this.status = status;
    }
}