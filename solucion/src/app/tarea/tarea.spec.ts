import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarea } from './tarea';

describe('Tarea', () => {
  let fixture: ComponentFixture<Tarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Tarea] }).compileComponents();
    fixture = TestBed.createComponent(Tarea);
    fixture.componentRef.setInput('texto', 'Probar el componente');
    await fixture.whenStable();
  });

  it('muestra el texto que recibe', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Probar el componente');
  });

  it('avisa al padre cuando se marca y cuando se elimina', () => {
    let alternado = 0;
    let eliminado = 0;
    fixture.componentInstance.alternar.subscribe(() => alternado++);
    fixture.componentInstance.eliminar.subscribe(() => eliminado++);

    const html = fixture.nativeElement as HTMLElement;
    (html.querySelector('input[type="checkbox"]') as HTMLInputElement).click();
    (html.querySelector('.borrar') as HTMLButtonElement).click();

    expect(alternado).toBe(1);
    expect(eliminado).toBe(1);
  });
});
