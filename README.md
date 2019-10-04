# eslint-config-talktofill
This is the eslint configuration that I use in my personal projects

## How to install
1. `npm install eslint-config-talktofill --save-dev`
2. `.eslintrc`
3. Add the next config in `.eslintrc`

```json
{
  "extends": "talktofill"
}
```

4. Add the project environment: [envs](https://eslint.org/docs/user-guide/configuring#specifying-environments)
```json
{
  "extends": "talktofill",
  "env": {
    "browser": true
  }
}
```

5. Add your project global variables to avoid the ***no-undef*** notification: [globals](https://eslint.org/docs/user-guide/configuring#specifying-globals)
```json
{
  "extends": "talktofill",
  "env": {
    "browser": true
  },
  "globals": {
    "anySDK": "readonly"
  }
}
```

## React
1. `npm install eslint-plugin-jsx-a11y@^6.2.1 eslint-plugin-react@^7.12.4 --save-dev`
2. Extends the React config
```json
{
  "extends": "talktofill/react"
}
```

## Vue
1. `npm install eslint-plugin-vue@^5.2.2 --save-dev`
2. Extends the Vue config
```json
{
  "extends": "talktofill/vue"
}
```

## Babel
1. `npm install babel-eslint --save-dev`
2. Add the Babel parser config
```json
{
  "parser": "babel-eslint"
}
```

> In Vue projects you have to set in a different way
> ```json
> {
>   "parserOptions": {
>     "parser": "babel-eslint"
>   }
> }
> ```

## Scripts
- `npm test`: Verify the rules files

## Reference
- Eslint version - ESLint v5.16.0 (2019-03-29).
