import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { MainComponent } from './layout/main/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ButtonComponent } from './ui/button/button.component';
import { PizzaMenuComponent } from './components/pizza-menu/pizza-menu.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { MenuItemComponent } from './components/pizza-menu/menu-item/menu-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './ui/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    HeroComponent,
    ButtonComponent,
    PizzaMenuComponent,
    DeliveryComponent,
    MenuItemComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
