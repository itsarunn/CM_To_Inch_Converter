function convert(){
            let cmval = Number(document.getElementById("value").value)
            let inchval = cmval/2.54
            let result = document.getElementById("result")
            result.innerHTML = inchval.toFixed(2)+" inches"
}