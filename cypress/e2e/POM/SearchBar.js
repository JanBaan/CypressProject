class SearchBar
{
    assertSearchBar()
    {
        cy.get('[class="elementor-search-form__container"]').should('be.visible').as('searchBar')

        cy.get('@searchBar').find('input').should('be.visible')
        cy.get('@searchBar').find('input').should('have.attr', 'name')
        cy.get('@searchBar').find('input').should('have.attr', 'title')
        cy.get('@searchBar').find('input').should('have.attr', 'value')

        cy.get('@searchBar').find('button').should('be.visible')
        cy.get('@searchBar').find('button').should('have.attr', 'title')
        cy.get('@searchBar').find('button').should('have.attr', 'aria-label')
    }

    searchItem(item)
    {
        cy.wait(1000)
        
        cy.get('[class="elementor-search-form__container"] > input').first().type(item)
        cy.get('[class="elementor-search-form__container"] > button').first().click()
    }

    assertSearchedPage(item)
    {
        cy.get('[class="elementor-widget-container"]').children(1).as('search-page-header')
        cy.get('@search-page-header').should('be.visible').contains('Search Results for: ' + item)
    }
}

export default SearchBar