
function seleccion(id){
	if(id==1){
		document.getElementById("precio").innerHTML="Precio: 5.000";
	} 
	else if(id==2){
		document.getElementById("precio").innerHTML="Precio: 20.000";
	} 
	else {
		document.getElementById("precio").innerHTML="Precio: 40.000"
	}
}
function handleSubmit(){
	var datos=[];
	datos[0]= document.formContacto.nombre.value;
	datos[1]= document.forms[0].apellido.value;
	datos[2]= document.getElementById("dni").value;
	datos[3]=document.getElementById("email").value
	datos[4]= document.getElementById("telefono").value;
	datos[5]= document.getElementById("tipo").value;

	for(let i=0;i<=5;i++){
		console.log(datos[i])
	}
	document.getElementById("mensajeContacto").innerHTML= "Gracias por su contacto "+datos[0]+ ", responderemos a la brevedad."
}