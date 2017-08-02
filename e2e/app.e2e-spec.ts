import { GreentubeTaskPage } from './app.po';

describe('greentube-task App', () => {
  let page: GreentubeTaskPage;

  beforeEach(() => {
    page = new GreentubeTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
