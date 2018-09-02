var funcmatic = require('@funcmatic/funcmatic')
var ResponsePlugin = require('../lib/response')

funcmatic.use(ResponsePlugin)

describe('Request', () => {
  beforeEach(() => {
  })
  it ('should return json', async () => {
    var event = { }
    var context = { }
    var res = await funcmatic.invoke(event, context, async (event, context, { res }) => {
      expect(res).toBeTruthy()
      return res.json({ hello: "world" })
    })
    expect(res).toMatchObject({
      statusCode: 200,
      headers: { 
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ hello: "world" }),
      isBase64Encoded: false
    })
  })
}) 