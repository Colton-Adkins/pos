function setStyle() {
    document.getElementById('product-food').style.display = "none";
    document.getElementById('product-drinks').style.display = "none";
    document.getElementById('product-sides').style.display = "none";



    //Start with food for a band-aid fix for an issue:
    displayFood();

    //Call twice to close the food panel.
    displayFood();

}

var arrayToUse;

var foodArray = ["#1 Sandwich", 5.30, "#2 Sandwich", 5.30, "#3 Sandwich", 5.30, "#4 Sandwich", 5.30, "#5 Sandwich", 6.70, "#6 Sandwich", 6.70, "#7 Sandwich", 6.70, "#8 Sandwich", 6.70];

var drinkArray = ["#1 Drink", 0.01, "#2 Drink", 0.02, "#3 Drink", 0.03, "#4 Drink", 0.04, "#5 Drink", 0.05, "#6 Drink", 0.06, "#7 Drink", 0.07, "#8 Drink", 0.08];

var sideArray = ["#1 Side", 0.01, "#2 Side", 0.02, "#3 Side", 0.03, "#4 Side", 0.04, "#5 Side", 0.05, "#6 Side", 0.06, "#7 Side", 0.07, "#8 Side", 0.08];


//Used to calculate Total
var totalArray = [];


var foodLoaded = false
var drinkLoaded = false;
var sideLoaded = false;
var price = 0;
var rtnVal;


function getItemPrice(type, val) {
    if (type == "food") {
        arrayToUse = foodArray;

    } else if (type == "drink") {
        arrayToUse = drinkArray;

    } else if (type == "side") {
        arrayToUse = sideArray;

    }

    if (val == 1) {
        rtnVal = arrayToUse[1];
    } else {
        rtnVal = arrayToUse[(((val) - 1) * 2) + 1];
    }

    return rtnVal;

}

function getItemName(type, val) {
    if (type == "food") {
        arrayToUse = foodArray;

    } else if (type == "drink") {
        arrayToUse = drinkArray;

    } else if (type == "side") {
        arrayToUse = sideArray;

    }
    rtnVal = arrayToUse[(((val) - 1) * 2)];



    return rtnVal;

}

function addItemToTotalBox(itmName, val) {

    var displayTotalDiv = document.getElementById("total_box");

    var pElem = document.createElement("P"); // Create a P
    //btn.className = "probtns"; #(THIS IS TO SET A CLASS IF NEEDED)#
    var fnlStr = itmName + " : $" + String(parseFloat(Math.round(val * 100) / 100).toFixed(2));
    pElem.innerHTML = fnlStr;
    displayTotalDiv.appendChild(pElem);
    totalArray.push(val);

    recalculateTotal();


}

function recalculateTotal() {

    var total = totalArray.reduce(getTotal);

    var fnlTotalStr = "Total: $" + String(parseFloat(Math.round(total * 100) / 100).toFixed(2));


    document.getElementById("total").innerHTML = fnlTotalStr;

}

function getTotal(total, num) {
    return total + num;
}



function buyItem(type, val) {

    price = getItemPrice(type, val);
    console.log("Item #", val, " ", "Type: ", type, " Price: ", price);

    addItemToTotalBox(getItemName(type, val), price);


}

function createBtnDisplay(type) {

    if (type == "food") {
        if (foodLoaded == false) {
            arrayToUse = foodArray;
        } else {
            return null;
        }

    } else if (type == "drink") {
        if (drinkLoaded == false) {
            arrayToUse = drinkArray;
        } else {
            return null;
        }

    } else if (type == "side") {
        if (sideLoaded == false) {
            arrayToUse = sideArray;
        } else {
            return null;
        }

    }
    var itemLoop = 0;
    var i;
    var itemNum = 1;

    var Count = (arrayToUse.length / 2);

    for (i = 0; i < Count; i++) {

        var displayFoodDiv = document.getElementById("product-food");
        var displayDrinkDiv = document.getElementById("product-drinks");
        var displaySideDiv = document.getElementById("product-sides");
        var btn = document.createElement("BUTTON"); // Create a btn
        btn.className = "probtns";
        //            btn.onclick = "buyFood(",String(foodNum),");";


        if (type == "food") {
            btn.addEventListener('click', buyItem.bind(null, "food", itemNum));
            btn.innerHTML = arrayToUse[itemLoop];
            displayFoodDiv.appendChild(btn);
        } else if (type == "drink") {
            btn.addEventListener('click', buyItem.bind(null, "drink", itemNum));
            btn.innerHTML = arrayToUse[itemLoop];
            displayDrinkDiv.appendChild(btn);
        } else if (type == "side") {
            btn.addEventListener('click', buyItem.bind(null, "side", itemNum));
            btn.innerHTML = arrayToUse[itemLoop];
            displaySideDiv.appendChild(btn);
        }


        itemLoop += 2;
        itemNum += 1;
    }
    itemLoop = 0;
    foodLoaded = true;
    itemNum = 1;
    if (type == "food") {
        foodLoaded = true;


    } else if (type == "drink") {
        drinkLoaded = true;


    } else if (type == "side") {
        sideLoaded = true;


    }
}




function displayFood() {

    var food = document.getElementById('product-food');
    var drinks = document.getElementById('product-drinks');
    var sides = document.getElementById('product-sides');
    var def = document.getElementById('default');


    if (food.style.display === "none") {
        food.style.display = "inline-block";
        drinks.style.display = "none";
        sides.style.display = "none";
        def.style.display = "none";
    } else {
        food.style.display = "none";
        def.style.display = "inline-block";
    }
    createBtnDisplay("food");
}

function displayDrinks() {

    var food = document.getElementById('product-food');
    var drinks = document.getElementById('product-drinks');
    var sides = document.getElementById('product-sides');
    var def = document.getElementById('default');
    if (drinks.style.display === "none") {
        drinks.style.display = "inline-block";
        food.style.display = "none";
        sides.style.display = "none";
        def.style.display = "none";
    } else {
        drinks.style.display = "none";
        def.style.display = "inline-block";
    }
    createBtnDisplay("drink");
}

function displaySides() {

    var food = document.getElementById('product-food');
    var drinks = document.getElementById('product-drinks');
    var sides = document.getElementById('product-sides');
    var def = document.getElementById('default');
    if (sides.style.display === "none") {
        sides.style.display = "inline-block";
        drinks.style.display = "none";
        food.style.display = "none";
        def.style.display = "none";
    } else {
        sides.style.display = "none";
        def.style.display = "inline-block";
    }
    createBtnDisplay("side");
}
