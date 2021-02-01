package com.viewController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping("movie-info-api-consume")
    public String movieInfoApiConsume(){
        return "api-operation/index.html";
    }

    @GetMapping("crud-page")
    public String getCrudPage(){
        return "crud-operation/index.html";
    }
}
