import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogOutComponent } from './menu-log-out.component';

describe('MenuLogOutComponent', () => {
  let component: MenuLogOutComponent;
  let fixture: ComponentFixture<MenuLogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLogOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
