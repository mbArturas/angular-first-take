import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import {RouterModule} from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { StarComponent } from './components/star/star.component';
import { ConverttospacePipe } from './pipes/converttospace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductslistComponent,
    ProductComponent,
    StarComponent,
    ConverttospacePipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductslistComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
