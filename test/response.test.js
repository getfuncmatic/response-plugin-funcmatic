var Funcmatic = require('@funcmatic/funcmatic')
var ResponsePlugin = require('../lib/response')

var handler = Funcmatic.wrap(async (event, context, { res }) => {
  return res.json({ hello: "world" })
})

describe('Request', () => {
  beforeEach(() => {
    Funcmatic.clear()
  })
  it ('should return a ', async () => {
    Funcmatic.use(ResponsePlugin, { })
    var ret = await handler({ }, { })
    expect(ret).toMatchObject({
      statusCode: 200,
      headers: { 
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ hello: "world" }),
      isBase64Encoded: false
    })
    console.log("RET", ret)
  })
}) 