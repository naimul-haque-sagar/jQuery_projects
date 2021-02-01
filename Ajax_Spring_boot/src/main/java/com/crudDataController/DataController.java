package com.crudDataController;

import com.model.AjaxData;
import com.service.AjaxDataService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
public class DataController {
    private final AjaxDataService ajaxDataService;

    @PostMapping("post-data")
    public ResponseEntity postData(@RequestBody AjaxData ajaxData){
        ajaxDataService.postData(ajaxData);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("get-all-data")
    public ResponseEntity<List<AjaxData>> getAllData(){
        return ResponseEntity.status(HttpStatus.OK).body(ajaxDataService.getAllData());
    }

    @PutMapping("update-data")
    public ResponseEntity updateData(@RequestBody AjaxData ajaxData){
        ajaxDataService.updateData(ajaxData);
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("delete-by-id/{id}")
    public ResponseEntity deleteById(@PathVariable int id){
        ajaxDataService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("get-by-id/{id}")
    public ResponseEntity<AjaxData> getById(@PathVariable int id){
        return ResponseEntity.status(HttpStatus.OK).body(ajaxDataService.getById(id));
    }


}
