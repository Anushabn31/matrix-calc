function multiplyMatrices() {
    const matrixA = document.getElementById('matrixA').value;
    const matrixB = document.getElementById('matrixB').value;
  
    // Convert entered matrix strings to 2D arrays
    const arrayA = matrixA.trim().split('\n').map(row => row.split(' ').map(Number));
    const arrayB = matrixB.trim().split('\n').map(row => row.split(' ').map(Number));
  
    const result = multiplyArrays(arrayA, arrayB);
    displayResult(result);
  }
  
  function multiplyArrays(arrA, arrB) {
    const rowsA = arrA.length;
    const colsA = arrA[0].length;
    const rowsB = arrB.length;
    const colsB = arrB[0].length;
  
    if (colsA !== rowsB) {
      return 'Matrices cannot be multiplied. Number of columns in Matrix A must be equal to the number of rows in Matrix B.';
    }
  
    const result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
      result[i] = new Array(colsB).fill(0);
    }
  
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          result[i][j] += arrA[i][k] * arrB[k][j];
        }
      }
    }
  
    return result;
  }
  
  function displayResult(result) {
    const resultDiv = document.getElementById('result');
    
    if (typeof result === 'string') {
      resultDiv.innerText = result;
    } else {
      resultDiv.innerText = 'Matrix Result:';
      const resultTable = document.createElement('table');
  
      result.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.innerText = cell;
          tr.appendChild(td);
        });
        resultTable.appendChild(tr);
      });
  
      resultDiv.appendChild(resultTable);
    }
  }
  