package com.example.Youtube.Controller;

import com.example.Youtube.Model.CreateChannel;
import com.example.Youtube.Model.Videos;
import com.example.Youtube.Service.CreateChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:58008")
public class UserController {
    @Autowired
    private CreateChannelService createChannelService;

    @PostMapping("/create-channel")
    public CreateChannel createChannel(@RequestBody CreateChannel channel)
    {
        createChannelService.createChannel(channel);
        return channel;
    }

    @GetMapping("/channel/{username}")
    public CreateChannel checkChannel(@PathVariable String username)
    {
        System.out.println("check Channel is triggered");
        System.out.println(username);
        CreateChannel channel = createChannelService.checkChannel(username);
        if(channel!=null)
        {
            System.out.println(channel);
            return channel;
        }
        return null;
    }

}
