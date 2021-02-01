package com.service;

import com.model.CrudData;
import com.repo.CrudDataRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CrudDataService {
    private final CrudDataRepo crudDataRepo;

    public void saveInputData(CrudData crudData) {
        crudDataRepo.save(crudData);
    }

    public List<CrudData> getAllInputData() {
        return crudDataRepo.findAll();
    }

    public void deleteById(int id) {
        crudDataRepo.deleteById(id);
    }

    public CrudData getById(int id) {
        return crudDataRepo.findById(id).orElseThrow();
    }

    public void updateById(CrudData crudData) {
        CrudData crudDto=crudDataRepo.findById(crudData.getId()).orElseThrow();
        crudDto.setFirstName(crudData.getFirstName());
        crudDto.setLastName(crudData.getLastName());
        crudDto.setEmail(crudData.getEmail());
        crudDto.setAddress(crudData.getAddress());
        crudDataRepo.save(crudDto);
    }
}
