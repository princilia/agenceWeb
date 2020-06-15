import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetsComponent } from './paquets.component';

describe('PaquetsComponent', () => {
  let component: PaquetsComponent;
  let fixture: ComponentFixture<PaquetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
