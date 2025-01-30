import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit, OnDestroy{
  authStatusSub: any;
  constructor(private router: Router,private authService: AuthService) {}
  @Output() loginSuccessEvent = new EventEmitter<boolean>();
  // Navigate to Welcome Page
  // navigateToWelcome() {
  //   this.router.navigate(['/welcomePage']);
  // }
  // Mock Send Authentication Code
  sendAuthenticationCode() {
    alert('Authentication code sent to your email!');
  }
  showEmailForm = false;
  email: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  loginSuccess: boolean = false;
  isLoggedIn: boolean | undefined;
  isEmailValid: boolean = true;
  isPasswordValid: boolean = true;
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  togglePasswordVisibility(): void {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  toggleEmailForm() {
    this.showEmailForm = !this.showEmailForm;
  }
  ngOnInit(): void {
    // Subscribe to login status
    this.authStatusSub = this.authService.loggedInStatus$.subscribe((status) => {
      this.isLoggedIn = status; // Update login state when it changes
    });
  }

  ngOnDestroy(): void {
    if (this.authStatusSub) {
      this.authStatusSub.unsubscribe(); // Unsubscribe when the component is destroyed
    }
  }
 // Method to handle login with email and password
//  loginWithEmail(): void {
//   if (this.email && this.password) {
//     // Assuming login logic (e.g., check credentials with a service or mock)
//     this.authService.login();  // Set the user as logged in
//     this.loginSuccess = true;   // Show success message
    
//     // You can add logic to check the validity of the email and password here
//     // For now, we're just simulating a successful login
//   } else {
//     this.loginSuccess = false;
//     // Handle error or invalid credentials if needed
//   }
// }
  navigateToWelcome() {
    // Implement navigation logic
    console.log('Navigating to Welcome Page...');
  }

  validateEmail() {
    // this.emailTouched = true;
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // this.isEmailValid = emailRegex.test(this.email);
  }

  validatePassword() {
    // this.passwordTouched = true;
    // this.isPasswordValid = this.password.length > 5;
  }
  loginWithEmail(): void {
    this.validateEmail();
    this.validatePassword();
    if (this.isEmailValid && this.isPasswordValid) {
      console.log('Login successful!');
      this.loginSuccess = true;
      // Simulate redirect to the welcome page after a delay
      setTimeout(() => {
        this.loginSuccess = false; // Hide the success message
        this.authService.login(); // Update login state in AuthService
        this.isLoggedIn = true; // Set local state to reflect logged-in status
        this.router.navigate(['/page']); // Navigate to the welcome page
      }, 20);
    } else {
      console.log('Login failed. Please fix the errors.');
      this.loginSuccess = false;
    }
  }

  toggleLoginLogout(): void {
    if (this.isLoggedIn) {
      console.log('User logged out');
      this.authService.logout(); // Call the logout method from AuthService
      this.isLoggedIn = false; // Update local state to reflect logged-out status
      this.router.navigate(['/']); // Redirect to the homepage
    }
  }

  redirectToLogin(): void {
    console.log('Redirecting to login form');
    this.router.navigate(['/Login']); // Navigate to the login page
  }

}