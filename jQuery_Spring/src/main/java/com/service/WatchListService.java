package com.service;

import com.model.WatchList;
import com.repo.WatchListRepo;
import lombok.AllArgsConstructor;

import java.time.Instant;
import java.util.List;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class WatchListService {
    private final WatchListRepo watchListRepo;

	public void saveWatchList(String title) {
		WatchList watchList=new WatchList();
		watchList.setTitle(title);
		watchList.setCreatedAt(Instant.now());
		
		watchListRepo.save(watchList);
	}

	public List<WatchList> getAllList() {
		return watchListRepo.findAll();
	}
}
