// cypress/integration/cue_it_spec.js

export class LoginPage {
    visit() {
      cy.visit('https://cuewebapp.com/cue_it');
    }
  
    fillEmail(value) {
      cy.get('input[name="email"]').type(value);
    }
  
    fillPassword(value) {
      cy.get('input[name="password"]').type(value);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    checkErrorMessage() {
      cy.contains('Invalid email or password').should('be.visible');
    }
  
    checkLoginPage() {
      cy.contains('Login').should('be.visible');
    }
  
    checkRedirectAfterLogin() {
      cy.url().should('not.include', '/cue_it');
    }
  
    checkForgotPasswordLink() {
      cy.contains('Forgot password?').click();
      cy.url().should('include', '/forgot-password');
    }
  
    checkRegisterLink() {
      cy.contains('Register').click();
      cy.url().should('include', '/register');
    }
  }

  