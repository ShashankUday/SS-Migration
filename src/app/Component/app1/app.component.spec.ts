import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent1} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent1;
  let fixture: ComponentFixture<AppComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent1 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
