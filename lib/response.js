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
    return { service: createResponse() }
  }
}

module.exports = new ResponsePlugin()