
document.getElementById("Calculate").addEventListener("click", area);

function area(){
    let b1 = Number(document.getElementById("top-base").value);
    let b2 = Number(document.getElementById("bottom-base").value);
    let h = Number(document.getElementById("height").value);
    let total = 0.5*(b1+b2)*h;
    document.getElementById("answer").innerHTML = total;
}