# Dianomi Contextfeed - React

Get [Dianomi](https://www.dianomi.com) contextfeeds directly in your React apps.

## Installation:

```
npm i --save @dianomi/react-contextfeed
```

## Usage:

```tsx
import { DianomiContextFeed } from '@dianomi/react-contextfeed';

const App = () => {
  return (
    <div>
      <DianomiContextFeed id={1234} />
    </div>
  );
};
```

## Props

| Prop | Type   | Description                                                           |
| ---- | ------ | --------------------------------------------------------------------- |
| id   | number | The id of the contextfeed to render, provided by your account manager |
