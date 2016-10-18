import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'low-keg',
  template: `
    <div *ngIf="childLowKeg">
      <div *ngFor="let currentKeg of childLowKeg">
        <h3>{{ currentKeg.name }} has only {{ currentKeg.pints }} left. Replace soon!</h3>
      </div>
    </div>
  `
})

export class LowKegsComponent {
  @Input() childLowKeg: Keg[];
}
