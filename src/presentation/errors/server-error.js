import ErrorCodes from './codes/100'

class InternalServerError extends Error {
  constructor(code, status = 500) {
    super('Internal error')
    this.message = ErrorCodes[code]
    this.status = status
    this.code = code
  }
}

export default InternalServerError
