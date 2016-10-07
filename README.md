# kcats
A stack implementation for node

[![NPM](https://nodei.co/npm/kcats.png)](https://nodei.co/npm/kcats/)

[![Build Status](https://travis-ci.org/JakenHerman/kcats.svg?branch=master)](https://travis-ci.org/JakenHerman/kcats)

## Installation

`npm install kcats`

## Usage 
`var kcats = require("kcats")`
Then use `var stack_name = new kcats(10, 2);` where `10`, here, is the maximum size of the total stack space, and `2` is how many stacks are created. Multiple stacks are created in one array. So the array will be 10 spaces, and stack 1 will be array space 0-4, and stack 2 will be array space 5-9. Of course, there can be more than 2 stacks.

## API
 - `stack_name._isEmpty(stack_number)` -> Boolean : Determines whether or not the stack contains anything.
 - `stack_name._reset(stack_number)` -> Void : Allows you to instantaneously pop all elements, without printing them.
 - `stack_name._isFull(stack_number)` -> Boolean : Determines whether or not the stack is full.
 - `stack_name._push(item, stack_number)` -> Void : Allows you to add an item to the stack.
 - `stack_name._pop(stack_number)` -> Item : Allows you to retrieve the element at the top of the stack.
 - `stack_name._peek(stack_number)` -> Item : Allows you to print the element at the top of the stack without removing it.
