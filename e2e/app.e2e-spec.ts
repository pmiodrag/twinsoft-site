import { TwinsoftAngular2Page } from './app.po';

describe('twinsoft-angular2 App', function() {
  let page: TwinsoftAngular2Page;

  beforeEach(() => {
    page = new TwinsoftAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
