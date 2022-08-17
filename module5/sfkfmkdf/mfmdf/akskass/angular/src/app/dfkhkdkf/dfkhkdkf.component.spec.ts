import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfkhkdkfComponent } from './dfkhkdkf.component';

describe('DfkhkdkfComponent', () => {
  let component: DfkhkdkfComponent;
  let fixture: ComponentFixture<DfkhkdkfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfkhkdkfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfkhkdkfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
