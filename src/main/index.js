import app from '../infra/app'

const { PORT } = process.env

app.listen(PORT || 3000, () => {
  console.log(`Listening on port: ${PORT}`)
})
