# part 2

## var / let / const in a for loop

### Q1. var version, line 12 `console.log(i)`

prints `3`. even though i was declared in the for loop, var has function scope so it sticks around after the loop ends. after the loop terminates i is 3 (one past prices.length which was 3).

### Q2. var version, line 13 `console.log(discountedPrice)`

prints `150`. same reason, var leaks out of the for block. last iteration set discountedPrice to 300 * (1 - 0.5) = 150.

### Q3. var version, line 14 `console.log(finalPrice)`

prints `150`. finalPrice was declared at function scope anyway so no surprise here. on the last iteration it got set to 150.

### Q4. var version returns

`[50, 100, 150]` - each price multiplied by 0.5.

### Q5. let version, line 12 `console.log(i)`

ReferenceError: i is not defined. let is block scoped so once the for loop ends, i is gone.

### Q6. let version, line 13 `console.log(discountedPrice)`

ReferenceError again. discountedPrice was declared with let inside the for loop body so it's not accessible out here either.

### Q7. let version, line 14 `console.log(finalPrice)`

prints `150`. finalPrice is declared at the function level with let, so it's still in scope.

### Q8. let version returns

`[50, 100, 150]`. same array as before, just using let instead of var.

### Q9. const version, line 11 `console.log(i)`

ReferenceError. i was let inside the for loop, so it's gone after the loop.

### Q10. const version, line 12 `console.log(length)`

prints `3`. length is a const at the function level, prices.length was 3.

### Q11. const version returns

`[50, 100, 150]`. notable that even though discounted is const, we can still push to it. const just means you can't reassign the variable itself, the array contents are still mutable.

## object notation

### Q12.

A. `student.name`

B. `student['Grad Year']`

C. `student.greeting()`

D. `student['Favorite Teacher'].name`

E. `student.courseLoad[0]`

## arithmetic + comparison fun

### Q13. arithmetic operators

A. `'3' + 2` = `'32'`. `+` with a string does concatenation, 2 gets coerced to `'2'`.

B. `'3' - 2` = `1`. minus only works on numbers, so `'3'` gets converted to 3.

C. `3 + null` = `3`. null converts to 0.

D. `'3' + null` = `'3null'`. string concat, null becomes the literal string `'null'`.

E. `true + 3` = `4`. true coerces to 1.

F. `false + null` = `0`. false=0, null=0.

G. `'3' + undefined` = `'3undefined'`. string concat, undefined becomes the string.

H. `'3' - undefined` = `NaN`. undefined to a number is NaN, and anything - NaN is NaN.

### Q14. comparison operators

A. `'2' > 1` = `true`. `'2'` coerces to 2, then 2 > 1.

B. `'2' < '12'` = `false`. both are strings so it's a lexicographic compare, char by char. `'2'` > `'1'` so `'2'` is "bigger".

C. `2 == '2'` = `true`. loose equality coerces types.

D. `2 === '2'` = `false`. strict, different types so not equal.

E. `true == 2` = `false`. true coerces to 1, not 2.

F. `true === Boolean(2)` = `true`. Boolean(2) is true, both same type and value.

### Q15. == vs ===

`==` does type coercion before comparing, so something like `'5' == 5` is `true`. `===` (strict equality) checks both type AND value, so `'5' === 5` is `false` because one's a string and the other's a number. pretty much always use `===` to dodge the weird coercion bugs.

### Q16. for...in loop

see `part2-question16.js` for the code.

output when run: `21`, `45`, `5`, `2`
- redCars (21) starts with r
- blueCars (45) is odd
- raceCars (5) starts with r AND is odd
- rareCars (2) starts with r

greenCars and blackCars get skipped (don't start with r and are even).

### Q17. modifyArray walkthrough

`modifyArray([1, 2, 3], doSomething)` returns `[2, 4, 6]`.

walking through it: newArr starts empty, the loop iterates 3 times. each iteration calls `callback(array[i])` which is `doSomething(array[i])` which returns `array[i] * 2`. so we push 2, then 4, then 6. final result is `[2, 4, 6]`.

### Q18. setInterval

see `part2-question18.js`. uses setInterval with a 1000ms delay to log the current time every second.

### Q19. printNums output

```
1
4
3
2
```

why: `console.log(1)` runs first synchronously. then the two setTimeout calls get queued (they don't run synchronously even with 0ms delay, they go to the task queue). `console.log(4)` runs next since we're still on the main call stack. once the call stack is empty the event loop picks up the queued callbacks. the 0ms one fires before the 1000ms one, so 3 prints, then ~1 second later 2 prints.

