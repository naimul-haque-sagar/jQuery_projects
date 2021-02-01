package com.service;

import com.model.Info;
import com.repo.InfoRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class InfoService {
    private final InfoRepo infoRepo;

    public void saveInfo(String title) {
        Info info=new Info();
        info.setTitle(title);

        infoRepo.save(info);
    }

    public List<Info> getAllInfo() {
        return infoRepo.findAll();
    }
}
