function mostrarFormulario(id) {
    document.getElementById('formulario1').style.display = 'none';
    document.getElementById('formulario2').style.display = 'none';

    document.getElementById(id).style.display = 'block';
  }