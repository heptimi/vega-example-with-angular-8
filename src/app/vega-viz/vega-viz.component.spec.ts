import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizTestComponent } from './viz-test.component';

describe('VizTestComponent', () => {
  let component: VizTestComponent;
  let fixture: ComponentFixture<VizTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
