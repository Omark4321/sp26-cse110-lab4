# devtools - part 2 (debugging)

### 1. what was the bug?

the bug was that the result was getting set as a string concatenation instead of doing actual numerical addition. the inputs from the form come back as strings (since input values are always strings), so doing `num1 + num2` on them gave back the concatenated string. like `"5" + "3"` returns `"53"` instead of `8`.

### 2. how did you fix it?

converted the inputs to numbers before adding them. used `Number()` (could've also used `parseInt()` or the unary `+` operator) on num1 and num2 before doing the addition. so something like `Number(num1) + Number(num2)`.

> TODO: drop the screenshot of the fix in this folder as `fix.png` (or similar). need to take it from the actual debugger session.
