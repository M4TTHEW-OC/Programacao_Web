function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join('\t'));
    }
  }
  
  function matrixMultiplication(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (colsA !== rowsB) {
      console.log("Não é possível calcular a multiplicação das matrizes.");
      return null;
    }
  
    const resultMatrix = [];
  
    for (let i = 0; i < rowsA; i++) {
      resultMatrix[i] = [];
      for (let j = 0; j < colsB; j++) {
        resultMatrix[i][j] = 0;
        for (let k = 0; k < colsA; k++) {
          resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
  
    return resultMatrix;
  }
  
  const matrixA = [
    [1, 3],
    [2, 5]
  ];
  
  const matrixB = [
    [2, 2],
    [0, 1]
  ];
  
  const matrixC = matrixMultiplication(matrixA, matrixB);
  
  
  console.log("Matriz A:");
  printMatrix(matrixA);
  
  console.log("\nMatriz B:");
  printMatrix(matrixB);
  
  console.log("\nMatriz C (Resultado da multiplicação AxB):");
  if (matrixC) {
    printMatrix(matrixC);
  }