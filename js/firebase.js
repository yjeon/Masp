var config = {
		apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
	    authDomain: "masp-9a79d.firebaseapp.com",
	    databaseURL: "https://masp-9a79d.firebaseio.com",
	    storageBucket: "masp-9a79d.appspot.com",
	    messagingSenderId: "686393566018"
};

firebase.initializeApp(config);
var todosRef = firebase.database().ref('todos');

todosRef.on('child_added', function(data) {
    createItem(data.val().text, data.key);
});
todosRef.on('child_changed', function(data) {
    $('div[data-index="' + data.key + '"] input').val(data.val().text);
});
todosRef.on('child_removed', function(data) {
    $('div[data-index="' + data.key + '"]').remove();
});

$('#new').click(function()
{
    todosRef.push({ 'text': ""});
});

function createItem(value, key)
{
    $('#todoItems').append(
            '<div class="todoItem" data-index="' + key+ '"><input type="text" onchange="itemChanged(this)" value="'
            + value + '"><button onclick="deleteItem(this.parentElement)">&#x2716;</button></div>'
    );
}

function deleteItem(inputDiv)
{
    todosRef.child(inputDiv.dataset.index).remove();
}

function itemChanged(inputElem)
{
    var index = inputElem.parentElement.dataset.index;
    todosRef.child(inputElem.parentElement.dataset.index).set({ 'text': inputElem.value });
}
