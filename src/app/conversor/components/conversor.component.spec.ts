import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from '../services'; //add import na pasta service


describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConversorComponent
      ],
      //add o providers da moedaService (local: services)
      providers: [
        MoedaService,
        ConversorService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
