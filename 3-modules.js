// CommonJS, every file is module (by default)
//Modules - Encapsulated Code (Only share minimum)
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavout')
require('./7-mindGrenade')
sayHi("Susan")
sayHi(john)
sayHi(peter)