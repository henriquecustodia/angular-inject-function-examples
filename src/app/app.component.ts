import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
      <ul>
        <li>
          <a [routerLink]="['/simple-injection']">Simple Injection</a>
        </li>
        <li>
          <a [routerLink]="['/using-inject-function-flags']">Using the injection function flags</a>
        </li>
        <li>
          <a [routerLink]="['/injection-into-a-factory-provider']">Injection into a factory provider</a>
        </li>
        <li>
          <a [routerLink]="['/injection-into-a-route-guard']">Injection into a route guard</a>
        </li>
        <li>
          <a [routerLink]="['/injection-into-a-route-resolver']">Injection into a route resolver</a>
        </li>
      </ul>

    <div class="container">
      <router-outlet>
       <strong>I'm the router outlet</strong> 
      </router-outlet>
    </div>
  `,
  styles: [
    `
      .container {
        border: blue dashed 1px;
        padding: 18px;
      }
    
    `
  ],
})
export class AppComponent {
  title = 'angular-inject-function-example';
}
