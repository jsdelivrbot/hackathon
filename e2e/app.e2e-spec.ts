import { ProjhackathonPage } from './app.po';

describe('projhackathon App', () => {
  let page: ProjhackathonPage;

  beforeEach(() => {
    page = new ProjhackathonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
