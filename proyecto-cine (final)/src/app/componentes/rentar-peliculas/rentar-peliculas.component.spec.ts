import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentarPeliculasComponent } from './rentar-peliculas.component';

describe('RentarPeliculasComponent', () => {
  let component: RentarPeliculasComponent;
  let fixture: ComponentFixture<RentarPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentarPeliculasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
