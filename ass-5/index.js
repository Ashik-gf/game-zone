
let total =0;
function getInformation(target){
    const itemName = target.childNodes[5].innerText;
   
    const p = document.createElement('p');
    p.innerHTML = itemName;
    const selectedIteamBox = document.getElementById('itemBox');
    count = itemBox.childElementCount;

    p.innerHTML = `<p class="text-xl font-medium">${count + 1}. ${itemName}</p>`;
    selectedIteamBox.appendChild(p);
    
    // console.log(itemName)
    const price = target.childNodes[7].innerText.split(' ')[0];
     total = parseFloat(total) + parseFloat(price);

     document.getElementById('cuponBtn').addEventListener('click', function(){
       const a = document.getElementById('inputId').value;
        if(a == "SELL200"){
            const diccountAmmount = document.getElementById('discount');
             const discountCalculation = total*(20/100);
             diccountAmmount.innerText=discountCalculation.toFixed(2);
             const discount = total * (20/100);
             document.getElementById('grandTotal').innerText= total-discount;
         } 
       
     })
     
         if(total>=1000){
            const cuponButton = document.getElementById('cuponBtn');
            cuponButton.removeAttribute('disabled')
         }
         if(total > 0){

            const payBtn = document.getElementById('payBtn');
            payBtn.removeAttribute('disabled')
         }
     
 document.getElementById('totalAmmount').innerText=total;
 document.getElementById('grandTotal').innerText= total;

        }
        // home button 
        document.getElementById('homeBtn').addEventListener('click', function(){

            document.getElementById('totalAmmount').innerText=" ";
            document.getElementById('grandTotal').innerText= " ";
            document.getElementById('discount').innerText=" ";
            document.getElementById('itemBox').innerText=" ";
        })
        
     