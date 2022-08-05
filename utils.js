function showMessage(id, message) {
    console.log(`Changing text content of elements with ID '${id}' to '${message}'`)
    document.getElementById(id).textContent = message;
}