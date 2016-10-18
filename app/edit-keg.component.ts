import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h1>Edit Keg Information</h1>
      <div>
        <label>Enter Keg Information:</label>
        <input [(ngModel)]="childSelectedKeg.name" placeholder="Name">
        <input [(ngModel)]="childSelectedKeg.brand" placeholder="Brand">
        <input [(ngModel)]="childSelectedKeg.price" placeholder="Price">
        <input [(ngModel)]="childSelectedKeg.alcohol" placeholder="Alcohol content">
        <button (click)="doneClicked()">Confirm</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
