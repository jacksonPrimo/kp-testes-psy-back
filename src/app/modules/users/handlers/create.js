const firestore = require('../../../firebase/firestore')
const auth = require('../../../firebase/auth')

module.exports = async (req, resp) => {
  const body = req.body
  const { email, password } = body;

  auth.create(email, password)
    .then((userRecord) => {
      body.id = userRecord.uid
      firestore.create(body).then(res=>{
        return resp.status(200).json({"message":"success"})
      })
      .catch((error)=>{
        console.log('Error creating new user:', error.code);
        return resp.status(400).json({"error": error.code});  
      })
    })
    .catch((error) => {
      console.log('Error creating new user:', error.code);
      return resp.status(400).json({"error": error.code});
    });
};
