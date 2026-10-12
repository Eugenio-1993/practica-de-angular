import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App (lista de tareas)', () => {
  let fixture: ComponentFixture<App>;
  let html: HTMLElement;

  const filas = () => html.querySelectorAll('app-tarea');
  const contador = () => html.querySelector('.contador')?.textContent ?? '';

  async function escribirYAgregar(texto: string) {
    const entrada = html.querySelector('input[type="text"]') as HTMLInputElement;
    entrada.value = texto;
    (html.querySelector('.agregar') as HTMLButtonElement).click();
    await fixture.whenStable();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    html = fixture.nativeElement as HTMLElement;
  });

  it('muestra el título y las dos tareas iniciales', () => {
    expect(html.querySelector('h1')?.textContent).toContain('Mis tareas');
    expect(filas().length).toBe(2);
    expect(contador()).toContain('2');
  });

  it('agrega una tarea nueva y limpia el campo', async () => {
    await escribirYAgregar('Practicar signals');
    expect(filas().length).toBe(3);
    expect(html.textContent).toContain('Practicar signals');
    expect((html.querySelector('input[type="text"]') as HTMLInputElement).value).toBe('');
    expect(contador()).toContain('3');
  });

  it('no agrega tareas vacías', async () => {
    await escribirYAgregar('   ');
    expect(filas().length).toBe(2);
  });

  it('marca una tarea como hecha y baja el contador', async () => {
    const casilla = html.querySelector('input[type="checkbox"]') as HTMLInputElement;
    casilla.click();
    await fixture.whenStable();
    expect(html.querySelector('.hecha')).not.toBeNull();
    expect(contador()).toContain('1');
  });

  it('elimina tareas y muestra el mensaje de lista vacía', async () => {
    for (let i = 0; i < 2; i++) {
      (html.querySelector('.borrar') as HTMLButtonElement).click();
      await fixture.whenStable();
    }
    expect(filas().length).toBe(0);
    expect(html.querySelector('.vacio')).not.toBeNull();
  });
});
