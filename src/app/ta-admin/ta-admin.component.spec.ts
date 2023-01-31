import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAAdminComponent } from './ta-admin.component';

describe('TAAdminComponent', () => {
  let component: TAAdminComponent;
  let fixture: ComponentFixture<TAAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
