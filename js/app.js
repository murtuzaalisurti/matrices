document.addEventListener("DOMContentLoaded", function () {
    var matrix1 = document.querySelectorAll("div#matrix-1 input");
    var matrix2 = document.querySelectorAll("div#matrix-2 input");
    var matrix3 = document.querySelectorAll("div#matrix-3 div");
    var selectmatrix = document.querySelector("#matrix-selection");
    selectmatrix.onchange = () => {
        if (selectmatrix.options[selectmatrix.selectedIndex].value == "2x2") {
            document.querySelector(".container-main").classList.add("none");
            document.querySelector(".container-main-2").classList.remove("none");
            document.querySelector("#matrix-label").innerText = "2 x 2 Matrix";
        }
        // if(selectmatrix.options[selectmatrix.selectedIndex].value == "none"){
        //     document.querySelector(".container-main").classList.add("none");
        //     document.querySelector(".container-main-2").classList.remove("none");
        //     document.querySelector("#matrix-label").innerText = "2 x 2 Matrix";
        // }
        if (selectmatrix.options[selectmatrix.selectedIndex].value == "3x3") {
            document.querySelector(".container-main-2").classList.add("none");
            document.querySelector(".container-main").classList.remove("none");
            document.querySelector("#matrix-label").innerText = "3 x 3 Matrix";
        }
    }
    console.log(matrix1);


    document.querySelector("#operations").onchange = () => {
        var selection = document.querySelector("#operations");
        if (selection.options[selection.selectedIndex].value == "+") {
            const array1 = [];
            for (let i = 0; i < matrix1.length; i++) {
                array1.push(Number(matrix1[i].value));
            }
            console.log(array1);
            const array2 = [];
            for (let i = 0; i < matrix2.length; i++) {
                array2.push(Number(matrix2[i].value));
            }
            console.log(array2);
            const array3 = [];
            for (let i = 0; i < array1.length; i++) {
                array3.push(Number(array1[i] + array2[i]));
            }
            console.log(array3);

            for (let i = 0; i < matrix3.length; i++) {
                matrix3[i].innerHTML = array3[i];
            }
        }
        else if (selection.options[selection.selectedIndex].value == "-") {
            const array1 = [];
            for (let i = 0; i < matrix1.length; i++) {
                array1.push(Number(matrix1[i].value));
            }
            console.log(array1);
            const array2 = [];
            for (let i = 0; i < matrix2.length; i++) {
                array2.push(Number(matrix2[i].value));
            }
            console.log(array2);
            const array3 = [];
            for (let i = 0; i < array1.length; i++) {
                array3.push(Number(array1[i] - array2[i]));
            }
            console.log(array3);

            for (let i = 0; i < matrix3.length; i++) {
                matrix3[i].innerHTML = array3[i];
            }
        }
        else if (selection.options[selection.selectedIndex].value == "*") {
            const array1 = [];
            for (let i = 0; i < matrix1.length; i++) {
                array1.push(Number(matrix1[i].value));
            }
            console.log(array1);
            const array2 = [];
            for (let i = 0; i < matrix2.length; i++) {
                array2.push(Number(matrix2[i].value));
            }
            console.log(array2);
            const array3 = [];
            array3.push(Number((array1[0] * array2[0]) + (array1[1] * array2[3]) + (array1[2] * array2[6])));
            array3.push(Number((array1[0] * array2[1]) + (array1[1] * array2[4]) + (array1[2] * array2[7])));
            array3.push(Number((array1[0] * array2[2]) + (array1[1] * array2[5]) + (array1[2] * array2[8])));

            array3.push(Number((array1[3] * array2[0]) + (array1[4] * array2[3]) + (array1[5] * array2[6])));
            array3.push(Number((array1[3] * array2[1]) + (array1[4] * array2[4]) + (array1[5] * array2[7])));
            array3.push(Number((array1[3] * array2[2]) + (array1[4] * array2[5]) + (array1[5] * array2[8])));

            array3.push(Number((array1[6] * array2[0]) + (array1[7] * array2[3]) + (array1[8] * array2[6])));
            array3.push(Number((array1[6] * array2[1]) + (array1[7] * array2[4]) + (array1[8] * array2[7])));
            array3.push(Number((array1[6] * array2[2]) + (array1[7] * array2[5]) + (array1[8] * array2[8])));

            console.log(array3);

            for (let i = 0; i < matrix3.length; i++) {
                matrix3[i].innerHTML = array3[i];
            }
        }
        document.querySelector("#matrix-3").classList.add("change-3x3");
    }

    document.querySelector("#operations-2").onchange = () => {
        var selection_2 = document.querySelector("#operations-2");
        var matrix4 = document.querySelectorAll("div#matrix-2x2-1 input");
        var matrix5 = document.querySelectorAll("div#matrix-2x2-2 input");
        var matrix6 = document.querySelectorAll("div#matrix-2x2-3 div");
        if (selection_2.options[selection_2.selectedIndex].value == "+") {
            const array4 = [];
            for (let i = 0; i < matrix4.length; i++) {
                array4.push(Number(matrix4[i].value));
            }
            console.log(array4);
            const array5 = [];
            for (let i = 0; i < matrix5.length; i++) {
                array5.push(Number(matrix5[i].value));
            }
            console.log(array5);
            const array6 = [];
            for (let i = 0; i < array5.length; i++) {
                array6.push(Number(array4[i] + array5[i]));
            }
            console.log(array6);

            for (let i = 0; i < matrix6.length; i++) {
                matrix6[i].innerHTML = array6[i];
            }
        }
        else if (selection_2.options[selection_2.selectedIndex].value == "-") {
            const array4 = [];
            for (let i = 0; i < matrix4.length; i++) {
                array4.push(Number(matrix4[i].value));
            }
            console.log(array4);
            const array5 = [];
            for (let i = 0; i < matrix5.length; i++) {
                array5.push(Number(matrix5[i].value));
            }
            console.log(array5);
            const array6 = [];
            for (let i = 0; i < array5.length; i++) {
                array6.push(Number(array4[i] - array5[i]));
            }
            console.log(array6);

            for (let i = 0; i < matrix6.length; i++) {
                matrix6[i].innerHTML = array6[i];
            }
        }
        else if (selection_2.options[selection_2.selectedIndex].value == "*") {
            const array4 = [];
            for (let i = 0; i < matrix4.length; i++) {
                array4.push(Number(matrix4[i].value));
            }
            console.log(array4);
            const array5 = [];
            for (let i = 0; i < matrix5.length; i++) {
                array5.push(Number(matrix5[i].value));
            }
            console.log(array5);
            const array6 = [];
            array6.push(Number((array4[0] * array5[0]) + (array4[1] * array5[2])));
            array6.push(Number((array4[0] * array5[1]) + (array4[1] * array5[3])));
            array6.push(Number((array4[2] * array5[0]) + (array4[3] * array5[2])));

            array6.push(Number((array4[2] * array5[1]) + (array4[3] * array5[3])));

            console.log(array6);

            for (let i = 0; i < matrix6.length; i++) {
                matrix6[i].innerHTML = array6[i];
            }
        }
        document.querySelector("#matrix-2x2-3").classList.add("change-2x2");
    }

    document.querySelectorAll("div#matrix-1 input").forEach(function (field, index) {
        field.onkeyup = () => {
            setTimeout(function () {
                console.log(index);
                if (index === 8) {
                    return false
                }
                else if (field.value !== '') {
                    console.log(field.nextElementSibling);
                    field.nextElementSibling.focus();
                }
            }, 1500);

            var selection = document.querySelector("#operations");
            if (selection.options[selection.selectedIndex].value == "+") {
                const array1 = [];
                for (let i = 0; i < matrix1.length; i++) {
                    array1.push(Number(matrix1[i].value));
                }
                console.log(array1);
                const array2 = [];
                for (let i = 0; i < matrix2.length; i++) {
                    array2.push(Number(matrix2[i].value));
                }
                console.log(array2);
                const array3 = [];
                for (let i = 0; i < array1.length; i++) {
                    array3.push(Number(array1[i] + array2[i]));
                }
                console.log(array3);

                for (let i = 0; i < matrix3.length; i++) {
                    matrix3[i].innerHTML = array3[i];
                }
            }
            else if (selection.options[selection.selectedIndex].value == "-") {
                const array1 = [];
                for (let i = 0; i < matrix1.length; i++) {
                    array1.push(Number(matrix1[i].value));
                }
                console.log(array1);
                const array2 = [];
                for (let i = 0; i < matrix2.length; i++) {
                    array2.push(Number(matrix2[i].value));
                }
                console.log(array2);
                const array3 = [];
                for (let i = 0; i < array1.length; i++) {
                    array3.push(Number(array1[i] - array2[i]));
                }
                console.log(array3);

                for (let i = 0; i < matrix3.length; i++) {
                    matrix3[i].innerHTML = array3[i];
                }
            }
            else if (selection.options[selection.selectedIndex].value == "*") {
                const array1 = [];
                for (let i = 0; i < matrix1.length; i++) {
                    array1.push(Number(matrix1[i].value));
                }
                console.log(array1);
                const array2 = [];
                for (let i = 0; i < matrix2.length; i++) {
                    array2.push(Number(matrix2[i].value));
                }
                console.log(array2);
                const array3 = [];
                array3.push(Number((array1[0] * array2[0]) + (array1[1] * array2[3]) + (array1[2] * array2[6])));
                array3.push(Number((array1[0] * array2[1]) + (array1[1] * array2[4]) + (array1[2] * array2[7])));
                array3.push(Number((array1[0] * array2[2]) + (array1[1] * array2[5]) + (array1[2] * array2[8])));

                array3.push(Number((array1[3] * array2[0]) + (array1[4] * array2[3]) + (array1[5] * array2[6])));
                array3.push(Number((array1[3] * array2[1]) + (array1[4] * array2[4]) + (array1[5] * array2[7])));
                array3.push(Number((array1[3] * array2[2]) + (array1[4] * array2[5]) + (array1[5] * array2[8])));

                array3.push(Number((array1[6] * array2[0]) + (array1[7] * array2[3]) + (array1[8] * array2[6])));
                array3.push(Number((array1[6] * array2[1]) + (array1[7] * array2[4]) + (array1[8] * array2[7])));
                array3.push(Number((array1[6] * array2[2]) + (array1[7] * array2[5]) + (array1[8] * array2[8])));

                console.log(array3);

                for (let i = 0; i < matrix3.length; i++) {
                    matrix3[i].innerHTML = array3[i];
                }
            }
            document.querySelector("#matrix-3").classList.add("change-3x3");
            // console.log(index);
            // if(index === 8){
            //     return false
            // }
            // else if(field.value !== ''){
            //     console.log(field.nextElementSibling);
            //     field.nextElementSibling.focus();
            // }
        }
    });

    document.querySelectorAll("div#matrix-2 input").forEach(function (field, index) {
        field.onkeyup = () => {
            setTimeout(function () {
                console.log(index);
                if (index === 8) {
                    return false
                }
                else if (field.value !== '') {
                    console.log(field.nextElementSibling);
                    field.nextElementSibling.focus();
                }
            }, 1500);

            var selection = document.querySelector("#operations");
            if (selection.options[selection.selectedIndex].value == "+") {
                const array1 = [];
                for (let i = 0; i < matrix1.length; i++) {
                    array1.push(Number(matrix1[i].value));
                }
                console.log(array1);
                const array2 = [];
                for (let i = 0; i < matrix2.length; i++) {
                    array2.push(Number(matrix2[i].value));
                }
                console.log(array2);
                const array3 = [];
                for (let i = 0; i < array1.length; i++) {
                    array3.push(Number(array1[i] + array2[i]));
                }
                console.log(array3);

                for (let i = 0; i < matrix3.length; i++) {
                    matrix3[i].innerHTML = array3[i];
                }
            }
            else if (selection.options[selection.selectedIndex].value == "-") {
                const array1 = [];
                for (let i = 0; i < matrix1.length; i++) {
                    array1.push(Number(matrix1[i].value));
                }
                console.log(array1);
                const array2 = [];
                for (let i = 0; i < matrix2.length; i++) {
                    array2.push(Number(matrix2[i].value));
                }
                console.log(array2);
                const array3 = [];
                for (let i = 0; i < array1.length; i++) {
                    array3.push(Number(array1[i] - array2[i]));
                }
                console.log(array3);

                for (let i = 0; i < matrix3.length; i++) {
                    matrix3[i].innerHTML = array3[i];
                }
            }
            else if (selection.options[selection.selectedIndex].value == "*") {
                const array1 = [];
                for (let i = 0; i < matrix1.length; i++) {
                    array1.push(Number(matrix1[i].value));
                }
                console.log(array1);
                const array2 = [];
                for (let i = 0; i < matrix2.length; i++) {
                    array2.push(Number(matrix2[i].value));
                }
                console.log(array2);
                const array3 = [];
                array3.push(Number((array1[0] * array2[0]) + (array1[1] * array2[3]) + (array1[2] * array2[6])));
                array3.push(Number((array1[0] * array2[1]) + (array1[1] * array2[4]) + (array1[2] * array2[7])));
                array3.push(Number((array1[0] * array2[2]) + (array1[1] * array2[5]) + (array1[2] * array2[8])));

                array3.push(Number((array1[3] * array2[0]) + (array1[4] * array2[3]) + (array1[5] * array2[6])));
                array3.push(Number((array1[3] * array2[1]) + (array1[4] * array2[4]) + (array1[5] * array2[7])));
                array3.push(Number((array1[3] * array2[2]) + (array1[4] * array2[5]) + (array1[5] * array2[8])));

                array3.push(Number((array1[6] * array2[0]) + (array1[7] * array2[3]) + (array1[8] * array2[6])));
                array3.push(Number((array1[6] * array2[1]) + (array1[7] * array2[4]) + (array1[8] * array2[7])));
                array3.push(Number((array1[6] * array2[2]) + (array1[7] * array2[5]) + (array1[8] * array2[8])));

                console.log(array3);

                for (let i = 0; i < matrix3.length; i++) {
                    matrix3[i].innerHTML = array3[i];
                }
            }
            document.querySelector("#matrix-3").classList.add("change-3x3");
        }
    });

    document.querySelectorAll("div#matrix-2x2-1 input").forEach(function (field, index) {
        field.onkeyup = () => {
            setTimeout(function () {
                console.log(index);
                if (index === 3) {
                    return false
                }
                else if (field.value !== '') {
                    console.log(field.nextElementSibling);
                    field.nextElementSibling.focus();
                }
            }, 1500);

            var selection_2 = document.querySelector("#operations-2");
            var matrix4 = document.querySelectorAll("div#matrix-2x2-1 input");
            var matrix5 = document.querySelectorAll("div#matrix-2x2-2 input");
            var matrix6 = document.querySelectorAll("div#matrix-2x2-3 div");
            if (selection_2.options[selection_2.selectedIndex].value == "+") {
                const array4 = [];
                for (let i = 0; i < matrix4.length; i++) {
                    array4.push(Number(matrix4[i].value));
                }
                console.log(array4);
                const array5 = [];
                for (let i = 0; i < matrix5.length; i++) {
                    array5.push(Number(matrix5[i].value));
                }
                console.log(array5);
                const array6 = [];
                for (let i = 0; i < array5.length; i++) {
                    array6.push(Number(array4[i] + array5[i]));
                }
                console.log(array6);

                for (let i = 0; i < matrix6.length; i++) {
                    matrix6[i].innerHTML = array6[i];
                }
            }
            else if (selection_2.options[selection_2.selectedIndex].value == "-") {
                const array4 = [];
                for (let i = 0; i < matrix4.length; i++) {
                    array4.push(Number(matrix4[i].value));
                }
                console.log(array4);
                const array5 = [];
                for (let i = 0; i < matrix5.length; i++) {
                    array5.push(Number(matrix5[i].value));
                }
                console.log(array5);
                const array6 = [];
                for (let i = 0; i < array5.length; i++) {
                    array6.push(Number(array4[i] - array5[i]));
                }
                console.log(array6);

                for (let i = 0; i < matrix6.length; i++) {
                    matrix6[i].innerHTML = array6[i];
                }
            }
            else if (selection_2.options[selection_2.selectedIndex].value == "*") {
                const array4 = [];
                for (let i = 0; i < matrix4.length; i++) {
                    array4.push(Number(matrix4[i].value));
                }
                console.log(array4);
                const array5 = [];
                for (let i = 0; i < matrix5.length; i++) {
                    array5.push(Number(matrix5[i].value));
                }
                console.log(array5);
                const array6 = [];
                array6.push(Number((array4[0] * array5[0]) + (array4[1] * array5[2])));
                array6.push(Number((array4[0] * array5[1]) + (array4[1] * array5[3])));
                array6.push(Number((array4[2] * array5[0]) + (array4[3] * array5[2])));

                array6.push(Number((array4[2] * array5[1]) + (array4[3] * array5[3])));

                console.log(array6);

                for (let i = 0; i < matrix6.length; i++) {
                    matrix6[i].innerHTML = array6[i];
                }
            }
            document.querySelector("#matrix-2x2-3").classList.add("change-2x2");
        }
    });

    document.querySelectorAll("div#matrix-2x2-2 input").forEach(function (field, index) {
        field.onkeyup = () => {
            setTimeout(function () {
                console.log(index);
                if (index === 3) {
                    return false
                }
                else if (field.value !== '') {
                    console.log(field.nextElementSibling);
                    field.nextElementSibling.focus();
                }
            }, 1500);

            var selection_2 = document.querySelector("#operations-2");
            var matrix4 = document.querySelectorAll("div#matrix-2x2-1 input");
            var matrix5 = document.querySelectorAll("div#matrix-2x2-2 input");
            var matrix6 = document.querySelectorAll("div#matrix-2x2-3 div");
            if (selection_2.options[selection_2.selectedIndex].value == "+") {
                const array4 = [];
                for (let i = 0; i < matrix4.length; i++) {
                    array4.push(Number(matrix4[i].value));
                }
                console.log(array4);
                const array5 = [];
                for (let i = 0; i < matrix5.length; i++) {
                    array5.push(Number(matrix5[i].value));
                }
                console.log(array5);
                const array6 = [];
                for (let i = 0; i < array5.length; i++) {
                    array6.push(Number(array4[i] + array5[i]));
                }
                console.log(array6);

                for (let i = 0; i < matrix6.length; i++) {
                    matrix6[i].innerHTML = array6[i];
                }
            }
            else if (selection_2.options[selection_2.selectedIndex].value == "-") {
                const array4 = [];
                for (let i = 0; i < matrix4.length; i++) {
                    array4.push(Number(matrix4[i].value));
                }
                console.log(array4);
                const array5 = [];
                for (let i = 0; i < matrix5.length; i++) {
                    array5.push(Number(matrix5[i].value));
                }
                console.log(array5);
                const array6 = [];
                for (let i = 0; i < array5.length; i++) {
                    array6.push(Number(array4[i] - array5[i]));
                }
                console.log(array6);

                for (let i = 0; i < matrix6.length; i++) {
                    matrix6[i].innerHTML = array6[i];
                }
            }
            else if (selection_2.options[selection_2.selectedIndex].value == "*") {
                const array4 = [];
                for (let i = 0; i < matrix4.length; i++) {
                    array4.push(Number(matrix4[i].value));
                }
                console.log(array4);
                const array5 = [];
                for (let i = 0; i < matrix5.length; i++) {
                    array5.push(Number(matrix5[i].value));
                }
                console.log(array5);
                const array6 = [];
                array6.push(Number((array4[0] * array5[0]) + (array4[1] * array5[2])));
                array6.push(Number((array4[0] * array5[1]) + (array4[1] * array5[3])));
                array6.push(Number((array4[2] * array5[0]) + (array4[3] * array5[2])));

                array6.push(Number((array4[2] * array5[1]) + (array4[3] * array5[3])));

                console.log(array6);

                for (let i = 0; i < matrix6.length; i++) {
                    matrix6[i].innerHTML = array6[i];
                }
            }
            document.querySelector("#matrix-2x2-3").classList.add("change-2x2");
        }
    });
});