import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[] = [
    { nombre: 'Karen Aguirre', estado: 'Promocionado' },
    { nombre: 'Lukas Contreras', estado: 'Regular' },
    { nombre: 'Patricia Moles', estado: 'Libre' },
    { nombre: 'Linda Guzman', estado: 'Regular' },
    { nombre: 'Delia Laguatasig', estado: 'Promocionado' },
    { nombre: 'Delia Laguatasig', estado: 'Libre' }
  ]
  mostrar = true;

  toogle(): void{
    this.mostrar =! this.mostrar
  }
}
