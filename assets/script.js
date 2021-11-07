const totalquantity = document.querySelector('.total-quantity')
var quantity = 0


let button1 = document.querySelector('#quantity-up')
button1.addEventListener('click', function(e){
    quantity++
    totalquantity.textContent = 'Quantity '+ quantity

})

let button2 = document.querySelector('#quantity-down')
button2.addEventListener('click', function(e){
    if (quantity > 0){
        quantity--
        totalquantity.textContent = 'Quantity '+ quantity
    }
       


})


//when quantity is increased by click then quantity text needs to be increased by 1
//when quantity is decreased by click then quantity text needs to be decreased by 1