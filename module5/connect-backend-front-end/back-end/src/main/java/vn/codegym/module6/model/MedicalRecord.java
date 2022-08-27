package vn.codegym.module6.model;

import javax.persistence.*;

@Entity(name = "medical_record")
public class MedicalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer  id;

    @ManyToOne
    @JoinColumn(name = "patient",referencedColumnName = "id")
    private Patient patient;

    @Column(name = "start_date", columnDefinition = "date")
    private String startDate;

    @Column(name = "end_date", columnDefinition = "date")
    private String endDate;

    private String reason;
    private String treatments;
    private String doctor;

    @Column(name = "status_delete", columnDefinition = "BIT")
    private Integer statusDelete = 0;

    public MedicalRecord() {
    }

    public Integer getStatusDelete() {
        return statusDelete;
    }

    public void setStatusDelete(Integer statusDelete) {
        this.statusDelete = statusDelete;
    }

    public MedicalRecord(Integer id, Patient patient, String startDate, String endDate, String reason, String treatments, String doctor, Integer statusDelete) {
        this.id = id;
        this.patient = patient;
        this.startDate = startDate;
        this.endDate = endDate;
        this.reason = reason;
        this.treatments = treatments;
        this.doctor = doctor;
        this.statusDelete = statusDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getTreatments() {
        return treatments;
    }

    public void setTreatments(String treatments) {
        this.treatments = treatments;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }
}
