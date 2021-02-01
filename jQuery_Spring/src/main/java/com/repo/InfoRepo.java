package com.repo;

import com.model.Info;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InfoRepo extends JpaRepository<Info,Integer> {
}
