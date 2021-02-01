package com.dataController;

import com.model.WatchList;
import com.service.WatchListService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie-watchList")
@AllArgsConstructor
public class WatchListDataController {
	private final WatchListService watchListService;

	@PostMapping("/post-watchList/{title}")
	public void postWatchList(@PathVariable String title) {
		watchListService.saveWatchList(title);
	}

	@GetMapping("get-watchList")
	public List<WatchList> getAllList(){
		return watchListService.getAllList();
	}
}
