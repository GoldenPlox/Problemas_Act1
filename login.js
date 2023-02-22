console.log("Start");
let usuario_Valido = "ejarroyo";
let contraseña_Valida = "suda1234";
let usuario = prompt("Usuario:");
let contraseña = prompt("Contraseña:");

if (usuario == usuario_Valido && contraseña == contraseña_Valida) {
    console.log("Bienvenido");
  } 
else {
    console.log("El usuario o la contraseña son incorrectos");
  }