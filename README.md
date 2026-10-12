# 🅰️ Angular desde cero: tu primera app real

> **Reto:** construir una **lista de tareas** (agregar, marcar como hecha, eliminar y contar pendientes) usando Angular.
> No necesitas saber Angular. Sí ayuda saber un poquito de **HTML, CSS y JavaScript**.

---

## 📦 Qué trae este ZIP

```
angular-desde-cero/
├── README.md      ← esta guía (tu mapa paso a paso)
└── solucion/      ← el proyecto terminado, por si quieres comparar o te trabas
```

Tú vas a **crear tu propio proyecto desde cero** siguiendo la guía. La carpeta `solucion/` es solo para consultar.

---

## 🎯 Qué vas a construir

Una app con:

- ✅ Un título y un contador de tareas pendientes.
- ✅ Un campo de texto para escribir una tarea nueva (con el botón **Agregar** o la tecla **Enter**).
- ✅ Una lista donde cada tarea se puede **marcar como hecha** (se tacha) o **eliminar**.
- ✅ Un mensaje cuando no hay tareas.
- ✅ Un **componente propio** (`Tarea`) y un diseño oscuro y minimalista.

### Lo que vas a aprender (en este orden)

| # | Concepto | Para qué sirve |
|---|----------|----------------|
| 1 | **Angular CLI** (`ng`) | Crear y ejecutar proyectos con comandos |
| 2 | **Componente** | La pieza básica de Angular: lógica + HTML + CSS |
| 3 | **Interpolación** `{{ }}` | Mostrar datos en pantalla |
| 4 | **Signals** (`signal`) | Guardar datos que, al cambiar, actualizan la pantalla solos |
| 5 | **`@for`** | Repetir elementos (una fila por tarea) |
| 6 | **Eventos** `(click)` | Reaccionar a lo que hace la persona |
| 7 | **Bindings** `[checked]`, `[class.hecha]` | Conectar propiedades y clases con tus datos |
| 8 | **`computed`** | Valores que se calculan solos a partir de otros |
| 9 | **`@if` / `@else`** | Mostrar u ocultar partes de la pantalla |
| 10 | **`input()` y `output()`** | Comunicar un componente padre con uno hijo |
| 11 | **Estilos con ámbito** | CSS que solo afecta a su propio componente |

---

## 🧭 Cómo usar esta guía

- Cada paso tiene: **qué hacemos**, **qué escribir**, **la explicación** y una **comprobación ✅** para saber que salió bien.
- Cada paso termina con la app **funcionando**. Puedes parar donde quieras y retomar otro día sin perder nada.
- Duración orientativa: **entre 1 y 2 horas** en total, según cuánto te detengas a leer y probar. No hay prisa: entender es más importante que terminar.
- Cuando te pida "reemplaza todo el contenido", significa: borra lo que hay en el archivo y pega lo nuevo.
- Las líneas marcadas con `👈 NUEVO` son las que se añadieron en ese paso.
- Si algo falla, ve a la sección **🆘 Si algo falla** al final.

> **Versión probada:** Angular 21 con Node.js 22. Esta guía usa funciones estables de Angular, así que debería funcionar igual con versiones más nuevas. Si algo no coincide, compara con `solucion/`.

---

## Paso 0 — Preparar tu computador

**Qué necesitas instalar (una sola vez):**

1. **Node.js** (versión LTS, la más reciente): <https://nodejs.org>
   Node permite ejecutar JavaScript fuera del navegador y trae **npm**, el "instalador de paquetes" que usa Angular.
2. **Visual Studio Code** (el editor): <https://code.visualstudio.com>
3. **Angular CLI**, la herramienta de comandos de Angular.

**Haz esto:** abre una terminal (en Windows: *PowerShell*; en Mac/Linux: *Terminal*) y escribe, línea por línea:

```bash
node -v
npm -v
npm install -g @angular/cli
ng version
```

**Qué hace cada una:**

- `node -v` y `npm -v` muestran las versiones instaladas (si salen números, está bien).
- `npm install -g @angular/cli` instala la herramienta `ng` en todo tu computador (`-g` = global).
- `ng version` confirma que Angular CLI quedó instalado.

✅ **Comprobación:** `ng version` muestra un cuadro con "Angular CLI" y un número de versión.

> 💡 Si dice que tu versión de Node es muy vieja, instala la versión LTS más reciente desde nodejs.org y vuelve a abrir la terminal.

---

## Paso 1 — Crear el proyecto

**Qué hacemos:** pedirle a Angular que genere un proyecto nuevo con todo lo básico.

**Haz esto:** en la terminal, ve a la carpeta donde quieras guardar tus proyectos y ejecuta:

```bash
ng new reto-tareas --style=css --ssr=false --skip-git --defaults
cd reto-tareas
code .
```

**Qué significa:**

| Parte | Significado |
|-------|-------------|
| `ng new reto-tareas` | Crea un proyecto llamado `reto-tareas` (se crea una carpeta con ese nombre) |
| `--style=css` | Usaremos CSS normal para los estilos |
| `--ssr=false` | No activamos renderizado en servidor (es algo avanzado que no necesitamos) |
| `--skip-git` | No crea un repositorio Git (puedes hacerlo luego) |
| `--defaults` | No te hace preguntas: usa las opciones por defecto |
| `cd reto-tareas` | Entra a la carpeta del proyecto |
| `code .` | Abre esa carpeta en VS Code (si no funciona, abre VS Code y usa *Archivo → Abrir carpeta*) |

Tarda uno o dos minutos porque descarga muchas librerías (se guardan en la carpeta `node_modules`; **nunca la edites**).

> 💡 Si Angular igual te hace preguntas, elige: **CSS**, **No** a SSR/SSG, y **ninguna** herramienta de IA.

✅ **Comprobación:** ves la carpeta `reto-tareas` con archivos como `package.json`, `angular.json` y una carpeta `src`.

---

## Paso 2 — Arrancar la aplicación

**Qué hacemos:** ejecutar el servidor de desarrollo para ver la app en el navegador.

**Haz esto:** dentro de VS Code abre una terminal (*Terminal → Nueva terminal*) y escribe:

```bash
ng serve
```

Espera a que diga algo como `Local: http://localhost:4200/` y abre esa dirección en tu navegador.

**Qué pasa aquí:**

- `ng serve` levanta un servidor **en tu propio computador**.
- Cada vez que **guardes un archivo** (Ctrl + S), la página se recarga sola con tus cambios.
- **Déjalo corriendo** mientras trabajas. Para detenerlo: `Ctrl + C` en esa terminal.
- Para escribir otros comandos mientras tanto, abre una **segunda terminal** con el botón `+`.

✅ **Comprobación:** ves la página de bienvenida de Angular en `http://localhost:4200`.

---

## Paso 3 — Conocer los archivos (sin escribir código todavía)

Abre la carpeta `src`. Lo importante:

| Archivo | Qué es |
|---------|--------|
| `src/index.html` | La **única página HTML** de la app. Dentro tiene la etiqueta `<app-root>` |
| `src/main.ts` | El punto de arranque: le dice a Angular "empieza con el componente `App`" |
| `src/styles.css` | Estilos **globales** (afectan a toda la app) |
| `src/app/app.ts` | El **componente raíz**: aquí vive la lógica (TypeScript) |
| `src/app/app.html` | La **plantilla** del componente: lo que se ve en pantalla |
| `src/app/app.css` | Estilos **solo de este componente** |
| `src/app/app.config.ts` y `app.routes.ts` | Configuración general y rutas (no los usaremos) |

### La idea más importante de Angular: el componente

Un **componente** es una pieza de la pantalla. Se compone de **tres partes**:

```
 app.ts     →  el cerebro   (datos y funciones, en TypeScript)
 app.html   →  la cara      (lo que se ve)
 app.css    →  el estilo    (cómo se ve)
```

> **TypeScript** es JavaScript con "tipos": además de decir `let x = 5`, puedes indicar que `x` es un `number`. Te avisa de errores *antes* de ejecutar.

Abre `src/app/app.ts` y mira la parte de arriba:

```ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
```

- `@Component({...})` es un **decorador**: una etiqueta que le dice a Angular "esta clase es un componente" y le da su configuración.
- `selector: 'app-root'` es el **nombre de la etiqueta HTML** del componente. Por eso `index.html` tiene `<app-root>`.
- `imports: [...]` es la lista de **otras piezas** que la plantilla puede usar.
- `templateUrl` y `styleUrl` apuntan a su HTML y a su CSS.

✅ **Comprobación:** puedes señalar cuál archivo es el "cerebro", cuál la "cara" y cuál el "estilo".

---

## Paso 4 — Tu primera pantalla: mostrar un dato

**Qué hacemos:** limpiar la página de ejemplo y mostrar nuestro propio título usando una variable.

📄 **`src/app/app.ts`** — reemplaza TODO el contenido por:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly titulo = 'Mis tareas'; // 👈 NUEVO
}
```

📄 **`src/app/app.html`** — reemplaza TODO el contenido por:

```html
<main class="contenedor">
  <h1>{{ titulo }}</h1>
</main>
```

📄 **`src/index.html`** — reemplaza TODO el contenido por (solo cambia el idioma y el título de la pestaña):

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Mis tareas</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

**Qué aprendimos:**

- Quitamos `RouterOutlet` de `imports` porque ya no lo usamos (si lo dejas, Angular avisa que está de sobra).
- `protected readonly titulo = 'Mis tareas'` crea un dato dentro de la clase:
  - `protected` = la plantilla lo puede usar, pero no se toca desde fuera.
  - `readonly` = no se le puede asignar otro valor después.
- **`{{ titulo }}`** se llama **interpolación**: Angular reemplaza las llaves por el valor de `titulo`.
- Las clases como `class="contenedor"` no hacen nada todavía; las usaremos al final para el diseño.

**Pruébalo:** cambia `'Mis tareas'` por tu nombre, guarda y mira el navegador cambiar solo. Luego devuélvelo.

✅ **Comprobación:** el navegador muestra el texto **Mis tareas** (con la letra del navegador, sin diseño todavía) y la pestaña dice "Mis tareas".

---

## Paso 5 — Datos con *signals* y repetir con `@for`

**Qué hacemos:** crear una lista de tareas y mostrar una línea por cada una.

📄 **`src/app/app.ts`** — reemplaza TODO el contenido por:

```ts
import { Component, signal } from '@angular/core';

// Así se ve una tarea: un número único, su texto y si ya está hecha
interface ItemTarea { // 👈 NUEVO
  id: number;
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly titulo = 'Mis tareas';

  // La lista vive dentro de un signal: cuando cambia, la pantalla se actualiza sola
  protected readonly tareas = signal<ItemTarea[]>([ // 👈 NUEVO
    { id: 1, texto: 'Aprender Angular', hecha: false },
    { id: 2, texto: 'Crear mi primera app', hecha: false },
  ]);
}
```

📄 **`src/app/app.html`** — reemplaza TODO el contenido por:

```html
<main class="contenedor">
  <h1>{{ titulo }}</h1>

  <ul class="lista"> <!-- 👈 NUEVO -->
    @for (t of tareas(); track t.id) {
      <li>{{ t.texto }}</li>
    }
  </ul>
</main>
```

**Qué aprendimos:**

- **`interface`**: un "molde" de TypeScript. Dice que toda tarea tiene `id` (número), `texto` (texto) y `hecha` (verdadero/falso).
- **`signal`**: una "caja" que guarda un valor y **avisa a Angular cada vez que cambia**, para que actualice la pantalla. Es la forma moderna de guardar datos que cambian.
  - `signal<ItemTarea[]>([...])` significa "un signal que guarda una lista de `ItemTarea`".
  - Para **leer** un signal lo escribes **con paréntesis**: `tareas()`. Es lo más fácil de olvidar.
- **`@for (t of tareas(); track t.id) { ... }`** repite lo de adentro **una vez por cada elemento**:
  - `t` es la tarea actual en cada vuelta.
  - `track t.id` le dice a Angular cómo identificar cada tarea; así, cuando algo cambie, solo toca la fila necesaria. Es obligatorio.

✅ **Comprobación:** ves dos líneas: *Aprender Angular* y *Crear mi primera app* (con viñetas).

**Pruébalo:** agrega una tercera tarea a la lista en `app.ts`, guarda, y mira cómo aparece.

---

## Paso 6 — Agregar tareas (eventos)

**Qué hacemos:** un campo de texto y un botón para añadir tareas nuevas.

📄 **`src/app/app.ts`** — reemplaza TODO el contenido por:

```ts
import { Component, signal } from '@angular/core';

// Así se ve una tarea: un número único, su texto y si ya está hecha
interface ItemTarea {
  id: number;
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
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

  // Contador para darle un id único a cada tarea nueva
  private siguienteId = 3; // 👈 NUEVO

  protected agregar(texto: string): void { // 👈 NUEVO
    const limpio = texto.trim();
    if (limpio === '') {
      return; // no agregamos tareas vacías
    }
    this.tareas.update((lista) => [
      ...lista,
      { id: this.siguienteId++, texto: limpio, hecha: false },
    ]);
  }
}
```

📄 **`src/app/app.html`** — reemplaza TODO el contenido por:

```html
<main class="contenedor">
  <h1>{{ titulo }}</h1>

  <div class="nueva"> <!-- 👈 NUEVO (todo este bloque) -->
    <input
      #entrada
      type="text"
      placeholder="¿Qué tienes que hacer?"
      (keyup.enter)="agregar(entrada.value); entrada.value = ''"
    />
    <button type="button" class="agregar" (click)="agregar(entrada.value); entrada.value = ''">
      Agregar
    </button>
  </div>

  <ul class="lista">
    @for (t of tareas(); track t.id) {
      <li>{{ t.texto }}</li>
    }
  </ul>
</main>
```

**Qué aprendimos:**

- **`#entrada`** le pone un nombre al `<input>` dentro de la plantilla (se llama *variable de plantilla*). Gracias a eso, en cualquier parte del HTML puedes escribir `entrada.value` para leer lo que la persona escribió.
- **`(click)="..."`** es un **evento**: lo que está entre comillas se ejecuta cuando la persona hace clic. Los paréntesis `( )` significan "escucha este evento".
- **`(keyup.enter)="..."`** es lo mismo, pero solo cuando se suelta la tecla **Enter**.
- Entre comillas hay **dos instrucciones** separadas por `;`:
  1. `agregar(entrada.value)` llama a la función que acabamos de crear.
  2. `entrada.value = ''` vacía el campo de texto.
- En `agregar`:
  - `texto.trim()` quita los espacios de los lados (para no aceptar "   ").
  - `this.tareas.update(...)` **cambia el valor del signal**. Recibe la lista actual (`lista`) y devuelve la lista nueva.
  - `[...lista, nuevaTarea]` crea una **copia nueva** de la lista con la tarea añadida al final. Con signals **no se modifica la lista vieja** (nada de `push`): siempre se entrega una nueva. Así Angular se da cuenta del cambio.
  - `this.siguienteId++` entrega el número actual y luego le suma 1, para que cada tarea tenga un `id` distinto.
  - `void` significa "esta función no devuelve nada".

✅ **Comprobación:** escribe "Probar Angular", pulsa **Agregar** (o Enter): aparece abajo y el campo se vacía. Si lo dejas vacío, no pasa nada.

---

## Paso 7 — Marcar tareas como hechas (bindings)

**Qué hacemos:** una casilla en cada tarea; al marcarla, el texto se tacha.

📄 **`src/app/app.ts`** — reemplaza TODO el contenido por:

```ts
import { Component, signal } from '@angular/core';

// Así se ve una tarea: un número único, su texto y si ya está hecha
interface ItemTarea {
  id: number;
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
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

  protected alternar(id: number): void { // 👈 NUEVO
    this.tareas.update((lista) =>
      lista.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)),
    );
  }
}
```

📄 **`src/app/app.html`** — reemplaza TODO el contenido por:

```html
<main class="contenedor">
  <h1>{{ titulo }}</h1>

  <div class="nueva">
    <input
      #entrada
      type="text"
      placeholder="¿Qué tienes que hacer?"
      (keyup.enter)="agregar(entrada.value); entrada.value = ''"
    />
    <button type="button" class="agregar" (click)="agregar(entrada.value); entrada.value = ''">
      Agregar
    </button>
  </div>

  <ul class="lista">
    @for (t of tareas(); track t.id) {
      <li>
        <label> <!-- 👈 NUEVO (todo el contenido del <li>) -->
          <input type="checkbox" [checked]="t.hecha" (change)="alternar(t.id)" />
          <span [class.hecha]="t.hecha">{{ t.texto }}</span>
        </label>
      </li>
    }
  </ul>
</main>
```

📄 **`src/app/app.css`** — está vacío; pega esto:

```css
.hecha {
  text-decoration: line-through;
  color: #8a8a8f;
}
```

**Qué aprendimos:**

- **`[checked]="t.hecha"`** es un **property binding**: los corchetes `[ ]` significan "conecta esta propiedad con este dato". Si `t.hecha` es `true`, la casilla aparece marcada.
- **`(change)="alternar(t.id)"`** es otro evento: se dispara cuando la persona marca o desmarca la casilla.
- **`[class.hecha]="t.hecha"`** es un **class binding**: agrega la clase CSS `hecha` **solo cuando** `t.hecha` es `true`. Por eso el texto se tacha solo en las tareas hechas.
- **Regla fácil para no confundirte:**
  - `{{ dato }}` → mostrar un dato como **texto**.
  - `[propiedad]="dato"` → mandar un dato **hacia** un elemento.
  - `(evento)="función()"` → recibir un aviso **desde** un elemento.
- En `alternar(id)`:
  - `lista.map(...)` recorre la lista y devuelve una **lista nueva**, tarea por tarea.
  - Si la tarea es la que se pidió (`t.id === id`), devuelve una copia con `hecha` invertida: `{ ...t, hecha: !t.hecha }`. (`...t` copia todo lo de `t`; luego `hecha: ...` pisa solo ese campo; `!` invierte verdadero/falso.)
  - Si no, devuelve la tarea sin cambios.

✅ **Comprobación:** marca la casilla de una tarea: el texto se tacha y se pone gris. Desmárcala: vuelve a la normalidad.

---

## Paso 8 — Eliminar tareas

**Qué hacemos:** un botón ✕ en cada tarea para borrarla.

📄 **`src/app/app.ts`** — reemplaza TODO el contenido por:

```ts
import { Component, signal } from '@angular/core';

// Así se ve una tarea: un número único, su texto y si ya está hecha
interface ItemTarea {
  id: number;
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
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

  protected eliminar(id: number): void { // 👈 NUEVO
    this.tareas.update((lista) => lista.filter((t) => t.id !== id));
  }
}
```

📄 **`src/app/app.html`** — reemplaza TODO el contenido por:

```html
<main class="contenedor">
  <h1>{{ titulo }}</h1>

  <div class="nueva">
    <input
      #entrada
      type="text"
      placeholder="¿Qué tienes que hacer?"
      (keyup.enter)="agregar(entrada.value); entrada.value = ''"
    />
    <button type="button" class="agregar" (click)="agregar(entrada.value); entrada.value = ''">
      Agregar
    </button>
  </div>

  <ul class="lista">
    @for (t of tareas(); track t.id) {
      <li>
        <label>
          <input type="checkbox" [checked]="t.hecha" (change)="alternar(t.id)" />
          <span [class.hecha]="t.hecha">{{ t.texto }}</span>
        </label>
        <button type="button" class="borrar" (click)="eliminar(t.id)">✕</button> <!-- 👈 NUEVO -->
      </li>
    }
  </ul>
</main>
```

**Qué aprendimos:**

- `lista.filter(...)` devuelve una lista nueva que **solo conserva** las tareas que cumplen la condición. Aquí: todas las que **no** tengan el `id` que queremos borrar (`!==` significa "distinto de").
- Mismo patrón que antes: `update` + lista nueva.
- Fíjate en el patrón de los tres botones: `agregar`, `alternar` y `eliminar` hacen lo mismo en esencia: **reciben la lista actual y devuelven una nueva**. Ese es el corazón de trabajar con signals.

✅ **Comprobación:** pulsa ✕ en una tarea: desaparece. Agrega otra después: sigue funcionando.

---

## Paso 9 — Contador de pendientes y mensaje de lista vacía

**Qué hacemos:** mostrar cuántas tareas faltan y un mensaje amable cuando no queda ninguna.

📄 **`src/app/app.ts`** — reemplaza TODO el contenido por:

```ts
import { Component, computed, signal } from '@angular/core'; // 👈 NUEVO: computed

// Así se ve una tarea: un número único, su texto y si ya está hecha
interface ItemTarea {
  id: number;
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
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
  protected readonly pendientes = computed( // 👈 NUEVO
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
```

📄 **`src/app/app.html`** — reemplaza TODO el contenido por:

```html
<main class="contenedor">
  <h1>{{ titulo }}</h1>
  <p class="contador">Pendientes: {{ pendientes() }}</p> <!-- 👈 NUEVO -->

  <div class="nueva">
    <input
      #entrada
      type="text"
      placeholder="¿Qué tienes que hacer?"
      (keyup.enter)="agregar(entrada.value); entrada.value = ''"
    />
    <button type="button" class="agregar" (click)="agregar(entrada.value); entrada.value = ''">
      Agregar
    </button>
  </div>

  @if (tareas().length === 0) { <!-- 👈 NUEVO: el @if / @else envuelve la lista -->
    <p class="vacio">No tienes tareas. ¡Agrega la primera!</p>
  } @else {
    <ul class="lista">
      @for (t of tareas(); track t.id) {
        <li>
          <label>
            <input type="checkbox" [checked]="t.hecha" (change)="alternar(t.id)" />
            <span [class.hecha]="t.hecha">{{ t.texto }}</span>
          </label>
          <button type="button" class="borrar" (click)="eliminar(t.id)">✕</button>
        </li>
      }
    </ul>
  }
</main>
```

**Qué aprendimos:**

- **`computed(() => ...)`** crea un valor que **se calcula solo** a partir de otros signals y **se actualiza automáticamente** cuando estos cambian. Aquí: `filter` se queda con las tareas no hechas y `.length` cuenta cuántas son.
  - Se lee igual que un signal, con paréntesis: `pendientes()`.
  - Ventaja: no tienes que acordarte de actualizar el contador en `agregar`, `alternar` y `eliminar`; se arregla solo.
- **`@if (condición) { ... } @else { ... }`** muestra una parte u otra según la condición. Aquí: si la lista tiene 0 tareas, muestra el mensaje; si no, la lista.
- `tareas().length === 0` usa `===` ("es exactamente igual a").

✅ **Comprobación:**
1. El contador dice **Pendientes: 2**.
2. Marca una tarea: baja a **1**.
3. Agrega una: sube.
4. Borra todas: aparece *No tienes tareas. ¡Agrega la primera!*

🎉 **Hito:** en este punto **ya tienes una app completa y funcionando**. Lo que sigue la deja más ordenada y bonita.

---

## Paso 10 — Tu primer componente propio

**Qué hacemos:** cada fila de la lista es una pieza independiente. En Angular, las piezas independientes se convierten en **componentes**. Vamos a sacar la fila a un componente llamado `Tarea`.

**¿Por qué?** Cuando una app crece, un solo archivo gigante se vuelve imposible de mantener. Con componentes, cada pieza tiene su propia lógica, HTML y CSS, y se puede **reutilizar**.

**Haz esto:** abre una **segunda terminal** (deja `ng serve` corriendo en la primera) y ejecuta:

```bash
ng generate component tarea
```

(Atajo equivalente: `ng g c tarea`.) Angular crea la carpeta `src/app/tarea/` con 4 archivos: `tarea.ts`, `tarea.html`, `tarea.css` y `tarea.spec.ts` (este último es para pruebas automáticas; puedes ignorarlo por ahora).

📄 **`src/app/tarea/tarea.ts`** — reemplaza TODO el contenido por:

```ts
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
```

📄 **`src/app/tarea/tarea.html`** — reemplaza TODO el contenido por:

```html
<label class="fila">
  <input type="checkbox" [checked]="hecha()" (change)="alternar.emit()" />
  <span [class.hecha]="hecha()">{{ texto() }}</span>
</label>

<button type="button" class="borrar" aria-label="Eliminar tarea" (click)="eliminar.emit()">✕</button>
```

📄 **`src/app/tarea/tarea.css`** — reemplaza TODO el contenido por:

```css
.hecha {
  text-decoration: line-through;
  color: #6b6b70;
}
```

Ahora el componente padre (`App`) debe **conocer** a `Tarea`:

📄 **`src/app/app.ts`** — reemplaza TODO el contenido por:

```ts
import { Component, computed, signal } from '@angular/core';
import { Tarea } from './tarea/tarea'; // 👈 NUEVO

// Así se ve una tarea: un número único, su texto y si ya está hecha
interface ItemTarea {
  id: number;
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-root',
  imports: [Tarea], // 👈 NUEVO: antes estaba vacío
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
```

📄 **`src/app/app.html`** — reemplaza TODO el contenido por:

```html
<main class="contenedor">
  <h1>{{ titulo }}</h1>
  <p class="contador">Pendientes: {{ pendientes() }}</p>

  <div class="nueva">
    <input
      #entrada
      type="text"
      placeholder="¿Qué tienes que hacer?"
      (keyup.enter)="agregar(entrada.value); entrada.value = ''"
    />
    <button type="button" class="agregar" (click)="agregar(entrada.value); entrada.value = ''">
      Agregar
    </button>
  </div>

  @if (tareas().length === 0) {
    <p class="vacio">No tienes tareas. ¡Agrega la primera!</p>
  } @else {
    <ul class="lista">
      @for (t of tareas(); track t.id) {
        <li>
          <app-tarea
            [texto]="t.texto"
            [hecha]="t.hecha"
            (alternar)="alternar(t.id)"
            (eliminar)="eliminar(t.id)"
          />
        </li>
      }
    </ul>
  }
</main>
```

📄 **`src/app/app.css`** — reemplaza TODO el contenido por (el tachado ya vive en `tarea.css`):

```css
/* vacío por ahora: en el paso 11 le damos estilo */
```

**Qué aprendimos:**

- Un componente nuevo se usa escribiendo **su selector como etiqueta**: `<app-tarea />`.
- Para poder usarlo, el padre debe **importarlo** (la línea `import { Tarea } ...`) **y** agregarlo a su lista `imports: [Tarea]`. Si olvidas alguno de los dos, Angular se queja de que `app-tarea` no es un elemento conocido.
- La comunicación entre padre e hijo funciona así: **los datos bajan, los avisos suben**.

```
            App  (padre)
   ┌────────────────────────────┐
   │  tareas = [ ... ]          │
   │                            │
   │   <app-tarea               │
   │      [texto]="t.texto"  ───┼──►  BAJA el dato      → input()
   │      (eliminar)="..."   ◄──┼───  SUBE el aviso     → output()
   │   />                       │
   └────────────────────────────┘
```

- **`input.required<string>()`**: un dato que el padre **tiene que** entregar (`required` = obligatorio). Se lee con paréntesis: `texto()`.
- **`input(false)`**: un dato **opcional** con valor inicial `false`.
- **`output<void>()`**: un "aviso" que el hijo puede lanzar. Se dispara con `.emit()`. `<void>` significa que el aviso no lleva información extra (el padre ya sabe qué tarea es porque escribimos `alternar(t.id)`).
- En el HTML del padre:
  - `[texto]="t.texto"` pasa el dato hacia abajo (¡los corchetes que ya conocías!).
  - `(eliminar)="eliminar(t.id)"` escucha el aviso hacia arriba (¡los paréntesis que ya conocías!). Funciona igual que `(click)`, pero con eventos que **inventamos nosotros**.
- **Estilos con ámbito:** el CSS de un componente **solo afecta a su propio HTML**. Por eso la regla `.hecha` se mudó a `tarea.css`, donde está el `<span>`. Si la hubieras dejado en `app.css`, el tachado habría desaparecido.

✅ **Comprobación:** todo funciona **exactamente igual que antes** (agregar, marcar, eliminar, contador, mensaje vacío). Cambiaste la estructura sin cambiar el resultado: eso se llama **refactorizar**.

---

## Paso 11 — Darle diseño

**Qué hacemos:** aplicar estilos para que se vea como una app de verdad (oscura, limpia y minimalista).

📄 **`src/styles.css`** — reemplaza TODO el contenido por (estilos globales):

```css
/* Estilos globales: afectan a toda la aplicación */
body {
  margin: 0;
  min-height: 100vh;
  background: #0b0b0c;
  color: #f2f2f2;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}
```

📄 **`src/app/app.css`** — reemplaza TODO el contenido por:

```css
.contenedor {
  max-width: 520px;
  margin: 0 auto;
  padding: 64px 20px;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  margin: 0 0 8px;
}

.contador {
  color: #8a8a8f;
  margin: 0 0 32px;
}

.nueva {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.nueva input {
  flex: 1;
  padding: 12px 14px;
  background: #151517;
  border: 1px solid #2a2a2e;
  border-radius: 8px;
  color: inherit;
  font-size: 1rem;
}

.nueva input:focus {
  outline: none;
  border-color: #f2f2f2;
}

.agregar {
  padding: 0 20px;
  background: #f2f2f2;
  color: #0b0b0c;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}

.agregar:hover {
  background: #ffffff;
}

.lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vacio {
  color: #8a8a8f;
  text-align: center;
  padding: 32px 0;
}
```

📄 **`src/app/tarea/tarea.css`** — reemplaza TODO el contenido por:

```css
/* :host es la etiqueta <app-tarea> en sí misma */
:host {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  background: #151517;
  border: 1px solid #2a2a2e;
  border-radius: 8px;
}

.fila {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  cursor: pointer;
}

.hecha {
  text-decoration: line-through;
  color: #6b6b70;
}

.borrar {
  background: none;
  border: none;
  color: #6b6b70;
  font-size: 1rem;
  cursor: pointer;
}

.borrar:hover {
  color: #e82127;
}
```

**Qué aprendimos:**

- **`styles.css`** = estilos **globales** (todo el sitio). **`app.css` / `tarea.css`** = estilos **solo de su componente**. Por eso cada archivo tiene lo suyo.
- **`:host`** es un selector especial: apunta a la etiqueta del propio componente (`<app-tarea>`), para darle forma de "tarjeta" a cada fila.
- Nada de esto toca el HTML ni la lógica: el diseño está separado del comportamiento.

✅ **Comprobación:** fondo oscuro, tarjetas por tarea, botón blanco, y la ✕ se pone roja al pasar el mouse.

---

## Paso 12 — Prueba final y resumen

### Lista de verificación

- [ ] Agregar una tarea con el botón.
- [ ] Agregar una tarea con Enter.
- [ ] Intentar agregar una tarea vacía (no debe pasar nada).
- [ ] Marcar y desmarcar una tarea (se tacha / se destaca).
- [ ] Ver que el contador de pendientes cambia solo.
- [ ] Borrar todas las tareas y ver el mensaje de lista vacía.

### Lo que lograste

| Concepto | Dónde lo usaste |
|----------|-----------------|
| Componente | `App` y `Tarea` |
| Interpolación `{{ }}` | `{{ titulo }}`, `{{ texto() }}` |
| Signals y `update` | `tareas` y las funciones `agregar`, `alternar`, `eliminar` |
| `computed` | `pendientes` |
| `@for` / `@if` / `@else` | La lista y el mensaje vacío |
| Eventos `( )` | `(click)`, `(keyup.enter)`, `(change)` |
| Bindings `[ ]` | `[checked]`, `[class.hecha]`, `[texto]` |
| `input()` / `output()` | Comunicación `App` ↔ `Tarea` |
| Estilos con ámbito | `app.css` vs `tarea.css` vs `styles.css` |

### (Opcional) Generar la versión final para publicar

```bash
ng build
```

Crea la carpeta `dist/` con tu app lista para subir a un hosting.

### (Opcional) Pruebas automáticas

`solucion/` incluye pruebas listas (`app.spec.ts`, `tarea.spec.ts`). Para ejecutarlas:

```bash
ng test
```

---

## 🚀 Retos extra (solo si quieres seguir)

1. **Botón "Borrar completadas":** una función que use `filter` para quedarse solo con las tareas no hechas.
2. **Guardar las tareas en el navegador:** investiga `localStorage` y la función `effect()` de Angular para que las tareas sobrevivan al recargar la página.
3. **Filtros** "Todas / Pendientes / Hechas": un `signal` con el filtro actual y un `computed` con la lista filtrada.
4. **Editar una tarea** con doble clic.

**Para seguir aprendiendo:** el tutorial oficial interactivo está en <https://angular.dev/tutorials/learn-angular>.

---

## 🆘 Si algo falla

| Síntoma | Qué hacer |
|---------|-----------|
| `ng` no se reconoce / `command not found` | Cierra y vuelve a abrir la terminal. Si sigue, reinstala con `npm install -g @angular/cli`. |
| En Windows: "la ejecución de scripts está deshabilitada" | En PowerShell ejecuta `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, confirma, y reintenta. |
| "The Angular CLI requires a minimum Node.js version" | Tu Node es viejo: instala la versión LTS más reciente desde nodejs.org. |
| `npm error Cannot read properties of null (reading 'edgesOut')` | Dentro de la carpeta del proyecto ejecuta `npm install --legacy-peer-deps`. |
| `Port 4200 is already in use` | Ya hay otro `ng serve` abierto. Ciérralo, o usa `ng serve --port 4300`. |
| Guardé y no cambia nada en el navegador | Revisa que **guardaste** (Ctrl + S) y mira la terminal de `ng serve`: ahí salen los errores en rojo. Recarga con Ctrl + F5. |
| `'app-tarea' is not a known element` | Falta importar `Tarea`: revisa la línea `import { Tarea } ...` **y** `imports: [Tarea]` en `app.ts`. |
| `Can't bind to 'texto' since it isn't a known property` | Revisa que en `tarea.ts` exista `texto = input.required<string>()` y que esté bien escrito. |
| `Cannot find module './tarea/tarea'` | Revisa que la carpeta y el archivo se llamen `tarea` (minúsculas) dentro de `src/app/`. |
| El contador o la lista no muestran nada / error con `tareas` | Probablemente falta el paréntesis: se escribe `tareas()` y `pendientes()` en el HTML. |
| Al agregar tareas la pantalla no se actualiza | Revisa que uses `this.tareas.update(...)` con una lista **nueva** (`[...lista, nueva]`), sin `push`. |
| Nada funciona y no sé por qué | Compara tu archivo con el de `solucion/src/app/`. Pulsa F12 en el navegador → pestaña **Consola** para ver mensajes de error. |

---

### Para probar la carpeta `solucion/`

```bash
cd solucion
npm install
ng serve
```

(Si `npm install` falla con el error `edgesOut`, usa `npm install --legacy-peer-deps`.)

¡Buen trabajo! 🎉
