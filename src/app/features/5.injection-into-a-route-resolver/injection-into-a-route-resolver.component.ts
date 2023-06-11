import { Component, inject } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

function getMessageData() {
  return inject(ActivatedRoute).data.pipe(map((data) => data["message"]));
}

@Component({
  selector: "app-injection-into-a-route-resolver",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <p>injection-into-a-route-resolver works!</p>
    <p>
      <strong>{{ message$ | async }} </strong>
    </p>
  `,
  styles: [],
})
export default class InjectionIntoARouteResolverComponent {
  message$ = getMessageData();
}
