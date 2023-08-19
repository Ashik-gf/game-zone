
let total =0;
function getInformation(target){
    const itemName = target.childNodes[5].innerText;
   
    const li = document.createElement('li');
    li.innerText = itemName;
    const selectedIteamBox = document.getElementById('itemBox');
    selectedIteamBox.appendChild(li);
    // console.log(itemName)
    const price = target.childNodes[7].innerText.split(' ')[0];
     total = parseFloat(total) + parseFloat(price);
     const cupon = document.getElementById('inputFieldId').value;

     if(total>=200){
        const diccountAmmount = document.getElementById('discount');
        const discountAmmountString =  document.getElementById('discount').innerText;
        const discount = parseFloat(discountAmmountString);
        const discountCalculation = total*(20/100);
        diccountAmmount.innerText=discountCalculation.toFixed(2);
    
        const grandTotalAmmount = document.getElementById('grandTotal');
        const grandTotalAmmountString = grandTotalAmmount.innerText;
        const grandTotalValue = parseFloat(grandTotalAmmountString);
        const grandTotalResult = (total - discountCalculation);
        grandTotalAmmount.innerText=grandTotalResult.toFixed(2);
        
     }
     document.getElementById('totalAmmount').innerText=total;
    // console.log(total);

}
