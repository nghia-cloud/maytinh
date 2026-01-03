const disp = document.getElementById("display");
const khong = document.getElementById("khong");
const mot = document.getElementById("mot");
const hai = document.getElementById("hai");
const ba = document.getElementById("ba");
const bon = document.getElementById("bon");
const nam = document.getElementById("nam");
const sau = document.getElementById("sau");
const bay = document.getElementById("bay");
const tam = document.getElementById("tam");
const chin = document.getElementById("chin");
const cong = document.getElementById("cong");
const tru = document.getElementById("tru");
const nhan = document.getElementById("nhan");
const chia = document.getElementById("chia");
const del = document.getElementById("del");
const ac = document.getElementById("ac");
const bang = document.getElementById("bang");
const cham = document.getElementById("cham");
const mongoac = document.getElementById("mongoac");
const dongngoac = document.getElementById("dongngoac");



let res = "";



function themKyTu(kt) {
    res += kt;
    disp.textContent = res;
}


    mot.onclick = function () {
        themKyTu("1");
    };
     hai.onclick = function () {
        themKyTu("2");
    };
     ba.onclick = function () {
        themKyTu("3");
    };
     bon.onclick = function () {
        themKyTu("4");
    };
     nam.onclick = function () {
        themKyTu("5");
    };

     sau.onclick = function () {
        themKyTu("6");
    };

     bay.onclick = function () {
        themKyTu("7");
    };

     tam.onclick = function () {
        themKyTu("8");
    };

     chin.onclick = function () {
        themKyTu("9");
    };

     khong.onclick = function () {
        themKyTu("0");
    };
     cong.onclick = function () {
        themKyTu("+");
    };

     tru.onclick = function () {
        themKyTu("-");
    };

     nhan.onclick = function () {
        themKyTu("\u00D7");
    };
    chia.onclick = function () {
        themKyTu("\u00F7");
    };
cham.onclick = function () {
    themKyTu(".");
};

   mongoac.onclick = function () {
    themKyTu("(");
};
dongngoac.onclick = function () {
    themKyTu(")");
};
ac.onclick = function () {
    res = "";
    disp.textContent = res;
}
del.onclick = () => {
    res = res.slice(0, -1);
    disp.textContent = res;
};






function chuyenlaixaudung(xau) {
    return xau
        .replaceAll("\u00D7", "*")
        .replaceAll("\u00F7", "/");
}



function handle (res) {
    res = chuyenlaixaudung(res);
    let check = kiemtratoandien(res);
    if (check === true){
       let sohang1 = Number(timsohang1(res));
       let sohang2 = Number(timsohang2(res));
       let ipheptinh = timicuapheptinhchinh(res);
       let pheptinh = res[ipheptinh];

       res = String(thuchienpheptinh(sohang1, sohang2, pheptinh));





    }
    else {
        res = "Nhập sai rồi!";
    }
    return res;
}

////////////////////////////////////////chua xai mo
/*
function timchisonhanchia (xau) {
    let index = 0;
    for (let i = 0 ;i < xau.length; i++ ) {
        if (xau[i]==="*"||xau[i]==="/"){
            index = i;
            break;
        }
    }
    return index;
}


function timchisocongtru (xau) {
    let index = 0; 
    for (let i = 0 ; i <xau.length;i ++ ) {
        if (xau[i]==="+"||xau[i]==="-"){
            index = i;
            break;
        }
    }
    return index;
}
*/
/////////////////////////////////////////////chuaxai dong


//kiemtratinhhople
//gom co
// hai phep tinh nam o dau va cuoi                         xong

// hai pheptinh nam ke nhau                                 xong
// dau cham va phep tinh nam ke nhau;                     xong
// dau ngoac mo và ngoac dong khong bang nhau            xong
// hai dau cham ke nhau                                         xong
// chia cho 0;                                          xong
//daungoac và pheptinh;                                 xong

//thuchienpheptinh

//dempheptinh
//dempheptinhtrongngoac;

//thuchienpheptinhkhi co dau ngoac và khong co dau ngoac

function kiemtradaucuoi (xau) {
    if (xau[0]==="+"||xau[0]==="*"||xau[0]==="/"||xau[0]===")"){
        return false;
    }
    if (xau[xau.lengh-1]==="+"||xau[xau.lengh-1]==="-"||xau[xau.lengh-1]==="*"||xau[xau.lengh-1]==="/"||xau[xau.lengh-1]==="("){
        return false;
    }
    return true;
}

function kiemtrahaipheptinhlientiep(xau) {
    const toanTu = "+-*/.";
for (let i = 0; i < xau.length - 1; i++) {
    if (toanTu.includes(xau[i]) && toanTu.includes(xau[i + 1])) {
        return false;
    }
}
return true;
}

function kiemtrasoluongdaungoac(xau) {
    let ngoacmo = 0;
    let ngoacdong = 0;
    for (let i = 0 ;i < xau.length; i ++ ) {
        if (xau[i]==="(") {
            ngoacmo++;
        }
        if (xau[i]===")") {
            ngoacdong++;
        }
    }
    if (ngoacmo === ngoacdong) {
        return true;
    }
    return false;
}


function kiemtradaungoacvapheptinh(xau) {
     const toanTu = "*/.";
     for (let i = 0; i < xau.length - 1; i++) {
    if (toanTu.includes(xau[i]) && xau[i+1]===")" || toanTu.includes(xau[i+1])&& xau[i]==="(") {
        return false;
    }

}
return true;
}

function kiemtrachiachokhong (xau) {
    for (let i = 0; i < xau.length-1; i ++ ) {
        if (xau[i]==="/"&& xau[i+1]==="0"){
            return false;
        }
    }
    return true;
}

function kiemtrahaidaungoaclientiep(xau) {
    for (let i = 0; i < xau.length-1; i++ )  {
        if (xau [i]==="(" && xau[i+1]===")") {
            return false;
        }
    }
    return true;
}

function kiemtratoandien(xau) {
    let kiem1 = kiemtradaucuoi (xau);
    let kiem2 = kiemtrahaipheptinhlientiep(xau);
    let kiem3 = kiemtrasoluongdaungoac(xau);
    let kiem4 =  kiemtradaungoacvapheptinh(xau);
    let kiem5 = kiemtrachiachokhong(xau);
    let kiem6 = kiemtrahaidaungoaclientiep(xau);
    if (kiem1 && kiem2 && kiem3 && kiem4 && kiem5 && kiem6) {
        return true;
    }
    return false;
}

///////////////////////////////////////////////////////////////////////////
/*
function demdaungoac(xau) {
    let daungoac = 0;
    for (let i = 0 ; i < xau.length; i ++ ) {
        if (xau[i]==="("){
            daungoac++;
        }
       
    }
    return daungoac;
}

function daunhanchia(xau) {
    let nhanchia = 0;
    for (let i = 0; i < xau.length; i ++) {
        if (xau[i]==="*"|| xau[i]==="/") {
            nhanchia++;
        }
    }
    return nhanchia;
}

function daucongtru(xau) {
    let congtru = 0;
    for (let i = 0 ; i <xau.length; i++ ) {
        if (xau[i]==="+"||xau[i]==="-") {
            congtru++;
        }
    }
    return congtru;
}


function dempheptinh (xau) {
    let pheptinh = 0;
    for (let i = 0; i < xau.length; i ++ ) {
        if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
            pheptinh ++;
        }
    }
    return pheptinh;
}*/
///////////////////////////////////////////////////////////////////////////

/*function trongdaungoac1pheptinh (xaunho) {
    let pheptinh = dempheptinh(xaunho);
    if (pheptinh > 1){
        return false;
    }
    return true;
}*/

/*function trongngoaclasoam (xaunho) {
    let dauam = false;
    if (xaunho[0]=== "-") {
dauam = true;

    }
    sopheptinh = dempheptinh(xaunho);
    if (dauam&& sopheptinh === 1 && xaunho.length>1){
        return true;
    }
    return false;

}*/



/*function pheptinhnho2sohang(xaunho) {
    let sohang1 = "";
    let sohang2 = "";
    let pheptinh = "";
    let index = 0;
    for (let i = 0; i < xaunho.length; i ++ ) {
        if (xaunho[i]==="+" || xaunho[i]==="-"|| xaunho[i]==="*" || xaunho[i]=== "/") {
            index = i;
            pheptinh = xaunho[i];
            break;
        }
    }

    sohang1= xaunho.slice(0,index);
    sohang2= xaunho.slice(index+1);

    sohang1 = Number(sohang1);
    sohang2 = Number(sohang2);

    let res = thuchienpheptinh(sohang1, sohang2, pheptinh);
    res = String(res);
    return res;


}*/








function thuchienpheptinh(sohangmot, sohanghai, pheptinh) {
    if (pheptinh === "+") {
        return sohangmot + sohanghai;
    }
    else if (pheptinh === "-") {
        return sohangmot - sohanghai;
    }
    else if (pheptinh === "*") {
        return sohangmot * sohanghai;
    }
    else if (pheptinh === "/") {
       
 return sohangmot / sohanghai;
        }
}


//////////////////////////////////////////////chua xai dong


function timsohang1(xau) {
    let sohangdaucodaungoac = false;
    let sohang1 = "";
    if (xau[0]==="(") {
        sohangdaucodaungoac = true;
    }
    let index = 0;
    if (sohangdaucodaungoac) {
        if (xau[1]==="-") {
            for (let i = 2; i < xau.length; i++ ) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i-1;
                    break;
                }
            }
            sohang1 = xau.slice(1,index);

        }
        else{
            for (let i = 1; i < xau.length; i++ ) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i-1;
                    break;
                }
            }
            sohang1 = xau.slice(1,index);
        }


    }
    else {
        
        if (xau[0]==="-"){
            for (let i = 1; i < xau.length; i++ ) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i;
                    break;
                }
            }
            sohang1 = xau.slice(0,index);

        }
        else {
            for (let i = 0; i < xau.length; i++ ) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i;
                    break;
                }
            }
            sohang1 = xau.slice(0,index);
        }
    }
    return sohang1;
}




function timicuapheptinhchinh(xau) {
    let index = 0;
    if (xau[0]==="("){
        if (xau[1]==="-") {
            for (let i = 2 ; i< xau.length; i++) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i;
                    break;
                }


        }}
        else {
             for (let i = 1 ; i< xau.length; i++) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i;
                    break;
                }

        }}

    }
    else {
        if (xau[0]==="-") {
            for (let i = 1 ; i< xau.length; i++) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i;
                    break;
                }

        }}
        else {
            for (let i = 0 ; i< xau.length; i++) {
                if (xau[i]==="+"||xau[i]==="-"||xau[i]==="*"||xau[i]==="/"){
                    index = i;
                    break;
                }
            }
        }

    }
    return index;
}


function timsohang2 (xau) {
    let ipheptinh = timicuapheptinhchinh(xau);
    let sohangtho = xau.slice(ipheptinh+1);
    let sohang2 = timsohang(sohangtho);
    return sohang2;

}

function timsohang(xau) {
let sohangdaucodaungoac = false;
    let sohang = "";
    if (xau[0]==="(") {
        sohangdaucodaungoac = true;
    }
    let index = 0;
    if (sohangdaucodaungoac) {
        
            for (let i = 1; i < xau.length; i++ ) {
                if (xau[i]===")"){
                    index = i;
                    break;
                }
            }
            sohang = xau.slice(1,index);
            return sohang;
    }


    
   
    
    return xau;
}
















bang.onclick = function() {
res = handle(res);
disp.textContent= res;
} 