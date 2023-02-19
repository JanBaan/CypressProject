class HomePage
{
    goToHomePage()
    {
        cy.visit('https://shutupandtakemymoney.com/')
    }

    checkNavigationBar()
    {
        cy.get('.elementor-nav-menu').eq(0).as('navBar')
        cy.get('@navBar').should('be.visible')
        cy.get('@navBar').children().should('have.length', 11);
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

    checkURL(urlData)
    {
        cy.url().should('include', urlData);
    }
}

export default HomePage