import { CoffeehackPage } from './app.po';

describe('coffeehack App', function() {
  let page: CoffeehackPage;

  beforeEach(() => {
    page = new CoffeehackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
