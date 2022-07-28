package com.example.Youtube.Service;

import com.example.Youtube.Model.CreateChannel;
import com.example.Youtube.Repository.CreateChannelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CreateChannelService {
    @Autowired
    private CreateChannelRepository createChannelRepository;

    public CreateChannel checkChannel(String name) {
        List<CreateChannel> channels = createChannelRepository.findAll();
        for(CreateChannel channel : channels)
        {
            if(channel.getUsername().equals(name))
            {
                return channel;
            }
        }
        return null;
    }

    public void createChannel(CreateChannel channel) {
        createChannelRepository.save(channel);
    }
}
