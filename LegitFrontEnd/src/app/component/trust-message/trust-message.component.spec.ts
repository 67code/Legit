import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustMessageComponent } from './trust-message.component';

describe('TrustMessageComponent', () => {
  let component: TrustMessageComponent;
  let fixture: ComponentFixture<TrustMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
