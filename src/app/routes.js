module.exports = (app) => {
  // app.use('/auth', require('./modules/authorization'));
  
  // app.use('/', (req, res)=>{
  //   res.send('API is working!')
  // });
  
  app.use('/users', require('./modules/users'));
  app.use('/auth', require('./modules/auth'));

  // If is not valid route
  app.use('/*', function (req, res) {
    res
      .status(404)
      .json(
        FUNCTIONS.objectReturn(
          'Rota não encrontrada',
          null,
          true,
          404,
        ),
      );
  });
};
