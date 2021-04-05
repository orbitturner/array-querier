# 🟢 Array Querier 🔎
[![Compatible Status](https://img.shields.io/badge/works%20with-typescript-blue)](https://www.npmjs.com/package/array-querier)
[![Compatible Status](https://img.shields.io/badge/works%20with-javascript-blue)](https://www.npmjs.com/package/array-querier)
[![Issues Status](https://img.shields.io/github/issues/orbitturner/array-querier)](https://www.npmjs.com/package/array-querier)
[![npm version](https://img.shields.io/npm/v/array-querier.svg)](https://www.npmjs.com/package/array-querier) [![license](https://img.shields.io/npm/l/array-querier.svg)](https://www.npmjs.com/package/array-querier)

**Array-Querier** is a TS/JS [NPM](http://npmjs.com/) Package to Filter an Array of objects with multiple match-criteria.

<p align="center">
  <a href="http://orbitturner.com/"><img src="https://raw.githubusercontent.com/orbitturner/ORBIT_SUGAR_CODES/master/assets/arrayQuerier.png" width="auto" alt="array-querier COVER"/></a>
</p>


<h1 align="center">INSTALLATION</h1>
<p align="center">
<a href="https://www.npmjs.com/package/array-querier"><img src="https://img.shields.io/badge/DOWNLOAD-LATEST%20VERSION-lime?style=for-the-badge&logo=docusign&logoColor=lime"></a>
<a href="https://github.com/orbitturner/array-querier/issues/new/choose"><img src="https://img.shields.io/badge/ISSUES-CREATE%20AN%20ISSUE-crimson?style=for-the-badge&logo=indeed&logoColor=CRIMSON"></a>
</p>
<br/>

___
## Contents
- [array-querier](#array-querier)
  * [What is this Library for?](#what-is-this-library-for-)
  * [Key Features](#key-features)
  * [Installation](#installation)
  * [Usage: Standalone](#usage--standalone)
  * [Usage: Injection](#usage--injection)
  * [Configuration Options](#configuration-options)
    + [`tokenGetter: function(HttpRequest): string`](#-tokengetter--function-httprequest---string-)
    + [`allowedDomains: array`](#-alloweddomains--array-)
    + [`disallowedRoutes: array`](#-disallowedroutes--array-)
    + [`headerName: string`](#-headername--string-)
    + [`authScheme: string | function(HttpRequest): string`](#-authscheme--string---function-httprequest---string-)
    + [`throwNoTokenError: boolean`](#-thrownotokenerror--boolean-)
    + [`skipWhenExpired: boolean`](#-skipwhenexpired--boolean-)
  * [Using a Custom Options Factory Function](#using-a-custom-options-factory-function)
  * [Configuration for Ionic 2+](#configuration-for-ionic-2-)
  * [Configuration Options](#configuration-options-1)
    + [`JwtHelperService: service`](#-jwthelperservice--service-)
  * [isTokenExpired (old tokenNotExpired function)](#istokenexpired--old-tokennotexpired-function-)
  * [getTokenExpirationDate](#gettokenexpirationdate)
  * [decodeToken](#decodetoken)
  * [Contributing](#contributing)
  * [Issue Reporting](#issue-reporting)
  * [GREETINGS](#greetings)
  * [Author](#author)
  * [License](#license)

___

## 💨 What is this Library for? 🤔

**array-querier** is a small library that is useful for filtering a `One Level or Multi Level Depth` array of objects with `multiple match-criteria`. The exposed methods **receives** an **array as the first argument**, and **a plain object describing the fields to filter as the last argument**.


> **Note:** This library can only be used with typescript or js but you already know that 🤦🏿‍♂️.



## Key Features

* Use it **without `Instanciation`**  because all the methods are `Static`.
* **Multi Level Depth Filtering** with complex filtering condition.
* Optimized for Great Performance even with **Big Fat @/@ Arrays** of Objects.
* ✅ TOO EASY TO USE !! 🥳🥳

___

## Installation

```bash
# installation with npm
npm install array-querier

# or you may prefer
npm i --save array-querier

# installation with yarn
yarn add array-querier
```

**This HELPER relies on NOTHING SO YOU DON'T NEED ADDITIONNAL PACKAGES.**

___
### One-Level vs Multi-Level Depth JSON ?

A JSON depth level is just an nesting of another object within a current JSON object.
For example :
If you have a User object as follows ->
```json
// Nested Object Planet in User
User = {
    "name": "Orbit",
    "age": 21,
    "planet": {
        "id": 4,
        "codename" : "Shadow-Coders",
        "galaxyName" : "Turner"
    }   
}
```
**Then User is an Array of two level Depth.**

Of course if you don't have any nested object then you got an One level Depth.
___



## ⚙ Usage: One-Level Depth Arrays (Simple Arrays) 🎚

### ➤ Querier.filterSimpleArray(yourData, filterObject); 🟢

If you are only interested in filtering an simple array of **JSON objects** directly:

```ts
import {Querier} from 'array-querier/lib/orbiter';

/**
 * Your array of JSON Objects.
 * This can be pulled directly from your Backend Rest API.
 */
const products = [
  { name: 'A', color: 'Blue', size: 50 },
  { name: 'B', color: 'Blue', size: 60 },
  { name: 'C', color: 'Black', size: 70 },
  { name: 'D', color: 'Green', size: 50 },
];

// ⚠ You need a Filter Object to make your condition ⚠
const filters = {
  color: ['BLUE', 'black'],
  size: [70, 50],
};

/**
 * Calling Simple Array Filterer In Query.
 * Filters an array of objects (one level-depth) with multiple criteria.
 * The function returns an array of the same type as the input array.
 */
const MyFilteredResult = Querier.filterSimpleArray(products, filters);

console.table(MyFilteredResult);
/* 🟢 The Result Will Be :🟢
      { name: 'A', color: 'Blue', size: 50 },
      { name: 'C', color: 'Black', size: 70 },
 */
```
> **⚠ Note: ⚠** The `filterSimpleArray` method **IS NOT** **Case-Sensitive** 🚨.

___
## ⚙ Usage: Multi-Level Depth Arrays (Complex Arrays) 🎛

### ➤ Querier.filterComplexArray(yourData, filterObject); 🟢

In everyday life, as developers, our JSON arrays are often very complex because of foreign keys and / or the nesting of objects that allow us to better describe our entities.

In this case this Method is the most appropriate because it allows to apply very advanced filters to our Array regardless of the depth level. 

```ts
import {Querier} from 'array-querier/lib/orbiter';

/**
 * Your Complex array of JSON Objects.
 * This can be pulled directly from your Backend Rest API.
 */
const products = [
  { name: 'Orbit', color: 'Blue', size: 50, locations: ['USA', 'Europe'], details: { length: 20, width: 70 } },
  { name: 'Galsen', color: 'Blue', size: 60, locations: [], details: { length: 20, width: 70 } },
  { name: 'DaoudaBa', color: 'Black', size: 70, locations: ['Japan'], details: { length: 20, width: 71 } },
  { name: 'Mmnl', color: 'Green', size: 50, locations: ['USA'], details: { length: 20, width: 71 } },
];

// ⚠ Filter Object with complex conditions ⚠
const filters = {
  size: (size: number) => size === 50 || size === 70,
  color: (color: string) => ['blue', 'black'].includes(color.toLowerCase()),
  locations: (locations: any[]) => locations.find(x => ['JAPAN', 'USA'].includes(x.toUpperCase())),
  details: (details: { length: number; width: number; }) => details.length < 30 && details.width >= 70,
};

/**
 * Calling Simple Array Filterer In Query.
 * Filters an array of objects (one level-depth) with multiple criteria.
 * The function returns an array of the same type as the input array.
 */
const MyFilteredResult = Querier.filterComplexArray(products, filters);

console.table(MyFilteredResult);
/* 🟢 The Result Will Be :🟢
      { name: 'A', color: 'Blue', size: 50, locations: ['USA', 'Europe'], details: { length: 20, width: 70 } },
      { name: 'C', color: 'Black', size: 70, locations: ['Japan'], details: { length: 20, width: 71 } },
 */
```

**The Filter can be more complex and advance like the following use case case :**

```ts
...

// ⚠ Filter Object with VERY Complex Conditions 🏃🏾‍♂️🏃🏾‍♂️⚠
const filters = {
  size: (size: number) => size === 50 || size === 70,
  color: (color: string) => ['blue', 'black'].includes(color.toLowerCase()),
  details: (details: { length: number; width: number; }) => details.length < 30 && details.width >= 70,
  locations: (locations: string | string[]) => {
    if (locations.includes('USA')) { return true; } // case sensitive
    if (locations.includes('Japan')) { return true; } // case sensitive

    const url = window.location.pathname.toLowerCase();
    if (url.includes('/en-us/')) { return true; } // not case sensitive
    if (url.includes('/es/')) { return true; } // not case sensitive
    return false;
  }
};

const MyFilteredResult = Querier.filterComplexArray(products, filters);
```

<br/>
✨🤗 AS I SAID BEFORE : EASYYY 🤗✨

___
## Configuration Options

*Coming Soon !*
___
## Contributing ❤

👋🏾 Pull requests are welcome! 
___

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](mailto:support@orbitturner.com) details the procedure for disclosing security issues.
___

## GREETINGS
❤❤ *Coming Soon !* ❤❤

___
## Author

[Orbit Turner](https://orbitturner.com)

___
## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
______________________________________________________
**❤ MADE WITH LOVE ❤**

![Image of OT](https://raw.githubusercontent.com/orbitturner/orbitturner/master/LOGO-OT.png)

<img src="https://github.com/orbitturner/challenger/blob/master/images/OrbitTurner_Gaming_GitHubBadge.png?raw=true" align="right" />
