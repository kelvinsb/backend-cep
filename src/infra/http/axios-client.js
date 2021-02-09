import axios from 'axios'

class HttpRequest {
  async request({ url = null, method = 'get', body = {}, headers = {} }) {
    let axiosResponse
    try {
      axiosResponse = await axios.request({
        url: url,
        method: method,
        data: body,
        headers: headers,
      })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}

export default HttpRequest
