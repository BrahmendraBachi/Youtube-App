package com.example.Youtube.Repository;

import com.example.Youtube.Model.Videos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoRepository extends JpaRepository<Videos, Integer> {
}
