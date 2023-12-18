import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ContainerComponent } from './componentes/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './componentes/card/card.component';
import { CardBuscaComponent } from './componentes/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimentosComponent } from './componentes/card-depoimentos/card-depoimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
