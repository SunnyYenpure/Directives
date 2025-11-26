import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cssHighLighterdirective, } from './shared/directives/cssHighLighterdirective';
import { RendrercssHighDirective, RendrercssHighDirective3, RendrercssHighDirective4, RendrercssHighDirective5, RendrercssHighDirective6,  } from './shared/directives/rendrercss-high.directive';
import { RendrercssHighDirective2 } from './shared/directives/rendrercss-high.directive';
import { ToLowercaseDirective } from './shared/directives/to-lowercase.directive';
// import { Csshighlighter2Directive } from './shared/directives/csshighlighter2.directive';


@NgModule({
  declarations: [
    AppComponent,
    cssHighLighterdirective,
    RendrercssHighDirective,
    RendrercssHighDirective2,
    RendrercssHighDirective3,
    RendrercssHighDirective4,
    RendrercssHighDirective5,
    RendrercssHighDirective6,
    ToLowercaseDirective
    // RendrercssHighDirective3
    // Csshighlighter2Directive,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
