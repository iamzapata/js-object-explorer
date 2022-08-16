import { getObjectInformation } from '.'

describe('getObjectInformation', () => {
  it('returns an object with the ObjecInfo shape', () => {
    const objectInfo = getObjectInformation(Object)

    expect(objectInfo).toMatchInlineSnapshot(`
      {
        "[[Prototype]]": [Function],
        "constructor": "Function",
        "flatPrototypeChainProperties": [
          {
            "constructor": "Function",
            "name": "[object Function]",
            "properties": {
              "apply": {
                "type": "function",
                "value": [Function],
              },
              "arguments": "Throws TypeError",
              "bind": {
                "type": "function",
                "value": [Function],
              },
              "call": {
                "type": "function",
                "value": [Function],
              },
              "caller": "Throws TypeError",
              "constructor": {
                "type": "function",
                "value": [Function],
              },
              "length": {
                "type": "number",
                "value": 0,
              },
              "name": {
                "type": "string",
                "value": "",
              },
              "toString": {
                "type": "function",
                "value": [Function],
              },
            },
            "type": "function",
          },
          {
            "constructor": "Object",
            "name": "[object Object]",
            "properties": {
              "__defineGetter__": {
                "type": "function",
                "value": [Function],
              },
              "__defineSetter__": {
                "type": "function",
                "value": [Function],
              },
              "__lookupGetter__": {
                "type": "function",
                "value": [Function],
              },
              "__lookupSetter__": {
                "type": "function",
                "value": [Function],
              },
              "__proto__": {
                "type": "object",
                "value": null,
              },
              "constructor": {
                "type": "function",
                "value": [Function],
              },
              "hasOwnProperty": {
                "type": "function",
                "value": [Function],
              },
              "isPrototypeOf": {
                "type": "function",
                "value": [Function],
              },
              "propertyIsEnumerable": {
                "type": "function",
                "value": [Function],
              },
              "toLocaleString": {
                "type": "function",
                "value": [Function],
              },
              "toString": {
                "type": "function",
                "value": [Function],
              },
              "valueOf": {
                "type": "function",
                "value": [Function],
              },
            },
            "type": "object",
          },
        ],
        "name": "Object",
        "ownProperties": {
          "assign": {
            "type": "function",
            "value": [Function],
          },
          "create": {
            "type": "function",
            "value": [Function],
          },
          "defineProperties": {
            "type": "function",
            "value": [Function],
          },
          "defineProperty": {
            "type": "function",
            "value": [Function],
          },
          "entries": {
            "type": "function",
            "value": [Function],
          },
          "freeze": {
            "type": "function",
            "value": [Function],
          },
          "fromEntries": {
            "type": "function",
            "value": [Function],
          },
          "getOwnPropertyDescriptor": {
            "type": "function",
            "value": [Function],
          },
          "getOwnPropertyDescriptors": {
            "type": "function",
            "value": [Function],
          },
          "getOwnPropertyNames": {
            "type": "function",
            "value": [Function],
          },
          "getOwnPropertySymbols": {
            "type": "function",
            "value": [Function],
          },
          "getPrototypeOf": {
            "type": "function",
            "value": [Function],
          },
          "hasOwn": {
            "type": "function",
            "value": [Function],
          },
          "is": {
            "type": "function",
            "value": [Function],
          },
          "isExtensible": {
            "type": "function",
            "value": [Function],
          },
          "isFrozen": {
            "type": "function",
            "value": [Function],
          },
          "isSealed": {
            "type": "function",
            "value": [Function],
          },
          "keys": {
            "type": "function",
            "value": [Function],
          },
          "length": {
            "type": "number",
            "value": 1,
          },
          "name": {
            "type": "string",
            "value": "Object",
          },
          "preventExtensions": {
            "type": "function",
            "value": [Function],
          },
          "prototype": {
            "type": "object",
            "value": {},
          },
          "seal": {
            "type": "function",
            "value": [Function],
          },
          "setPrototypeOf": {
            "type": "function",
            "value": [Function],
          },
          "values": {
            "type": "function",
            "value": [Function],
          },
        },
        "prototype": {
          "__defineGetter__": {
            "type": "function",
            "value": [Function],
          },
          "__defineSetter__": {
            "type": "function",
            "value": [Function],
          },
          "__lookupGetter__": {
            "type": "function",
            "value": [Function],
          },
          "__lookupSetter__": {
            "type": "function",
            "value": [Function],
          },
          "__proto__": {
            "type": "object",
            "value": null,
          },
          "constructor": {
            "type": "function",
            "value": [Function],
          },
          "hasOwnProperty": {
            "type": "function",
            "value": [Function],
          },
          "isPrototypeOf": {
            "type": "function",
            "value": [Function],
          },
          "propertyIsEnumerable": {
            "type": "function",
            "value": [Function],
          },
          "toLocaleString": {
            "type": "function",
            "value": [Function],
          },
          "toString": {
            "type": "function",
            "value": [Function],
          },
          "valueOf": {
            "type": "function",
            "value": [Function],
          },
        },
        "prototypeChainProperties": {
          "0": {
            "1": {
              "constructor": "Object",
              "name": "[object Object]",
              "properties": {
                "__defineGetter__": {
                  "type": "function",
                  "value": [Function],
                },
                "__defineSetter__": {
                  "type": "function",
                  "value": [Function],
                },
                "__lookupGetter__": {
                  "type": "function",
                  "value": [Function],
                },
                "__lookupSetter__": {
                  "type": "function",
                  "value": [Function],
                },
                "__proto__": {
                  "type": "object",
                  "value": null,
                },
                "constructor": {
                  "type": "function",
                  "value": [Function],
                },
                "hasOwnProperty": {
                  "type": "function",
                  "value": [Function],
                },
                "isPrototypeOf": {
                  "type": "function",
                  "value": [Function],
                },
                "propertyIsEnumerable": {
                  "type": "function",
                  "value": [Function],
                },
                "toLocaleString": {
                  "type": "function",
                  "value": [Function],
                },
                "toString": {
                  "type": "function",
                  "value": [Function],
                },
                "valueOf": {
                  "type": "function",
                  "value": [Function],
                },
              },
              "type": "object",
            },
            "constructor": "Function",
            "name": "[object Function]",
            "properties": {
              "apply": {
                "type": "function",
                "value": [Function],
              },
              "arguments": "Throws TypeError",
              "bind": {
                "type": "function",
                "value": [Function],
              },
              "call": {
                "type": "function",
                "value": [Function],
              },
              "caller": "Throws TypeError",
              "constructor": {
                "type": "function",
                "value": [Function],
              },
              "length": {
                "type": "number",
                "value": 0,
              },
              "name": {
                "type": "string",
                "value": "",
              },
              "toString": {
                "type": "function",
                "value": [Function],
              },
            },
            "type": "function",
          },
        },
        "type": "function",
      }
    `)
  })
})
