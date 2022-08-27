package vn.codegym.module6.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity(name = "patient")
public class Patient {

    @Id
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "patient")
    private Set<MedicalRecord> medicalRecords;

    public Patient() {
    }

    public Patient(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
