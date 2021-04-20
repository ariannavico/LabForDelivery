import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRistoComponent } from './menu-risto.component';

describe('MenuRistoComponent', () => {
  let component: MenuRistoComponent;
  let fixture: ComponentFixture<MenuRistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
