# Optional Chaining Operator (`?.`)

## Summary

The optional chaining operator (`?.`) provides a safe way to access nested object properties and call methods without throwing errors when intermediate values are `null` or `undefined`.

## Usage Patterns

### Property Access (Dot Notation)
```javascript
obj?.prop
```
- Returns `obj.prop` if `obj` exists
- Returns `undefined` if `obj` is `null` or `undefined`

### Property Access (Bracket Notation)
```javascript
obj?.[prop]
```
- Returns `obj[prop]` if `obj` exists
- Returns `undefined` if `obj` is `null` or `undefined`

### Method Calling
```javascript
obj.method?.()
```
- Calls `obj.method()` if `obj.method` exists and is a function
- Returns `undefined` if `obj.method` is `null`, `undefined`, or not a function

## Benefits

- Prevents runtime errors when accessing properties of `null` or `undefined` values
- Eliminates the need for lengthy conditional checks
- Makes code more readable and concise
