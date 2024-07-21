import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { OrderComponent } from './order/order.component';
import { MenuComponent } from "./menu/menu.component";
import { LocationComponent } from "./location/location.component"
import { MainPageComponent } from "./main-page/main-page.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavbarComponent, OrderComponent, MenuComponent, LocationComponent, MainPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
