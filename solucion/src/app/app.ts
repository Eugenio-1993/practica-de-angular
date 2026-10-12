import { Component, computed, signal } from '@angular/core';
import { Tarea } from './tarea/tarea';

// Así se ve una tarea: un número único, su texto y si ya está hecha
interface ItemTarea {
  id: number;
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-root',
  imports: [Tarea],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly titulo = 'Mis tareas';

  // La lista vive dentro de un signal: cuando cambia, la pantalla se actualiza sola
  protected readonly tareas = signal<ItemTarea[]>([
    { id: 1, texto: 'Aprender Angular', hecha: false },
    { id: 2, texto: 'Crear mi primera app', hecha: false },
  ]);

  // Un valor calculado a partir de otro signal
  protected readonly pendientes = computed(
    () => this.tareas().filter((t) => !t.hecha).length,
  );

  // Contador para darle un id único a cada tarea nueva
  private siguienteId = 3;

  protected agregar(texto: string): void {
    const limpio = texto.trim();
    if (limpio === '') {
      return; // no agregamos tareas vacías
    }
    this.tareas.update((lista) => [
      ...lista,
      { id: this.siguienteId++, texto: limpio, hecha: false },
    ]);
  }

  protected alternar(id: number): void {
    this.tareas.update((lista) =>
      lista.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)),
    );
  }

  protected eliminar(id: number): void {
    this.tareas.update((lista) => lista.filter((t) => t.id !== id));
  }
}
