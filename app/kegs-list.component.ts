import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let currentKeg of childKegList">
      <h3>{{ currentKeg.name }}</h3>
      <h3>{{ currentKeg.brand }}</h3>
      <h3>{{ currentKeg.alcohol }}</h3>
      <h3>{{ currentKeg.price }}</h3>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
    </div>
        `
})

export class KegsListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}