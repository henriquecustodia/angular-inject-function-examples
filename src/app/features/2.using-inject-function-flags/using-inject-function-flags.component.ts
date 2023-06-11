import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

export class ThisIsNotRegistred { }

@Component({
  selector: 'app-using-inject-function-flags',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      using-inject-function-flags works!
    </p>
  `,
  styles: [
  ]
})
export default class UsingInjectFunctionFlagsComponent {

  //thisIsNotRegistred = inject(ThisIsNotRegistred); // NullInjectorError: No provider for ThisIsNotRegistred!

  thisIsNotRegistred = inject(ThisIsNotRegistred, { optional: true }); // NullInjectorError: No provider for ThisIsNotRegistred!
}
