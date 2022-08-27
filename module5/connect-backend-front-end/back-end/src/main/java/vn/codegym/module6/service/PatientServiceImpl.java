package vn.codegym.module6.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.module6.model.Patient;
import vn.codegym.module6.repository.IPatientRepository;
import java.util.List;

@Service
public class PatientServiceImpl implements IPatientService {

    @Autowired
    private IPatientRepository iPatientRepository;

    @Override
    public List<Patient> findAll() {
        return this.iPatientRepository.findAll();
    }
}
