import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellaComponent } from './bella.component';

describe('BellaComponent', () => {
  let component: BellaComponent;
  let fixture: ComponentFixture<BellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
