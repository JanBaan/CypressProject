class HomePage
{
    goToHomePage()
    {
        cy.visit('https://shutupandtakemymoney.com/')
        cy.url()
    }

    checkTabs()
    {

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