package com.example.Youtube.Repository;

import com.example.Youtube.Model.CreateChannel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreateChannelRepository extends JpaRepository<CreateChannel, Integer> {
}
