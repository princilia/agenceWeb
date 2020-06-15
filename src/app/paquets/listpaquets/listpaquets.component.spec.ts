import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaquetsComponent } from './listpaquets.component';

describe('ListpaquetsComponent', () => {
  let component: ListpaquetsComponent;
  let fixture: ComponentFixture<ListpaquetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpaquetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpaquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
