import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAMemberComponent } from './ta-member.component';

describe('TAMemberComponent', () => {
  let component: TAMemberComponent;
  let fixture: ComponentFixture<TAMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
