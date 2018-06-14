import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosDialogComponent } from './termos-dialog.component';

describe('TermosDialogComponent', () => {
  let component: TermosDialogComponent;
  let fixture: ComponentFixture<TermosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
