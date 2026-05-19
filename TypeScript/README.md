# TypeScript

Projet realise dans le cadre de la formation Holberton School.

---

## Description

TypeScript est un sur-ensemble de JavaScript qui ajoute un typage statique optionnel.
Il permet de detecter les erreurs au moment de la compilation plutot qu'a l'execution,
ce qui ameliore la robustesse et la maintenabilite du code.

---

## Objectifs d'apprentissage

### 1. Les types de base en TypeScript

TypeScript propose plusieurs types primitifs qui permettent de typer les variables :

- `string` : une chaine de caracteres
- `number` : un nombre entier ou decimal
- `boolean` : une valeur vraie ou fausse
- `any` : desactive le typage (a eviter)
- `void` : absence de valeur de retour
- `null` et `undefined` : valeurs absentes
- `array` : tableau, note `number[]` ou `Array<number>`
- `tuple` : tableau de taille et de types fixes
- `enum` : ensemble de valeurs nommees

```typescript
const name: string = "Alice";
const age: number = 30;
const isStudent: boolean = true;
const scores: number[] = [10, 20, 30];
const person: [string, number] = ["Bob", 25];

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

---

### 2. Interfaces, classes et fonctions

**Les interfaces** definissent la forme qu'un objet doit respecter.
Elles servent de contrat entre les differentes parties du code.

```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
}

const student: Student = {
  firstName: "Alice",
  lastName: "Dupont",
  age: 20,
};
```

**Les classes** permettent de creer des objets avec des proprietes et des methodes.
TypeScript ajoute des modificateurs d'acces : `public`, `private`, `protected`.

```typescript
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): string {
    return `${this.name} fait du bruit.`;
  }
}

const cat = new Animal("Chat");
cat.speak();
```

**Les fonctions** peuvent etre typees sur leurs parametres et leur valeur de retour.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => `Bonjour, ${name}`;
```

---

### 3. Interaction avec le DOM via TypeScript

TypeScript connait les types natifs du navigateur. Il faut cependant preciser le type
des elements recuperes depuis le DOM, car `querySelector` retourne `Element | null`.

```typescript
const input = document.querySelector("#username") as HTMLInputElement;
const button = document.getElementById("submit") as HTMLButtonElement;

button.addEventListener("click", () => {
  console.log(input.value);
});
```

Le mot-cle `as` permet de preciser le type exact de l'element (type assertion).
TypeScript validera alors les proprietes accessibles sur cet element.

---

### 4. Les types generiques

Les generiques permettent d'ecrire du code reutilisable qui fonctionne avec
plusieurs types sans perdre la securite du typage.

```typescript
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");
identity<number>(42);
```

On peut aussi typer des structures de donnees generiques :

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const response: ApiResponse<string[]> = {
  data: ["Alice", "Bob"],
  status: 200,
  message: "OK",
};
```

---

### 5. Les namespaces

Les namespaces permettent d'organiser et de regrouper du code pour eviter les
conflits de noms dans de grands projets.

```typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return /^[A-Za-z]+$/.test(s);
    }
  }
}

const validator = new Validation.LettersOnlyValidator();
validator.isAcceptable("Hello"); // true
```

Le mot-cle `export` est necessaire pour rendre un element accessible depuis
l'exterieur du namespace.

---

### 6. La fusion de declarations (Declaration Merging)

TypeScript permet de declarer plusieurs fois la meme interface ou le meme namespace.
Ces declarations sont fusionnees automatiquement par le compilateur.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// L'interface User finale contient les deux proprietes
const user: User = {
  name: "Alice",
  age: 30,
};
```

Cela est tres utile pour etendre des types provenant de bibliotheques tierces
sans modifier le code source d'origine.

---

### 7. Les namespaces ambiants pour importer une bibliotheque externe

Lorsqu'on utilise une bibliotheque JavaScript sans types TypeScript, on peut
creer un fichier de declaration (`.d.ts`) avec un namespace ambient pour
informer TypeScript de la forme de la bibliotheque.

```typescript
// my-library.d.ts
declare namespace MyLibrary {
  function makeGreeting(name: string): string;
  let numberOfGreetings: number;
}
```

```typescript
// main.ts
MyLibrary.makeGreeting("Alice");
```

Le mot-cle `declare` indique a TypeScript que ces elements existent deja
au moment de l'execution (via un script charge dans le navigateur par exemple).

---

### 8. Le typage nominal de base avec TypeScript

TypeScript utilise par defaut un systeme de typage structurel : deux types sont
compatibles s'ils ont la meme forme. Le typage nominal consiste a distinguer
deux types meme s'ils ont la meme structure, grace a un identifiant unique.

Une technique courante est d'utiliser une propriete "fantome" (branded type) :

```typescript
type StudentId = string & { readonly _brand: "StudentId" };
type TeacherId = string & { readonly _brand: "TeacherId" };

function createStudentId(id: string): StudentId {
  return id as StudentId;
}

function getStudentName(id: StudentId): string {
  return `Etudiant ${id}`;
}

const sId = createStudentId("S001");
const tId = "T001" as TeacherId;

getStudentName(sId); // OK
getStudentName(tId); // Erreur de compilation
```

Cela permet d'eviter de passer accidentellement un identifiant du mauvais type
a une fonction, meme si les deux sont techniquement des chaines de caracteres.

---

## Auteur

**Hinoto-LH** -- Formation Holberton School
