import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubquestionsComponent } from './subquestions.component';

describe('SubquestionsComponent', () => {
  let component: SubquestionsComponent;
  let fixture: ComponentFixture<SubquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
