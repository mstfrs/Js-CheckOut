var quantity= document.getElementById("product-quantity")
var plusQty= document.getElementsByClassName("fas fa-plus"); 
var minusQty= document.getElementsByClassName("fas fa-minus"); 
var quantityControl= document.getElementsByClassName("quantity-controller")
var productTotalPrice= document.getElementsByClassName("product-line-price")
var productPrice=document.getElementsByClassName("product-price")
var subTotal= document.getElementById("cart-subtotal")
var taxTotal =document.getElementById("cart-tax")
var totalPrice =document.getElementById("cart-total")
var shipping = document.getElementById("cart-shipping")
var rmvButton = document.getElementsByClassName("remove-product")

    /// ****Plus quantity*****************

    function Plus() {
        
    
        for (var x = 0; x < quantityControl.length; x++) {
            
            plusQty[x].addEventListener("click",function(e){
                const quantity= e.target.parentElement.parentElement.children[1]            
                quantity.innerText = Number(quantity.innerText) + 1
                if (quantity.innerText >= 0) {
                    let productTotalPrice = e.target.parentElement.parentElement.parentElement.children[4];
                    let productPrice= e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0];  
                    productTotalPrice.innerText=(productPrice.innerText * quantity.innerText).toFixed(2)              
                    subTotal.children[1].innerText  =   (Number (subTotal.children[1].innerText) + Number(productPrice.innerText)).toFixed(2);                
                    taxTotal.children[1].innerText  =   (Number (subTotal.children[1].innerText) *0.18).toFixed(2);
                    totalPrice.children[1].innerText  =   (Number (subTotal.children[1].innerText) +Number (shipping.children[1].innerText)+ Number(taxTotal.children[1].innerText)).toFixed(2);         
                }            
            })    
        }  
    }

    Plus();
        /// ****minus quantity*****************
        for (var x = 0; x < quantityControl.length; x++) {
            minusQty[x].addEventListener("click",function(e){
                let quantity= e.target.parentElement.parentElement.children[1]
                if (quantity.innerText != 0) {                
                quantity.innerText = Number(quantity.innerText) - 1            
            if (quantity.innerText >= 0) {
                let productTotalPrice = e.target.parentElement.parentElement.parentElement.children[4];
                let productPrice= e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0];  
                productTotalPrice.innerText=(productPrice.innerText * quantity.innerText).toFixed(2);
                subTotal.children[1].innerText  =   (Number (subTotal.children[1].innerText) - Number(productPrice.innerText)).toFixed(2);
                taxTotal.children[1].innerText  =   (Number (subTotal.children[1].innerText) *0.18).toFixed(2);
                totalPrice.children[1].innerText  =   (Number (subTotal.children[1].innerText) +Number (shipping.children[1].innerText)+ Number(taxTotal.children[1].innerText)).toFixed(2);                        
            }  
        }             
            })    
        }  
        
            /// ****Remove Product*****************
for (let i = 0; i < rmvButton.length; i++) {
    rmvButton[i].addEventListener("click", function(e){
        e.target.parentElement.parentElement.parentElement.remove();

        console.log(productTotalPrice);
         var subTotall =0;
        for (let i = 0; i < productTotalPrice.length; i++) {
            subTotall = subTotall + Number(productTotalPrice[i].innerText);
            // var subTotal = subTotal + element;

            
                        
        }
        subTotal.children[1].innerText  = subTotall
        console.log(subTotall);

        
    
})

}
function subTotal() {
    for (let i = 0; i < productTotalPrice.length; i++) {
        const element = productTotalPrice[i];
        console.log(element);
        
    }
}

        