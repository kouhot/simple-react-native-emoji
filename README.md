# simple-react-native-emoji
React Native simple emoji component.

## Installation

### Using yarn
`yarn add simple-react-native-emoji`

### Using npm
`npm i --save simple-react-native-emoji`


## Usage

### Basic
```jsx
import SimpleEmoji from 'simple-react-native-emoji';

<SimpleEmoji shortName={"sushi"} />
```

### Props

| Prop              | Type     | Default       | Description                                              |
| ----------------- | -------- | ------------- | -------------------------------------------------------- |
| shortName   | _string_   |               | [Datasource](https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json) (e.g. `smile`, `:star-struck:`)            |

- Since it's just `Text`, You can pass [Text props](https://reactnative.dev/docs/text#props).

