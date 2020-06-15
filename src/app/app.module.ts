import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LeafletComponent } from "./leaflet/leaflet.component";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [LeafletComponent, AppComponent],
  imports: [BrowserModule, HttpClientModule],
  entryComponents: [AppComponent, LeafletComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
