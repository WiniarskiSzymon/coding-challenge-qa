import HomePage from '../../page_objects/home.page';
import RegisterWindow from '../../page_objects/register.window';
import ReadingListPage from '../../page_objects/reading-list.page'
import DiscoverPage from '../../page_objects/discover.page';
import {Sections} from '../../support/enums'
describe('Books management', () => {
  const USER = require(`../../fixtures/USER`)[0];

  beforeEach(function () {
    cy.visit('/')
    HomePage.openRegisterWindow();
    RegisterWindow.register(USER.username, USER.password)
  })

  afterEach(function () {
    cy.clearLocalStorage()
  })

  it('Add book to reading list', function () {
    cy.goToSection(Sections.Discover)
    DiscoverPage.addBook('The Lord of the Rings')
    cy.goToSection(Sections.ReadingList)
    ReadingListPage.getReadingListBooks().should('deep.equal', ['The Lord of the Rings'])
  })


});
