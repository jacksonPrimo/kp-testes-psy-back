const firestore = require('../../../firebase/firestore')

module.exports = async (req, resp) => {
  try {
		firestore.get(req.id).then(query=>{
			return resp.send(query.data())
		})
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
