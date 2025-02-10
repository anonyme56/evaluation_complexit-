



// optimisation en faisant un mappage 
function findArtistId(artists, nom){
    const artistMap = new Map(artists.map(artist => [artist.nom, artist.id])); // clé - valeur 
    return artistMap.get(nom) || -1;
  }

  // Données de test
const artists = [
    { id: "1", nom: "indila" },
    { id: "2", nom: "ninho" },
    { id: "3", nom: "Travis Scott" },
    { id: "4", nom: "J. Cole" },
    { id: "5", nom: "test" },
  ];

console.log(findArtistId(artists, "Travis Scott")); // Retourne "3"
console.log(findArtistId(artists, "non")); // Retourne -1 inexistant






// optimisation en utilisant genre to stage 
function assignStages(artists, stages) {
    const genreToStage = {};
  
    // Créer un mappage genre -> scène
    for (let stage of stages) {
      for (let genre of stage.genres) {
        genreToStage[genre] = stage.id;
      }
    }
  
    // Assigner la scène à chaque artiste
    for (let artist of artists) {
      artist.stage = genreToStage[artist.genre] || ""; // Si genre trouvé, assigne la scène
    }
  }
  
  
  const artists2 = [
    { id: "1", name: "Drake", genre: "Rap", stage: "" },
    { id: "2", name: "Coldplay", genre: "Rock", stage: "" },
    { id: "3", name: "The Weeknd", genre: "Pop", stage: "" }
  ];
  
  const stages = [
    { id: "S1", name: "Stage 1", genres: ["Rap", "Hip-hop"] },
    { id: "S2", name: "Stage 2", genres: ["Rock", "Alternative"] },
    { id: "S3", name: "Stage 3", genres: ["Pop", "Electronic"] }
  ];
  

assignStages(artists2, stages);
console.log(artists2);





// Définition des algorithmes à tester

function containsDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  function findCommonElements(array1, array2) {
    let commonElements = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          commonElements.push(array1[i]);
        }
      }
    }
    return commonElements;
  }
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Créer un test
  const tester = new AlgorithmTester('Test des algorithmes');
  
  // Ajouter des versions d'algorithmes
  tester.addAlgorithm('Contains Duplicate', containsDuplicate);
  tester.addAlgorithm('Find Common Elements', findCommonElements);
  tester.addAlgorithm('Fibonacci', fibonacci);
  
  // Configurer le nombre d'exécutions
  tester.setExecutions(5);
  
  // Exécuter le test avec les mêmes paramètres pour chaque version
  tester.runTests([1, 2, 3, 4, 5]); // Exemple de paramètre : tableau d'entiers