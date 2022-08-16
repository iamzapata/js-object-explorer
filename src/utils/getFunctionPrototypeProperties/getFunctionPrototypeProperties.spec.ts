import { getFunctionPrototypeProperties } from '.'

describe('getFunctionPrototypeProperties', () => {
  it('returns on object containing properties grouped by own properties and prototype chain properties', () => {
    expect(getFunctionPrototypeProperties(Boolean)).toMatchInlineSnapshot(`
      {
        "constructor": {
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
      }
    `)
  })
})
