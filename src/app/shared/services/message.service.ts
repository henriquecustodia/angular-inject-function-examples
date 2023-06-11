import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  getMessage() {
    return of("I am a message from the remote server");
  }
}
