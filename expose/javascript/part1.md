# part 1 - var, let, const

### Q1. line 9 with `var result = 0` inside the if block, calling `sumValues(10, 10, true)`

prints `values added: 20`. the if block runs since add is true, so result gets set to 20 and the console.log right after fires off no problem.

### Q2. line 13 (outside the if block)

prints `final result: 20`. var has function scope (not block scope) so result is still hanging around even after we exited the if. classic var gotcha.

### Q3. why not use var

basically var has function scope instead of block scope, so vars leak out of blocks where you'd expect them to be contained. it also lets you redeclare the same variable without complaining which is just asking for bugs. and hoisting with var is kinda weird too (variables get initialized as undefined before their declaration line). let and const fix all of this since they're block scoped and won't let you redeclare.

### Q4. same code but with `let result = 0`. line 9

prints `values added: 20`. inside the if block let works fine, same as var here.

### Q5. line 13 with let

ReferenceError: result is not defined. let is block scoped so once we exit the if block, result no longer exists out here.

### Q6. same code with `const result = 0` then `result = num1 + num2`. line 9

doesn't get reached. line 7 throws a TypeError (Assignment to constant variable) because you can't reassign a const after declaring it.

### Q7. line 13

also never reached, the TypeError on line 7 crashes the function before we ever get here.
