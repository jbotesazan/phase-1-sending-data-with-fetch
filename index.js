function submitData(name1, email1) {


    const userData = {
        name: name1,
        email: email1,
    }

    const postData = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(userData)
    }

    const post = document.querySelector('body')
    const div = document.createElement('div')
    post.appendChild(div)

    const fetchedData = fetch('http://localhost:3000/users', postData)
        .then((res) => res.json())
        .then((object) => {div.textContent = object.id})
        .catch((error) => {
            const errorMessage = document.createElement('div')
            post.appendChild(errorMessage)
            errorMessage.textContent = error.message;
        });
        return fetchedData;
    }