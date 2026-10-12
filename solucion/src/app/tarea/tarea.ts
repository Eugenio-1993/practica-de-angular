import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  // Datos que le llegan desde el padre (App)
  readonly texto = input.required<string>();
  readonly hecha = input(false);

  // Avisos que este componente le manda al padre
  readonly alternar = output<void>();
  readonly eliminar = output<void>();
}
