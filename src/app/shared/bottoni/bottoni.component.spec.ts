import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottoniComponent } from './bottoni.component';

describe('BottoniComponent', () => {
  let component: BottoniComponent;
  let fixture: ComponentFixture<BottoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottoniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
