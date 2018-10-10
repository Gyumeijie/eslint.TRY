#  ESLint

ESLint is designed to be completely configurable, meaning you can turn off every rule and run only with basic syntax validation, or mix and match the bundle rules and you custom rules to make ESLint perfect for you project.

There are several pieces of information that can be configured:

##### #1 Environments
Which environments your script is designed to run in. Each environment brings with it a certain set of ***predefined global variables***.
> e.g.: `process` in node and `window` in browser.

##### #2 Globals :star:
The ***additional*** (self-defined) global variables your script accesses during execution.

To configure global variables inside of a configuration file, use the `globals` key and indicate the global variables you want to use. Set each global variable name equal to true to allow the variable to be overwritten or false to disallow overwriting.
```json
{
  "globals": {
     "var1": true,
     "var2": false
   }
}
```

##### #3 Rules
 Which rules are enabled and at what error level. 
```json
 "rules": {
    "indent": [ "error", 2]
 }
```
 
- "off" or 0 - turn the rule off
- "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
- "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)


## Plugin

Plugins can expose additional `rules` and `environments` for use in ESLint, and  you can  even bundle configurations inside a plugin.

```json
configs: {
    myConfig: {
        env: ["browser"],
        rules: {
            semi: 2
        }
    }
}
```