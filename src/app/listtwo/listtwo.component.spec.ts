import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtwoComponent } from './listtwo.component';

describe('ListtwoComponent', () => {
  let component: ListtwoComponent;
  let fixture: ComponentFixture<ListtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
