package com.service;

import com.model.AjaxData;
import com.repo.AjaxDataRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AjaxDataService {
    private final AjaxDataRepo ajaxDataRepo;

    public void postData(AjaxData ajaxData) {
        ajaxDataRepo.save(ajaxData);
    }

    public void updateData(AjaxData ajaxData) {
        ajaxDataRepo.save(ajaxData);
    }

    public List<AjaxData> getAllData() {
        return ajaxDataRepo.findAll();
    }

    public void deleteById(int id) {
        ajaxDataRepo.deleteById(id);
    }

    public AjaxData getById(int id) {
        return ajaxDataRepo.findById(id).orElseThrow();
    }
}
