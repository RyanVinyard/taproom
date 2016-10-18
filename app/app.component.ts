import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Taproom</h1>
    <keg-list
    [childKegList]="masterKegList"
    (clickSender)="showDetails($event)"
    (clickSenderPour)="pourPint($event)"
    ></keg-list>
    <edit-keg
    [childSelectedKeg]="selectedKeg"
    (doneClickedSender)="finishedEditing"
    ></edit-keg>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
    <low-keg
      [childLowKeg]='lowKeg'
    ></low-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("Dead Guy", "Rogue Brewing", 4.25, 5.0),
    new Keg("Black Butte", "Deschutes", 4.50, 5.5),
    new Keg("Dawn of the Red", "Ninkasi", 4.0, 4.7),
    new Keg("Coors Light", "notbeer", 1.00, 1),
  ];
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
  //rebuild using pipes
  lowKeg: Keg[] = [];
  pourPint(keg) {
    if (keg.pints > 0) {
    keg.pints = keg.pints - 1;
    } else {
    alert("Tap empty")
    }
    if (keg.pints === 10) {
      this.lowKeg.push(keg);
      }
    }
  }
