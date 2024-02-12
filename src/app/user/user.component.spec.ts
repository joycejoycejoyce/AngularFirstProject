import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    }) // if you do not use Webpack, you need to compilfeComponents 
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    /**
     * check after we update it. state change 
     */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    /**
     inject user service, created an instance 
     */
    let userService = fixture.debugElement.injector.get(UserService); 
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name if user is logged in', () => {
    /**
     * set the user logged in value as true 
     */
    component.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement; 
    expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    /**
     * set the user logged in value as true 
     */
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement; 
    /**
     * in the html template, can not find the user name 
     */
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });
});
