const auth = require('../../../firebase/auth')

module.exports = async (req, resp) => {
  try {
		auth.get(req.params.id).then((user) => {
			resp.send(user.toJSON())
			console.log(`Successfully fetched user data: ${user.toJSON()}`);
		})
		.catch((error) => {
			resp.send('error')
			console.log('Error fetching user data:', error);
		});
  } catch (error) {
    console.log(error);
    return resp
      .status(400)
      .json(
        FUNCTIONS.objectReturn(
          'Internal server error',
          error.message,
          false,
          400,
        ),
      );
  }
};
