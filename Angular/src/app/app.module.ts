import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponet } from './componets/header/header.componet';
import { BodyComponet } from './componets/body/body.componet';
import { FooterComponent } from './componets/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    BodyComponet,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
