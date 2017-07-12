import { ProfilePage } from './app.po';

describe('profile App', function() {
  let page: ProfilePage;

  beforeEach(() => {
    page = new ProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
