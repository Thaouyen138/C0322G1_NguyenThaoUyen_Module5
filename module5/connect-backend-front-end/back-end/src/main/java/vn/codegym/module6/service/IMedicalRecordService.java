package vn.codegym.module6.service;

import vn.codegym.module6.model.MedicalRecord;

import java.util.List;

public interface IMedicalRecordService {
    List<MedicalRecord> findAll();

    void edit(MedicalRecord medicalRecord);

    MedicalRecord findId(Integer id);

    void create(MedicalRecord medicalRecord);
}
