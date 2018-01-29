# react-native-js-cascade-picker

<p>
<img src="https://img.shields.io/npm/dm/react-native-js-cascade-picker.svg" />
<img src="https://img.shields.io/npm/dt/react-native-js-cascade-picker.svg" />
</p>

A pure JavaScript animated component that renders a picker with a cascade effect. Useful for navigation bars.

## Getting started

`$ yarn add react-native-js-cascade-picker`

## Usage

```jsx
import CascadePicker from 'react-native-js-cascade-picker'

// Render your component
<CascadePicker
  options={[{ value: 2, label: 'Two' }, { value: 4, label: 'Four' }]}
  valueSelected={this.state.val}
  onChange={(option: Object) => this.setState({ val: option.value })}
  pickerText='Select one'
/>
```

## License

MIT.

## Author

Álvaro Medina Ballester `<amedina at apsl.net>`

Built with 💛 by [APSL](https://github.com/apsl).
