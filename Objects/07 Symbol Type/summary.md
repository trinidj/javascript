# JavaScript Symbol Primitive Type

## Overview

`Symbol` is a primitive type in JavaScript used for creating unique identifiers. Each symbol is guaranteed to be unique, making them ideal for creating property keys that won't conflict with other properties.

## Creating Symbols

### Basic Symbol Creation
```javascript
Symbol()
Symbol(description) // Optional description for debugging
```
- Symbols are **always different values**, even with the same description
- The description is optional and used primarily for debugging purposes

### Global Symbol Registry
```javascript
Symbol.for(key)
```
- Returns a global symbol with the specified `key`
- Creates the symbol if it doesn't exist in the global registry
- Multiple calls with the same `key` return **exactly the same symbol**
- Enables symbol sharing across different parts of code

## Main Use Cases

### 1. Hidden Object Properties

Symbols can be used to create "hidden" properties in objects:

```javascript
const mySymbol = Symbol('myProperty');
obj[mySymbol] = 'hidden value';
```

**Benefits:**
- **Not enumerable**: Symbolic properties don't appear in `for...in` loops
- **Protected access**: Other scripts can't access the property without the symbol
- **Prevents conflicts**: Safe to add properties to objects from other libraries
- **Covert storage**: Hide implementation details that others shouldn't access

### 2. System Symbols

JavaScript provides built-in symbols accessible as `Symbol.*` for customizing language behavior:

**Common System Symbols:**
- `Symbol.iterator` - For making objects iterable
- `Symbol.toPrimitive` - For custom object-to-primitive conversion
- And many others for various built-in behaviors

## Key Characteristics

- **Uniqueness**: Each `Symbol()` call creates a unique value
- **Immutability**: Symbols cannot be changed once created
- **Type safety**: Prevents accidental property overwrites
- **Global registry**: `Symbol.for()` enables controlled symbol sharing