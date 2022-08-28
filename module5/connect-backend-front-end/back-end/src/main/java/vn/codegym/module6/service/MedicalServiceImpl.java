package vn.codegym.module6.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.module6.model.MedicalRecord;
import vn.codegym.module6.repository.IMedicalRecordRepository;

import java.util.List;

@Service
public class MedicalServiceImpl  implements IMedicalRecordService{

    @Autowired
    private IMedicalRecordRepository iMedicalRecordRepository;
    @Override
    public List<MedicalRecord> findAll() {
        return this.iMedicalRecordRepository.findAll();
    }

    @Override
    public void edit(MedicalRecord medicalRecord) {
        this.iMedicalRecordRepository.edit(medicalRecord.getDoctor(),medicalRecord.getEndDate(),medicalRecord.getReason(),medicalRecord.getStartDate(), medicalRecord.getTreatments(), medicalRecord.getPatient().getId(), medicalRecord.getId());
    }

    @Override
    public MedicalRecord findId(Integer id) {
        return this.iMedicalRecordRepository.findId(id);
    }

    @Override
    public void create(MedicalRecord medicalRecord) {
        this.iMedicalRecordRepository.create(medicalRecord.getDoctor(),medicalRecord.getEndDate(),medicalRecord.getReason(),medicalRecord.getStartDate(), medicalRecord.getTreatments(), medicalRecord.getPatient().getId());
    }

    @Override
    public void delete(Integer id) {
        this.iMedicalRecordRepository.delete(id);
    }
}
