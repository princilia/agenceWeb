import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSendComponent } from './client-send.component';

describe('ClientSendComponent', () => {
  let component: ClientSendComponent;
  let fixture: ComponentFixture<ClientSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
