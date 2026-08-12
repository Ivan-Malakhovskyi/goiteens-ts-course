**Yarn** - yarn create vite my-vue-app --template react-ts

**Npm** - npm create vite@latest my-vue-app -- --template react-ts

## Install types for libs

yarn add -D @types/somelib
npm install --save-dev @types/somelib

### Component type

```ts
const NewComponent: FC<INewComponentProps> = () => {
  return <div></div>;
};

export default NewComponent;

const NewComponent = ({ items }: INewComponentProps) => {
  return <div></div>;
};

export default NewComponent;

```

```ts

import React, { Component } from "react";

class NewComponent extends Component {
  render() {
    return <div></div>;
  }
}

export default NewComponent;
```

### Add props

```ts

interface IState {
  count: number;
}


Компонент приймає два аргументи в дженерик, перше - це props, друге - state, я передав туди мій інтерфейс IState і тепер можу користуватися ним по коду.

class ClickStatistic extends Component<{}, IState> {
  handleClick = () => {
    this.setState(({ count }) => {
      return {
        count: (count += 1),
      };
    });
  };

  render(): React.ReactNode {
    return (
      <button type="button" onClick={this.handleClick}>
        Click{" "}
      </button>
    );
  }
}

```

### useRef()

```ts
const textInputRef = useRef<HTMLInputElement>(null);

textInputRef.current?.value;
```

### useState()

### useEffect()

### children

### events

```ts
function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
}
```

```ts
interface ModalRendererProps {
  title: string;
  children: React.ReactElement;
}

interface ModalRendererProps {
  title: string;
  children: React.ReactNode;
}
```
