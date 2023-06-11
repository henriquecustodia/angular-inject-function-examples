import { Component, InjectionToken, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

const greetingMessageToken = new InjectionToken<string>('greetingMessage', {
  factory() {
      return 'Hello';
  },
});

@Component({
  selector: 'app-simple-injection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{ completeMessage }}
    </p>
  `,
  styles: [
  ]
})
export default class SimpleInjectionComponent {

  greetingMessage = inject(greetingMessageToken);

  completeMessage = `${this.greetingMessage} Henrique!`

}
