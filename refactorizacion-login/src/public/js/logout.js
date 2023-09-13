const btnLogout = document.getElementById('logout');

btnLogout.addEventListener('click', () => {
    console.log('se apreto el boton');
    fetch('/users/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 200) {
            window.location.replace('/users/login');
        }
    }).catch(error=>{
        console.log(error);
    })
})