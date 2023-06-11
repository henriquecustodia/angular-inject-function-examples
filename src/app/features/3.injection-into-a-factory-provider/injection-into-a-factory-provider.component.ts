import { Component, InjectionToken, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

const companyNameToken = new InjectionToken('companyName', {
  factory: () => 'Code Dimension'
});

const greetingMessageToken = new InjectionToken('greetingMessage', {
  factory: () => {
     const companyName = inject(companyNameToken);

     return `Hello ${companyName}!`
  }
});

@Component({
  selector: 'app-injection-into-a-factory-provider',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: greetingMessageToken,
      useFactory: () => {
        const companyName = inject(companyNameToken);

        return `Wassup ${companyName}!`
      }
    }
  ],
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styles: [
  ]
})  
export default class InjectionIntoAFactoryProviderComponent {

  message = inject(greetingMessageToken);

}
