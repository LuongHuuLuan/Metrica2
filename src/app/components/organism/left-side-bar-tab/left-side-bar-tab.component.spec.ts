import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBarTabComponent } from './left-side-bar-tab.component';

describe('LeftSideBarTabComponent', () => {
  let component: LeftSideBarTabComponent;
  let fixture: ComponentFixture<LeftSideBarTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideBarTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftSideBarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
