import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MeanContactlistAngular2AppComponent } from '../app/mean-contactlist-angular2.component';

beforeEachProviders(() => [MeanContactlistAngular2AppComponent]);

describe('App: MeanContactlistAngular2', () => {
  it('should create the app',
      inject([MeanContactlistAngular2AppComponent], (app: MeanContactlistAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mean-contactlist-angular2 works!\'',
      inject([MeanContactlistAngular2AppComponent], (app: MeanContactlistAngular2AppComponent) => {
    expect(app.title).toEqual('mean-contactlist-angular2 works!');
  }));
});
