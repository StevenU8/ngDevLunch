import { NgDevLunchPage } from './app.po';

describe('ng-dev-lunch App', () => {
  let page: NgDevLunchPage;

  beforeEach(() => {
    page = new NgDevLunchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
