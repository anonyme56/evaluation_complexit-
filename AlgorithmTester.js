class AlgorithmTester {
    constructor(testName) {
      this.testName = testName;
      this.algorithms = [];
      this.executions = 1; // Nombre d'exécutions par version
    }
  
    // Ajouter une version d'algorithme
    addAlgorithm(versionName, algorithm) {
      this.algorithms.push({ versionName, algorithm });
    }
  
    // Configurer le nombre d'exécutions pour chaque version
    setExecutions(count) {
      this.executions = count;
    }
  
    // Exécuter chaque algorithme et mesurer le temps
    runTests(params) {
      const results = [];
      
      for (const { versionName, algorithm } of this.algorithms) {
        const times = [];
        
        // Exécuter l'algorithme plusieurs fois
        for (let i = 0; i < this.executions; i++) {
          const start = performance.now();
          algorithm(params); // Exécution de l'algorithme
          const end = performance.now();
          times.push(end - start);
        }
        
        // Calculer la performance moyenne
        const avgTime = times.reduce((acc, time) => acc + time, 0) / times.length;
        results.push({ versionName, avgTime });
      }
  
      this.displayResults(results);
    }
  
    // Afficher les résultats
    displayResults(results) {
      console.log(`Test: ${this.testName}`);
      results.forEach(({ versionName, avgTime }) => {
        console.log(`${versionName}: ${avgTime.toFixed(2)} ms`);
      });
  
      const fastest = results.reduce((prev, curr) => (prev.avgTime < curr.avgTime ? prev : curr));
      const slowest = results.reduce((prev, curr) => (prev.avgTime > curr.avgTime ? prev : curr));
      
      console.log(`Fastest: ${fastest.versionName} with ${fastest.avgTime.toFixed(2)} ms`);
      console.log(`Slowest: ${slowest.versionName} with ${slowest.avgTime.toFixed(2)} ms`);
    }
  }