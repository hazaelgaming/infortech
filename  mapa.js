window.onload = function() {
    // Crear objeto LatLng para Valencia
    var valencia = new google.maps.LatLng(39.469801157716475, -0.3776498753296967);
  
    // Opciones del mapa de Valencia
    var mapOptions = {
      center: valencia,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    // Crear mapa de Valencia
    var mapaValencia = new google.maps.Map(document.getElementById('mapa'), mapOptions);
  
    // Crear marcador en el CEIP AUSIAS MARCH
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(39.46293074342822, -0.32194552588603903),
      map: mapaValencia,
      title: 'OAS',
      icon: './img/green.png'
    });
  
    // Crear ventana de información para el marcador
    var infowindow = new google.maps.InfoWindow({
      content: '<h1 style="color:black;">OAS</h1><p style="color:black;">Direccion: Calle Marina Real Juan Carlos I, s/n, 46011 Valencia</p><p style="color:black;">Telefono: 961205930</p><img src="./img/marina.jpg" alt="AUSIAS MARCH" width="400px" height="300px" >'
    });
  
    // Agregar evento clic al marcador para mostrar la ventana de información
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(mapaValencia, marker);
    });
  
  };
  