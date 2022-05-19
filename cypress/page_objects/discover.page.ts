
class DiscoverPage {

searchInput(){
    return cy.get('#search')
}   

addBook(name: string){
    this.searchBook(name)
    cy.logToReport(`Adding book ${name} to reading list`)
    cy.getBookItemByName(name).find('[aria-label="Add to list"]').click()
    cy.waitForLoadingToFisnish()

}

searchBook(name: string){
    cy.logToReport(`Searching for book ${name}`)
    this.searchInput().type(name)
    this.searchInput().parents('form').submit()
    cy.waitForLoadingToFisnish()
}
}
export default new DiscoverPage();
