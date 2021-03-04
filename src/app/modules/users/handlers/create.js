const firestore = require('../../../firebase/firestore')
const validateFields = (body) => {
  const { /* campos */} = body;
  const errors = [];
  return errors;
};

module.exports = async (req, resp) => {
  const { email, password } = req.body;
  const errors = validateFields(req.body);

  if (errors.length) {
    return resp
      .status(400)
      .json(
        FUNCTIONS.objectReturn('Data is invalid', errors, false, 400),
      );
  }

  try {
		firestore.create()
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
