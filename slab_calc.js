function taxToPay(taxableAmount){
   var taxAmount=0;
   var tax={
      "slab1":[0,0],
      "slab2":[0,0],
      "slab3":[0,0],
      "slab4":[0,0],
      "slab5":[0,0],
      "slab6":[0,0],
      "slab7":[0,0]
   };
    if(taxableAmount<=400000){
      tax.slab1[0]=taxableAmount;
      tax.slab1[1]=0;
        return tax;
    }
    else{
      tax.slab1[0]=400000;
      tax.slab1[1]=0;
     taxableAmount=taxableAmount-400000;
     if(taxableAmount<=400000){
      tax.slab2[0]=taxableAmount;
        taxAmount+= Math.round(taxableAmount*(5/100))
        tax.slab2[1]=taxAmount;
        return tax;
     }
     else{
        tax.slab2[0]=400000;
        taxAmount=Math.round(400000*(5/100))
        tax.slab2[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab3[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(10/100))
        tax.slab3[1]=taxAmount;
        return tax;
     }
     else{
      tax.slab3[0]=400000;
        taxAmount= Math.round(400000*(10/100))
        tax.slab3[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab4[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(15/100))
        tax.slab4[1]=taxAmount;
        return tax;
     }
     else{
      tax.slab4[0]=400000;
        taxAmount=Math.round(400000*(15/100))
        tax.slab4[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab5[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(20/100))
        tax.slab5[1]=taxAmount;
        return tax;
     }
     else{
      tax.slab5[0]=400000;
        taxAmount=Math.round(400000*(20/100))
        tax.slab5[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab6[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(25/100))
        tax.slab6[1]=taxAmount;
        return tax;
     }
     else{
      tax.slab6[0]=400000;
        taxAmount= Math.round(400000*(25/100))
        tax.slab6[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount>0)
    {tax.slab7[0]=taxableAmount;
      taxAmount= Math.round(taxableAmount*(30/100))
      tax.slab7[1]=taxAmount;
    }
     return tax
    }
}
taxAmount=taxToPay(500000)
console.log(taxAmount)
var totalTax=taxAmount.slab1[1]+taxAmount.slab2[1]+taxAmount.slab3[1]+taxAmount.slab4[1]+taxAmount.slab5[1]+taxAmount.slab6[1]+taxAmount.slab7[1]
console.log(totalTax)