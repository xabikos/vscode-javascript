'use strict';

module.exports = function(semi) {
  const character = semi ? ';' : '';

  return {
    import: {
      prefix: 'imp',
      body: "import ${2:moduleName} from '${1:module}'" + character + '$0',
      description: 'Imports entire module statement in ES6 syntax'
    },
    importNoModuleName: {
      prefix: 'imn',
      body: "import '${1:module}'" + character + '$0',
      description: 'Imports entire module in ES6 syntax without module name'
    },
    importDestructing: {
      prefix: 'imd',
      body: "import { $2 } from '${1:module}'" + character + '$0',
      description: 'Imports only a portion of the module in ES6 syntax'
    },
    importEverything: {
      prefix: 'ime',
      body: "import * as ${2:alias} from '${1:module}'" + character + '$0',
      description: 'Imports everything as alias from the module in ES6 syntax'
    },
    importAs: {
      prefix: 'ima',
      body:
        "import { ${2:originalName} as ${3:alias} } from '${1:module}'" +
        character +
        '$0',
      description:
        'Imports a specific portion of the module by assigning a local alias in ES6 syntax'
    },
    exportNamedFunction: {
      prefix: 'enf',
      body:
        'export const ${1:functionName} = (${2:params}) =>  {\n\t$0\n}' +
        character +
        '\n',
      description: 'Export named function in ES6 syntax'
    },
    exportDefaultFunction: {
      prefix: 'edf',
      body: 'export default (${1:params}) =>  {\n\t$0\n}' + character + '\n',
      description: 'Export default function in ES6 syntax'
    },
    exportClass: {
      prefix: 'ecl',
      body: 'export default class ${1:className} {\n\t$0\n}' + character + '\n',
      description: 'Export default class in ES6 syntax'
    },
    exportClassExtends: {
      prefix: 'ece',
      body:
        'export default class ${1:className} extends ${2:baseclassName} {\n\t$0\n}' +
        character +
        '\n',
      description: 'Export default class which extends a base one in ES6 syntax'
    },
    constructor: {
      prefix: 'con',
      body: 'constructor(${1:params}) {\n\t${0}\n}',
      description: 'Add default constructor in a class in ES6 syntax'
    },
    method: {
      prefix: 'met',
      body: '${1:methodName}(${2:params}) {\n\t${0}\n}',
      description: 'Creates a method inside a class in ES6 syntax'
    },
    propertyGet: {
      prefix: 'pge',
      body: 'get ${1:propertyName}() {\n\treturn this.${0}' + character + '\n}',
      description: 'Creates a getter property inside a class in ES6 syntax'
    },
    propertyset: {
      prefix: 'pse',
      body: 'set ${1:propertyName}(${2:value}) {\n\t${0}' + character + '\n}',
      description: 'Creates a setter property inside a class in ES6 syntax'
    },
    forEach: {
      prefix: 'fre',
      body: '${1:array}.forEach(${2:currentItem} => {\n\t${0}\n})' + character,
      description: 'Creates a forEach statement in ES6 syntax'
    },
    forOf: {
      prefix: 'fof',
      body: 'for (const ${1:item} of ${2:object}) {\n\t${0}\n}',
      description: 'Iterating over property names of iterable objects'
    },
    forIn: {
      prefix: 'fin',
      body: 'for (const ${1:item} in ${2:object}) {\n\t${0}\n}',
      description: 'Iterating over property values of iterable objects'
    },
    anonymousFunction: {
      prefix: 'anfn',
      body: '(${1:params}) => {\n\t${2}\n}',
      description: 'Creates an anonymous function in ES6 syntax'
    },
    namedFunction: {
      prefix: 'nfn',
      body: 'const ${1:name} = (${2:params}) => {\n\t${3}\n}',
      description: 'Creates a named function in ES6 syntax'
    },
    destructingObject: {
      prefix: 'dob',
      body: 'const {${1:propertyName}} = ${2:objectToDestruct}' + character,
      description:
        'Creates and assigns a local variable using object destructing'
    },
    destructingArray: {
      prefix: 'dar',
      body: 'const [${1:propertyName}] = ${2:arrayToDestruct}' + character,
      description:
        'Creates and assigns a local variable using array destructing'
    },
    setInterval: {
      prefix: 'sti',
      body: 'setInterval(() => {\n\t${2}\n}, ${0:intervalInms})' + character,
      description:
        'Executes the given function at specified intervals in ES6 syntax'
    },
    setTimeOut: {
      prefix: 'sto',
      body: 'setTimeout(() => {\n\t${2}\n}, ${1:delayInms})' + character,
      description:
        'Executes the given function after the specified delay in ES6 syntax'
    },
    promise: {
      prefix: 'prom',
      body: 'return new Promise((resolve, reject) => {\n\t${1}\n})' + character,
      description:
        'Creates and returns a new Promise in the standard ES6 syntax'
    },
    consoleAssert: {
      prefix: 'cas',
      body: 'console.assert(${1:expression}, ${2:object})' + character,
      description:
        'If the specified expression is false, the message is written to the console along with a stack trace'
    },
    consoleClear: {
      prefix: 'ccl',
      body: 'console.clear()' + character,
      description: 'Clears the console'
    },
    consoleCount: {
      prefix: 'cco',
      body: 'console.count(${1:label})' + character,
      description:
        'Writes the the number of times that count() has been invoked at the same line and with the same label'
    },
    consoleDir: {
      prefix: 'cdi',
      body: 'console.dir(${1:object})' + character,
      description: 'Prints a JavaScript representation of the specified object'
    },
    consoleError: {
      prefix: 'cer',
      body: 'console.error(${1:object})' + character,
      description:
        'Displays a message in the console and also includes a stack trace from where the method was called'
    },
    consoleGroup: {
      prefix: 'cgr',
      body: 'console.group("${1:label}")' + character,
      description:
        'Groups and indents all following output by an additional level, until console.groupEnd() is called.'
    },
    consoleGroupEnd: {
      prefix: 'cge',
      body: 'console.groupEnd()' + character,
      description: 'Closes out the corresponding console.group().'
    },
    consoleLog: {
      prefix: 'clg',
      body: 'console.log(${1:object})' + character,
      description: 'Displays a message in the console'
    },
    consoleTrace: {
      prefix: 'ctr',
      body: 'console.trace(${1:object})' + character,
      description:
        'Prints a stack trace from the point where the method was called'
    },
    consoleWarn: {
      prefix: 'cwa',
      body: 'console.warn(${1:object})' + character,
      description:
        'Displays a message in the console but also displays a yellow warning icon along with the logged message'
    },
    consoleInfo: {
      prefix: 'cin',
      body: 'console.info(${1:object})' + character,
      description:
        'Displays a message in the console but also displays a blue information icon along with the logged message'
    },
    consoleTable: {
      prefix: 'clt',
      body: 'console.table(${1:object})' + character,
      description: 'Displays tabular data as a table.'
    }
  };
};
