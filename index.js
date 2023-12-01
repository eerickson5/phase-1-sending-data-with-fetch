// Add your code here
let addToDOM = (string) => {
    //let container = document.createElement('div');
    let object = document.createElement('h1');
    object.textContent = string;
    document.body.append(object);
}

let submitData = (name, email) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name, email}),
    };

    let fetchRequest = fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(object => addToDOM(object.id))
    .catch(e => addToDOM(e.message))
    return(fetchRequest);
}

let init = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", () => submitData());
}


document.addEventListener("DOMContentLoaded", () => init());