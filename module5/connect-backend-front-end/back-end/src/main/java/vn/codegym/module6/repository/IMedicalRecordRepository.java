package vn.codegym.module6.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.codegym.module6.model.MedicalRecord;

import javax.transaction.Transactional;
import java.util.List;
@Transactional
public interface IMedicalRecordRepository extends JpaRepository<MedicalRecord, Integer> {

    @Query(value = "SELECT * FROM medical_record where status_delete = 0",nativeQuery = true)
     List<MedicalRecord>findAll();

    @Query(value = "SELECT * FROM medical_record where id = :id",nativeQuery = true)
    MedicalRecord findId(@Param("id") Integer id);

    @Modifying
    @Query(value = "update medical_record set doctor = :doctor,end_date = :endDate, reason = :reason, start_date = :startDate, treatments = :treatments, patient = :patient where id = :id", nativeQuery = true)
     void edit(@Param("doctor") String doctor, @Param("endDate") String endDate, @Param("reason")  String reason, @Param("startDate") String startDate, @Param("treatments") String treatments,@Param("patient") Integer patient, @Param("id") Integer id);
}