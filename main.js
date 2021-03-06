const submit = document.querySelector(".footer__button")
const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const apiURI = "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register"
    const token = "mariaannaalves@hotmail.com"

    const userName = form.name.value.trim()
    const userEmail = form.email.value.trim()

    fetch(apiURI, {
        method: 'POST',
        headers: { 
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
})