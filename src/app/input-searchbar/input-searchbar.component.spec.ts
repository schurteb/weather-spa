import { TestBed } from '@angular/core/testing';
import { SearchbarComponent } from './input-searchbar.component';

describe('SearchbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'weather-app'`, () => {
  //   const fixture = TestBed.createComponent(SearchbarComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('weather-app');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('weather-app app is running!');
  });
});
