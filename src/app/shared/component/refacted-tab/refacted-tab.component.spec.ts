import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactedTabComponent } from './refacted-tab.component';

describe('RefactedTabComponent', () => {
  let component: RefactedTabComponent;
  let fixture: ComponentFixture<RefactedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefactedTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefactedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
