import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderComponent } from "./main-content/order/order.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { MainPageComponent } from './main-content/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderComponent, FooterComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';


}
