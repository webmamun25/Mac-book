// working with memory

function memorycalculate(memory){
    if(memory == "sixteengb" ){
        document.getElementById(memory).addEventListener('click',function(){
            let memory = document.getElementById("usingsixteen").innerText = 180
            var memorytwo = parseInt(memory)
            
            var delivery =parseInt( document.getElementById('deliveryprice').innerText);
            var storage = parseInt(document.getElementById('storageprice').innerText)
            calculatetotalcost(memorytwo,storage ,delivery);        
            })
    }
    else{
        document.getElementById(memory).addEventListener('click',function(){
            let memory = document.getElementById("usingsixteen").innerText = 0;
            var memorytwo = parseInt(memory)
            var delivery =parseInt( document.getElementById('deliveryprice').innerText);
            var storage = parseInt(document.getElementById('storageprice').innerText)
            calculatetotalcost(memorytwo,storage ,delivery); 
            })
    }
    

}

//calling memory related function
var memoryfirst = memorycalculate('sixteengb')
var memorysecond = memorycalculate('eightgb')


//working with  storage

function ssdcalculate(ssd){
    if(ssd == "highssd"){
        document.getElementById(ssd).addEventListener('click',function(){
        let storageCost = document.getElementById("storageprice").innerText = 180
        let storage = parseInt(storageCost)
        var  memory =parseInt( document.getElementById('usingsixteen').innerText);
        
        var delivery =parseInt( document.getElementById('deliveryprice').innerText);
        
        calculatetotalcost(memory,storage ,delivery);  
        
        

        
        })
    }
    else if(ssd == "midssd"){
        document.getElementById(ssd).addEventListener('click',function(){
        let storageCost = document.getElementById("storageprice").innerText = 100
        let storage = parseInt(storageCost)
        var  memory =parseInt( document.getElementById('usingsixteen').innerText);
        
        var delivery =parseInt( document.getElementById('deliveryprice').innerText);
        
        calculatetotalcost(memory,storage ,delivery);  
        
        })
    }
    else{
        document.getElementById(ssd).addEventListener('click',function(){
        let storageCost = document.getElementById("storageprice").innerText = 0
        let  storage =parseInt(storageCost)
        var  memory =parseInt( document.getElementById('usingsixteen').innerText);
        
        var delivery =parseInt( document.getElementById('deliveryprice').innerText);
        
        calculatetotalcost(memory,storage ,delivery);  
        })
    }
    
   
}


//calling ssd related function
var ssdfirst = ssdcalculate('lowssd')

var ssdsecond = ssdcalculate('midssd')

var ssdthird = ssdcalculate('highssd')



// calculate shipping cost

function shipping(charge){
    if(charge == "chargetwenty"){
        document.getElementById(charge).addEventListener('click',function(){
        let chargeCost = document.getElementById("deliveryprice").innerText = 20
        let delivery = parseInt(chargeCost)  
        var storage =parseInt( document.getElementById('storageprice').innerText);
        
        var  memory =parseInt( document.getElementById('usingsixteen').innerText);
        
        
        calculatetotalcost(memory,storage,delivery);
  
        })
    }
    else{
        document.getElementById(charge).addEventListener('click',function(){
            let chargeCost = document.getElementById("deliveryprice").innerText = 0
            let delivery = parseInt(chargeCost)
            var storage =parseInt( document.getElementById('storageprice').innerText);
        
            var  memory =parseInt( document.getElementById('usingsixteen').innerText);
        
        
            calculatetotalcost(memory,storage,delivery);
            
            })
    }

    

}
//calling delivery related function
var shppingfirst = shipping("chargetwenty")
var shippingsecond = shipping("chargenull")

// total price

function calculatetotalcost(memory,storage,delivery) {

    const baseprice =parseInt( document.getElementById('baseprice').innerText)
    var total = document.getElementById('total');
    var totalprice = (baseprice+memory+storage+delivery);
    total.innerText = totalprice;
    var total2 = document.getElementById('totalprice2')
     
    total2.innerText = total.innerText
}




// discount from  steve kaku
document.getElementById('steve').addEventListener('click',function(){
    var kaku =  document.getElementById('stevefield').value
    var final =  document.getElementById('totalprice2')
    var totalprice = document.getElementById('total').innerText;
    if( kaku == "stevekaku"){
        var discount = parseFloat( (totalprice*20)/100);
        final.innerText = totalprice - discount;
        document.getElementById('stevefield').value = '';
        
    }
    else{
        final.innerText=totalprice;
        document.getElementById('stevefield').value = '';
    }
        
})





