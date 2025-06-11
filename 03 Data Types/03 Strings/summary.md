# Strings Summary

## Quote Types
- **Backticks (Template Literals)**: Allow multi-line strings and expression embedding
  ```javascript
  `This spans
  multiple lines and can embed ${expression}`
  ```
- **Special Characters**: Use escape sequences like `\n` for line breaks

## Accessing Characters
- **Bracket notation**: `str[index]`
- **at() method**: `str.at(index)`

## Getting Substrings
- **slice()**: `str.slice(start, end)`
- **substring()**: `str.substring(start, end)`

## Case Conversion
- **toLowerCase()**: Convert to lowercase
- **toUpperCase()**: Convert to uppercase

## Searching Strings
- **indexOf()**: Find position of substring
- **includes()**: Check if string contains substring
- **startsWith()**: Check if string starts with substring  
- **endsWith()**: Check if string ends with substring

## String Comparison
- **localeCompare()**: Language-aware string comparison
- **Default comparison**: Uses character codes

## Additional Useful Methods
- **trim()**: Remove whitespace from beginning and end
- **repeat(n)**: Repeat string n times

> **Note**: Many more string methods are available in the JavaScript manual for advanced string manipulation needs.