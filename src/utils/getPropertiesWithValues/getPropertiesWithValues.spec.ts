import { getPropertiesWithValues } from '.'

describe('getPropertiesWithValues', () => {
  it('return an object with propery, value pairs', () => {
    expect(getPropertiesWithValues(String)).toMatchInlineSnapshot(`
      {
        "fromCharCode": {
          "type": "function",
          "value": [Function],
        },
        "fromCodePoint": {
          "type": "function",
          "value": [Function],
        },
        "length": {
          "type": "number",
          "value": 1,
        },
        "name": {
          "type": "string",
          "value": "String",
        },
        "prototype": {
          "type": "object",
          "value": String {},
        },
        "raw": {
          "type": "function",
          "value": [Function],
        },
      }
    `)
  })
})
