const form = document.querySelector('#form-container')
const usernameInput = document.querySelector('#div-Username-input')
const contraseñaInput = document.querySelector('#div-contraseña-input')
const formBtn = document.querySelector('#enter-btn')



form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
    const email = usernameInput.value;
    const password = contraseñaInput.value;
    const { data: credentials } = await axios.post('/api/login', 
    {email, password});
    window.location.replace(`/app/${credentials.userId}`)
    } catch (error){
        console.log(error);
        const p = document.createElement('p')
        p.innerHTML = error.response.error.data;
        p.classList.add('advice')
        form.children[3] ? form.children[3].remove() : null
        form.append(p);

    }
});