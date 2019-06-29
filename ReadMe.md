# TypeProof

## Modules

### isA

**Usage**

Returns true or false for type. 

```js
let num = 6;
isA.number(num) //true
```

**Methods**
* object
* string
* array
* number
* function
* null
* undefined
* boolean
* regExp
* error
* date

### atIndex
**Usage**
```js
let arr = ["blue", "white", "red", "green"]
atIndex(2, arr); //red
```

**Supported Types**
* array
  * Returns item at index of array
* object
  * Returns item at key of object
* string
  * Returns character at index of string
* number
  * Return digit at index of number
  
## isEmpty
**Usage**
```js
let arr = ["blue", "white", "red", "green"]
isEmpty(2, arr); //red
```

**Supported Types**
* array
  * is empty if length is 0
* object
  * is empty if it has no keys
* string
  * is empty if length is 0
* number
  * is empty if it is equal to 0
  
