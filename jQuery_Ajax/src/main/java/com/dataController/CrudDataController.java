package com.dataController;

import com.model.CrudData;
import com.service.CrudDataService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
public class CrudDataController {
    private final CrudDataService crudDataService;

    @PostMapping("/save-input-data")
    public ResponseEntity saveInputData(@RequestBody CrudData crudData){
        crudDataService.saveInputData(crudData);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/get-all-input-data")
    public ResponseEntity<List<CrudData>> getAllInputData(){
        return ResponseEntity.status(HttpStatus.OK).body(crudDataService.getAllInputData());
    }

    @DeleteMapping("/delete-by-id/{id}")
    public ResponseEntity deleteById(@PathVariable int id){
        crudDataService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<CrudData> getById(@PathVariable int id){
        return ResponseEntity.status(HttpStatus.OK).body(crudDataService.getById(id));
    }

    @PutMapping("update-by-id")
    public ResponseEntity updateById(@RequestBody CrudData crudData){
        crudDataService.updateById(crudData);
        return new ResponseEntity(HttpStatus.OK);
    }
}
