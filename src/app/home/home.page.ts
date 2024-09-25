import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  declare nombre:string;
  declare password: string;
  

  constructor() {}

  onSubmit() {
    console.log('Formulario enviado!');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.password);
  }
}
