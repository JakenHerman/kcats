# kcats
A stack implementation for node

[![NPM](https://nodei.co/npm/kcats.png)](https://nodei.co/npm/kcats/)

## Installation

`npm install kcats`

## Usage 
`var kcats = require("kcats")`
Then use `var stack_name = new kcats(10);` where `10`, here, is the maximum size of the stack.

## API
 - `stack_name._isEmpty()` -> Boolean : Determines whether or not the stack contains anything.
 - `stack_name._reset()` -> Void : Allows you to instantaneously pop all elements, without printing them.
 - `stack_name._isFull()` -> Boolean : Determines whether or not the stack is full.
 - `stack_name._push(item)` -> Void : Allows you to add an item to the stack.
 - `stack_name._pop()` -> Item : Allows you to retrieve the element at the top of the stack.
 - `stack_name._peek()` -> Item : Allows you to print the element at the top of the stack without removing it.
