// Array to hold the list of items
let items = [];
// Ye ek empty array hai jisme sari items store hongi.

let updateIndex = null;
// Ye variable store karta hai ki kaunsi item edit ho rahi hai.


// Add a new item to the list
// addItem() : Ye function new item add karta hai.
function addItem() {

    // Input field ko select kar raha hai
    const itemInput = document.getElementById("itemInput");

    // User jo value input karega wo newItem me store hogi
    const newItem = itemInput.value;

    // Check karta hai ki input empty na ho
    if (newItem !== "") {

        // Array me new item add karta hai
        items.push(newItem);

        // Input field clear karta hai
        itemInput.value = "";

        // Updated list ko display karta hai
        displayItems();
    }
}


// Display the list of items
function displayItems() {

    // UL/List container ko select kar raha hai
    const itemList = document.getElementById("itemList");

    // Purani list ko clear kar raha hai
    // Taaki duplicate items na bane
    itemList.innerHTML = "";


    // Array ki har item par loop chal raha hai
    items.forEach((item, index) => {

        // Har item ke liye ek new <li> create ho raha hai
        const li = document.createElement("li");

        // Template literal ka use karke item aur buttons add kar rahe hain
        li.innerHTML = `
            ${item}

            <div>

                <!-- Edit button -->
                <button onclick="editItem(${index})">
                    Edit
                </button>

                <!-- Delete button -->
                <button onclick="deleteItem(${index})">
                    Delete
                </button>

            </div>
        `;

        // LI element ko list me append kar raha hai
        itemList.appendChild(li);
    });
}


// Delete an item from the list
function deleteItem(index) {

    // splice() method specified index ki item remove karta hai
    items.splice(index, 1);

    // Updated list display karta hai
    displayItems();
}


// Edit an existing item
function editItem(index) {

    // Input field ko select kar raha hai
    const itemInput = document.getElementById("itemInput");

    // Selected item ki value input field me show karega
    itemInput.value = items[index];

    // Current editing item ka index store kar raha hai
    updateIndex = index;

    // Update button show karega
    document.getElementById("updateButton").style.display = "inline";

    // Add button hide karega
    document.querySelector(
        'button[onclick="addItem()"]'
    ).style.display = "none";
}


// Update the existing item
function updateItem() {

    // Input field ko select kar raha hai
    const itemInput = document.getElementById("itemInput");

    // Array me existing item update kar raha hai
    items[updateIndex] = itemInput.value;

    // Input field clear kar raha hai
    itemInput.value = "";

    // Updated list display karega
    displayItems();

    // Update button hide karega
    document.getElementById("updateButton").style.display = "none";

    // Add button dobara show karega
    document.querySelector(
        'button[onclick="addItem()"]'
    ).style.display = "inline";
}


// Initial display of items
// Page load hote hi items display karega
displayItems();