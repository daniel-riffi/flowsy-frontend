import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistOverviewComponent } from './playlist-overview.component';

describe('PlaylistOverviewComponent', () => {
  let component: PlaylistOverviewComponent;
  let fixture: ComponentFixture<PlaylistOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
