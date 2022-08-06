import { getPrototypeChainProperties } from '.'

describe('getPrototypeChainProperties', () => {
  it('returns a hierarchical prototype chain structure', () => {
    expect(getPrototypeChainProperties(String)).toMatchInlineSnapshot(`
      {
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
            "bind": {
              "type": "function",
              "value": [Function],
            },
            "call": {
              "type": "function",
              "value": [Function],
            },
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
      }
    `)
  })
})
