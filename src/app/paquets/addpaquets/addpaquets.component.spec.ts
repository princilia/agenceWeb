import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaquetsComponent } from './addpaquets.component';

describe('AddpaquetsComponent', () => {
  let component: AddpaquetsComponent;
  let fixture: ComponentFixture<AddpaquetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpaquetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
