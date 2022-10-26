/*
* File: app.ts
* Author: Boros Zoltán
* Copyright: 2022, Boros Zoltán
* Group: Szoft II N
* Date: 2022-10-25
* Github: https://github.com/BorosFather/
* Licenc: GNU GPL
*/

const calagomb = document.getElementById("calgomb");
const eredmeny = document.getElementById("eredmeny");

calagomb.addEventListener("click", ()=>{
    const aside = document.getElementById("aside") as HTMLInputElement;
    const bside = document.getElementById("bside") as HTMLInputElement;
    const cside = document.getElementById("cside") as HTMLInputElement;
    const dside = document.getElementById("dside") as HTMLInputElement;

    let aNum: number = Number(aside.value);
    let bNum: number = Number(bside.value);
    let cNum: number = Number(cside.value);
    let dNum: number = Number(dside.value);
    let teru = calaTeru(aNum, bNum, cNum , dNum );

    eredmeny.textContent = "Trapéz Területe:" + String(teru);
    aside.value = "";
    bside.value = "";
    cside.value = "";
    dside.value = "";

})

function calaTeru(aNum: number, bNum: number, cNum: number, dNum: number):number {
    const ter = (aNum + cNum) / ( 4 * (aNum - cNum));
    const mas = Math.sqrt((aNum + bNum - cNum + dNum)*(aNum-bNum-cNum+dNum)*(aNum+bNum-cNum-dNum)*(-aNum+bNum+cNum+dNum));

    return ter * mas;
}
