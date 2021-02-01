package com.repo;

import com.model.FormData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormDataRepo extends JpaRepository<FormData,Integer> {
}
