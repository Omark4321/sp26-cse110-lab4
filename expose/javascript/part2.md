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
