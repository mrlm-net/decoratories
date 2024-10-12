# mrlm-net/decoratories

Typescript package of [factory methods](https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories) for opinionated usage of [Typescript](https://www.typescriptlang.org/) decorators. Purpose of this library is to abstract creation of the decorators to factory methods and allow user to create decorators with and without input parameters.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Lifecycle](#lifecycle)
- [Class decorator](#class-decorator)
- [Method decorator](#method-decorator)
- [Accessor decorator](#accessor-decorator)
- [Property decorator](#property-decorator)
- [Parameter decorator](#parameter-decorator)
- [Contributing](#contributing)

## Installation

> I'm using `YARN` so examples will be using it, you can install this package via any Node package manager.

```shell
$ yarn add @mrlm/decoratories
```

### Build from the source

If you wish to build package yourself you can do it by doing following:

__1. Clone repository__

```shell
$ git clone git@github.com:mrlm-net/decoratories.git
```

__2. Install dependecies__

```shell
$ yarn install
```

__3. Build package__

```shell
$ yarn run build
```

> __You can also build custom Node module with predefined decorators for direct, versioned usage in multiple projects. If you interested please consult [`custom package`](./docs/custom-package.md) guide.__

## Usage

> If you are new in Typescript decorators I suggest you to read this [documentation](https://www.typescriptlang.org/docs/handbook/decorators.html) page first.

Motivation to create decorator factories as Node package was to allow end users use various implementations without the need to think about their composition and also create some guidelines for decorators usage in my other projects as they are pretty powerful.

Package exports unified inderface via method describing types of decorators, which helping you to merge custom decorator attributes which natively provided ones.

### Lifecycle

Don't forget that there is specific order in which decorators are composed and evaluated by Typescript itself, keep this in mind when you are designing your own decorators.

> You can read more about decorator [composition](https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-composition) and [evalutaion](https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-evaluation) in refered chapters of their documentation.

### Class decorator

> [Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators)

```typescript
export type IClassDecorator = (
    target: Function, 
    ...args: any[]
) => void;
```

__Examples__

```typescript
import { ClassDecoratorFactory } from "@mrlm/decoratories";

// Usage without arguments
const classDecorator = ClassDecoratorFactory(
    (...args: any[]) => console.log(...args)
);

@classDecorator
class Example {
    // ...    
}

// Usage with arguments
const classDecorator = (...args: any[]) => ClassDecoratorFactory(
    (...args: any[]) => console.log(...args), ...args
);

@classDecorator("argument", "or", "more")
class Example {
    // ...    
}
```

### Method decorator

> [Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators)

```typescript
export type IMethodDecotator = (
    target: Record<string, any>, 
    propertyKey: string, 
    descriptor: PropertyDescriptor, 
    ...args: any[]
) => void;
```

__Examples__

```typescript
import { MethodDecoratorFactory } from "@mrlm/decoratories";

// Usage without arguments
const methodDecorator = MethodDecoratorFactory(
    (...args: any[]) => console.log(...args)
);

@methodDecorator
function Example(): void {
    // ...
}

// Usage with arguments
const methodDecorator = (...args: any[]) => MethodDecoratorFactory(
    (...args: any[]) => console.log(...args), ...args
);

@methodDecorator("argument", "or", "more")
function Example(): void {
    // ...
}
```

### Accessor decorator

> [Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators)

```typescript
export type IAccessorDecotator = (
    target: Record<string, any>, 
    propertyKey: string, 
    descriptor: PropertyDescriptor, 
    ...args: any[]
) => void;
```

__Examples__

```typescript
import { AccessorDecoratorFactory } from "@mrlm/decoratories";

// Usage without arguments
const accessorDecorator = AccessorDecoratorFactory(
    (...args: any[]) => console.log(...args)
);

class Example {
    private _name: any;

    @accessorDecorator
    get name(): any {
        return this._name
    }
}

// Usage with arguments
const accessorDecorator = (...args: any[]) => AccessorDecoratorFactory(
    (...args: any[]) => console.log(...args), ...args
);

class Example {
    private _name: any;

    @accessorDecorator("argument", "or", "more")
    get name(): any {
        return this._name
    }
}

```

### Property decorator

> [Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators)

```typescript
export type IPropertyDecorator = (
    target: Record<string, any>, 
    propertyKey: string, 
    ...args: any[]
) => void;
```

__Examples__

```typescript
import { PropertyDecoratorFactory } from "@mrlm/decoratories";

// Usage without arguments
const propertyDecorator = PropertyDecoratorFactory(
    (...args: any[]) => console.log(...args)
);

function Example(@propertyDecorator prop: any): void {
    // ...
}

// Usage with arguments
const propertyDecorator = (...args: any[]) => PropertyDecoratorFactory(
    (...args: any[]) => console.log(...args), ...args
);

function Example(@propertyDecorator("argument", "or", "more") prop: any): void {
    // ...
}
```

### Parameter decorator

> [Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators)

```typescript
export type IParameterDecorator = (
    target: Record<string, any>, 
    propertyKey: string, 
    parameterIndex?: number,
    ...args: any[]
) => void;
```

__Examples__

```typescript
import { ParameterDecoratorFactory } from "@mrlm/decoratories";

// Usage without arguments
const parameterDecorator = ParameterDecoratorFactory(
    (...args: any[]) => console.log(...args)
)

class Example {
    @parameterDecorator
    private param: any;
}

// Usage with arguments
const parameterDecorator = (
    ...args: any[]
) => ParameterDecoratorFactory(
    (...args: any[]) => console.log(...args), ...args
)

class Example {
    @parameterDecorator("argument", "or", "more")
    private param: any;
}
```

## Contributing

_Contributions are welcomed and must follow [Code of Conduct](https://github.com/mrlm-net/decoratories?tab=coc-ov-file) and common [Contributions guidelines](https://github.com/mrlm-net/.github/blob/main/docs/CONTRIBUTING.md)._

> If you'd like to report security issue please follow [security guidelines](https://github.com/mrlm-net/decoratories?tab=security-ov-file).

---
<sup><sub>_2024 &copy; All rights reserved - Martin Hrášek <[@marley-ma](https://github.com/marley-ma)>_</sub></sup>