import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaordiniComponent } from './listaordini.component';

describe('ListaordiniComponent', () => {
  let component: ListaordiniComponent;
  let fixture: ComponentFixture<ListaordiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaordiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaordiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
