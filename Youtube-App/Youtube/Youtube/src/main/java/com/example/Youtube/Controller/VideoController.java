package com.example.Youtube.Controller;

import com.example.Youtube.Model.Videos;
import com.example.Youtube.Service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:58008")
public class VideoController {
    @Autowired
    private VideoService videoService;

    @PostMapping("/uploadVideo")
    public Videos uploadVideo(@RequestBody Videos video)
    {
        System.out.println("Upload Video is Triggered");
        videoService.uploadVideo(video);
        return video;
    }
    @GetMapping("/getVideos/{channelTitle}")
    public List<Videos> getMyVideos(@PathVariable String channelTitle)
    {
        System.out.println("GetMyVideos is triggered");
        return videoService.getMyVideos(channelTitle);
    }
    @GetMapping("/getAllVideos")
    public List<Videos> getAllVideos()
    {
        System.out.println("GetAllVideos is triggered");
        return videoService.getAllVideos();
    }
    @GetMapping("/getvideo/{id}")
    public Videos getVideoById(@PathVariable int id)
    {
        System.out.println("FindById is triggered");
        return videoService.getVideoById(id).get();
    }
    @GetMapping ("/updateVideolikes/{id}")
    public Videos updateVideolikes(@PathVariable int id)
    {
        System.out.println("UpdateVideoLikes is Triggered");
        Videos video = this.videoService.updateLikes(id);
        return video;
    }
    @GetMapping("/getRemainingVideos/{id}")
    public List<Videos> getRemainingVideos(@PathVariable int id)
    {
        System.out.println("getRemainingVideos is Triggerrd "+id);
        return videoService.getRemainingVideos(id);
    }
    @PostMapping("/MyRemainingVideos/{id}")
    public List<Videos> getMyRemainingVideos(@PathVariable int id, @RequestBody Videos video)
    {
        System.out.println("My Remaining Videos is triggered "+ video.getChannelTitle());
        return videoService.getMyRemainigVideos(id, video);
    }
    @PostMapping("/updateVideo/{id}")
    public Videos updatevideo(@RequestBody Videos video, @PathVariable int id)
    {
        System.out.println("Update Video is Triggered");
        videoService.updateVideo(video, id);
        return video;
    }
    @GetMapping("/getSearch/{searchString}")
    public List<Videos> getMatchedVideos(@PathVariable String searchString) {
        System.out.println("Search is Triggered " + searchString);
        return videoService.getMatchedVideos(searchString);
    }
}
