const DefaultRoutes = (router) => {
  router.get('/', (req, res) => res.status(200).json({}))
}

export default DefaultRoutes
