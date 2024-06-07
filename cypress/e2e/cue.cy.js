import { LoginPage } from '../code/home';
describe('Cue It Login Page', () => {
  const loginPage = new LoginPage();

  it('should load the login page successfully', () => {
    loginPage.visit();
    loginPage.checkLoginPage();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.fillEmail('your-email@example.com');
    loginPage.fillPassword('your-password');
    loginPage.submit();
    loginPage.checkRedirectAfterLogin();
  });

  it('should show an error for invalid credentials', () => {
    loginPage.visit();
    loginPage.fillEmail('your-email@example.com');
    loginPage.fillPassword('wrong-password');
    loginPage.submit();
    loginPage.checkErrorMessage();
  });

  it('should navigate to the forgot password page', () => {
    loginPage.visit();
    loginPage.checkForgotPasswordLink();
  });

  it('should navigate to the registration page', () => {
    loginPage.visit();
    loginPage.checkRegisterLink();
  });
});