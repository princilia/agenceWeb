import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReceiveComponent } from './client-receive.component';

describe('ClientReceiveComponent', () => {
  let component: ClientReceiveComponent;
  let fixture: ComponentFixture<ClientReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
