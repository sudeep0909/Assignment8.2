
// Javascript External File

/* 
JavaScript program which 
Create a function prepareFood that takes following parameters
    Table number
    Items
    Callback (a function that will be called after food is prepared)
Create a function serveFood that takes following parameters
    Table number
    items 
*/

/* orderItem object created to get item detail in write mannaer instead hardcorded and 
may implemented dynamically from HTML page <Form> and property bind, in future., in case */
const orderdItem = [{food: "Burger", price: 4.00},
                    {food: "Pasta", price: 14.00},
                    {food: "Choco-Lava", price: 3.00},
                    {food: "Can-Coke", price: 2.49}];

let prepareFood = function (tableNumber , orderdItem){
    console.log(`Food is ready for table number ${tableNumber} with the orders`) + orderdItem.forEach(function(item){console.log(item.food);})
}

/* to check - above function is working correctly or not
console.log(prepareFood(5, orderdItem)); 
*/

// callBack will call prepareFood methode during serveFood function call 
let serveFood = function (table , orderd, callBack){
    // If condition will check for function call with callback function & signature type only.
    if(typeof callBack === "function"){
        callBack(table, orderd);
    }    
}
console.log(serveFood(5 , orderdItem, prepareFood)  + "\nYour food is ready and being served");
