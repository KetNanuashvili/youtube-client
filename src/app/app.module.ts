import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { FilterComponent } from './youtube/components/filter/filter.component';
import { SearchResultComponent } from './youtube/components/search-result/search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { MainServiceService } from './youtube/services/main-service.service';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SearchResultComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PanelModule,
    HttpClientModule
  ],
  providers: [MainServiceService, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
