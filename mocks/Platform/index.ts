import { NgZone } from "@angular/core";
import { BackButtonEventDetail, Platforms } from "@ionic/core";
import { Subject, Subscription } from "rxjs";
import * as ɵngcc0 from "@angular/core";
import { Platform } from "@ionic/angular";

export interface BackButtonEmitter extends Subject<BackButtonEventDetail> {
  subscribeWithPriority(
    priority: number,
    callback: (processNextHandler: () => void) => Promise<any> | void
  ): Subscription;
}

export class PlatformMock extends Platform {
  ready(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (true) {
        resolve("Hola");
      } else {
        reject("error por que si ");
      }
    });
  }
}

//# sourceMappingURL=platform.d.ts.map
