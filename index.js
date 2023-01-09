// Bài tập 5
function ktraSNT(number){
    let checkSNT = true

    for(let i =2; i <= Math.sqrt(number); i++){

        if(number % i === 0){
            checkSNT = false
            break;
        }
    }
    return checkSNT;
}

document.getElementById('btntinhsnt').onclick = function(){
    let number = +document.getElementById('nhapso2').value;
    let ketqua = 0;

    for (let iso = 2; iso <= number; iso++){
        let checkSNT = ktraSNT(iso);
        if(checkSNT){
            ketqua = ketqua + iso + " "
        }
        
    }


    document.getElementById('inso').innerHTML = "  " + ketqua
}
