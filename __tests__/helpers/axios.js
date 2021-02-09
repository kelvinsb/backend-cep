export const createAxiosMock = (axios, status, data) => {
  return axios.request.mockResolvedValue({
    data: data,
    status: status,
  })
}
