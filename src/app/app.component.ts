import { Component } from '@angular/core';
import { StoresService } from './Services/stores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stores = [];

  constructor( private _storesservice : StoresService) { }

  ngOnInit(){
    this._storesservice.getStores()
        .subscribe(data => this.stores = data)
  }
}
