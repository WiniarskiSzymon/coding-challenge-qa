import './commands';
import addContext = require("mochawesome/addContext")
import { Sections } from './enums';
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
       getBookItemByName(name: string): Chainable<JQuery<HTMLLIElement>>
       getBooks(): Chainable<JQuery<HTMLLIElement>>
       waitForLoadingToFisnish(): void
       goToSection(section: Sections): void
       logout(): void
       getCurrentUser(): Chainable<string>
       getPageTextContent(): Chainable<string>
       logToReport(message: string): void
    }
  }
}
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`
    addContext({ test }, screenshot);
     const video = `assets/${Cypress.spec.name}.mp4`;
     addContext({ test }, video);
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Cannot create a new user with the username')) {
    return false
  }

})