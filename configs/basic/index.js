// prefer-const
let a = 3
console.log(a)

// no-new-object
var myObject = new Object()

// object-shorthand
let x, y, z
var foo = {
   x: x,
   y: y,
   z: z,
};

// quote-props (only quote properties that are invalid identifiers) 
var object1 = {
   "foo": "bar",
   "baz": 42,
   "qux-lorem": true
};

// no-prototype-builtins
var hasBarProperty = foo.hasOwnProperty("bar");

// no-array-constructor
const array = Array(0, 1, 2)

// quotes (single)
var double = "double"

// prefer-template
var str = "Hello, " + name + "!";

// space-before-function-paren
// space-before-blocks
function foo_(bar){
   bar = 13;
}

// prefer-arrow-callback
foo(function(a) { return a; });

// arrow-spacing
(a)=>{}

