import HomePage from "./POM/HomePage";
import SearchBar from "./POM/SearchBar";
import PageContent from "./POM/PageContent";

describe('homepage test', () => {
  const homepage = new HomePage();
  const searchbar = new SearchBar();
  const pageContent = new PageContent();

  it('visit homepage and check URL', () => {
    homepage.goToHomePage();
    homepage.checkURL('shutupandtakemymoney')
  });

  it('check navigation bar', () => {
    homepage.goToHomePage();
    homepage.checkNavigationBar();
  })

  it('count content in homepage', () => {
    homepage.goToHomePage();
    pageContent.checkHomePageContents();
  })

  it('search for an item', () => {
    homepage.goToHomePage();
    searchbar.assertSearchBar();
    searchbar.searchItem('dog')
    homepage.checkURL('?s=dog')
    searchbar.assertSearchedPage('dog')
  })

  it('go to Star Wars page via navigation bar', () => {
    homepage.goToHomePage();
    homepage.checkNavigationBar();
    pageContent.openTab('Geeky', 'Star Wars')
    homepage.checkURL('geeky/star-wars')
  })

  it('go to Tech page via navigation bar', () => {
    homepage.goToHomePage();
    homepage.checkNavigationBar();
    pageContent.openTab('Tech', null)
    homepage.checkURL('category/tech')
  })
})