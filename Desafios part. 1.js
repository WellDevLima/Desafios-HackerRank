// Solve Me First

    function solveMeFirst(a, b) {
    let soma;
    soma = a + b
    
    return soma;

}

// Simple Array Sum

    function simpleArraySum(ar) {
    
    let somaLista = 0;
     
     for(let i = 0; i <ar.length; i++){
        somaLista = somaLista + ar[i];
     }
     return somaLista;
    }

// Compare the Triplets

    function compareTriplets(a, b) {
    
    let aliceAndBob = [0, 0]
    
    for(let i = 0; i < 3; i++){
        if (a[i] > b[i]){
            aliceAndBob[0] += 1;
            /* aliceAndBob[0] = aliceAndBob[0] + 1; */
        }if (b[i] > a[i]){
            aliceAndBob[1] += 1;
        }
        
    }return aliceAndBob;
    }

// A Very Big Sum

    function aVeryBigSum(ar) {
    
    let soma = 0n;
    for (let i=0; i <ar.length; i++){
        soma += BigInt(ar[i]);
    }
    
    return soma;
    }
    
// Diagonal Difference
    
    function diagonalDifference(arr) {
    
    let rightDiagonal = 0;
    let leftDiagonal = 0;
    
    for(let i = 0; i < arr.length; i++){
        rightDiagonal = rightDiagonal + arr[i][i];
        leftDiagonal = leftDiagonal + arr[i][arr.length - i -1];
        
    }return Math.abs(rightDiagonal - leftDiagonal);
    }

// Plus Minus

    function plusMinus(arr) {
    // Write your code here
    let nmPositivo = 0;
    let nmNegativo = 0;
    let zero = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            nmPositivo++;
        } 
        else if (arr[i] < 0) {
            nmNegativo++;
        }
        else {
            zero++;
        }
    }

nmPositivo /= arr.length;
nmNegativo /= arr.length;
zero /= arr.length;

console.log(nmPositivo.toFixed(6));
console.log(nmNegativo.toFixed(6));
console.log(zero.toFixed(6));
}

