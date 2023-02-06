import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFormComponent } from './t-form.component';

describe('TFormComponent', () => {
  let component: TFormComponent;
  let fixture: ComponentFixture<TFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
