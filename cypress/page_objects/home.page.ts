
class HomePage {
  registerButton() {
    return cy.get('button').contains('Register');
  }
  loginButton() {
    return cy.get('button').contains('Login');
  }

  openLoginWindow(){
    this.loginButton().click()
  }

  openRegisterWindow(){
    this.registerButton().click()
  }

  
}
export default new HomePage();
