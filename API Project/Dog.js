// script.js
function fetchDogFacts() {
    const limit = 5; // Set the desired number of facts
    
    // Fetch the data from the API with the limit parameter
    fetch(`https://dogapi.dog/api/v2/facts?limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            // Loop through the response objects and display the facts
            const factList = document.getElementById('factList');
            data.facts.forEach(fact => {
                const listItem = document.createElement('li');
                listItem.textContent = fact;
                factList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Call the fetchDogFacts function when the page loads
window.addEventListener('load', fetchDogFacts);