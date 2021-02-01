package com.viewController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("get-page")
    public String getMovieDetailsPage(){
        return "/api-operation/movie-details-operation/details.html";
    }

    @GetMapping("get-artists-page")
    public String getMovieArtistsPage(){
        return "/api-operation/movie-artist-operation/artist.html";
    }

    @GetMapping("get-releasePlace-page")
    public String getMovieReleasePlacePage(){
        return "/api-operation/movie-releasePlace-operation/releasePlace.html";
    }

    @GetMapping("get-crud-page")
    public String getCrudPage(){
        return "/crud-operation/index.html";
    }

}
