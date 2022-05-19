import HomePage from '../../page_objects/home.page';
import RegisterWindow from '../../page_objects/register.window';
describe('Register', () => {
  const USER = require(`../../fixtures/USER`)[0];
  const TEXTS = require(`../../fixtures/TEXTS`)[0];

  beforeEach(function () {
    cy.visit('/')
  })

  afterEach(function () {
    cy.clearLocalStorage()
  })

  it('Register user', function () {
    HomePage.openRegisterWindow();
    RegisterWindow.register(USER.username, USER.password)
    cy.getCurrentUser().should('equal', USER.username + "fsdfsd")
    cy.getPageTextContent().should('equal', TEXTS.readingListPageText)
  });



  it('Try to register existing user', function () {
    HomePage.openRegisterWindow();
    RegisterWindow.register(USER.username, USER.password)
    cy.logout()
    HomePage.openRegisterWindow();
    RegisterWindow.register(USER.username, USER.password);
    RegisterWindow.getAlertText().should('equal',`Cannot create a new user with the username "${USER.username}"`)
    RegisterWindow.getAlertTitle().should('equal','There was an error: ')

  });
});
