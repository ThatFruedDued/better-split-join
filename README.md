# better-split-join
 Better .split and .join functions in JavaScript.

# Usage
You can now split an array into multiple arrays in JavaScript, and join nested arrays:
```js
"%s<some text>\\%s".split("\\%").split("%s").join("<replaced text>").join("%") === "<replaced text><some text>%s"
// creating a simple escape sequence
```