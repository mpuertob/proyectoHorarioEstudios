import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
import { SQLite } from "@ionic-native/sqlite/ngx";
import { CopiaNativoService } from "./share/copia-nativo.service";
import { DatosService } from "./share/datos.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatosService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SqliteDbCopy,
    CopiaNativoService,
    SQLite,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
