
class ReadingListPage  {
  getReadingListBooks() {
    cy.logToReport(`Getting reading books list  `)
    let books = [];
    cy.getBooks().each((element) => {
      books.push(element.text());
    });
    return cy.wrap(books);
  }
}
export default new ReadingListPage();
