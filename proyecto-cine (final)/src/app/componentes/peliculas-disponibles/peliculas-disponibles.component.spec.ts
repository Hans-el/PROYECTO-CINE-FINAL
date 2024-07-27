import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDisponiblesComponent } from './peliculas-disponibles.component';

describe('PeliculasDisponiblesComponent', () => {
  let component: PeliculasDisponiblesComponent;
  let fixture: ComponentFixture<PeliculasDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasDisponiblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
