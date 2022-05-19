import { Sections } from "./enums";
import addContext = require("mochawesome/addContext")
import cypress = require("cypress");

Cypress.Commands.add("getBookItemByName", (name: string) => {
  const regex = new RegExp(`^${name}$`);
  return cy.get('h2[id^="book-row-book"]').contains(regex).parents("li");
});
Cypress.Commands.add("getBooks", () => {
  return cy.get('h2[id^="book-row-book"]');
});

Cypress.Commands.add("waitForLoadingToFisnish", () => {
  cy.get('[aria-label="loading"]').should("be.visible");
  cy.get('[aria-label="loading"]').should("not.exist");
});

Cypress.Commands.add("goToSection", (section: Sections) => {
  cy.logToReport(`Going to ${section} section`)
  cy.get("main").prev().find("a[href]").contains(section).click();
});

Cypress.Commands.add("logout", () => {
  cy.logToReport(`Logging out`)
  cy.contains("Logout").click();
});

Cypress.Commands.add("getCurrentUser", () => {
   cy.contains("Logout").parent().invoke('text').then((results: string) =>{
     return cy.wrap(results.replace('Logout',""))
   }

  )
})


Cypress.Commands.add("getPageTextContent", () => {
  return cy.get('main').invoke('text')
})


Cypress.Commands.add('logToReport', (message: string) => {
  cy.once('test:after:run', (test) => addContext({ test }, message));
  
});