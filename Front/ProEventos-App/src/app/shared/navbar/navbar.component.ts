import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  MostrarNav() : boolean{
    return this.router.url != '/usuario/login' && this.router.url != '/usuario/cadastro'
  }


}
