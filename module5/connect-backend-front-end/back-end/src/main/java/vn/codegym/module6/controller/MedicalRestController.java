package vn.codegym.module6.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.codegym.module6.model.MedicalRecord;
import vn.codegym.module6.service.IMedicalRecordService;
import vn.codegym.module6.service.IPatientService;

@RestController
@CrossOrigin("*")
public class MedicalRestController {

    @Autowired
    private IMedicalRecordService iMedicalRecordService;

    @Autowired
    private IPatientService iPatientService;

    @GetMapping("/patientList")
    public ResponseEntity<?> getAllPatient() {
        return new ResponseEntity<>(iPatientService.findAll(), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(iMedicalRecordService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(iMedicalRecordService.findId(id), HttpStatus.OK);
    }

    @PatchMapping("")
    public ResponseEntity<?> update(@RequestBody MedicalRecord medicalRecord) {
        iMedicalRecordService.edit(medicalRecord);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        iMedicalRecordService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody MedicalRecord medicalRecord) {
        iMedicalRecordService.create(medicalRecord);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
