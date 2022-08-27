package vn.codegym.module6.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.codegym.module6.model.Patient;


import java.util.List;

public interface IPatientRepository extends JpaRepository<Patient,Integer> {

    @Query(value = "SELECT * FROM patient",nativeQuery = true)
    List<Patient> findAll();

}
