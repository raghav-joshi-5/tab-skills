import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabDashComponent } from './shared/component/tab-dash/tab-dash.component';
import { RefactedTabComponent } from './shared/component/refacted-tab/refacted-tab.component';

@NgModule({
  declarations: [AppComponent, TabDashComponent, RefactedTabComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
