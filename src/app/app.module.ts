import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './alert/success/success-alert/success-alert.component';
import { WarningAlertComponent } from './alert/warning/warning-alert.component';
import { UsernameComponent } from './username/username.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UsernameComponent,
    ServersComponent,
    ServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
