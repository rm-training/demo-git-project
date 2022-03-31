# Simple Calc Project

Demo project for several potential things...

1. Cherry Pick

There's a `refactoring` branch on which someone added the Division functionality (along with their refactoring). Can we split that out so it can be released on its own?

Looks like tests don't all pass, anything we can do?

2. Searching

When did we last affect the `add()` function?

- When was it created?
- When was it last updated?

```
git log -S "add()" --oneline -- lib/calculator.js
git log -S "add()" --oneline --reverse
```
