import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInDetailsComponent } from './product-in-details.component';

describe('ProductInDetailsComponent', () => {
  let component: ProductInDetailsComponent;
  let fixture: ComponentFixture<ProductInDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
