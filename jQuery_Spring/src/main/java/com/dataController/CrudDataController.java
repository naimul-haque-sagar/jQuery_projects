package com.dataController;

import com.model.FormData;
import com.service.FormDataService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
public class CrudDataController {
    private final FormDataService formDataService;

    @PostMapping("post-data")
    public ResponseEntity postData(@RequestBody FormData formData){
        formDataService.postData(formData);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("get-all-data")
    public ResponseEntity<List<FormData>> getAllData(){
        return ResponseEntity.status(HttpStatus.OK).body(formDataService.getAllData());
    }

    @GetMapping("get-by-id/{id}")
    public ResponseEntity<FormData> getById(@PathVariable int id){
        return ResponseEntity.status(HttpStatus.OK).body(formDataService.getById(id));
    }

    @DeleteMapping("delete-by-id/{id}")
    public ResponseEntity deleteById(@PathVariable int id){
        formDataService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("update-data")
    public ResponseEntity updateData(@RequestBody FormData formData){
        formDataService.updateData(formData);
        return new ResponseEntity(HttpStatus.OK);
    }
}
