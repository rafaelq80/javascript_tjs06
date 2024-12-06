function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Troca os elementos de posição
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      n--; // Reduz o número de comparações em cada iteração
    } while (swapped);
  
    return arr;
  }
  
  // Exemplo de uso
  let array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array original:", array);
  console.log("Array ordenado:", bubbleSort(array));
  