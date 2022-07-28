import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateChannel } from './create-channel';
import { Videos } from './videos';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient : HttpClient) { }
  private baseUrl = "http://localhost:8080"
  createChannel(channel : CreateChannel):Observable<any>
  {
    return this.httpClient.post(`${this.baseUrl}/create-channel`,channel);
  }
  checkChannelbyname(username: string | undefined):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/channel/${username}`);
  }
  getMyVideos(channelName : string | undefined):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/getVideos/${channelName}`);
  }
  UploadVideo(video : Videos):Observable<any>
  {
    return this.httpClient.post(`${this.baseUrl}/uploadVideo`,video);
  }
  getAllVideos():Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/getAllVideos`);
  }
  getVideoById(id : number | undefined):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getvideo/${id}`);
  }
  updateVideoLikes(video : Videos, id : number | undefined):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/updateVideolikes/${id}`);
  }
  getRemainingVideos(id : number | undefined):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/getRemainingVideos/${id}`);
  }
  getMyRemainingVideos(id :number | undefined, video : Videos | undefined):Observable<any>
  {
    console.log(video+" videos");
    return this.httpClient.post(`${this.baseUrl}/MyRemainingVideos/${id}`,video);
  }
  updateVideo(video : Videos, id : number | undefined):Observable<any>
  {
    return this.httpClient.post(`${this.baseUrl}/updateVideo/${id}`,video);
  }
  getVideosBySearch(search : String | undefined):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/getSearch/${search}`);
  }
}
