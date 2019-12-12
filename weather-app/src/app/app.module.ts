import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from './shared/theme/theme.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { LightTheme } from './shared/theme/light-theme';
import { BlueTheme } from './shared/theme/dark-theme';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { MainApiService } from './services/main-api.service';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    FavoritesComponent,
    PreloaderComponent,
    AppSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThemeModule.forRoot({
      themes: [BlueTheme, LightTheme],
      active: 'light'
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [
    HttpService,
    MainApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
