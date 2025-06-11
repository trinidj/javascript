# JavaScript Number Handling Summary

## Scientific Notation (E-notation)

### Large Numbers
- Append `"e"` followed by the number of zeroes
- Example: `123e6` equals `123000000` (123 with 6 zeroes)

### Small Numbers
- Use negative exponent after `"e"` to create decimal fractions
- Example: `123e-6` equals `0.000123` (123 millionths)

## Numeral Systems

### Direct Number Literals
- **Hexadecimal**: `0x` prefix (e.g., `0xFF`)
- **Octal**: `0o` prefix (e.g., `0o755`)
- **Binary**: `0b` prefix (e.g., `0b1010`)

### Parsing and Converting
- **Parse to integer**: `parseInt(str, base)` - converts string to integer in specified base (2-36)
- **Convert to string**: `num.toString(base)` - converts number to string in specified base

## Number Validation

### NaN Testing
- `isNaN(value)` - converts argument to number, then tests for NaN
- `Number.isNaN(value)` - checks if argument is number type AND NaN (more strict)

### Finite Number Testing
- `isFinite(value)` - converts argument to number, then tests for finite value
- `Number.isFinite(value)` - checks if argument is number type AND finite (more strict)

## String-to-Number Conversion

### Soft Conversion for Values with Units
- Use `parseInt()` or `parseFloat()` for strings like `"12pt"` or `"100px"`
- These functions read numbers from the beginning of strings until they encounter non-numeric characters
- Returns the numeric portion before any parsing error

## Working with Fractions

### Rounding Methods
- `Math.floor()` - rounds down to nearest integer
- `Math.ceil()` - rounds up to nearest integer
- `Math.trunc()` - removes decimal part (truncates)
- `Math.round()` - rounds to nearest integer
- `num.toFixed(precision)` - rounds to specified decimal places

### Important Note
- **Precision Loss**: Be aware that JavaScript has inherent precision limitations when working with decimal fractions due to floating-point representation