import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewIndividualComponent } from './product-view-individual.component';

describe('ProductViewIndividualComponent', () => {
  let component: ProductViewIndividualComponent;
  let fixture: ComponentFixture<ProductViewIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
