package com.repo;

import com.model.CrudData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrudDataRepo extends JpaRepository<CrudData ,Integer> {
}
