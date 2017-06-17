import { NHanceWebAngular2Page } from './app.po';

describe('nhance-web-angular2 App', () => {
  let page: NHanceWebAngular2Page;

  beforeEach(() => {
    page = new NHanceWebAngular2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
