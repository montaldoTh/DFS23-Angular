import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteurImgComponent } from './selecteur-img.component';

describe('SelecteurImgComponent', () => {
  let component: SelecteurImgComponent;
  let fixture: ComponentFixture<SelecteurImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecteurImgComponent]
    });
    fixture = TestBed.createComponent(SelecteurImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
