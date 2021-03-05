const auth = require('../../../firebase/auth')

module.exports = async (req, resp) => {
  auth.get(req.params.id)
    .then((user) => {
      resp.status(200).send(user.toJSON())
      console.log(`Successfully fetched user data: ${user.toJSON()}`);
    })
    .catch((error) => {
      resp.status(400).json({'error': error.code})
      console.log('Error fetching user data:', error.code);
    });
};
