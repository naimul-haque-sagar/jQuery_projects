package com.service;

import com.model.FormData;
import com.repo.FormDataRepo;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FormDataService {
    private final FormDataRepo formDataRepo;

    public void postData(FormData formData) {
        formDataRepo.save(formData);
    }

    public List<FormData> getAllData() {
        return formDataRepo.findAll();
    }

    public void deleteById(int id) {
        formDataRepo.deleteById(id);
    }

    public FormData getById(int id) {
        return formDataRepo.findById(id).orElseThrow();
    }

    public void updateData(FormData formData) {
        formDataRepo.save(formData);
    }
}
