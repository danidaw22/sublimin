import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  mostrar = false;
  mostrarHome = false;

  ngOnInit() {
    this.router.events.subscribe( result => {
      if(result instanceof NavigationEnd){
        let str = result.url
        let panel = str.split('/')
        console.log(panel[1])
        if(panel[1] == 'search'){
          this.mostrar = true
        } else {
          this.mostrar = false
        }
        if(panel[1] == ''){
          this.mostrarHome = true
        } else {
          this.mostrarHome = false
        }
      }
    })
  }

}
