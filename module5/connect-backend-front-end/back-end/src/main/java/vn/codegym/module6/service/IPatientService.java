package vn.codegym.module6.service;

import vn.codegym.module6.model.Patient;

import java.util.List;

public interface IPatientService {

    List<Patient> findAll();
}
