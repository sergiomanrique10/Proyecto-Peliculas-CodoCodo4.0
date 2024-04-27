txtNombre = document.getElementById('txtNombre')
txtApellido = document.getElementById('txtApellido')
txtEmail = document.getElementById('txtEmail')
txtPassword = document.getElementById('txtPassword')
selectPais = document.getElementById('selectPais')
dateFecha = document.getElementById('dateFecha')
btnRegistrarme = document.getElementById('btnRegistrarme')

/* btnRegistrarme.addEventListener('click', registrarUsuario) */
btnRegistrarme.addEventListener('click', () => {
    if(validarCampos){
        alert("Complete todos los campos por favor")
    }else{
        alert("Se ha registrado con éxito")
    }
});

const validarCampos = () => {
    if (txtNombre.value === '' || txtApellido.value === '' || txtEmail.value === '' || txtPassword.value === '' || selectPais.value === '' || dateFecha.value === '') {
        return false
    } else {
        return true
    }
}

