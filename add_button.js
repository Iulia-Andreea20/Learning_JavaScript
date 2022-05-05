containerEl = document.getElementById('container');
containerEl.innerHTML += '<button id="add-btn">Buy</button>';
addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function () {
    //! Add paragraph using the innerHTML property
    containerEl.innerHTML += "<p>Thank you for buying!!</p>";
})