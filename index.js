Culqi.publicKey = 'pk_test_WHnRjtNKirqLPOxM';


  Culqi.settings({
    title: 'Culqi Store',
    currency: 'PEN',
    description: 'Polo/remera Culqi lover',
    amount: 300
  });

$('#buyButton').on('click', function(e) {
    // Abre el formulario con la configuración en Culqi.settings
    Culqi.open();
    e.preventDefault();rder Id y asociarlo al detalle de tu venta.
    Además, tu venta en tu comercio debe quedar estado pendiente.
  */
});

function culqi() {
    if (Culqi.token) { // ¡Objeto Token creado exitosamente!
        var token = Culqi.token.id;
        alert('Se ha creado un token:' + token);
        // Aqui enviar token Id a servidor para crear cargo...
    }
    else if (Culqi.order) {
        console.log(Culqi.order)
  
        alert('Se ha elegido el metodo PagoEfectivo');
  
         /* Aqui enviar al servidor el order Id y asociarlo al detalle de tu venta.
            Además, tu venta en tu comercio debe quedar estado pendiente.
          */
    }
    else { // ¡Hubo algún problema!
        // Mostramos JSON de objeto error en consola
        console.log(Culqi.error);
        alert(Culqi.error.user_message);
    }
  };