const createResponse = require('@funcmatic/lambda-response')

class ResponsePlugin {
  
  constructor() {
    this.name = 'res'
  }
  
  async start(conf) {
    this.name = conf.name || this.name
    this.conf = conf
  }
  
  async request(event, context) {
    context[this.name] = createResponse()
    return { event, context }
  }
}

module.exports = new ResponsePlugin()