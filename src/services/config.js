/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBOlzfI2KFofrzdabWQGNDnnNaBd0VIE_U",
  authDomain: "pvt-h21-luberisse-ludovick.firebaseapp.com",
  databaseURL: "https://pvt-h21-luberisse-ludovick-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-luberisse-ludovick",
  storageBucket: "pvt-h21-luberisse-ludovick.appspot.com",
  messagingSenderId: "148589257484",
  appId: "1:148589257484:web:6911a255da88076cc7df29",
  measurementId: "G-7E4KNNT45H"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";