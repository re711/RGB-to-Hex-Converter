const convertBtn = document.getElementById('convertBtn')

convertBtn.addEventListener('click', function() {
    let inputR = Number(document.getElementById('inputR').value)
    let inputG = Number(document.getElementById('inputG').value)
    let inputB = Number(document.getElementById('inputB').value)
    let rHEX = inputR.toString(16).padStart(2, '0')
    let gHEX = inputG.toString(16).padStart(2, '0')
    let bHEX = inputB.toString(16).padStart(2, '0')

    if (inputR >= 0 && inputR <= 255 && inputG >= 0 && inputG <=255 && inputB >=0 && inputB <= 255) {
        let hexValue = `#${rHEX}${gHEX}${bHEX}`
        document.getElementById('result').value = `${hexValue}`
        document.getElementById('color').style.backgroundColor = `${hexValue}`
    }else {
        alert('請輸入0~255的數字')
    }
})