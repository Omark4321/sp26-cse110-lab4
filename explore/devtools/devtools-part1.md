# devtools - part 1 (network tab)

> TODO: a lot of these answers depend on what shows up in the actual Network tab when you load the live site. these are best-guess answers based on the typical setup. verify each one when you're actually inspecting and update as needed.

### 1. what is the name of the JSON file?

`data.json` 
> [TODO verify exact filename in network tab]

### 2. what initiated the download of that file?

`index.html` initiated it (the script tag inside the html runs fetch).
> [TODO confirm the initiator column - might say index.html or the specific script file]

### 3. how big is the file?

a few hundred bytes probably.
> [TODO check the Size column in network tab - looks like "X B" or "X KB"]

### 4. how long did it take to download?

quick, prob under 50ms over a fast connection.
> [TODO check the Time column in network tab and put exact ms here]

### 5. what is the User-Agent?

something like:
`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/[version] Safari/537.36`

> [TODO copy your actual User-Agent from the request headers - depends on your OS/browser]

### 6. what server is this site hosted on?

GitHub.com (the lab is hosted on github pages).

### 7. when was the file last modified?

> [TODO check the Last-Modified header in the response headers tab]

### 8. what kind of content is the file?

`application/json`

### 9. where is the function that requested the file located?

the `fetchData()` function inside `index.html` (or whatever script file is referenced).
> [TODO confirm function name - check the initiator's call stack]
