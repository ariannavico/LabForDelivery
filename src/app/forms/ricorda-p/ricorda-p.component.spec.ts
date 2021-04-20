import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicordaPComponent } from './ricorda-p.component';

describe('RicordaPComponent', () => {
  let component: RicordaPComponent;
  let fixture: ComponentFixture<RicordaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicordaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicordaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
