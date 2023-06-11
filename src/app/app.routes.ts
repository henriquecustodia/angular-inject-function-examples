import { Routes } from "@angular/router";

import { Injectable, inject } from "@angular/core";
import { IsLoggedInService } from "./shared/services/is-logged-in.service";
import { MessageService } from "./shared/services/message.service";

const isLoggedInGuard = () => {
  const isLoggedInService = inject(IsLoggedInService);

  return isLoggedInService.isLoggedIn;
};

const messageResolver = () => {
  const messageService = inject(MessageService);

  return messageService.getMessage();
};

export const routes: Routes = [
  {
    path: "simple-injection",
    loadComponent: () =>
      import("./features/1.simple-injection/simple-injection.component"),
  },
  {
    path: "using-inject-function-flags",
    loadComponent: () =>
      import(
        "./features/2.using-inject-function-flags/using-inject-function-flags.component"
      ),
  },
  {
    path: "injection-into-a-factory-provider",
    loadComponent: () =>
      import(
        "./features/3.injection-into-a-factory-provider/injection-into-a-factory-provider.component"
      ),
  },
  {
    path: "injection-into-a-route-guard",
    loadComponent: () =>
      import(
        "./features/4.injection-into-a-route-guard/injection-into-a-route-guard.component"
      ),
    canActivate: [isLoggedInGuard],
  },
  {
    path: "injection-into-a-route-resolver",
    loadComponent: () =>
      import(
        "./features/5.injection-into-a-route-resolver/injection-into-a-route-resolver.component"
      ),
    resolve: {
      message: messageResolver
    },
  },
];
