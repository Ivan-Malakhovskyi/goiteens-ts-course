### Decorators

```json
"experimentalDecorators": true,
```

Декоратор - це просто функція

```ts
function Logger(constructor: Function) {
  console.log("Loading ...");
  console.log(constructor);
}

@Logger
class Controller {
  public id: number = 1;
}
```

```ts
function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

@Logger("LOADING")
class Controller {
  public id: number = 1;
}
```

```ts
function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

function AddProperty() {
  return function (constructor: Function) {
    console.log("MODIFY");
    constructor.prototype.modify = true;
  };
}

@Logger("LOADING")
@AddProperty()
class Controller {
  public id: number = 1;
  public modify?: boolean = false;
}

const controller = new Controller();
console.log(controller.modify);
```

Зверніть увагу на порядок запуску декораторів, той, що ближче до класу, той запускається першим.

### Декоратори методів

```ts

```
