inames = []
istyle = []
iqtyp = []
iprice = []

function addItem(){

    var x;

    x = document.getElementById('pqty').value;

    console.log(x);
    
    if (isNaN(x) || x < 1) {
        alert("Product Quantity Not Valid");
        return;
    } 

    switch(document.getElementById('pname').selectedIndex){
        case 0:
        iprice.push(10)
        break
        case 1:
        iprice.push(20)
        break
        case 2:
        iprice.push(30)
        break
        default:
        iprice.push(40)
    }
    inames.push(document.getElementById('pname').value);
    istyle.push(document.getElementById('pstyle').value);
    iqtyp.push(parseInt(document.getElementById('pqty').value));
    // iprice.push(parseInt(document.getElementById('price').value));

    displayCart();

}

function displayCart(){


    cartdata = '<table><tr><th>Product Name</th><th>Product Style</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';

    total = 0;

    for (i=0; i<inames.length; i++){
        total += iqtyp[i] * iprice[i]
        cartdata += "<tr><td>" + inames[i] + "</td><td>" + istyle[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
    }

    cartdata += '<tr><td></td><td></td><td></td><td></td><td>' + total + '</td></tr></table>'

    document.getElementById('cart').innerHTML = cartdata

}

function delElement(a){
    inames.splice(a, 1)
    istyle.splice(a, 1)
    iqtyp.splice(a, 1)
    iprice.splice(a, 1)
    displayCart()
}

function submitOrder(){

    if (inames.length < 1) {
        alert("Shopping cart is empty");
        return;
    } else {
        window.location.href = "/orderfrm";
    }
}