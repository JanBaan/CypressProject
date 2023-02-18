import HomePage from "./POM/HomePage";
import SearchBar from "./POM/SearchBar";

describe('homepage test', () => {
  const homepage = new HomePage();

  // it('visit homepage and check URL', () => {
  //   homepage.goToHomePage();
  //   homepage.checkURL('shutupandtakemymoney')
  // });

  // it('check navigation bar', () => {
  //   homepage.goToHomePage();
  //   homepage.checkNavigationBar();
  // })

  it('count content in homepage', () => {
    homepage.goToHomePage();
  })
})