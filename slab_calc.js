function taxToPay(taxableAmount){
    var tax=0
    if(taxableAmount<=400000){
        return tax;
    }
    else{
     taxableAmount=taxableAmount-400000;
     if(taxableAmount<=400000){
        tax+= Math.round(taxableAmount*(5/100))
        return tax;
     }
     else{
        tax=tax+ Math.round(400000*(5/100))
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
        tax+= Math.round(taxableAmount*(10/100))
        return tax;
     }
     else{
        tax=tax+ Math.round(400000*(10/100))
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
        tax+= Math.round(taxableAmount*(15/100))
        return tax;
     }
     else{
        tax=tax+ Math.round(400000*(15/100))
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
        tax+= Math.round(taxableAmount*(20/100))
        return tax;
     }
     else{
        tax=tax+ Math.round(400000*(20/100))
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
        tax+= Math.round(taxableAmount*(25/100))
        return tax;
     }
     else{
        tax=tax+ Math.round(400000*(25/100))
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount>0)
    {tax=tax+ Math.round(taxableAmount*(30/100))}
     return tax
    }
}
taxAmount=taxToPay(5000000)
console.log(taxAmount)