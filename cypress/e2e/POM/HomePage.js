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

    }

    checkURL(urlData)
    {
        cy.url().should('include', urlData);
    }
}

export default HomePage