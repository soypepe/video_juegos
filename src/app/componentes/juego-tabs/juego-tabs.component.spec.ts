import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTabsComponent } from './juego-tabs.component';

describe('JuegoTabsComponent', () => {
  let component: JuegoTabsComponent;
  let fixture: ComponentFixture<JuegoTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
