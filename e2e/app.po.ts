export class MeanContactlistAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mean-contactlist-angular2-app h1')).getText();
  }
}
