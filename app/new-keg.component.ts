import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <label>Enter Keg Information:</label>
    <input #newName placeholder="Name">
    <input #newBrand placeholder="Brand">
    <input #newPrice type="number" placeholder="Price">
    <input #newAlcohol type="number" placeholder="Alcohol content">
    <button (click)="addClicked(newName.value, newBrand.value, newPrice.value, newAlcohol.value);
    newName.value='';
    newBrand.value='';
    newPrice.value='';
    newAlcohol.value='';
    ">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcohol: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcohol);
    this.newKegSender.emit(newKegToAdd);
  }
}
