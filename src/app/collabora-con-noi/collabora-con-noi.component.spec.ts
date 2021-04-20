import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboraConNoiComponent } from './collabora-con-noi.component';

describe('CollaboraConNoiComponent', () => {
  let component: CollaboraConNoiComponent;
  let fixture: ComponentFixture<CollaboraConNoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboraConNoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboraConNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
