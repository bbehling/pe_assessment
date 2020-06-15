import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LeafletComponent } from "./leaflet/leaflet.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { RequestInterceptorService } from "../app/request-interceptor.service";

@NgModule({
  declarations: [LeafletComponent, AppComponent],
  imports: [BrowserModule, HttpClientModule],
  entryComponents: [AppComponent, LeafletComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
})
export class AppModule {}
