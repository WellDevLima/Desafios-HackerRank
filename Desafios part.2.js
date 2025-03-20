// Breaking Records

    function breakingRecords(scores) {
        let maior = scores[0];
        let menor = scores [0];
        let auxMaior = 0;
        let auxMenor = 0;
        
        for(let i = 0; i < scores.length; i++){
            if(maior < scores[i]){
                maior = scores[i];
                auxMaior++;
            }
            if(scores[i]< menor){
                menor = scores[i];
                auxMenor++;
            }
        }return [auxMaior, auxMenor]
    
    }

// Staircase

    function staircase(n) {
        for (let i = 1; i <= n; i++){
            let staircaseSpaceString = '';
            let staircaseString = '';
    
            for (let space = 0; space < n-i; space++){
                staircaseSpaceString += ' ';
            }
    
            for (let hash = 0; hash < i; hash++){
                staircaseString += '#';
            }
    
            console.log(staircaseSpaceString + staircaseString);
    
        }
    }

//Mini-Max Sum

    function miniMaxSum(arr) {
        // Write your code here
        let somaArr = arr.sort((a, b) => a - b);
        let minSoma = 0;
        let maxSoma = 0;
    
        for(let i=0; i<arr.length - 1; i++){
            minSoma += arr[i];
            maxSoma += arr[i + 1];
        }
        
        console.log(minSoma, maxSoma);
    }
    
//Birthday Cake Candles

    function birthdayCakeCandles(candles) {
        let maior = candles[0];
        let contador = 0; 
    
        for (let i = 0; i < candles.length; i++) { 
            if (candles[i] > maior) {
                maior = candles[i]; 
                contador = 1;
            } else if (candles[i] === maior) {
            contador++;
            }
        }
        
        return contador;
    }

//Grading Students
    function gradingStudents(grades) {
        // Write your code here
        let notaAlunos= [];
    
        for (let i = 0; i < grades.length; i++) {
            let nota = grades[i];
    
            if (nota < 38) {
                notaAlunos.push(nota);
            } else {
                let proximoMultiploDe5 = nota + (5 - (nota % 5));
    
                if (proximoMultiploDe5 - nota < 3) {
                    notaAlunos.push(proximoMultiploDe5);
                } else {
                    notaAlunos.push(nota);
                }
            }
        }
    
        return notaAlunos;
    }
