import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInput, MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FilmeFormComponent } from './views/filme-form/filme-form.component';
import { CinemaFormComponent } from './views/cinema-form/cinema-form.component';
import { SessaoFormComponent } from './views/sessao-form/sessao-form.component';
import { SalaFormComponent } from './views/sala-form/sala-form.component';
import { FilmeListComponent } from './views/filme-list/filme-list.component';



function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://lemur-4.cloud-iam.com/auth',
        realm: 'jnc-cinemas',
        clientId: 'jnc-cinemas-front',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeFormComponent,
    CinemaFormComponent,
    SessaoFormComponent,
    SalaFormComponent,
    FilmeListComponent,
  ],
  imports: [
    MatMenuModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    KeycloakAngularModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
