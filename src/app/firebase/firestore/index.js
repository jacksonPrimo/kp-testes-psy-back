const app = require('../app') 

const db = app.firestore();

collection = db.collection("testeapi")

module.exports = {
  getAll(){
    collection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {  
        console.log(`${doc.id} => ${doc.data().name}`);
      });
    });
  },
  get(id){
    return collection.doc('a123').get()
  },
  create(data){
    return collection.doc(data.id).set(data)
  }
}