import KEY from './api.js'; // API KEY
const limit = 1; // Fact per API call
const qurrentFact = document.querySelector("#qurrentFact");
const btn = document.querySelector("#newFact");

function handleState() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const fact = response[0].fact; // Extracting the fact text
                qurrentFact.textContent = fact;
            } else {
                console.error('Error:', xhr.status, xhr.responseText); // error handling
            }
        }
    };
    xhr.open('GET', `https://api.api-ninjas.com/v1/facts?limit=${limit}`);
    xhr.setRequestHeader('X-Api-Key', KEY); // send request with api key
    xhr.send(); // send request
}

btn.addEventListener("click", handleState);