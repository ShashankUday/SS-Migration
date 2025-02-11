import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredFileShareComponent } from './secured-file-share.component';

describe('SecuredFileShareComponent', () => {
  let component: SecuredFileShareComponent;
  let fixture: ComponentFixture<SecuredFileShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuredFileShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuredFileShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
