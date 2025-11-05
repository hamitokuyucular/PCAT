const mongoose = require('mongoose');
const { Schema } = mongoose;

// connect DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

// creat Schema
const PhotoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  desc: String,
  size: Number
});

const Photo = mongoose.model('Photo', PhotoSchema);


//// CRUD

// create a photo
// Photo.create([
//   {
//     title: "Photo 2",
//     desc: "Description of Photo 2",
//     size: 700 
//   },
// ]);

// read photo
// async function getPhotos() {
//   try {
//     const data = await Photo.find({});
//     console.log('Veriler:', data);
//   } catch (err) {
//     console.error('Hata:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// }
// getPhotos();

// update a photo
// async function updatePhotos() {
//   try {
//     const updatedPhoto = await Photo.updateOne(
//       { title: "Photo 2"},      //koşul
//       {$set: {                  //değişiklik
//         title: "Photo 17", 
//         desc: "Description of Photo 17"
//       }},
//       // { new: true }        // Güncel halini döndür
//     );

//     console.log('Belge güncellendi.');

//     const allPhotos = await Photo.find();
//     console.log("Tüm Belgeler:")
//     allPhotos.forEach((photo) => console.log(photo));

//   } catch (error) {
//     console.log("HATA:", error)
//   } finally {
//     mongoose.connection.close();
//   }
// }
// updatePhotos();

// delete a photo
async function deletePhoto() {
  try {
    await Photo.deleteOne({ title: 'Photo 17' }); // koşula göre

    console.log('Belge silindi.');

    const allPhotos = await Photo.find();
    console.log("Tüm Belgeler:")
    allPhotos.forEach((photo) => console.log(photo));

  } catch (error) {
    console.log("HATA:", error)
  } finally {
    mongoose.connection.close();
  }
}
deletePhoto();
