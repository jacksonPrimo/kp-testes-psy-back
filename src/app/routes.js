module.exports = (app) => {

  app.get('/ping', (req, res)=>{
    res.send('API is working!')
  })

  app.use('/users', require('./modules/users'));
  app.use('/auth', require('./modules/auth'));

  // If is not valid route
  app.use('/*', function (req, res) {
    res
      .status(404)
      .json({"error": "Rota não encontrada"})
  });
};
