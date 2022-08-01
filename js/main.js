//Create an array with at lease 4 grocery items to start
let shoppingList = ["Coffee", "Tea", "Sugar", "Milk", "Honey"];

//create variable htmlList for the children that are to be created in the unordered list - identify by ID
let htmlList = document.querySelector('#itemList');

//Function to execute with starting items on load of page
function startList() {
    //Create a for loop - based on the number of items in the array
    for (i = 0; i < shoppingList.length; i++) {
        //List the variables for the elements that are to be created
        let listNewParent = document.createElement('li');
        let spanNewChild = document.createElement('span');
        let checkNewIcon = document.createElement('button');
        let trashNewIcon = document.createElement('button');

        //Give the variable listNewParent a class name and declare the inner HTML content
        listNewParent.className = "item";
        //Item i - position of array to be added.
        listNewParent.innerHTML = shoppingList[i];

        //Give the variable checkNewIcon a class, content and style
        checkNewIcon.innerHTML = "Check";
        checkNewIcon.className = "checked"
        checkNewIcon.style.color = "gray";
        //Event event listener - if item is Purchased it can be clicked on as purchased and the button changes
        checkNewIcon.addEventListener("click", function () {
            checkNewIcon.innerHTML = "Purchased Item"
            checkNewIcon.style.background = "lime";
            checkNewIcon.style.color = "black"
        })
        //Place the checkNewIcon button inside the span variable spanNewChild
        spanNewChild.appendChild(checkNewIcon);

        //Give the variable trashNewIcon a class, content and style
        trashNewIcon.innerHTML = "x"
        trashNewIcon.className = "close";
        trashNewIcon.style.color = "red";
        trashNewIcon.setAttribute("id", i);
        //Add event listener - if this button is clicked then the parent must be removed. - listNewParent.Remove()
        //Item must also be removed from the array
        trashNewIcon.addEventListener("click", function (e) {
            //Remove from item - Parent in HTML
            listNewParent.remove();
            //Remove item in array using the id
            shoppingList.splice(Number(e.target.id), 1);
            //Display in consol the new updated list after item is removed
            console.log(shoppingList);
        })

        //Place the trashNewIcon button inside the span variable spanNewChild
        spanNewChild.appendChild(trashNewIcon);
        //Place the spanNewChild variable inside the list item variable listNewParent
        listNewParent.appendChild(spanNewChild);
        //Add the listNewParent variable inside the unordered list with the variable name htmlList
        htmlList.appendChild(listNewParent);

    }
}

// Declare variable toDoItems - Get the element - Unordered List - identify by ID
let toDoItems = document.getElementById("itemList");

//Declare variable Input - from where to get the input
let input = document.getElementById("input");

//Rule to use Enter key to initiate the function updateList
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter")
        updateList();
});

//Function to add list item to the existing list
function updateList() {
    //If function - if the inout is nothing - an alert must pop up.
    if (document.getElementById("input").value.length == 0) {
        alert("Value is blank, please enter a valid value");
    }

    //If a value is added - then the function should execute to create a new item in the html file and the array
    else {
        //List the variables for the elements that are to be created
        let listParent = document.createElement("li");
        let spanChild = document.createElement("span");
        let checkIcon = document.createElement("button");
        let trashIcon = document.createElement("button");

        //Add the item to the existing array with the new valid input 
        shoppingList.push(input.value)

        //Give the variable listParent a class name and declare the inner HTML content
        listParent.className = "item";
        listParent.innerHTML = '<span>' + input.value + '</span>';

        //Give the variable checkIcon a class, content and style
        checkIcon.innerHTML = "Check";
        checkIcon.className = "checked"
        checkIcon.style.color = "gray";
        //Event event listener - if item is Purchased it can be clicked on as purchased and the button changes
        checkIcon.addEventListener("click", function () {
            checkIcon.innerHTML = "Purchased Item"
            checkIcon.style.background = "lime";
            checkIcon.style.color = "black";
        })
        //Place the checkIcon button inside the span variable spanChild
        spanChild.appendChild(checkIcon);

        //Give the variable trashIcon a class, content and style
        trashIcon.innerHTML = "x"
        trashIcon.className = "close";
        trashIcon.style.color = "red";
        //Give an ID identify the item on the array.
        trashIcon.setAttribute("id", (shoppingList.length - 1));
        //Add event listener - if this button is clicked then the parent must be removed. - listParent.Remove()
        //Item must also be removed from the array
        trashIcon.addEventListener("click", function (e) {
            //Remove from item - Parent in HTML
            listParent.remove();
            //Remove item in array using the id
            shoppingList.splice(Number(e.target.id), 1);
            //Display in console the new array after item is removed
            console.log(shoppingList);
        })

        //Place the trashIcon button inside the span variable spanChild
        spanChild.appendChild(trashIcon);
        //Place the spanChild variable inside the list item variable listParent
        listParent.appendChild(spanChild);
        //Add the listParent variable inside the unordered list with the variable name toDoItems
        toDoItems.appendChild(listParent);

        //Clear the input value to nothing.
        input.value = '';
    }
}

//Display the array in console to check if updated correct
console.log(shoppingList)

//Ive had help doing this task with a mentor session and this YouTube video https://www.youtube.com/watch?v=H5tuwAO-_Kg