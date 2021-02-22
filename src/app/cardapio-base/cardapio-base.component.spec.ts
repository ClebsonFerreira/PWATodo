import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioBaseComponent } from './cardapio-base.component';

describe('CardapioBaseComponent', () => {
  let component: CardapioBaseComponent;
  let fixture: ComponentFixture<CardapioBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
