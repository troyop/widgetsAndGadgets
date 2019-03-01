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
    orderdata = "";
    total = 0;
    totCnt_Small_Plain = 0;
    totCnt_Small_Painted = 0;
    totCnt_Small_Plated = 0;
    totCnt_Medium_Plain = 0;
    totCnt_Medium_Painted = 0;
    totCnt_Medium_Plated = 0;
    totCnt_Large_Plain = 0;
    totCnt_Large_Painted = 0;
    totCnt_Large_Plated = 0;
    total_Small_Plain = 0;
    total_Small_Painted = 0;
    total_Small_Plated = 0;
    total_Medium_Plain = 0;
    total_Medium_Painted = 0;
    total_Medium_Plated = 0;
    total_Large_Plain = 0;
    total_Large_Painted = 0;
    total_Large_Plated = 0;

    for (i=0; i<inames.length; i++){
        total += iqtyp[i] * iprice[i]
        cartdata += "<tr><td>" + inames[i] + "</td><td>" + istyle[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
        if (inames[i] == "Small Gadget" && istyle[i] == "Plain"){
            totCnt_Small_Plain += iqtyp[i]
            total_Small_Plain += iqtyp[i] * iprice[i]      
        } else if (inames[i] == "Small Gadget" && istyle[i] == "Painted"){
            totCnt_Small_Painted += iqtyp[i]
            total_Small_Painted += iqtyp[i] * iprice[i]     
        } else if (inames[i] == "Small Gadget" && istyle[i] == "Plated"){
            totCnt_Small_Plated += iqtyp[i]
            total_Small_Plated += iqtyp[i] * iprice[i]     
        } else if (inames[i] == "Medium Gadget" && istyle[i] == "Plain"){
            totCnt_Medium_Plain += iqtyp[i]
            total_Medium_Plain += iqtyp[i] * iprice[i] 
        } else if (inames[i] == "Medium Gadget" && istyle[i] == "Painted"){
            totCnt_Medium_Painted += iqtyp[i]
            total_Medium_Painted += iqtyp[i] * iprice[i]
        } else if (inames[i] == "Medium Gadget" && istyle[i] == "Plated"){
            totCnt_Medium_Plated += iqtyp[i]
            total_Medium_Plated += iqtyp[i] * iprice[i]
        } else if (inames[i] == "Large Gadget" && istyle[i] == "Plain"){
            totCnt_Large_Plain += iqtyp[i]
            total_Large_Plain += iqtyp[i] * iprice[i]
        } else if (inames[i] == "Large Gadget" && istyle[i] == "Painted"){
            totCnt_Large_Painted += iqtyp[i]
            total_Large_Painted += iqtyp[i] * iprice[i]
        } else if (inames[i] == "Large Gadget" && istyle[i] == "Plated"){
            totCnt_Large_Plated += iqtyp[i]
            total_Large_Plated += iqtyp[i] * iprice[i]
        }    
    }

    cartdata += '<tr><td></td><td></td><td></td><td></td><td>' + total + '</td></tr></table>'

    document.getElementById('cart').innerHTML = cartdata

    if (totCnt_Small_Plain > 0){
        orderdata += totCnt_Small_Plain + " Small Plain Gadget(s) ordered at a total cost of $" + total_Small_Plain + "\n"
    }

    if (totCnt_Small_Painted > 0){
        orderdata += totCnt_Small_Painted + " Small Painted Gadget(s) ordered at a total cost of $" + total_Small_Painted + "\n"
    }

    if (totCnt_Small_Plated > 0){
        orderdata += totCnt_Small_Plated + " Small Plated Gadget(s) ordered at a total cost of $" + total_Small_Plated + "\n"
    }

    if (totCnt_Medium_Plain > 0){
        orderdata += totCnt_Medium_Plain + " Medium Plain Gadget(s) ordered at a total cost of $" + total_Medium_Plain + "\n"
    }

    if (totCnt_Medium_Painted > 0){
        orderdata += totCnt_Medium_Painted + " Medium Painted Gadget(s) ordered at a total cost of $" + total_Medium_Painted + "\n"
    }

    if (totCnt_Medium_Plated > 0){
        orderdata += totCnt_Medium_Plated + " Medium Plated Gadget(s) ordered at a total cost of $" + total_Medium_Plated + "\n"
    }

    if (totCnt_Large_Plain > 0){
        orderdata += totCnt_Large_Plain + " Large Plain Gadget(s) ordered at a total cost of $" + total_Large_Plain + "\n"
    }

    if (totCnt_Large_Painted > 0){
        orderdata += totCnt_Large_Painted + " Large Painted Gadget(s) ordered at a total cost of $" + total_Large_Painted + "\n"
    }

    if (totCnt_Large_Plated > 0){
        orderdata += totCnt_Large_Plated + " Large Plated Gadget(s) ordered at a total cost of $" + total_Large_Plated + "\n"
    }
    
    if (orderdata.length > 0){
        orderdata += "\nGrand total of all orders is $" + total + "\n"

        orderdata += "\nPlease make your check, money order or cashier's check payable to the 'Wag Corporation' and send to:\n"
        orderdata += "\n1740 The Paseo\nKansas City, Mo 64108\n"

        orderdata += "\nThank you for your order."

        document.getElementById('cart2').value = orderdata
        // document.getElementById('cart2').innerHTML = orderdata
    }
    console.log(orderdata.toString())

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