document.addEventListener("DOMContentLoaded", function(){
    var matrix1 = document.querySelectorAll("div#matrix-1 input");
    var matrix2 = document.querySelectorAll("div#matrix-2 input");
    var matrix3 = document.querySelectorAll("div#matrix-3 div");
    // var selection = document.querySelectorAll("select");
    console.log(matrix1);
    document.querySelector("#operations").onchange = () => {
        var selection = document.querySelector("select");
        if(selection.options[selection.selectedIndex].value == "+"){
            const array1 = [];
            for(let i = 0; i<matrix1.length; i++){
                array1.push(Number(matrix1[i].value));
                // console.log(array1);
            }
            console.log(array1);
            const array2 = [];
            for(let i = 0; i<matrix2.length; i++){
                array2.push(Number(matrix2[i].value));
                // console.log(array1);
            }
            console.log(array2);
            const array3 = [];
            for(let i=0; i<array1.length; i++){
                // const array3 = [];
                array3.push(Number(array1[i] + array2[i]));
                // console.log(array3);
            }
            console.log(array3);

            for(let i = 0; i<matrix3.length; i++){
                matrix3[i].innerHTML = array3[i];
            }
        }
        else if(selection.options[selection.selectedIndex].value == "-"){
            const array1 = [];
            for(let i = 0; i<matrix1.length; i++){
                array1.push(Number(matrix1[i].value));
                // console.log(array1);
            }
            console.log(array1);
            const array2 = [];
            for(let i = 0; i<matrix2.length; i++){
                array2.push(Number(matrix2[i].value));
                // console.log(array1);
            }
            console.log(array2);
            const array3 = [];
            for(let i=0; i<array1.length; i++){
                // const array3 = [];
                array3.push(Number(array1[i] - array2[i]));
                // console.log(array3);
            }
            console.log(array3);

            for(let i = 0; i<matrix3.length; i++){
                matrix3[i].innerHTML = array3[i];
            }
        }
        else if(selection.options[selection.selectedIndex].value == "*"){
            const array1 = [];
            for(let i = 0; i<matrix1.length; i++){
                array1.push(Number(matrix1[i].value));
                // console.log(array1);
            }
            console.log(array1);
            const array2 = [];
            for(let i = 0; i<matrix2.length; i++){
                array2.push(Number(matrix2[i].value));
                // console.log(array1);
            }
            console.log(array2);
            const array3 = [];
            array3.push(Number((array1[0] * array2[0])+(array1[1] * array2[3])+(array1[2] * array2[6])));
            array3.push(Number((array1[0] * array2[1])+(array1[1] * array2[4])+(array1[2] * array2[7])));
            array3.push(Number((array1[0] * array2[2])+(array1[1] * array2[5])+(array1[2] * array2[8])));

            array3.push(Number((array1[3] * array2[0])+(array1[4] * array2[3])+(array1[5] * array2[6])));
            array3.push(Number((array1[3] * array2[1])+(array1[4] * array2[4])+(array1[5] * array2[7])));
            array3.push(Number((array1[3] * array2[2])+(array1[4] * array2[5])+(array1[5] * array2[8])));

            array3.push(Number((array1[6] * array2[0])+(array1[7] * array2[3])+(array1[8] * array2[6])));
            array3.push(Number((array1[6] * array2[1])+(array1[7] * array2[4])+(array1[8] * array2[7])));
            array3.push(Number((array1[6] * array2[2])+(array1[7] * array2[5])+(array1[8] * array2[8])));


            // for(let i=0; i<array1.length; i++){
            //     // const array3 = [];
            //     array3.push(Number(array1[i] * array2[i]));
            //     // console.log(array3);
            // }
            console.log(array3);

            for(let i = 0; i<matrix3.length; i++){
                matrix3[i].innerHTML = array3[i];
            }
        }
        document.querySelector("#matrix-3").classList.add("shadow");
        // for(i = 0; i<matrix1.length; i++){
        //     console.log(matrix1[i].value);
        // }
    }
    // for(i = 0; i<matrix1.length; i++){
    //     console.log(matrix1[i].value);
    // }
})