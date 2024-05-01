const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnIngresar = document.getElementById('btnIngresar');

btnIngresar.addEventListener('click', () => {
    if(validarCampos()){
        alert("Se ha logeado con éxito");
    } else {
        alert("Complete todos los campos por favor");
    }
});

const validarCampos = () => {
    if(txtEmail.value.trim() === "" || txtPassword.value.trim() === ""){
        return false;
    } else {
        return true;
    }
};
