import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DatosMockService } from "./share/datos-mock.service";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
import { SqliteDbCopyMock } from "mocks/SQLiteDBCopy";
import { PlatformMock } from "mocks/Platform";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { SQLiteMock, SQliteMockObject } from "mocks/SQLite";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatosMockService,
    { provide: SQLite, useClass: SQLiteMock },
    { provide: SQLiteObject, useClass: SQliteMockObject },
    { provide: SqliteDbCopy, useClass: SqliteDbCopyMock },
    { provide: Platform, useClass: PlatformMock },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
