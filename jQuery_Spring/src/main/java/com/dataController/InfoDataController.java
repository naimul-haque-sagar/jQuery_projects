package com.dataController;

import com.model.Info;
import com.service.InfoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/save-info")
@AllArgsConstructor
public class InfoDataController {
    private final InfoService infoService;

    @PostMapping("/save/{title}")
    public void saveInfo(@PathVariable String title){
        infoService.saveInfo(title);
    }

    @GetMapping("/getInfo")
    public List<Info> getAllInfo(){
        return infoService.getAllInfo();
    }
}
