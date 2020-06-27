import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarQuestionComponent } from './star-question.component';

describe('StarQuestionComponent', () => {
  let component: StarQuestionComponent;
  let fixture: ComponentFixture<StarQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
