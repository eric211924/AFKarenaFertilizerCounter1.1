//原生紫
let a1 = ['耀光', '蠻血', '綠裔', '亡靈']
let a2 = [1, 2, 6, 8, 16, 24, 28]; //同族
let a3 = ['盧修斯', '布魯特', '妮莫拉', '雪米拉']
let a4 = [1, 2, 4, 8]; //自身

//原生藍
let a5 = ['米瑞兒', '薩韋斯', '雅　頓', '韋　旦'];
let a6 = [9, 18, 54, 72]; //同族
let a7 = [3, 6, 6, 12]; //自身

function print_value1() {
    let c1 = parseInt(document.getElementById('u7').value);
    let c2 = parseInt(document.getElementById('u8').value);
    let c3 = parseInt(document.getElementById('u9').value);
    let c4 = parseInt(document.getElementById('u10').value);
    let c5 = parseInt(document.getElementById('u11').value);
    let c6 = parseInt(document.getElementById('u12').value);
    let c7 = c8 = c9 = c10 = c11 = c12 = c13 = c14 = 0;

    switch (c1) {
        case 1:
            document.getElementById("s21").innerHTML =
                document.getElementById("s25").innerHTML = a1[0];
            document.getElementById("s23").innerHTML =
                document.getElementById("s29").innerHTML =
                document.getElementById("s30").innerHTML = a5[0];
            break;
        case 2:
            document.getElementById("s21").innerHTML =
                document.getElementById("s25").innerHTML = a1[1];
            document.getElementById("s23").innerHTML =
                document.getElementById("s29").innerHTML =
                document.getElementById("s30").innerHTML = a5[1];
            break;
        case 3:
            document.getElementById("s21").innerHTML =
                document.getElementById("s25").innerHTML = a1[2];
            document.getElementById("s23").innerHTML =
                document.getElementById("s29").innerHTML =
                document.getElementById("s30").innerHTML = a5[2];
            break;
        case 4:
            document.getElementById("s21").innerHTML =
                document.getElementById("s25").innerHTML = a1[3];
            document.getElementById("s23").innerHTML =
                document.getElementById("s29").innerHTML =
                document.getElementById("s30").innerHTML = a5[3];
            break;
    }

    switch (c2) {
        case 1:
            c7 = a6[0];
            c8 = a7[0];
            break;
        case 2:
            c7 = a6[1];
            c8 = a7[1];
            break;
        case 3:
            c7 = a6[2];
            c8 = a7[2];
            break;
        case 4:
            c7 = a6[3];
            c8 = a7[3];
            break;
    }
    document.getElementById("s22").innerHTML = c7;
    document.getElementById("s24").innerHTML = c8;

    c9 = c3 * 3 + c4 * 9 + c5 * 18;
    document.getElementById("s26").innerHTML = c9;

    c10 = c7 - c9;
    document.getElementById("s27").innerHTML = c10;

    c11 = c9 / c7 * 100;
    document.getElementById("s28").innerHTML = c11.toFixed(1);

    switch (c6) {
        case 1:
            c12 = a7[0];
            break;
        case 2:
            c12 = a7[0];
            break;
        case 3:
            c12 = a7[1];
            break;
        case 4:
            c12 = a7[1];
            break;
    }
    document.getElementById("s31").innerHTML = c12;

    c13 = c8 - c12;
    document.getElementById("s32").innerHTML = c13;

    c14 = c12 / c8 * 100;
    document.getElementById("s33").innerHTML = c14.toFixed(1);
}

function print_value() {
    let b1 = parseInt(document.getElementById('u1').value);
    let b2 = parseInt(document.getElementById('u2').value);
    let b3 = parseInt(document.getElementById('u3').value);
    let b4 = parseInt(document.getElementById('u4').value);
    let b5 = parseInt(document.getElementById('u5').value);
    let b6 = 0;
    let b7 = 0;
    let b8 = parseInt(document.getElementById('u6').value);
    let b9 = 0;
    let b10 = 0;
    let b11 = 0;

    switch (b1) {
        case 1:
            document.getElementById("s1").innerHTML =
                document.getElementById("s5").innerHTML = a1[0];
            document.getElementById("s3").innerHTML =
                document.getElementById("s9").innerHTML =
                document.getElementById("s10").innerHTML = a3[0];
            break;
        case 2:
            document.getElementById("s1").innerHTML =
                document.getElementById("s5").innerHTML = a1[1];
            document.getElementById("s3").innerHTML =
                document.getElementById("s9").innerHTML =
                document.getElementById("s10").innerHTML = a3[1];
            break;
        case 3:
            document.getElementById("s1").innerHTML =
                document.getElementById("s5").innerHTML = a1[2];
            document.getElementById("s3").innerHTML =
                document.getElementById("s9").innerHTML =
                document.getElementById("s10").innerHTML = a3[2];
            break;
        case 4:
            document.getElementById("s1").innerHTML =
                document.getElementById("s5").innerHTML = a1[3];
            document.getElementById("s3").innerHTML =
                document.getElementById("s9").innerHTML =
                document.getElementById("s10").innerHTML = a3[3];
            break;
    }

    switch (b2) {
        case 1:
            b7 = a2[0];
            b10 = a4[0];
            break;
        case 2:
            b7 = a2[1];
            b10 = a4[1];
            break;
        case 3:
            b7 = a2[2];
            b10 = a4[1];
            break;
        case 4:
            b7 = a2[3];
            b10 = a4[2];
            break;
        case 5:
            b7 = a2[4];
            b10 = a4[2];
            break;
        case 6:
            b7 = a2[5];
            b10 = a4[2];
            break;
        case 7:
            b7 = a2[6];
            b10 = a4[3];
            break;
    }

    document.getElementById("s4").innerHTML = b10;
    document.getElementById("s2").innerHTML = b7;

    b6 = b3 + b4 * 2 + b5 * 6;
    document.getElementById("s6").innerHTML = b6;
    document.getElementById("s7").innerHTML = b7 - b6;
    document.getElementById("s8").innerHTML = (b6 / b7 * 100).toFixed(1);

    switch (b8) {
        case 1:
            b9 = a4[0];
            break;
        case 2:
            b9 = a4[1];
            break;
        case 3:
            b9 = a4[1];
            break;
        case 4:
            b9 = a4[2];
            break;
        case 5:
            b9 = a4[2];
            break;
        case 6:
            b9 = a4[2];
            break;
    }
    document.getElementById("s11").innerHTML = b9;

    b11 = b10 - b9;
    document.getElementById("s12").innerHTML = b11;
    document.getElementById("s13").innerHTML = (b9 / b10 * 100).toFixed(1);
}