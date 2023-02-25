class PageContent
{
    openTab(tab, dropdownItem)
    {
        if(dropdownItem != null)
        {
            cy.get('.elementor-nav-menu > li').contains(tab).should('be.visible')
            cy.get('.elementor-sub-item').contains(dropdownItem).click({force: true})
        }
        else
        {
            cy.get('.elementor-nav-menu > li').contains(tab).click();
        }
    }

    checkHomePageContents()
    {
        cy.get('[data-elementor-type="single-page"]').should('be.visible')

        cy.get('[data-elementor-type="single-page"]')
          .children()
          .find('h2')
          .should('be.visible')
          .as('single-page-header')

        cy.get('@single-page-header').contains('What\'s New')
        cy.get('@single-page-header').contains('Shop Valentine\'s')
        cy.get('@single-page-header').contains('Shop Geek')
        cy.get('@single-page-header').contains('Gifts for your pets')
        cy.get('@single-page-header').contains('Memes')
    }
}

export default PageContent