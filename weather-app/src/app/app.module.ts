import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ThemeModule } from './shared/theme/theme.module';
import { FormsModule } from '@angular/forms';
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

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './shared/store';
import { CityEffects } from './shared/store/effects/city.effects';
import { SearchEffects } from './shared/store/effects/search.effects';
import { environment } from '../environments/environment';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { WeatherInfoListComponent } from './components/weather-info/weather-info-list/weather-info-list.component';
import { WeatherInfoFullCardComponent } from './components/weather-info/weather-info-full-card/weather-info-full-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    FavoritesComponent,
    PreloaderComponent,
    AppSearchComponent,
    WeatherInfoComponent,
    WeatherInfoListComponent,
    WeatherInfoFullCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThemeModule.forRoot({
      themes: [BlueTheme, LightTheme],
      active: 'blue'
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CityEffects, SearchEffects]),
    ToastrModule.forRoot(),
    ToastContainerModule
  ],
  providers: [
    HttpService,
    MainApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
