postres = [

    {
        "Nombre": "Tarta de Santiago",
        "Precio": 6.75,
        "portada":"tarta.jpeg"
    },

    {
        "Nombre": "Filloa",
        "Precio": 5.20,
        "portada":"filloa.jpeg"
    },

    {
        "Nombre": "Rosquillas de anis",
        "Precio": 7.50,
        "portada":"tortita.jpeg"
    },

] 

function mostrarPostres(){
    listadoPostres = postres;

    
    if ( JSON.parse(localStorage.getItem('carrito'))){
        postresEnCarrito = JSON.parse(localStorage.getItem('carrito'))
    }else{
        postresEnCarrito = [];
    }
    

    listadoPostres.forEach(function(postre){

        var cadena = "<div class= 'postre'>"
                        +"<img src = './img/" + postre.portada + "'" + "alt = 'portada postre' >"
                        +"<div class = 'datos'>"
                            +"<h3>" + postre.Nombre + "<h3>"
                            +"<p class = 'precio'>Precio: " + postre.Precio + "</p>"
                            +"<button class= 'botonComprar' data-nombre= ' "
                                +postre.Nombre
                                + "'>Comprar</button>" 
                        + "</div>"
                    +"</div>";

        $('#listado-postres').append(cadena);
    
    })

    $('.botonComprar').on('click',function(){

        postreComprado = $(this).data('nombre');
        console.log("ha pulsado el boton comprar" + postreComprado)

        postresEnCarrito.push(postreComprado);

        localStorage.setItem("carrito", JSON.stringify(postresEnCarrito));
    })

}

function recuperarPostresCarrito(){
    
    if ( JSON.parse(localStorage.getItem('carrito'))){
        postresEnCarrito = JSON.parse(localStorage.getItem('carrito'))
    }else{
        postresEnCarrito = [];
    }
    postresEnCarrito.forEach(function(postre){
        var cadena = "<div class= 'postre'"
                            +"<h3>" + postre + "<h3>"
                          
                        
                    +"</div>";

        $('#listado-postres').append(cadena);

    })
}

function validacion(){
	
	
    var nombre=$('#nombre').val();
    var correo=$('#correo').val();
    var mensaje=$('#mensaje').val();

    
    if(nombre=="" || nombre==null){

		alerta("Inserte su nombre");
        return false;
    }

    if(correo=="" || correo==null){

        alerta("Inserte su correo electrónico");
        return false;
    }
	
	if(mensaje=="" || mensaje==null){

		alerta("Inserte un mensaje");
        return false;
    }

	$("#enviar").click(alert("Gracias por enviar el formulario"));
	$("#form")[0].reset();
	return true;
	
}
 
    $('textarea').focus(function(){
    $('.alert').remove();
    
});

function alerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}

