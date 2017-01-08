import { ComponentRoutingPage } from './app.po';

describe('component-routing App', function() {
  let page: ComponentRoutingPage;

  beforeEach(() => {
    page = new ComponentRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
