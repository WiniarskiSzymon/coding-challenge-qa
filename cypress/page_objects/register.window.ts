class RegisterWindow {
  passwordInput() {
    return cy.get('#password');
  }

  usernameInput() {
    return cy.get('#username');
  }

  registerButton() {
    return cy.get('button[type="submit"]');
  }
  

  typePassword(password: string){
    this.passwordInput().type(password);

  }

  typeUsername(username: string){
    this.usernameInput().type(username);
  }

  submit(){
   return this.registerButton().click()
  }


  register(username: string, password:string) {
    cy.logToReport(`Registering user ${username}`)
    this.typeUsername(username);
    this.typePassword(password);
    this.submit()
    cy.waitForLoadingToFisnish()

  }

  getAlertText(){
    return cy.get('div[role="alert"]').find('pre').first().invoke('text')
  }

  getAlertTitle(){
    return cy.get('div[role="alert"]').find('span').first().invoke('text')

  }

}

export default new RegisterWindow();
