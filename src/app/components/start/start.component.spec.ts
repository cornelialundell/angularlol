import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { StartComponent } from './start.component';
import { RouterTestingModule} from '@angular/router/testing'
describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ StartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showCreate', () => {
    fixture = TestBed.createComponent(StartComponent);
    fixture.nativeElement.querySelector('.show-create-btn').click()
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.show-create-btn').textContent).toEqual(' Stäng ')
  })
});
