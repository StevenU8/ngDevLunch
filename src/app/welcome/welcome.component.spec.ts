import { CarouselModule } from 'ngx-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [CarouselModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add slides for each image url', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    let slideCount = fixture.debugElement.queryAll(By.css('slide')).length;
    expect(slideCount).toBe(app.imageUrls.length);
  });

  it('each slide should contain an image url', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();

    let slides = fixture.debugElement.queryAll(By.css('slide'));
    slides.forEach(slide => expect(slide.queryAll(By.css('img')).length).toBe(1));
  });


  it('all images are displayed', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    let slides = fixture.debugElement.queryAll(By.css('slide'));
    let displayedImageUrls : string[] = [];
    slides.forEach(slide => displayedImageUrls.push(slide.queryAll(By.css('img'))[0].properties.src));

    for (var index = 0; index < displayedImageUrls.length; index++) {
      var displayedImage = displayedImageUrls[index];
      var expectedImage = displayedImageUrls[index];
      expect(displayedImage).toBe(expectedImage);
    }
  });
});
