import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDashComponent } from './tab-dash.component';

describe('TabDashComponent', () => {
  let component: TabDashComponent;
  let fixture: ComponentFixture<TabDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
