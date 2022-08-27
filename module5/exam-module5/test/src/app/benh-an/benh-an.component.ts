import {Component, OnInit} from '@angular/core';
import {BenhNhanService} from "../service/benh-nhan.service";
import {BenhAnService} from "../service/benh-an.service";
import {BenhNhan} from "../model/benh-nhan";
import {BenhAn} from "../model/benh-an";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-benh-an',
  templateUrl: './benh-an.component.html',
  styleUrls: ['./benh-an.component.css']
})
export class BenhAnComponent implements OnInit {
  benhNhanList: BenhNhan[];
  benhAnList: BenhAn[];

  constructor(private benhNhanService: BenhNhanService,
              private benhAnService: BenhAnService) {
  }

  benhAnForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      benhNhan: new FormControl('', [Validators.required]),
      ngayNhapVien: new FormControl('', [Validators.required]),
      ngayRaVien: new FormControl('', [Validators.required]),
      lyDoNhapVien: new FormControl('', [Validators.required]),
      phuongPhapDieuTri: new FormControl('', [Validators.required]),
      bacSiDieuTri: new FormControl('', [Validators.required]),
    }
  )
  idToDelete = 0;

  getAllBenhNhan() {
    this.benhNhanService.getAll().subscribe(value => this.benhNhanList = value)
  }

  getAll() {
    this.benhAnService.getAll().subscribe(value => this.benhAnList = value)
  }

  ngOnInit(): void {
    this.getAllBenhNhan();
    this.getAll();
  }

  update() {
    const benhAn = this.benhAnForm.value;
    console.log(benhAn)
    this.benhAnService.update(benhAn).subscribe(value => {
      },
      () => {},
      () =>
      {
        this.getAll();
        this.benhAnForm.reset()
      }
      );
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  edit(benhAn: BenhAn) {
    this.benhAnForm.patchValue(benhAn)
  }

  delete() {
    this.benhAnService.delete(this.idToDelete).subscribe();
    this.getAll()
  }

  setDelete(maBenhAn: number) {
    this.idToDelete = maBenhAn;
  }

  onSubmit() {
    const benhAn = this.benhAnForm.value;
    this.benhAnService.save(benhAn).subscribe(
      value => {},
      error => {},
      () => {
        this.getAll();
        this.benhAnForm.reset()
      }
    );
  }
}
