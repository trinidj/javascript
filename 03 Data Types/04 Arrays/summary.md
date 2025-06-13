# Arrays

## What are Arrays?
Arrays are special objects designed for storing and managing ordered data items.

## Declaration

### Standard Method (Recommended)
```javascript
let arr = [item1, item2...];
```

### Constructor Method (Rarely Used)
```javascript
let arr = new Array(item1, item2...);
```

**Note:** `new Array(number)` creates an array with the specified length but no elements.

## Array Properties

### Length Property
- `length` represents the array length (last numeric index + 1)
- Automatically adjusted by array methods
- Can be manually shortened to truncate the array

## Accessing Elements

### By Index
```javascript
arr[0]  // Get first element
```

### Using at() Method
```javascript
arr.at(i)  // Allows negative indexes
```
- For `i >= 0`: works same as `arr[i]`
- For negative `i`: steps back from the end

## Array as Deque Operations

### Adding Elements
- `push(...items)` - adds items to the **end**
- `unshift(...items)` - adds items to the **beginning**

### Removing Elements
- `pop()` - removes and returns element from the **end**
- `shift()` - removes and returns element from the **beginning**

## Looping Over Arrays

### Method Comparison
| Method | Syntax | Performance | Use Case |
|--------|--------|-------------|----------|
| **For loop** | `for (let i=0; i<arr.length; i++)` | Fastest | Old browser compatibility |
| **For...of** | `for (let item of arr)` | Modern | Items only (recommended) |
| **For...in** | `for (let i in arr)` | ❌ | **Never use for arrays** |

## Array Comparison

### ❌ Don't Use
```javascript
arr1 == arr2  // Treats arrays as objects
arr1 > arr2   // Not meaningful for arrays
```

### ✅ Recommended Approach
Use `for...of` loop to compare arrays item-by-item for meaningful comparisons.