# simple-react-native-emoji
React Native simple emoji component.

![simple-react-native-emoji-screenshot](https://user-images.githubusercontent.com/10332953/127773257-dfb5abf7-0cf0-4b07-bba4-e16aa55475ad.png)

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

