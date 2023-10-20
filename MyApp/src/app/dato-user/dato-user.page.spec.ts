import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatoUserPage } from './dato-user.page';

describe('DatoUserPage', () => {
  let component: DatoUserPage;
  let fixture: ComponentFixture<DatoUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatoUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
