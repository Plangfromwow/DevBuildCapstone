import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartitemdetailComponent } from './cartitemdetail.component';

// import { CartitemdetailComponent } from './cartitemdetail.component';

describe('CartitemdetailComponent', () => {
  let component: CartitemdetailComponent;
  let fixture: ComponentFixture<CartitemdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartitemdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartitemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
