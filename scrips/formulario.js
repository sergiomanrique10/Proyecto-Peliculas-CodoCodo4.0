const txtNombre = document.getElementById('txtNombre');
const txtApellido = document.getElementById('txtApellido');
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const selectPais = document.getElementById('selectPais');
const dateFecha = document.getElementById('dateFecha');
const btnRegistrarme = document.getElementById('btnRegistrarme');

btnRegistrarme.addEventListener('click', () => {
    if(validarCampos()){
        alert("Se ha registrado con éxito");
        alert(selectPais.value)
    } else {
        alert("Complete todos los campos por favor");
    }
});

const validarCampos = () => {
    if(txtNombre.value.trim() === "" || txtApellido.value.trim() === "" || txtEmail.value.trim() === "" || txtPassword.value.trim() === "" || selectPais.value === "" || dateFecha.value === ""){
        return false;
    } else {
        return true;
    }
};
