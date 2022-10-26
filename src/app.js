const calagomb = document.getElementById("calgomb");
const eredmeny = document.getElementById("eredmeny");
calagomb.addEventListener("click", () => {
    const aside = document.getElementById("aside");
    const bside = document.getElementById("bside");
    const cside = document.getElementById("cside");
    const dside = document.getElementById("dside");
    let aNum = Number(aside.value);
    let bNum = Number(bside.value);
    let cNum = Number(cside.value);
    let dNum = Number(dside.value);
    let teru = calaTeru(aNum, bNum, cNum, dNum);
    eredmeny.textContent = "Trapéz Területe:" + String(teru);
    aside.value = "";
    bside.value = "";
    cside.value = "";
    dside.value = "";
});
function calaTeru(aNum, bNum, cNum, dNum) {
    const ter = (aNum + cNum) / (4 * (aNum - cNum));
    const mas = Math.sqrt((aNum + bNum - cNum + dNum) * (aNum - bNum - cNum + dNum) * (aNum + bNum - cNum - dNum) * (-aNum + bNum + cNum + dNum));
    return ter * mas;
}
