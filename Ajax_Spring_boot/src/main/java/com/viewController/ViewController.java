package com.viewController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("get-ajax-page")
    public String getAjaxPage(){
        return "/crud-operation/index.html";
    }

    @GetMapping("get-api-page")
    public String getApiPage(){
        return "/api-operation/index.html";
    }
}
