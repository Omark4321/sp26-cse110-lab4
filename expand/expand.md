# expand - free response

### 1. what makes async, loose typing, and the web platform painful?

async stuff is rough because the order things run isn't the order you wrote them. callback hell was a real thing back when promises weren't standard, you'd end up with these massive nested callback pyramids that were impossible to read. race conditions are easy to introduce too if you're not careful, like two fetches updating the same state and whichever finishes last wins. debugging async code is harder than sync code because the stack trace doesn't always show you the path that actually got you there. promises and async/await help a lot but you still have to think carefully about it.

loose typing is another big one. since variables don't have a fixed type you can do something like pass a string into a function expecting a number and not find out til runtime when something blows up (or worse, doesn't blow up and just gives you a weird answer). the coercion rules are also genuinely confusing - `'5' + 3` is `'53'` but `'5' - 3` is `2`. refactoring without TypeScript is rough because you can't trust the IDE to catch type mismatches.

the web platform itself just has weird stuff. every browser implements things slightly differently, even today. CORS is annoying when you're just trying to do a fetch and it gets blocked. the DOM is honestly kinda awful to work with manually (which is why frameworks exist). then there's all the security stuff like XSS where you have to be careful about user input getting injected into the page.

### 2. why was JS made loosely typed and async?

JS was famously made in like 10 days by Brendan Eich at Netscape in 1995. it was designed for non-programmers (designers, web folks) to add little bits of interactivity to web pages, so loose typing made it more forgiving for beginners. you didn't have to worry about declaring types, you could just start coding.

async was kind of a necessity. if you blocked the browser doing something like fetching data or waiting on a timer, the entire page would freeze up - can't scroll, can't click anything. that's a terrible UX. so they built it single-threaded but non-blocking, where stuff like network requests get handed off and a callback fires when they're done.

### 3. compiled vs interpreted

compiled languages like C or C++ get translated to machine code ahead of time by a compiler. you run that machine code directly. interpreted languages get read and executed line by line at runtime by an interpreter (or a runtime like V8 for JS). technically modern JS engines do JIT compilation at runtime so it's not pure interpretation anymore but the model from the developer's perspective is still interpreted.

benefits of interpreted: don't need to compile so iteration is faster, just save and refresh. runs anywhere there's a JS engine (every browser, Node, etc). easier to ship and distribute.

drawbacks: slower than compiled code traditionally, though JIT closes a lot of that gap now. errors only show up at runtime, not at compile time. so you can ship code that has type errors and only find out when a user hits that specific code path. no static type checking unless you bolt on something like TypeScript.

### 4. why learn vanilla JS first instead of jumping to a framework?

if you only ever know React you don't really get what's happening underneath. when something breaks you won't know if it's React being weird or vanilla JS doing something funky. like if you don't understand how `this` works in vanilla JS, React class components are gonna seem magical and arbitrary. plus frameworks come and go - remember when everyone was on jQuery? or AngularJS? or Backbone? vanilla JS is still here.

drawback though: you'll be slower at building real apps without a framework. doing complex state management or routing by hand is a lot. and most jobs want React/Vue/Svelte experience so for getting hired you eventually need to learn one. but starting with vanilla makes you a stronger developer overall I think.

### 5. how does this relate to the project?

for the cse110 project we're building a web app with vanilla JS so all this scoping stuff matters. knowing the difference between var/let/const will save us from weird bugs where state leaks between iterations of a loop or something. the async stuff with setTimeout/setInterval will probably come up if we need anything that updates the UI on a timer or fetches data from somewhere. understanding the event loop helps when callbacks aren't running in the order we expect.

devtools debugging is huge too. way better than just sprinkling console.logs everywhere when something breaks. setting breakpoints and stepping through code makes it actually possible to understand what's going on when you have a tricky bug.

and the diagramming part is good for planning before just diving into code. drawing out how data flows through the app or what the user journey looks like helps catch design issues before you've already coded yourself into a corner.
