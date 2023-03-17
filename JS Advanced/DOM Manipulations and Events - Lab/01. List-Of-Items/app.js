function addItem() {
    //read input value
    const text = document.getElementById('newItemText').value;

    //create new <li>
    const li = document.createElement('li');
    li.textContent = text;

    //obtain reference to list element
    const list = document.getElementById('items');

    //add new <li> to list
    list.appendChild(li);
    
    //optional: clear input field
}