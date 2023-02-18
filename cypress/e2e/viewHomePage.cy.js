import HomePage from "./POM/HomePage";

describe('homepage test', () => {
  const homepage = new HomePage();

  it('visit homepage', () => {
    homepage.goToHomePage();
    homepage.checkURL('shutupandtakemymoney')
  });

  
})