# PRO-TYPESCRIPT-2017 Notes/Status
### Stuff to do
* https://medium.com/square-corner-blog/anders-hejlsberg-tech-talk-on-typescript-e77a438eaac5
## Introduction
### Transpile or compile
<p>
transpileing is compiling to another structure/language at the same level of abstraction
</p>

* Suprise areas 
    * Prototypal inheritance
        * Typescript solves problems by Adding classes, namespaces, modules, and interfaces

    * Equality and type juggling

        * TypeScript intrudeces type checking

    * Management of modules
        * TypeScript makes module loaders the default way of working
    * Scope
        * let and const variable declarations eliminate confusion cause by variable hosting, omission ofthe "var" keyword 
    * Lack of types
        * Development tools have difficulty providing anything beyond a reasonable guess as to variable type. TypeScript formalizes type information
* Tools
    * Gulp and Grunt are workflow tools
* Alternatives
    * Babel
        * no compile time checking 
    * Coffee Script
        * no static type checking 
        * top three of the "Most Dreaded Languages"

## Chapter 1: TypeScript Language Features
Javascript is valid TypeScript

<B>The "let" keyword lets variable names be reused in narrower scopes!</B>
* The recommended coding style is to start by using the const keyard for all variables and open a varialbe to reassignment with the let keyword if reassignment is allowed.  Least privilege principle.

*** Stuff thats done
