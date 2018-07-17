import { Component } from '@angular/core';
import { StoresService } from './Services/stores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stores = [];
  public storesCopy;
  public toggle=false;
  public _tableHeadingNames: Array<string> = [];

  constructor( private _storesservice : StoresService) { }

  ngOnInit(){
    this.attachDataListener();
   }

   attachDataListener(){
    this._storesservice.getStores().subscribe(data =>{
      this.stores = data;
      this.storesCopy = data;
      this._tableHeadingNames = Object.keys(this.stores[0]);
      //stores is array not object
      //Object.keys returns array of key names of any object;
    });
   }
    sortBy(headingName){
      this.toggle=!this.toggle;
      if(this.toggle){
        this.stores.sort(function(a,b){
          if (a[headingName].toLowerCase()<b[headingName].toLowerCase())
          return -1;
          if (a[headingName].toLowerCase()>b[headingName].toLowerCase())
          return -1;
          return 0;
        });
      }
      else{
        this.stores=this.storesCopy;
      }
    }
      
}
