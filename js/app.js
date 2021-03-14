document.addEventListener("DOMContentLoaded", function () {
    // basic operation variables ---------------------------------
    var matrix1 = document.querySelectorAll("div#matrix-1 input");
    var matrix2 = document.querySelectorAll("div#matrix-2 input");
    var matrix3 = document.querySelectorAll("div#matrix-3 div");
    var matrix3_outer = document.querySelector("#matrix-3");
    var selection = document.querySelector("#operations");
    var selection_2 = document.querySelector("#operations-2");
    var matrix4 = document.querySelectorAll("div#matrix-2x2-1 input");
    var matrix5 = document.querySelectorAll("div#matrix-2x2-2 input");
    var matrix6 = document.querySelectorAll("div#matrix-2x2-3 div");
    var matrix6_outer = document.querySelector("#matrix-2x2-3");
    var selectmatrix = document.querySelector("#matrix-selection");
    var selected = document.querySelectorAll("div#drop-down-basic-2x2 li");
    console.log(selected);
    var select_label = document.querySelector(".select");


    // misc operation variables -----------------------------------------
    var matrix1_misc = document.querySelectorAll("div#matrix-2x2-misc input");
    var matrix2_misc = document.querySelectorAll("div#matrix-2x2-misc-2 div");
    var matrix3_misc = document.querySelectorAll("div#matrix-3x3-misc input");
    var matrix4_misc = document.querySelectorAll("div#matrix-3x3-misc-2 div");
    var matrix2_misc_outer = document.querySelector("#matrix-2x2-misc-2");
    var matrix4_misc_outer = document.querySelector("#matrix-3x3-misc-2");
    var misc_selection = document.querySelector("#misc-operations");
    var misc_selection_2 = document.querySelector("#misc-operations-2");
    var selectmatrixmisc = document.querySelector("#matrix-selection-misc");

    // basic operations variables of 3x3 matrix
    const array1 = [];
    const array2 = [];
    const array3 = [];

    // basic operations variables of 2x2 matrix
    const array4 = [];
    const array5 = [];
    const array6 = [];

    // function for basic operation
    function arraypopping() {
        while (array1.length > 0) {
            array1.pop();
        }
        while (array2.length > 0) {
            array2.pop();
        }
        while (array3.length > 0) {
            array3.pop();
        }
    }

    function arraypopping2x2() {
        while (array4.length > 0) {
            array4.pop();
        }
        while (array5.length > 0) {
            array5.pop();
        }
        while (array6.length > 0) {
            array6.pop();
        }
    }

    // miscellaneous operations variables of 2x2 matrix----------------------
    const misc_array_1 = [];
    const misc_array_2 = [];
    const minor_array = []; // ]
    const cofactor = [];    // | --> also for 3x3 matrix
    const adj = [];         // ]

    // miscellaneous operations variables of 3x3 matrix----------------------
    const misc_array_3 = [];
    const misc_array_4 = [];


    // functions for miscellaneous operations on 2x2 matrix
    // function minor2x2() {
    //     // selected.forEach(function(field, index){
    //     //     field.innerHTML == 
    //     // })
    //     if (misc_selection.options[misc_selection.selectedIndex].value == "inverse" || misc_selection.options[misc_selection.selectedIndex].value == "cofactor" || misc_selection.options[misc_selection.selectedIndex].value == "adjoint") {
    //         minor_array.push(Number(misc_array_1[3]));
    //         minor_array.push(Number(misc_array_1[2]));
    //         minor_array.push(Number(misc_array_1[1]));
    //         minor_array.push(Number(misc_array_1[0]));
    //     }
    //     else {
    //         minor_array.push(Number(misc_array_1[3]));
    //         minor_array.push(Number(misc_array_1[2]));
    //         minor_array.push(Number(misc_array_1[1]));
    //         minor_array.push(Number(misc_array_1[0]));

    //         for (let k = 0; k < matrix2_misc.length; k++) {
    //             matrix2_misc[k].innerHTML = minor_array[k];
    //         }
    //         while (misc_array_1.length > 0) {
    //             misc_array_1.pop();
    //         }
    //         while (minor_array.length > 0) {
    //             minor_array.pop();
    //         }
    //     }
    // }

    // function transpose2x2() {
    //     misc_array_2.push(Number(misc_array_1[0]));
    //     misc_array_2.push(Number(misc_array_1[2]));
    //     misc_array_2.push(Number(misc_array_1[1]));
    //     misc_array_2.push(Number(misc_array_1[3]));

    //     for (let k = 0; k < matrix2_misc.length; k++) {
    //         matrix2_misc[k].innerHTML = misc_array_2[k];
    //     }
    //     while (misc_array_1.length > 0) {
    //         misc_array_1.pop();
    //     }
    //     while (misc_array_2.length > 0) {
    //         misc_array_2.pop();
    //     }
    // }

    // function cofactor2x2() {
    //     if (misc_selection.options[misc_selection.selectedIndex].value == "inverse" || misc_selection.options[misc_selection.selectedIndex].value == "adjoint") {
    //         cofactor.push(Number(minor_array[0]));
    //         cofactor.push(Number(((-1) * minor_array[1])));
    //         cofactor.push(Number(((-1) * minor_array[2])));
    //         cofactor.push(Number(minor_array[3]));
    //     }
    //     else {
    //         cofactor.push(Number(minor_array[0]));
    //         cofactor.push(Number(((-1) * minor_array[1])));
    //         cofactor.push(Number(((-1) * minor_array[2])));
    //         cofactor.push(Number(minor_array[3]));

    //         for (let k = 0; k < matrix2_misc.length; k++) {
    //             matrix2_misc[k].innerHTML = cofactor[k];
    //         }
    //         while (misc_array_1.length > 0) {
    //             misc_array_1.pop();
    //         }
    //         while (minor_array.length > 0) {
    //             minor_array.pop();
    //         }
    //         while (cofactor.length > 0) {
    //             cofactor.pop();
    //         }
    //     }
    // }

    // function adjoint2x2() {
    //     if (misc_selection.options[misc_selection.selectedIndex].value == "inverse") {
    //         adj.push(Number(cofactor[0]));
    //         adj.push(Number(cofactor[2]));
    //         adj.push(Number(cofactor[1]));
    //         adj.push(Number(cofactor[3]));
    //     }
    //     else {
    //         adj.push(Number(cofactor[0]));
    //         adj.push(Number(cofactor[2]));
    //         adj.push(Number(cofactor[1]));
    //         adj.push(Number(cofactor[3]));

    //         for (let k = 0; k < matrix2_misc.length; k++) {
    //             matrix2_misc[k].innerHTML = adj[k];
    //         }

    //         while (misc_array_1.length > 0) {
    //             misc_array_1.pop();
    //         }
    //         while (minor_array.length > 0) {
    //             minor_array.pop();
    //         }
    //         while (cofactor.length > 0) {
    //             cofactor.pop();
    //         }
    //         while (adj.length > 0) {
    //             adj.pop();
    //         }
    //     }
    // }


    // functions for miscellaneous operations on 3x3 matrix
    // function minor3x3() {
    //     if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "inverse" || misc_selection_2.options[misc_selection_2.selectedIndex].value == "cofactor" || misc_selection_2.options[misc_selection_2.selectedIndex].value == "adjoint") {
    //         minor_array.push(Number((misc_array_3[4] * misc_array_3[8]) - (misc_array_3[5] * misc_array_3[7])));
    //         minor_array.push(Number((misc_array_3[3] * misc_array_3[8]) - (misc_array_3[6] * misc_array_3[5])));
    //         minor_array.push(Number((misc_array_3[3] * misc_array_3[7]) - (misc_array_3[6] * misc_array_3[4])));
    //         minor_array.push(Number((misc_array_3[1] * misc_array_3[8]) - (misc_array_3[7] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[8]) - (misc_array_3[6] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[7]) - (misc_array_3[6] * misc_array_3[1])));
    //         minor_array.push(Number((misc_array_3[1] * misc_array_3[5]) - (misc_array_3[4] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[5]) - (misc_array_3[3] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[4]) - (misc_array_3[3] * misc_array_3[1])));
    //     }
    //     else {
    //         minor_array.push(Number((misc_array_3[4] * misc_array_3[8]) - (misc_array_3[5] * misc_array_3[7])));
    //         minor_array.push(Number((misc_array_3[3] * misc_array_3[8]) - (misc_array_3[6] * misc_array_3[5])));
    //         minor_array.push(Number((misc_array_3[3] * misc_array_3[7]) - (misc_array_3[6] * misc_array_3[4])));
    //         minor_array.push(Number((misc_array_3[1] * misc_array_3[8]) - (misc_array_3[7] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[8]) - (misc_array_3[6] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[7]) - (misc_array_3[6] * misc_array_3[1])));
    //         minor_array.push(Number((misc_array_3[1] * misc_array_3[5]) - (misc_array_3[4] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[5]) - (misc_array_3[3] * misc_array_3[2])));
    //         minor_array.push(Number((misc_array_3[0] * misc_array_3[4]) - (misc_array_3[3] * misc_array_3[1])));

    //         for (let k = 0; k < matrix4_misc.length; k++) {
    //             matrix4_misc[k].innerHTML = minor_array[k];
    //         }

    //         while (misc_array_3.length > 0) {
    //             misc_array_3.pop();
    //         }
    //         while (minor_array.length > 0) {
    //             minor_array.pop();
    //         }
    //     }
    // }

    // function transpose3x3() {
    //     misc_array_4.push(Number(misc_array_3[0]));
    //     misc_array_4.push(Number(misc_array_3[3]));
    //     misc_array_4.push(Number(misc_array_3[6]));
    //     misc_array_4.push(Number(misc_array_3[1]));
    //     misc_array_4.push(Number(misc_array_3[4]));
    //     misc_array_4.push(Number(misc_array_3[7]));
    //     misc_array_4.push(Number(misc_array_3[2]));
    //     misc_array_4.push(Number(misc_array_3[5]));
    //     misc_array_4.push(Number(misc_array_3[8]));

    //     for (let k = 0; k < matrix4_misc.length; k++) {
    //         matrix4_misc[k].innerHTML = misc_array_4[k];
    //     }
    //     while (misc_array_3.length > 0) {
    //         misc_array_3.pop();
    //     }
    //     while (misc_array_4.length > 0) {
    //         misc_array_4.pop();
    //     }
    // }

    // function cofactor3x3() {
    //     if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "inverse" || misc_selection_2.options[misc_selection_2.selectedIndex].value == "adjoint") {
    //         cofactor.push(Number(minor_array[0]));
    //         cofactor.push(Number(((-1) * minor_array[1])));
    //         cofactor.push(Number((minor_array[2])));
    //         cofactor.push(Number(((-1) * minor_array[3])));
    //         cofactor.push(Number((minor_array[4])));
    //         cofactor.push(Number(((-1) * minor_array[5])));
    //         cofactor.push(Number((minor_array[6])));
    //         cofactor.push(Number(((-1) * minor_array[7])));
    //         cofactor.push(Number((minor_array[8])));
    //     }
    //     else {
    //         cofactor.push(Number(minor_array[0]));
    //         cofactor.push(Number(((-1) * minor_array[1])));
    //         cofactor.push(Number((minor_array[2])));
    //         cofactor.push(Number(((-1) * minor_array[3])));
    //         cofactor.push(Number((minor_array[4])));
    //         cofactor.push(Number(((-1) * minor_array[5])));
    //         cofactor.push(Number((minor_array[6])));
    //         cofactor.push(Number(((-1) * minor_array[7])));
    //         cofactor.push(Number((minor_array[8])));

    //         for (let k = 0; k < matrix4_misc.length; k++) {
    //             matrix4_misc[k].innerHTML = cofactor[k];
    //         }
    //         while (misc_array_3.length > 0) {
    //             misc_array_3.pop();
    //         }
    //         while (minor_array.length > 0) {
    //             minor_array.pop();
    //         }
    //         while (cofactor.length > 0) {
    //             cofactor.pop();
    //         }
    //     }
    // }

    // function adjoint3x3() {
    //     if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "inverse") {
    //         adj.push(Number(cofactor[0]));
    //         adj.push(Number(cofactor[3]));
    //         adj.push(Number(cofactor[6]));
    //         adj.push(Number(cofactor[1]));
    //         adj.push(Number(cofactor[4]));
    //         adj.push(Number(cofactor[7]));
    //         adj.push(Number(cofactor[2]));
    //         adj.push(Number(cofactor[5]));
    //         adj.push(Number(cofactor[8]));
    //     }
    //     else {
    //         adj.push(Number(cofactor[0]));
    //         adj.push(Number(cofactor[3]));
    //         adj.push(Number(cofactor[6]));
    //         adj.push(Number(cofactor[1]));
    //         adj.push(Number(cofactor[4]));
    //         adj.push(Number(cofactor[7]));
    //         adj.push(Number(cofactor[2]));
    //         adj.push(Number(cofactor[5]));
    //         adj.push(Number(cofactor[8]));

    //         for (let k = 0; k < matrix4_misc.length; k++) {
    //             matrix4_misc[k].innerHTML = adj[k];
    //         }
    //         while (misc_array_3.length > 0) {
    //             misc_array_3.pop();
    //         }
    //         while (minor_array.length > 0) {
    //             minor_array.pop();
    //         }
    //         while (cofactor.length > 0) {
    //             cofactor.pop();
    //         }
    //         while (adj.length > 0) {
    //             adj.pop();
    //         }
    //     }
    // }



    // basic operation functions -------------------------------------------
    // function matrixoperation3x3() {
    //     if (selection.options[selection.selectedIndex].value == "+") {
    //         for (let i = 0; i < matrix1.length; i++) {
    //             array1.push(Number(matrix1[i].value));
    //         }
    //         for (let i = 0; i < matrix2.length; i++) {
    //             array2.push(Number(matrix2[i].value));
    //         }
    //         for (let i = 0; i < array1.length; i++) {
    //             array3.push(Number(array1[i] + array2[i]));
    //         }
    //         for (let i = 0; i < matrix3.length; i++) {
    //             matrix3[i].innerHTML = array3[i];
    //         }
    //         arraypopping();
    //     }
    //     else if (selection.options[selection.selectedIndex].value == "-") {
    //         for (let i = 0; i < matrix1.length; i++) {
    //             array1.push(Number(matrix1[i].value));
    //         }
    //         for (let i = 0; i < matrix2.length; i++) {
    //             array2.push(Number(matrix2[i].value));
    //         }
    //         for (let i = 0; i < array1.length; i++) {
    //             array3.push(Number(array1[i] - array2[i]));
    //         }
    //         for (let i = 0; i < matrix3.length; i++) {
    //             matrix3[i].innerHTML = array3[i];
    //         }
    //         arraypopping();
    //     }
    //     else if (selection.options[selection.selectedIndex].value == "*") {
    //         for (let i = 0; i < matrix1.length; i++) {
    //             array1.push(Number(matrix1[i].value));
    //         }
    //         for (let i = 0; i < matrix2.length; i++) {
    //             array2.push(Number(matrix2[i].value));
    //         }
    //         array3.push(Number((array1[0] * array2[0]) + (array1[1] * array2[3]) + (array1[2] * array2[6])));
    //         array3.push(Number((array1[0] * array2[1]) + (array1[1] * array2[4]) + (array1[2] * array2[7])));
    //         array3.push(Number((array1[0] * array2[2]) + (array1[1] * array2[5]) + (array1[2] * array2[8])));

    //         array3.push(Number((array1[3] * array2[0]) + (array1[4] * array2[3]) + (array1[5] * array2[6])));
    //         array3.push(Number((array1[3] * array2[1]) + (array1[4] * array2[4]) + (array1[5] * array2[7])));
    //         array3.push(Number((array1[3] * array2[2]) + (array1[4] * array2[5]) + (array1[5] * array2[8])));

    //         array3.push(Number((array1[6] * array2[0]) + (array1[7] * array2[3]) + (array1[8] * array2[6])));
    //         array3.push(Number((array1[6] * array2[1]) + (array1[7] * array2[4]) + (array1[8] * array2[7])));
    //         array3.push(Number((array1[6] * array2[2]) + (array1[7] * array2[5]) + (array1[8] * array2[8])));

    //         console.log(array3);

    //         for (let i = 0; i < matrix3.length; i++) {
    //             matrix3[i].innerHTML = array3[i];
    //         }
    //         arraypopping();
    //     }
    //     return null;
    // }
    function matrixoperation2x2() {
        console.log(2);
        selected.forEach(function (field, index) {
            // field.addEventListener("click", function () {
                if (index == 0) {
                    for (let i = 0; i < matrix4.length; i++) {
                        array4.push(Number(matrix4[i].value));
                    }
                    for (let i = 0; i < matrix5.length; i++) {
                        array5.push(Number(matrix5[i].value));
                    }
                    for (let i = 0; i < array5.length; i++) {
                        array6.push(Number(array4[i] + array5[i]));
                    }
                    for (let i = 0; i < matrix6.length; i++) {
                        matrix6[i].innerHTML = array6[i];
                    }
                    arraypopping2x2();
                    document.querySelector("#select_basic").textContent = "addition";
                    console.log(document.querySelector("#select_basic").textContent);
                    // let addition = "Addition";
                    // document.querySelector(".select").textContent = addition;
                    console.log(index);
                }
            // });
            // document.querySelector(".select").textContent = "addition";
            // console.log(document.querySelector(".select").textContent);
            // field.innerHTML == "Addition"
        });



        // selected.forEach(e => {
        //     console.log(e);
        //     if(e.innerHTML == "Addition"){
        //         console.log("add");
        //     }
        // })


        // select_label = "Addition";
        // console.log(select_label);
        // if (selection_2.options[selection_2.selectedIndex].value == "+") {
        //     for (let i = 0; i < matrix4.length; i++) {
        //         array4.push(Number(matrix4[i].value));
        //     }
        //     for (let i = 0; i < matrix5.length; i++) {
        //         array5.push(Number(matrix5[i].value));
        //     }
        //     for (let i = 0; i < array5.length; i++) {
        //         array6.push(Number(array4[i] + array5[i]));
        //     }
        //     for (let i = 0; i < matrix6.length; i++) {
        //         matrix6[i].innerHTML = array6[i];
        //     }
        //     arraypopping2x2();
        // }
        // else if (selection_2.options[selection_2.selectedIndex].value == "-") {
        //     for (let i = 0; i < matrix4.length; i++) {
        //         array4.push(Number(matrix4[i].value));
        //     }
        //     for (let i = 0; i < matrix5.length; i++) {
        //         array5.push(Number(matrix5[i].value));
        //     }
        //     for (let i = 0; i < array5.length; i++) {
        //         array6.push(Number(array4[i] - array5[i]));
        //     }
        //     for (let i = 0; i < matrix6.length; i++) {
        //         matrix6[i].innerHTML = array6[i];
        //     }
        //     arraypopping2x2();
        // }
        // else if (selection_2.options[selection_2.selectedIndex].value == "*") {
        //     for (let i = 0; i < matrix4.length; i++) {
        //         array4.push(Number(matrix4[i].value));
        //     }
        //     for (let i = 0; i < matrix5.length; i++) {
        //         array5.push(Number(matrix5[i].value));
        //     }
        //     array6.push(Number((array4[0] * array5[0]) + (array4[1] * array5[2])));
        //     array6.push(Number((array4[0] * array5[1]) + (array4[1] * array5[3])));
        //     array6.push(Number((array4[2] * array5[0]) + (array4[3] * array5[2])));
        //     array6.push(Number((array4[2] * array5[1]) + (array4[3] * array5[3])));
        //     for (let i = 0; i < matrix6.length; i++) {
        //         matrix6[i].innerHTML = array6[i];
        //     }
        //     arraypopping2x2();
        // }
        return null;
    }
    matrix4.forEach(field => {
        field.onkeyup = () => {
            matrixoperation2x2();
        }
    })
    // selectmatrix.onchange = () => {
    //     if (selectmatrix.options[selectmatrix.selectedIndex].value == "2x2") {
    //         document.querySelector(".container-main").classList.add("none");
    //         document.querySelector(".container-main-2").classList.remove("none");
    //         document.querySelector("#matrix-label").innerText = "2 x 2 Matrix";
    //     }
    //     else if (selectmatrix.options[selectmatrix.selectedIndex].value == "3x3") {
    //         document.querySelector(".container-main-2").classList.add("none");
    //         document.querySelector(".container-main").classList.remove("none");
    //         document.querySelector("#matrix-label").innerText = "3 x 3 Matrix";
    //     }
    // }
    // selection.onchange = () => {
    //     matrixoperation3x3();
    //     matrix3_outer.classList.add("change-3x3");
    // }
    // selection_2.onchange = () => {
    //     matrixoperation2x2();
    //     matrix6_outer.classList.add("change-2x2");
    // }
    // matrix1.forEach(function (field) {
    //     field.onkeyup = () => {
    //         // setTimeout(function () {
    //         //     console.log(index);
    //         //     if (index === 8) {
    //         //         return false
    //         //     }
    //         //     else if (field.value !== '') {
    //         //         console.log(field.nextElementSibling);
    //         //         field.nextElementSibling.focus();
    //         //     }
    //         // }, 1500);

    //         matrixoperation3x3();
    //     }
    // });

    // matrix2.forEach(function (field) {
    //     field.onkeyup = () => {
    //         matrixoperation3x3();
    //     }
    // });

    // matrix4.forEach(function (field) {
    //     field.onkeyup = () => {
    //         // setTimeout(function () {
    //         //     console.log(index);
    //         //     if (index === 3) {
    //         //         return false
    //         //     }
    //         //     else if (field.value !== '') {
    //         //         console.log(field.nextElementSibling);
    //         //         field.nextElementSibling.focus();
    //         //     }
    //         // }, 1500);

    //         matrixoperation2x2();
    //     }
    // });

    // matrix5.forEach(function (field) {
    //     field.onkeyup = () => {
    //         matrixoperation2x2();
    //     }
    // });

    // misc operations functions --------------------------------------
    // function miscoperation2x2() {
    //     if (misc_selection.options[misc_selection.selectedIndex].value == "transpose") {
    //         for (let k = 0; k < matrix1_misc.length; k++) {
    //             misc_array_1.push(Number(matrix1_misc[k].value));
    //         }
    //         transpose2x2();
    //     }
    //     else if (misc_selection.options[misc_selection.selectedIndex].value == "inverse") {
    //         for (let k = 0; k < matrix1_misc.length; k++) {
    //             misc_array_1.push(Number(matrix1_misc[k].value));
    //         }

    //         var det = (misc_array_1[0] * misc_array_1[3]) - (misc_array_1[2] * misc_array_1[1]);

    //         if (det == 0) {
    //             console.log("Inverse doesn't exist.");
    //             for (let k = 0; k < matrix2_misc.length; k++) {
    //                 if (k == 0) {
    //                     matrix2_misc[k].innerHTML = "Doesn't exist";
    //                 }
    //                 else {
    //                     matrix2_misc[k].innerHTML = "--";
    //                 }
    //             }
    //             while (misc_array_1.length > 0) {
    //                 misc_array_1.pop();
    //             }
    //         }
    //         else {
    //             minor2x2();
    //             cofactor2x2();
    //             adjoint2x2();

    //             const numerator1 = [];
    //             const denominator1 = [];

    //             for (let k = 0; k < matrix2_misc.length; k++) {
    //                 if ((adj[k] % det) !== 0 && (det % adj[k]) !== 0) {
    //                     if (adj[k] < 0 && det < 0) {
    //                         for (let y = 0; y <= ((-1) * adj[k]) && y <= ((-1) * det); y++) {
    //                             if ((((-1) * adj[k]) % y) == 0 && (((-1) * det) % y) == 0) {
    //                                 var hcf1 = y;
    //                             }
    //                         }
    //                         numerator1[k] = (adj[k] / hcf1);
    //                         denominator1[k] = det / hcf1;

    //                         if (numerator1[k] < 0 && denominator1[k] < 0) {
    //                             matrix2_misc[k].innerHTML = `${(-1) * numerator1[k]}/${(-1) * denominator1[k]}`;
    //                         }
    //                         else {
    //                             matrix2_misc[k].innerHTML = `${numerator1[k]}/${denominator1[k]}`;
    //                         }
    //                     }
    //                     else if (adj[k] < 0 && det > 0) {
    //                         for (let y = 0; y <= ((-1) * adj[k]) && y <= det; y++) {
    //                             if ((((-1) * adj[k]) % y) == 0 && (det % y) == 0) {
    //                                 var hcf1 = y;
    //                             }
    //                         }
    //                         numerator1[k] = (adj[k] / hcf1);
    //                         denominator1[k] = det / hcf1;

    //                         matrix2_misc[k].innerHTML = `${numerator1[k]}/${denominator1[k]}`;
    //                     }
    //                     else if (adj[k] > 0 && det < 0) {
    //                         for (let y = 0; y <= adj[k] && y <= ((-1) * det); y++) {
    //                             if ((adj[k] % y) == 0 && (((-1) * det) % y) == 0) {
    //                                 var hcf1 = y;
    //                             }
    //                         }
    //                         numerator1[k] = (adj[k] / hcf1);
    //                         denominator1[k] = ((-1) * det) / hcf1;
    //                         matrix2_misc[k].innerHTML = `-${numerator1[k]}/${denominator1[k]}`;
    //                     }
    //                     else if (adj[k] > 0 && det > 0) {
    //                         for (let y = 0; y <= adj[k] && y <= det; y++) {
    //                             if ((adj[k] % y) == 0 && (det % y) == 0) {
    //                                 var hcf1 = y;
    //                             }
    //                         }
    //                         numerator1[k] = (adj[k] / hcf1);
    //                         denominator1[k] = det / hcf1;

    //                         matrix2_misc[k].innerHTML = `${numerator1[k]}/${denominator1[k]}`;
    //                     }

    //                 }
    //                 else if ((adj[k] % det) == 0) {
    //                     matrix2_misc[k].innerHTML = adj[k] / det;
    //                 }
    //                 else if (det % adj[k] == 0) {
    //                     if (adj[k] < 0 && det > 0) {
    //                         matrix2_misc[k].innerHTML = `-1/${(-1) * (det / adj[k])}`;
    //                     }
    //                     else if (adj[k] > 0 && det < 0) {
    //                         matrix2_misc[k].innerHTML = `-1/${(-1) * (det / adj[k])}`;
    //                     }
    //                     else {
    //                         matrix2_misc[k].innerHTML = `1/${det / adj[k]}`;
    //                     }
    //                 }
    //                 else {
    //                     if (adj[k] < 0 && det < 0) {
    //                         matrix2_misc[k].innerHTML = `${(-1) * adj[k]}/${(-1) * det}`;
    //                     }

    //                     else {
    //                         matrix2_misc[k].innerHTML = `${adj[k]}/${det}`;
    //                     }
    //                 }
    //             }

    //             while (misc_array_1.length > 0) {
    //                 misc_array_1.pop();
    //             }
    //             while (minor_array.length > 0) {
    //                 minor_array.pop();
    //             }
    //             while (cofactor.length > 0) {
    //                 cofactor.pop();
    //             }
    //             while (adj.length > 0) {
    //                 adj.pop();
    //             }
    //         }
    //     }
    //     else if (misc_selection.options[misc_selection.selectedIndex].value == "minor") {
    //         for (let k = 0; k < matrix1_misc.length; k++) {
    //             misc_array_1.push(Number(matrix1_misc[k].value));
    //         }
    //         minor2x2();
    //     }
    //     else if (misc_selection.options[misc_selection.selectedIndex].value == "determinant") {
    //         for (let k = 0; k < matrix1_misc.length; k++) {
    //             misc_array_1.push(Number(matrix1_misc[k].value));
    //         }

    //         var det = (misc_array_1[0] * misc_array_1[3]) - (misc_array_1[2] * misc_array_1[1]);

    //         for (let k = 0; k < matrix2_misc.length; k++) {
    //             if (k == 0) {
    //                 matrix2_misc[k].innerHTML = det;
    //             }
    //             else {
    //                 matrix2_misc[k].innerHTML = '--';
    //             }
    //         }
    //         while (misc_array_1.length > 0) {
    //             misc_array_1.pop();
    //         }
    //     }
    //     else if (misc_selection.options[misc_selection.selectedIndex].value == "adjoint") {
    //         for (let k = 0; k < matrix1_misc.length; k++) {
    //             misc_array_1.push(Number(matrix1_misc[k].value));
    //         }
    //         minor2x2();
    //         cofactor2x2();
    //         adjoint2x2();
    //     }
    //     else if (misc_selection.options[misc_selection.selectedIndex].value == "cofactor") {
    //         for (let k = 0; k < matrix1_misc.length; k++) {
    //             misc_array_1.push(Number(matrix1_misc[k].value));
    //         }
    //         minor2x2();
    //         cofactor2x2();
    //     }
    //     return null;
    // }
    // function miscoperation3x3() {
    //     if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "transpose") {
    //         for (let k = 0; k < matrix3_misc.length; k++) {
    //             misc_array_3.push(Number(matrix3_misc[k].value));
    //         }
    //         transpose3x3();
    //     }
    //     else if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "inverse") {
    //         for (let k = 0; k < matrix3_misc.length; k++) {
    //             misc_array_3.push(Number(matrix3_misc[k].value));
    //         }

    //         var det = (misc_array_3[0] * ((misc_array_3[4] * misc_array_3[8]) - (misc_array_3[5] * misc_array_3[7]))) - (misc_array_3[1] * ((misc_array_3[3] * misc_array_3[8]) - (misc_array_3[6] * misc_array_3[5]))) + (misc_array_3[2] * ((misc_array_3[3] * misc_array_3[7]) - (misc_array_3[6] * misc_array_3[4])));

    //         if (det == 0) {
    //             console.log("Inverse doesn't exist.");
    //             for (let k = 0; k < matrix4_misc.length; k++) {
    //                 if (k == 4) {
    //                     matrix4_misc[k].innerHTML = "Doesn't exist";
    //                 }
    //                 else {
    //                     matrix4_misc[k].innerHTML = "--";
    //                 }
    //             }
    //             while (misc_array_3.length > 0) {
    //                 misc_array_3.pop();
    //             }
    //         }
    //         else {
    //             minor3x3();
    //             cofactor3x3();
    //             adjoint3x3();

    //             const numerator = [];
    //             const denominator = [];
    //             for (let k = 0; k < matrix4_misc.length; k++) {
    //                 if ((adj[k] % det) !== 0 && (det % adj[k]) !== 0) {
    //                     if (adj[k] < 0 && det < 0) {
    //                         for (let y = 0; y <= ((-1) * adj[k]) && y <= ((-1) * det); y++) {
    //                             if ((((-1) * adj[k]) % y) == 0 && (((-1) * det) % y) == 0) {
    //                                 var hcf = y;
    //                             }
    //                         }
    //                         numerator[k] = (adj[k] / hcf);
    //                         denominator[k] = det / hcf;

    //                         if (numerator[k] < 0 && denominator[k] < 0) {
    //                             matrix4_misc[k].innerHTML = `${(-1) * numerator[k]}/${(-1) * denominator[k]}`;
    //                         }
    //                         else {
    //                             matrix4_misc[k].innerHTML = `${numerator[k]}/${denominator[k]}`;
    //                         }
    //                     }
    //                     else if (adj[k] < 0 && det > 0) {
    //                         for (let y = 0; y <= ((-1) * adj[k]) && y <= det; y++) {
    //                             if ((((-1) * adj[k]) % y) == 0 && (det % y) == 0) {
    //                                 var hcf = y;
    //                             }
    //                         }
    //                         numerator[k] = (adj[k] / hcf);
    //                         denominator[k] = det / hcf;

    //                         matrix4_misc[k].innerHTML = `${numerator[k]}/${denominator[k]}`;
    //                     }
    //                     else if (adj[k] > 0 && det < 0) {
    //                         for (let y = 0; y <= adj[k] && y <= ((-1) * det); y++) {
    //                             if ((adj[k] % y) == 0 && (((-1) * det) % y) == 0) {
    //                                 var hcf = y;
    //                             }
    //                         }
    //                         numerator[k] = (adj[k] / hcf);
    //                         denominator[k] = ((-1) * det) / hcf;
    //                         matrix4_misc[k].innerHTML = `-${numerator[k]}/${denominator[k]}`;
    //                     }
    //                     else if (adj[k] > 0 && det > 0) {
    //                         for (let y = 0; y <= adj[k] && y <= det; y++) {
    //                             if ((adj[k] % y) == 0 && (det % y) == 0) {
    //                                 var hcf = y;
    //                             }
    //                         }
    //                         numerator[k] = (adj[k] / hcf);
    //                         denominator[k] = det / hcf;

    //                         matrix4_misc[k].innerHTML = `${numerator[k]}/${denominator[k]}`;
    //                     }
    //                 }
    //                 else if ((adj[k] % det) == 0) {
    //                     matrix4_misc[k].innerHTML = adj[k] / det;
    //                 }
    //                 else if (det % adj[k] == 0) {
    //                     if (adj[k] < 0 && det > 0) {
    //                         matrix4_misc[k].innerHTML = `-1/${(-1) * (det / adj[k])}`;
    //                     }
    //                     else if (adj[k] > 0 && det < 0) {
    //                         matrix4_misc[k].innerHTML = `-1/${(-1) * (det / adj[k])}`;
    //                     }
    //                     else {
    //                         matrix4_misc[k].innerHTML = `1/${det / adj[k]}`;
    //                     }
    //                 }
    //                 else {
    //                     if (adj[k] < 0 && det < 0) {
    //                         matrix4_misc[k].innerHTML = `${(-1) * adj[k]}/${(-1) * det}`;
    //                     }

    //                     else {
    //                         matrix4_misc[k].innerHTML = `${adj[k]}/${det}`;
    //                     }
    //                 }
    //             }
    //             while (misc_array_3.length > 0) {
    //                 misc_array_3.pop();
    //             }
    //             while (minor_array.length > 0) {
    //                 minor_array.pop();
    //             }
    //             while (cofactor.length > 0) {
    //                 cofactor.pop();
    //             }
    //             while (adj.length > 0) {
    //                 adj.pop();
    //             }
    //         }
    //     }
    //     else if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "minor") {
    //         for (let k = 0; k < matrix3_misc.length; k++) {
    //             misc_array_3.push(Number(matrix3_misc[k].value));
    //         }
    //         minor3x3();
    //     }
    //     else if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "determinant") {
    //         for (let k = 0; k < matrix3_misc.length; k++) {
    //             misc_array_3.push(Number(matrix3_misc[k].value));
    //         }

    //         var det = (misc_array_3[0] * ((misc_array_3[4] * misc_array_3[8]) - (misc_array_3[5] * misc_array_3[7]))) - (misc_array_3[1] * ((misc_array_3[3] * misc_array_3[8]) - (misc_array_3[6] * misc_array_3[5]))) + (misc_array_3[2] * ((misc_array_3[3] * misc_array_3[7]) - (misc_array_3[6] * misc_array_3[4])));
    //         // matrix4_misc[4].innerHTML = det;

    //         for (let k = 0; k < matrix4_misc.length; k++) {
    //             if (k == 4) {
    //                 matrix4_misc[k].innerHTML = det;
    //             }
    //             else {
    //                 matrix4_misc[k].innerHTML = '--';
    //             }
    //         }
    //         while (misc_array_3.length > 0) {
    //             misc_array_3.pop();
    //         }
    //     }
    //     else if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "adjoint") {
    //         for (let k = 0; k < matrix3_misc.length; k++) {
    //             misc_array_3.push(Number(matrix3_misc[k].value));
    //         }
    //         minor3x3();
    //         cofactor3x3();
    //         adjoint3x3();
    //     }
    //     else if (misc_selection_2.options[misc_selection_2.selectedIndex].value == "cofactor") {
    //         for (let k = 0; k < matrix3_misc.length; k++) {
    //             misc_array_3.push(Number(matrix3_misc[k].value));
    //         }
    //         minor3x3();
    //         cofactor3x3();
    //     }
    //     return null;
    // }

    selected.forEach(function (field) {
        // if (index == 0) {
        //     field.addEventListener("click", matrixoperation2x2());
        // }
        // console.log(field);
        field.addEventListener("click", function(){
            matrixoperation2x2();
        });
        // matrixoperation2x2();
    });

    // for(let k = 0; k<selected.length; k++){
    //     matrixoperation2x2();
    // };



    // selected.onchange = () => {
    //     matrixoperation2x2();
    // }
    // selectmatrixmisc.onchange = () => {
    //     if (selectmatrixmisc.options[selectmatrixmisc.selectedIndex].value == "2x2") {
    //         document.querySelector(".container-main-misc-3x3").classList.add("none");
    //         document.querySelector(".container-main-misc-2x2").classList.remove("none");
    //         document.querySelector("#matrix-label-misc").innerText = "2 x 2 Matrix";
    //     }
    //     else if (selectmatrixmisc.options[selectmatrixmisc.selectedIndex].value == "3x3") {
    //         document.querySelector(".container-main-misc-2x2").classList.add("none");
    //         document.querySelector(".container-main-misc-3x3").classList.remove("none");
    //         document.querySelector("#matrix-label-misc").innerText = "3 x 3 Matrix";
    //     }
    // }
    // misc_selection.onchange = () => {
    //     miscoperation2x2();
    //     matrix2_misc_outer.classList.add("change-2x2");
    // }
    // misc_selection_2.onchange = () => {
    //     miscoperation3x3();
    //     matrix4_misc_outer.classList.add("change-3x3");
    // }


    // matrix1_misc.forEach(function (field) {
    //     field.onkeyup = () => {
    //         miscoperation2x2();
    //     }
    // });
    // matrix3_misc.forEach(function (field) {
    //     field.onkeyup = () => {
    //         miscoperation3x3();
    //     }
    // });
});