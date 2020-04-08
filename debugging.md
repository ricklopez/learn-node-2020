#### Inspector
Node.js includes a debugging utility accessible via a V8 Inspector and built-in debugging client.

- `cont`: Continues the execution to the next break
- `next`: Steps to the next line
- `repl`: Allows code to be evaluated remotely
- `step`: Allows you to step into the execution of a function
- `out`: Step out of a function
- `pause`: Pause running code 

> [Learn More](https://nodejs.org/api/debugger.html)

#### Watchers
Watchers are available to help you watch expression and variable values while debugging. On every breakpoint, item from the watchers list will be evaluated in the current context (scope) and displayed immediately.

- `watch('my_expression')`: adds an expression to the watch list
- `watchers`:  will print the active watchers
- `unwatch('my_expression')`: removes an expression from the watchlist

#### More
- `backtrace`: Displays the backtrace of current execution context (frame)
- `list(n)`: Lists script source code with `n` lines in context
- `restart`: Restarts the script
- `kill`: Kills the script


> All Node Devs Should Read This! [Security Consideration](https://nodejs.org/en/docs/guides/debugging-getting-started/)

#### Where to go from here
- [Use Debugger In Chrome](https://nodejs.org/api/debugger.html#debugger_advanced_usage)
- [Debug Node in VS Studio](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- [Debug Node in WebStorm](https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html)