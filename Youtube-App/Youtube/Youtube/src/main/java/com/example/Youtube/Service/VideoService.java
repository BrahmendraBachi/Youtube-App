package com.example.Youtube.Service;

import com.example.Youtube.Model.Videos;
import com.example.Youtube.Repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VideoService {
    @Autowired
    private VideoRepository videoRepository;

    public void uploadVideo(Videos video) {
        videoRepository.save(video);
    }

    public List<Videos> getMyVideos(String channelTitle) {
        List<Videos> myVideos = new ArrayList<>();
        List<Videos> videos = videoRepository.findAll();
        for(Videos video : videos)
        {
            if(video.getChannelTitle().equals(channelTitle))
            {
                myVideos.add(video);
            }
        }
        return myVideos;
    }

    public List<Videos> getAllVideos() {
        return videoRepository.findAll();
    }

    public Optional<Videos> getVideoById(int id) {
        return videoRepository.findById(id);
    }

    public Videos updateLikes(int id) {
        Videos video = videoRepository.findById(id).get();
        long likes = video.getLikes()+1;
        video.setLikes(likes);
        videoRepository.save(video);
        return video;
    }

    public List<Videos> getRemainingVideos(int id) {
        List<Videos> remainingVideos = new ArrayList<>();
        List<Videos> videos = videoRepository.findAll();
        for(Videos video : videos)
        {
            if(video.getId()!=id)
            {
                remainingVideos.add(video);
            }
        }
        return remainingVideos;
    }

    public List<Videos> getMyRemainigVideos(int id, Videos myVideo) {
        String channelTitle = myVideo.getChannelTitle();
        List<Videos> myRemVideos = new ArrayList<>();
        List<Videos> videos = videoRepository.findAll();
        for(Videos video : videos)
        {
            if(video.getChannelTitle().equals(channelTitle) && video.getId()!=id)
            {
                myRemVideos.add(video);
            }
        }
        return myRemVideos;
    }

    public void updateVideo(Videos myvideo, int id) {
        Videos video = videoRepository.findById(id).get();
        video.setDescription(myvideo.getDescription());
        video.setVideoUrl(myvideo.getVideoUrl());
        video.setTitle(myvideo.getTitle());
        video.setThumbnail(myvideo.getThumbnail());
        videoRepository.save(video);
    }

    public List<Videos> getMatchedVideos(String searchString) {
        return videoRepository.findAll().stream().filter(video -> video.getTitle().contains(searchString)).toList();
    }
}
