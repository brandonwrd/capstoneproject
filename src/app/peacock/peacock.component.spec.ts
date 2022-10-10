import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeacockComponent } from './peacock.component';

describe('PeacockComponent', () => {
  let component: PeacockComponent;
  let fixture: ComponentFixture<PeacockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeacockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeacockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
