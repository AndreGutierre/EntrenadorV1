


// Función para obtener el elemento del DOM por su selector
function obtenerElemento(selector) {
    return document.querySelector(selector);
}

// Obtener los elementos del DOM
let problemaMat = obtenerElemento(".problemaMat");
let btnCopiar = obtenerElemento(".btnCopiar");
let textarea = document.getElementById('texto-encriptado');
let campo_mensaje = document.querySelector("#campo-mensaje");
let respuesta = obtenerElemento(".campo-texto");
let problemaAleatorio;
let respuestaOficial = obtenerElemento('.respuestaOficial');
let pasoApaso = obtenerElemento(".pasoApaso");
let fraseElegida = obtenerElemento(".sin-Texto");
let leCobusier = ' - Le Corbusier -';
let advertencia = obtenerElemento(".advertencia");

// Obtener la unidad seleccionada por el usuario
let unidadUsuario = document.getElementById("unidad").value.trim();

const problemasUnidades = [
    {
        ecuacion: 'Una habitación tiene forma cúbica con lados de longitud 3 metros. Calcula el volumen de la habitación.',
        respuestaNumerica: ['Volumen = 27 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Identificar la forma cúbica de la habitación.',
          'Utilizar la fórmula del volumen para un cubo: Volumen = lado^3.',
          'Sustituir el valor del lado en la fórmula y calcular el volumen.'
        ]
      },
      {
        ecuacion: 'Un campo rectangular tiene una longitud de 10 metros y un ancho de 5 metros. Halla el área total del campo.',
        respuestaNumerica: ['Área = 50 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Identificar la forma rectangular del campo.',
          'Utilizar la fórmula del área para un rectángulo: Área = longitud x ancho.',
          'Sustituir los valores de longitud y ancho en la fórmula y calcular el área.'
        ]
      },
      {
        ecuacion: 'Se quiere pintar la superficie exterior de una casa rectangular con una altura de 5 metros, un ancho de 4 metros y una longitud de 8 metros. ¿Cuántos metros cuadrados se deben cubrir con pintura?',
        respuestaNumerica: ['Área total = 136 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área de cada una de las caras de la casa: 2(altura x ancho) + 2(longitud x altura).',
          'Sumar las áreas de todas las caras para obtener el área total a pintar.'
        ]
      },
      {
        ecuacion: 'Se desea colocar un suelo de baldosas cuadradas de 20 cm de lado en una habitación rectangular de 4 metros de largo y 3 metros de ancho. ¿Cuántas baldosas se necesitan?',
        respuestaNumerica: ['Número de baldosas = 300'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área total de la habitación : largo x ancho.',
          'Calcular el área de una baldosa: lado x lado.',
          'Dividir el área total de la habitación por el área de una baldosa para obtener el número de baldosas necesarias.'
        ]
      },
      {
        ecuacion: 'Una piscina rectangular tiene una longitud de 25 metros, una anchura de 15 metros y una profundidad de 1,2 metros. ¿Cuántos litros de agua se necesitan para llenarla por completo?',
        respuestaNumerica: ['Volumen = 450000 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
          'Calcular el volumen de la piscina: largo x ancho x profundidad.',
          'Convertir el volumen de metros cúbicos a litros multiplicando por 1000.'
        ]
      },
      {
        ecuacion: 'Una ventana rectangular tiene una altura de 1.2 metros y una anchura de 1 metro. ¿Cuál es el área de la ventana?',
        respuestaNumerica: ['Área = 1.2 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área de la ventana: altura x anchura.'
        ]
      },
      {
        ecuacion: 'Un prisma triangular tiene una base de 5 metros de lado, una altura de 4 metros y una profundidad de 3 metros. ¿Cuál es el volumen del prisma?',
        respuestaNumerica: ['Volumen = 60 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el área de la base del prisma: (base x altura) / 2.',
          'Calcular el volumen del prisma: área de la base x profundidad.'
        ]
      },
      {
        ecuacion: 'Un muro rectangular tiene una altura de 2.5 metros y una longitud de 10 metros. Se desea cubrir el muro con ladrillos de 20 cm de largo y 10 cm de alto. ¿Cuántos ladrillos se necesitan?',
        respuestaNumerica: ['Número de ladrillos = 1250'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área total del muro: altura x longitud.',
          'Calcular el área de un ladrillo: largo x alto.',
          'Dividir el área total del muro por el área de un ladrillo para obtener el número de ladrillos necesarios.'
        ]
      },
      {
        ecuacion: 'Un cerámico rectangular tiene una longitud de 15 cm y una anchura de 10 cm. Se desea cubrir un suelo de 2 metros de largo y 1.5 metros de ancho con estos azulejos. ¿Cuántos azulejos se necesitan?',
        respuestaNumerica: ['Número de cerámicos = 200'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área total del suelo: largo x ancho.',
          'Calcular el área de un cerámico: largo x ancho.',
          'Dividir el área total del suelo por el área de un cerámico para obtener el número de azulejos necesarios.'
        ]
      },
      {
        ecuacion: 'Una puerta rectangular tiene una altura de 2 metros y una anchura de 0.8 metros. Se desea pintar la superficie de la puerta. ¿Cuántos metros cuadrados se deben cubrir con pintura?',
        respuestaNumerica: ['Área total = 3.2 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área total de la puerta: 2 x (altura x anchura).',
        ]
      },
      {
        ecuacion: 'Un canal rectangular tiene una altura de 0.5 metros, una anchura de 0.3 metros y una longitud de 10 metros. ¿Cuál es el volumen del canal?',
        respuestaNumerica: ['Volumen = 1.5 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen del canal: largo x ancho x altura.'
        ]
      },
      {
        ecuacion: 'Una fosa séptica tiene forma rectangular de 2 metros de largo, 1 metro de ancho y 1.5 metros de profundidad. ¿Cuál es el volumen de la fosa séptica?',
        respuestaNumerica: ['Volumen = 3 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen de la fosa séptica: largo x ancho x profundidad.'
        ]
      },
      {
        ecuacion: 'Un estanque cilíndrico tiene un radio de 0.5 metros y una altura de 1 metro. Se debe llenar de agua. ¿Cuántos litros de agua se necesitan?',
        respuestaNumerica: ['Volumen = 785 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
          'Calcular el volumen del estanque: πr^2h.',
          'Convertir el volumen de metros cúbicos a litros multiplicando por 1000.'
        ]
      },
      {
        ecuacion: 'Una chimenea rectangular tiene una altura de 4 metros y una sección transversal de 30 cm de largo y 20 cm de ancho. Se desea pintar la superficie interior de la chimenea. ¿Cuántos metros cuadrados se deben cubrir con pintura?',
        respuestaNumerica: ['Área total = 2.4 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el perímetro de la sección transversal de la chimenea: 2 x (largo + ancho).',
          'Calcular el área total de la chimenea: perímetro x altura.'
        ]
      },
      {
        ecuacion: 'Una ventana circular tiene un radio de 0.5 metros. ¿Cuál es el área de la ventana?',
        respuestaNumerica: ['Área = 0.785 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área del círculo: πr^2.'
        ]
      },
      {
        ecuacion: 'Una puerta trapezoidal tiene una altura de 2 metros, una base mayor de 1 metro y una base menor de 0.8 metros. Se desea pintar la superficie de la puerta. ¿Cuántos metros cuadrados se deben cubrir con pintura?',
        respuestaNumerica: ['Área total = 1.8 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área total de la puerta: (base mayor + base menor) x altura / 2.'
        ]
      },
      {
        ecuacion: 'Un balcón rectangular tiene una longitud de 3 metros, una anchura de 1.5 metros y una altura de 0.4 metros. Se desea cubrir el suelo del balcón con baldosas de 30 cm de largo y 20 cm de ancho. ¿Cuántas baldosas se necesitan?',
        respuestaNumerica: ['Número de baldosas = 100'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área total del suelo del balcón : largo x ancho.',
          'Calcular el área de una baldosa: largo x ancho.',
          'Dividir el área total del suelo del balcón por el área de una baldosa para obtener el número de baldosas necesarias.'
        ]
      },
      {
        ecuacion: 'Una piscina rectangular tiene una longitud de 25 metros, una anchura de 10 metros y una profundidad de 1.5 metros. Se desea llenar la piscina de agua. ¿Cuántos litros de agua se necesitan?',
        respuestaNumerica: ['Volumen = 375000 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
          'Calcular el volumen de la piscina: largo x ancho x profundidad.',
          'Convertir el volumen de metros cúbicos a litros multiplicando por 1000.'
        ]
      },
      {
        ecuacion: 'Un estanque cilíndrico tiene un radio de 5 metros. Se desea cubrir el fondo del estanque con grava. ¿Cuántos metros cuadrados de grava se necesitan?',
        respuestaNumerica: ['Área = 78.5 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área del círculo: πr^2.'
        ]
      },
      {
        ecuacion: 'Un muro de contención tiene una altura de 2 metros y una longitud de 10 metros. Se desea construir el muro con bloques de hormigón de 20 cm de largo, 10 cm de ancho y 5 cm de alto. ¿Cuántos bloques de hormigón se necesitan?',
        respuestaNumerica: ['Número de bloques = 2000'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área total del muro: altura x longitud.',
          'Calcular el volumen de un bloque de hormigón : largo x ancho x alto.',
          'Calcular el número de bloques de hormigón necesarios dividiendo el área total del muro por el volumen de un bloque de hormigón.'
        ]
      },
      {
        ecuacion: 'Una caseta de jardín tiene una base rectangular de 3 metros de largo y 2 metros de ancho, y una altura de 2.5 metros. Se desea pintar la superficie exterior de la caseta. ¿Cuántos metros cuadrados de pintura se necesitan?',
        respuestaNumerica: ['Área total = 27 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área total de la caseta: 2 x (largo x altura) + (base x altura).',
        ]
      },
      {
        ecuacion: 'Un tejado a cuatro aguas tiene una base cuadrada de 4 metros de lado y una altura de 3 metros. Se desea cubrir el tejado con tejas de 30 cm de largo y 20 cm de ancho. ¿Cuántas tejas se necesitan?',
        respuestaNumerica: ['Número de tejas = 1067'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área total del tejado: 4 x (base x altura) / 2.',
          'Calcular el área de una teja: largo x ancho.',
          'Dividir el área total del techo por el área de una teja para obtener el número de tejas necesarias.'
        ]
      },
      {
        ecuacion: 'Se desea construir una columnata con 10 columnas. Cada columna tiene una altura de 3 metros y un radio de 0.2 metros. ¿Cuál es el volumen total de hormigón necesario para construir las columnas?',
        respuestaNumerica: ['Volumen total = 5.65 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen de una columna: πr^2h.',
          'Multiplicar el volumen de una columna por el número de columnas para obtener el volumen total de hormigón necesario.'
        ]
      },
      {
        ecuacion: 'Una viga rectangular tiene una longitud de 4 metros, una altura de 0.2 metros y una anchura de 0.3 metros. Se desea calcular el volumen de hormigón necesario para construir la viga.',
        respuestaNumerica: ['Volumen = 0.24 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen de la viga: largo x ancho x altura.'
        ]
      },
      {
        ecuacion: 'Una escalera tiene 15 peldaños. Cada peldaño tiene una altura de 0.17 metros y una profundidad de 0.25 metros. Se desea calcular el área total de la superficie de los peldaños.',
        respuestaNumerica: ['Área total = 6.125 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área de un peldaño: 2 x (largo x ancho).',
          'Multiplicar el área de un peldaño por el número de peldaños para obtener el área total de la superficie de los peldaños.'
        ]
      },
      {
        ecuacion: 'Una rampa de acceso tiene una longitud de 5 metros y una pendiente del 10%. Se desea calcular el área total de la superficie de la rampa.',
        respuestaNumerica: ['Área total = 5.25 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular la altura de la rampa: longitud x pendiente.',
          'Calcular el área de la rampa: (longitud x altura) / 2.'
        ]
      },
      {
        ecuacion: 'Un techo curvo tiene forma de parábola con una base de 8 metros y una altura máxima de 3 metros. Se desea cubrir el techo con tejas de 20 cm de largo y 10 cm de ancho. ¿Cuántas tejas se necesitan?',
        respuestaNumerica: ['Número de tejas = 1200'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área del techo: (base x altura) / 2.',
          'Calcular el área de una teja: largo x ancho.',
          'Dividir el área total del techo por el área de una teja para obtener el número de tejas necesarias.'
        ]
      },
      {
        ecuacion: 'Una claraboya rectangular tiene una longitud de 1 metro y una anchura de 0.5 metros. Se desea calcular el área de la claraboya.',
        respuestaNumerica: ['Área = 0.5 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área de la claraboya: largo x ancho.'
        ]
      },
      {
        ecuacion: 'Una puerta corrediza tiene una altura de 2 metros y una anchura de 1.5 metros. Se desea calcular el área de la superficie de la puerta.',
        respuestaNumerica: ['Área total = 3 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área total de la puerta: 2 x (largo x ancho).',
        ]
      },
      {
        ecuacion: 'Una ventana triangular tiene una base de 1 metro y una altura de 0.5 metros. Se desea calcular el área de la ventana.',
        respuestaNumerica: ['Área = 0.25 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Calcular el área de la ventana: (base x altura) / 2.'
        ]
      },
      {
        ecuacion: 'Una chimenea cónica tiene un radio de 0.5 metros y una altura de 3 metros. Se desea calcular el volumen de la chimenea.',
        respuestaNumerica: ['Volumen = 0.3925 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen del cono: (1/3)πr^2h.'
        ]
      },
      {
        ecuacion: 'Una canalización rectangular tiene una longitud de 10 metros, una anchura de 0.3 metros y una altura de 0.2 metros. Se desea calcular el volumen de la canalización.',
        respuestaNumerica: ['Volumen = 0.6 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen de la canalización : largo x ancho x altura.'
        ]
      },
      {
        ecuacion: 'Un depósito cilíndrico tiene un radio de 1 metro y una altura de 2 metros. Se desea calcular el volumen del depósito.',
        respuestaNumerica: ['Volumen = 6.28 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen del depósito: πr^2h.'
        ]
      },
      {
        ecuacion: 'Un estanque rectangular tiene una longitud de 2 metros, una anchura de 1 metro y una altura de 1.5 metros. Se desea calcular el volumen del estanque.',
        respuestaNumerica: ['Volumen = 3 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen del estanque: largo x ancho x altura.'
        ]
      },
      {
        ecuacion: 'Una fosa séptica cilíndrica tiene un radio de 1 metro y una profundidad de 1.5 metros. Se desea calcular el volumen de la fosa séptica.',
        respuestaNumerica: ['Volumen = 4.7124 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el área de la base circular: πr^2.',
          'Calcular el volumen de la fosa séptica: área de la base x profundidad.'
        ]
      },
      {
        ecuacion: 'Un pozo de agua rectangular tiene una longitud de 3 metros, un ancho de 2 metros y una profundidad de 10 metros. Se desea calcular el volumen del pozo de agua.',
        respuestaNumerica: ['Volumen = 60 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el volumen del pozo de agua: largo x ancho x profundidad.'
        ]
      },
      {
        ecuacion: 'Una galería subterránea tiene una sección transversal rectangular de 2 metros de ancho y 3 metros de altura, y una longitud de 50 metros. Se desea calcular el volumen de la excavación necesaria para construir la galería.',
        respuestaNumerica: ['Volumen = 300 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el área de la sección transversal de la galería: ancho x altura.',
          'Calcular el volumen de la excavación: área de la sección transversal x longitud.'
        ]
      },
      {
        ecuacion: 'Un túnel circular tiene un radio de 3 metros y una longitud de 100 metros. Se desea calcular el volumen de la excavación necesaria para construir el túnel.',
        respuestaNumerica: ['Volumen = 2827.43 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el área de la sección transversal del túnel: πr^2.',
          'Calcular el volumen de la excavación: área de la sección transversal x longitud.'
        ]
      },
      {
        ecuacion: 'Una bóveda de cañón tiene una sección transversal semicircular de 4 metros de ancho y 2 metros de altura, y una longitud de 10 metros. Se desea calcular el volumen de la bóveda.',
        respuestaNumerica: ['Volumen = 80 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Calcular el área de la sección transversal de la bóveda: (base x altura) / 2.',
          'Calcular el volumen de la bóveda: área de la sección transversal x longitud.'
        ]
      },
      {
        ecuacion: 'Un jardín rectangular tiene una longitud de 20 metros y una anchura de 15 metros. Se desea instalar una valla alrededor del jardín. ¿Cuántos metros de valla se necesitan?',
        respuestaNumerica: ['Longitud valla = 70 metros'],
        unidadRespuesta: ['m'],
        pasos: [
          'Calcular el perímetro del jardín: 2 x (largo + ancho).',
        ]
      },
      {
        ecuacion: 'Una ventana circular tiene un radio de 0.5 metros. Se desea instalar una reja de metal alrededor de la ventana. ¿Cuántos metros lineales de metal se necesitan para la reja para cubrir su perímetro?',
        respuestaNumerica: ['Longitud del perímetro = 3.14 metros'],
        unidadRespuesta: ['m'],
        pasos: [
          'Calcular la circunferencia de la ventana: 2πr.',
        ]
      },
      {
        ecuacion: 'Una chimenea rectangular tiene una altura de 4 metros y una sección transversal de 30 cm de largo y 20 cm de ancho. Se desea construir la chimenea con ladrillos de 20 cm de largo, 10 cm de ancho y 5 cm de alto. ¿Cuántos ladrillos se necesitan?',
        respuestaNumerica: ['Número de ladrillos = 800'],
        unidadRespuesta: ['unidades'],
        pasos: [
          'Calcular el área de la sección transversal de la chimenea: largo x ancho.',
          'Calcular el volumen de un ladrillo: largo x ancho x alto.',
          'Calcular el número de ladrillos necesarios dividiendo el área total de la chimenea por el volumen de un ladrillo.'
        ]
      },
      {
        ecuacion: 'Un poste de luz mide 4.5 metros de altura. ¿Cuántos centímetros mide?',
        respuestaNumerica: ['Altura = 450 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
          'Para convertir de metros a centímetros, multiplica por 100.',
          'Altura en cm = 4.5 metros x 100 = 450 centímetros.'
        ]
      },
      {
        ecuacion: 'Una hormiga recorre 120 centímetros. ¿Cuántos metros recorrió?',
        respuestaNumerica: ['Distancia = 1.2 metros'],
        unidadRespuesta: ['metros'],
        pasos: [
          'Para convertir de centímetros a metros, divide por 100.',
          'Distancia en metros = 120 centímetros / 100 = 1.2 metros.'
        ]
      },
      {
        ecuacion: 'Un edificio tiene una altura de 250 metros. ¿Cuántos kilómetros de altura tiene?',
        respuestaNumerica: ['Altura = 0.25 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de metros a kilómetros, divide por 1000.',
          'Altura en km = 250 metros / 1000 = 0.25 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un terreno tiene una superficie de 500 metros cuadrados. ¿Cuántos kilómetros cuadrados de superficie tiene?',
        respuestaNumerica: ['Superficie = 0.0005 kilómetros cuadrados'],
        unidadRespuesta: ['km^2'],
        pasos: [
          'Para convertir de metros cuadrados a kilómetros cuadrados, divide por 1000000.',
          'Superficie en km^2 = 500 m^2 / 1000000 = 0.0005 km^2.'
        ]
      },
      {
        ecuacion: 'Una baldosa mide 20 centímetros de largo y 10 centímetros de ancho. ¿Cúal es el área?',
        respuestaNumerica: ['Área = 200 centímetros cuadrados'],
        unidadRespuesta: ['cms^2'],
        pasos: [
          'Calculamos el área: 20 cm x 10 cm = 200 cm^2.'
        ]
      },
      {
        ecuacion: 'Un jardín tiene una superficie de 2000 metros cuadrados. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 0.2 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Para convertir de metros cuadrados a hectáreas, divide por 10000.',
          'Superficie en ha = 2000 m^2 / 10000 = 0.2 ha.'
        ]
      },
      {
        ecuacion: 'Un cubo de agua tiene un volumen de 125 metros cúbicos. ¿Cuántos litros de agua tiene?',
        respuestaNumerica: ['Volumen = 125000 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
          'Para convertir de metros cúbicos a litros, multiplica por 1000.',
          'Volumen en litros = 125 m^3 x 1000 = 125000 litros.'
        ]
      },
      {
        ecuacion: 'Una caja de zapatos tiene un volumen de 2000 centímetros cúbicos. ¿Cuántos metros cúbicos mide?',
        respuestaNumerica: ['Volumen = 0.002 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Para convertir de centímetros cúbicos a metros cúbicos, divide por 1000000.',
          'Volumen en m^3 = 2000 cm^3 / 1000000 = 0.002 m^3.'
        ]
      },
      {
        ecuacion: 'Un estanque de gasolina tiene un volumen de 50 litros. ¿Cuántos metros cúbicos de gasolina tiene?',
        respuestaNumerica: ['Volumen = 0.05 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Para convertir de litros a metros cúbicos, divide por 1000.',
          'Volumen en m^3 = 50 litros / 1000 = 0.05 m^3.'
        ]
      },
      {
        ecuacion: 'Un río tiene una longitud de 1200 kilómetros. ¿Cuántos metros de largo tiene?',
        respuestaNumerica: ['Longitud = 1200000 metros'],
        unidadRespuesta: ['m'],
        pasos: [
          'Para convertir de kilómetros a metros, multiplica por 1000.',
          'Longitud en metros = 1200 km x 1000 = 1200000 metros.'
        ]
      },
      {
        ecuacion: 'Un edificio tiene una altura de 200 metros. ¿Cuántos pies de altura tiene?',
        respuestaNumerica: ['Altura = 656.17 pies'],
        unidadRespuesta: ['pies'],
        pasos: [
          '1 metro equivale a 3.28084 pies.',
          'Altura en pies = 200 metros x 3.28084 pies/metro = 656.17 pies.'
        ]
      },
      {
        ecuacion: 'Un terreno rectangular tiene una longitud de 50 metros y una anchura de 30 metros. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 0.15 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Primero calculamos el área del terreno: 50 m x 30 m = 1500 m^2.',
          'Luego convertimos de metros cuadrados a hectáreas: 1500 m^2 / 10000 = 0.15 ha.'
        ]
      },
      {
        ecuacion: 'Una piscina tiene un volumen de 500 metros cúbicos. ¿Cuántos litros de agua tiene?',
        respuestaNumerica: ['Volumen = 500000 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
          'Para convertir de metros cúbicos a litros, multiplica por 1000.',
          'Volumen en litros = 500 m^3 x 1000 = 500000 litros.'
        ]
      },
      {
        ecuacion: 'Un estanque de gasolina tiene un volumen de 20 litros. ¿Cuántos metros cúbicos de gasolina tiene?',
        respuestaNumerica: ['Volumen = 0.02 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Para convertir de litros a metros cúbicos, divide por 1000.',
          'Volumen en m^3 = 20 litros / 1000 = 0.02 metros cúbicos.'
        ]
      },
      {
        ecuacion: 'Una caja de zapatos tiene un volumen de 1500 centímetros cúbicos. ¿Cuántos metros cúbicos mide',
        respuestaNumerica: ['Volumen = 0.0015 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Para convertir de centímetros cúbicos a metros cúbicos, divide por 1000000.',
          'Volumen en m^3 = 1500 cm^3 / 1000000 = 0.0015 metros cúbicos.'
        ]
      },
      {
        ecuacion: 'Una caja de zapatos tiene un volumen de 1500 centímetros cúbicos. ¿Cuántos metros cúbicos mide?',
        respuestaNumerica: ['Volumen = 0.0015 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
          'Para convertir de centímetros cúbicos a metros cúbicos, divide por 1000000.',
          'Volumen en m^3 = 1500 cm^3 / 1000000 = 0.0015 metros cúbicos.'
        ]
      },
      {
        ecuacion: 'Un paquete pesa 5 libras. ¿Cuántos kilogramos pesa?',
        respuestaNumerica: ['Peso = 2.26796 kilogramos'],
        unidadRespuesta: ['kgs'],
        pasos: [
          'Para convertir de libras a kilogramos, divide por 2.20462.',
          'Peso en kg = 5 libras / 2.20462 = 2.26796 kilogramos.'
        ]
      },
      {
        ecuacion: 'Una regla mide 30 centímetros. ¿Cuántas pulgadas mide?',
        respuestaNumerica: ['Longitud = 11.81 pulgadas'],
        unidadRespuesta: ['pulgadas'],
        pasos: [
          'Para convertir de centímetros a pulgadas, multiplica por 0.393701.',
          'Longitud en pulgadas = 30 cm x 0.393701 = 11.81 pulgadas.'
        ]
      },
      {
        ecuacion: 'Una mesa tiene una superficie de 120 centímetros de largo y 60 centímetros de ancho. ¿Cuántas pulgadas cuadradas mide?',
        respuestaNumerica: ['Superficie = 708.66 pulgadas cuadradas'],
        unidadRespuesta: ['pulgadas^2'],
        pasos: [
          'Primero convertimos los centímetros a pulgadas: 120 cm x 0.393701 = 47.24 pulgadas y 60 cm x 0.393701 = 23.62 pulgadas.',
          'Luego calculamos el área en pulgadas cuadradas: 47.24 pulgadas x 23.62 pulgadas = 708.66 pulgadas cuadradas.'
        ]
      },
      {
        ecuacion: 'Un libro tiene un grosor de 2.5 centímetros. ¿Cuántas pulgadas de grosor tiene?',
        respuestaNumerica: ['Grosor = 0.98 pulgadas'],
        unidadRespuesta: ['pulgadas'],
        pasos: [
          'Para convertir de centímetros a pulgadas, multiplica por 0.393701.',
          'Grosor en pulgadas = 2.5 cm x 0.393701 = 0.98 pulgadas.'
        ]
      },
      {
        ecuacion: 'Una pantalla tiene una diagonal de 100 centímetros. ¿Cuántas pulgadas de diagonal tiene?',
        respuestaNumerica: ['Diagonal = 39.37 pulgadas'],
        unidadRespuesta: ['pulgadas'],
        pasos: [
          'Para convertir de centímetros a pulgadas, multiplica por 0.393701.',
          'Diagonal en pulgadas = 100 cm x 0.393701 = 39.37 pulgadas.'
        ]
      },
      {
        ecuacion: 'Un niño mide 120 centímetros de altura. ¿Cuántas pulgadas de altura mide?',
        respuestaNumerica: ['Altura = 47.24 pulgadas'],
        unidadRespuesta: ['pulgadas'],
        pasos: [
          'Para convertir de centímetros a pulgadas, multiplica por 0.393701.',
          'Altura en pulgadas = 120 cm x 0.393701 = 47.24 pulgadas.'
        ]
      },
      {
        ecuacion: 'Una regla mide 12 pulgadas. ¿Cuántos centímetros mide?',
        respuestaNumerica: ['Longitud = 30.48 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
          'Para convertir de pulgadas a centímetros, multiplica por 2.54.',
          'Longitud en cm = 12 pulgadas x 2.54 = 30.48 centímetros.'
        ]
      },
      {
        ecuacion: 'Una mesa tiene una superficie de 48 pulgadas cuadradas. ¿Cúal es el área?',
        respuestaNumerica: ['Superficie = 311.16 centímetros cuadrados'],
        unidadRespuesta: ['cms^2'],
        pasos: [
          'Primero convertimos las pulgadas a centímetros: √48 pulgadas^2 = √(48 x 6.452^2) = 31.116 cm.',
          'Luego calculamos el área en centímetros cuadrados: 31.116 cm x 31.116 cm = 311.16 cm^2.'
        ]
      },
      {
        ecuacion: 'Un libro tiene un grosor de 1 pulgada. ¿Cuántos centímetros de grosor tiene?',
        respuestaNumerica: ['Grosor = 2.54 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
          'Para convertir de pulgadas a centímetros, multiplica por 2.54.',
          'Grosor en cm = 1 pulgada x 2.54 = 2.54 centímetros.'
        ]
      },
      {
        ecuacion: 'Una pantalla tiene una diagonal de 50 pulgadas. ¿Cuántos centímetros de diagonal tiene?',
        respuestaNumerica: ['Diagonal = 127 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
          'Para convertir de pulgadas a centímetros, multiplica por 2.54.',
          'Diagonal en cm = 50 pulgadas x 2.54 = 127 centímetros.'
        ]
      },
      {
        ecuacion: 'Un niño mide 60 pulgadas de altura. ¿Cuántos centímetros de altura mide?',
        respuestaNumerica: ['Altura = 152.4 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
          'Para convertir de pulgadas a centímetros, multiplica por 2.54.',
          'Altura en cm = 60 pulgadas x 2.54 = 152.4 centímetros.'
        ]
      },
      {
        ecuacion: 'Una caja tiene una longitud de 20 pulgadas, una anchura de 12 pulgadas y una altura de 8 pulgadas. ¿Cuántos centímetros cúbicos mide?',
        respuestaNumerica: ['Volumen = 4790.4 centímetros cúbicos'],
        unidadRespuesta: ['cms^3'],
        pasos: [
          'Primero convertimos las pulgadas a centímetros: 20 pulgadas x 2.54 = 50.8 cm, 12 pulgadas x 2.54 = 30.48 cm y 8 pulgadas x 2.54 = 20.32 cm.',
          'Luego calculamos el volumen en centímetros cúbicos: 50.8 cm x 30.48 cm x 20.32 cm = 4790.4 cm^3.'
        ]
      },
      {
        ecuacion: 'Un terreno rectangular tiene una superficie de 5000 metros cuadrados. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 0.5 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Para convertir de metros cuadrados a hectáreas, divide por 10000.',
          'Superficie en ha = 5000 m^2 / 10000 = 0.5 ha.'
        ]
      },
      {
        ecuacion: 'Una parcela de tierra tiene una superficie de 20000 metros cuadrados. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 2 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Para convertir de metros cuadrados a hectáreas, divide por 10000.',
          'Superficie en ha = 20000 m^2 / 10000 = 2 ha.'
        ]
      },
      {
        ecuacion: 'Un parque urbano tiene una superficie de 100000 metros cuadrados. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 10 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Para convertir de metros cuadrados a hectáreas, divide por 10000.',
          'Superficie en ha = 100000 m^2 / 10000 = 10 ha.'
        ]
      },
      {
        ecuacion: 'Un campo de fútbol tiene una superficie de 7140 metros cuadrados. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 0.714 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Para convertir de metros cuadrados a hectáreas, divide por 10000.',
          'Superficie en ha = 7140 m^2 / 10000 = 0.714 ha.'
        ]
      },
      {
        ecuacion: 'Una piscina tiene una superficie de 250 metros cuadrados. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 0.025 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Para convertir de metros cuadrados a hectáreas, divide por 10000.',
          'Superficie en ha = 250 m^2 / 10000 = 0.025 ha.'
        ]
      },
      {
        ecuacion: 'Una ciudad tiene una superficie de 100 kilómetros cuadrados. ¿Cuántas hectáreas tiene?',
        respuestaNumerica: ['Superficie = 10000 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
          'Primero convertimos kilómetros cuadrados a metros cuadrados: 100 km^2 x 1000000 m^2/km^2 = 100000000 m^2.',
          'Luego convertimos de metros cuadrados a hectáreas: 100000000 m^2 / 10000 = 10000 ha.'
        ]
      },
      {
        ecuacion: 'Un terreno rectangular tiene una superficie de 0.5 hectáreas. ¿Cuántos metros cuadrados tiene?',
        respuestaNumerica: ['Superficie = 5000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10000.',
          'Superficie en m^2 = 0.5 ha x 10000 = 5000 m^2.'
        ]
      },
      {
        ecuacion: 'Una parcela de tierra tiene una superficie de 2 hectáreas. ¿Cuántos metros cuadrados tiene?',
        respuestaNumerica: ['Superficie = 20000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10000.',
          'Superficie en m^2 = 2 ha x 10000 = 20000 m^2.'
        ]
      },
      {
        ecuacion: 'Un parque urbano tiene una superficie de 10 hectáreas. ¿Cuántos metros cuadrados tiene?',
        respuestaNumerica: ['Superficie = 100000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10000.',
          'Superficie en m^2 = 10 ha x 10000 = 100000 m^2.'
        ]
      },
      {
        ecuacion: 'Un campo de fútbol tiene una superficie de 0.714 hectáreas. ¿Cuántos metros cuadrados tiene?',
        respuestaNumerica: ['Superficie = 7140 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10000.',
          'Superficie en m^2 = 0.714 ha x 10000 = 7140 m^2.'
        ]
      },
      {
        ecuacion: 'Una piscina tiene una superficie de 0.025 hectáreas. ¿Cuántos metros cuadrados tiene?',
        respuestaNumerica: ['Superficie = 250 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10000.',
          'Superficie en m^2 = 0.025 ha x 10000 = 250 m^2.'
        ]
      },
      {
        ecuacion: 'Una ciudad tiene una superficie de 10000 hectáreas. ¿Cuántos metros cuadrados tiene?',
        respuestaNumerica: ['Superficie = 100000000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10000.',
          'Superficie en m^2 = 10000 ha x 10000 = 100000000 m^2.'
        ]
      },
      {
        ecuacion: 'Una región tiene una superficie de 100.000 hectáreas. ¿Cuántos metros cuadrados son?',
        respuestaNumerica: ['Superficie = 1.000.000.000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10.000.',
          'Superficie en m^2 = 100.000 ha x 10.000 = 1.000.000.000 m^2.'
        ]
      },
      {
        ecuacion: 'Una provincia tiene una superficie de 50.000 hectáreas. ¿Cuántos metros cuadrados son?',
        respuestaNumerica: ['Superficie = 500.000.000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10.000.',
          'Superficie en m^2 = 50.000 ha x 10.000 = 500.000.000 m^2.'
        ]
      },
      {
        ecuacion: 'Un municipio tiene una superficie de 10.000 hectáreas. ¿Cuántos metros cuadrados son?',
        respuestaNumerica: ['Superficie = 100.000.000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10.000.',
          'Superficie en m^2 = 10.000 ha x 10.000 = 100.000.000 m^2.'
        ]
      },
      {
        ecuacion: 'Un bosque tiene una superficie de 5.000 hectáreas. ¿Cuántos metros cuadrados son?',
        respuestaNumerica: ['Superficie = 50.000.000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10.000.',
          'Superficie en m^2 = 5.000 ha x 10.000 = 50.000.000 m^2.'
        ]
      },
      {
        ecuacion: 'Una campo tiene una superficie de 1.000 hectáreas. ¿Cuántos metros cuadrados son?',
        respuestaNumerica: ['Superficie = 10.000.000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
          'Para convertir de hectáreas a metros cuadrados, multiplica por 10.000.',
          'Superficie en m^2 = 1.000 ha x 10.000 = 10.000.000 m^2.'
        ]
      },
      {
        ecuacion: 'Un viaje en bicicleta tiene una distancia de 100 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 160.934 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 100 millas x 1.60934 = 160.934 kilómetros.'
        ]
      },
      {
        ecuacion: 'Una caminata tiene una distancia de 26.2 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 42.195 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 26.2 millas x 1.60934 = 42.195 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un vuelo en globo aerostático tiene una distancia de 500 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 804.67 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 500 millas x 1.60934 = 804.67 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un viaje en tren tiene una distancia de 1000 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 1609.34 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 1000 millas x 1.60934 = 1609.34 kilómetros.'
        ]
      },
      {
        ecuacion: 'Viajará en bus una distancia de 5000 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 8046.7 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 5000 millas x 1.60934 = 8046.7 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un maratón tiene una distancia de 26.2 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 42.195 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 26.2 millas x 1.60934 = 42.195 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un vuelo comercial tiene una distancia de 500 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 804.67 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 500 millas x 1.60934 = 804.67 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un viaje en tren de alta velocidad tiene una distancia de 1000 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 1609.34 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 1000 millas x 1.60934 = 1609.34 kilómetros.'
        ]
      },
      {
        ecuacion: 'Viajará en auto una distancia de 5000 millas. ¿Cuántos kilómetros son?',
        respuestaNumerica: ['Distancia = 8046.7 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
          'Para convertir de millas a kilómetros, multiplica por 1.60934.',
          'Distancia en km = 5000 millas x 1.60934 = 8046.7 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un tanque de gasolina tiene una capacidad de 50 galones. ¿Cuántos litros de gasolina puede contener?',
        respuestaNumerica: ['Capacidad = 189.27 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
        'Convertir los galones a litros utilizando el factor de conversión: 1 galón = 3.78541 litros.'
        ]
      },
      {
        ecuacion: 'Una habitación tiene dimensiones de 10 pies por 12 pies. ¿Cuál es su área en metros cuadrados?',
        respuestaNumerica: ['Área = 10.68 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área en pies cuadrados multiplicando las dimensiones.',
        'Convertir el área de pies cuadrados a metros cuadrados utilizando el factor de conversión: 1 pie cuadrado = 0.092903 metros cuadrados.'
        ]
      },
      {
        ecuacion: 'Un objeto tiene una masa de 200 gramos. ¿Cuál es su masa en kilogramos?',
        respuestaNumerica: ['Masa = 0.2 kilogramos'],
        unidadRespuesta: ['kgs'],
        pasos: [
        'Convertir los gramos a kilogramos utilizando el factor de conversión: 1 kilogramo = 1000 gramos.'
        ]
      },
      {
        ecuacion: 'Una piscina tiene una longitud de 20 metros, un ancho de 10 metros y una profundidad de 2 metros. ¿Cuál es su volumen en litros?',
        respuestaNumerica: ['Volumen = 40000 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
        'Calcular el volumen en metros cúbicos multiplicando las dimensiones.',
        'Convertir el volumen de metros cúbicos a litros utilizando el factor de conversión: 1 metro cúbico = 1000 litros.'
        ]
      },
      {
        ecuacion: 'Un viajero está a una altitud de 35000 pies. ¿Cuál es su altitud en kilómetros?',
        respuestaNumerica: ['Altitud = 10.668 kilómetros'],
        unidadRespuesta: ['km'],
        pasos: [
        'Convertir los pies a kilómetros utilizando el factor de conversión: 1 pie = 0.0003048 kilómetros.'
        ]
      },
      {
        ecuacion: 'Un prisma rectangular tiene una longitud de 6 metros, un ancho de 4 metros y una altura de 3 metros. ¿Cuál es su volumen?',
        respuestaNumerica: ['Volumen = 72 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
        'Calcular el volumen del prisma utilizando la fórmula: Volumen = longitud x ancho x altura.'
        ]
      },
      {
        ecuacion: 'Un cubo tiene una arista de 5 metros. ¿Cuál es su volumen?',
        respuestaNumerica: ['Volumen = 125 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
        'Calcular el volumen del cubo utilizando la fórmula: Volumen = arista^3.'
        ]
      },
      {
        ecuacion: 'Un paralelepípedo tiene una longitud de 8 metros, un ancho de 6 metros y una altura de 4 metros. ¿Cuál es su volumen?',
        respuestaNumerica: ['Volumen = 192 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
        'Calcular el volumen del paralelepípedo utilizando la fórmula: Volumen = longitud x ancho x altura.'
        ]
      },
      {
        ecuacion: 'Un rectángulo tiene una base de 10 metros y una altura de 6 metros. ¿Cuál es su área?',
        respuestaNumerica: ['Área = 60 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área del rectángulo multiplicando la base por la altura.'
        ]
        },
        {
        ecuacion: 'Un cuadrado tiene un lado de 12 metros. ¿Cuál es su área?',
        respuestaNumerica: ['Área = 144 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área del cuadrado utilizando la fórmula: Área = lado^2.'
        ]
        },
        {
        ecuacion: 'Un rombo tiene una diagonal mayor de 16 metros y una diagonal menor de 10 metros. ¿Cuál es su área?',
        respuestaNumerica: ['Área = 80 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área del rombo utilizando la fórmula: Área = (diagonal mayor * diagonal menor) / 2.'
        ]
        },
        {
        ecuacion: 'Un trapecio tiene una base mayor de 12 metros, una base menor de 8 metros y una altura de 5 metros. ¿Cuál es su área?',
        respuestaNumerica: ['Área = 50 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área del trapecio utilizando la fórmula: Área = ((base mayor + base menor) * altura) / 2.'
        ]
        },
        {
        ecuacion: 'Un romboide tiene una base de 9 metros y una altura de 4 metros. ¿Cuál es su área?',
        respuestaNumerica: ['Área = 36 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área del romboide multiplicando la base por la altura.'
        ]
        },
        {
        ecuacion: 'Un pasillo tiene una longitud de 25 metros. Convierte esta longitud a centímetros.',
        respuestaNumerica: ['Longitud = 2500 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
        'Multiplicar la longitud en metros por 100 para convertirla a centímetros.'
        ]
        },
        {
        ecuacion: 'Una piscina tiene una profundidad de 2 metros. ¿Cuántos centímetros es eso?',
        respuestaNumerica: ['Profundidad = 200 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
        'Multiplicar la profundidad en metros por 100 para convertirla a centímetros.'
        ]
        },
        {
        ecuacion: 'Un campo de fútbol tiene una longitud de 100 metros y una anchura de 60 metros. Calcula su área en metros cuadrados.',
        respuestaNumerica: ['Área = 6000 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área multiplicando la longitud por la anchura.'
        ]
        },
        {
        ecuacion: 'Una habitación tiene 15 pies de largo y 10 pies de ancho. ¿Cuál es su área en metros cuadrados?',
        respuestaNumerica: ['Área = 13.94 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área multiplicando la longitud por la anchura y luego convertir de pies cuadrados a metros cuadrados.'
        ]
        },
        {
        ecuacion: 'Una caja tiene dimensiones de 20 cm de largo, 15 cm de ancho y 10 cm de altura. ¿Cuál es su volumen en metros cúbicos?',
        respuestaNumerica: ['Volumen = 0.03 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
        'Calcular el volumen multiplicando las tres dimensiones y luego convertir de centímetros cúbicos a metros cúbicos.'
        ]
        },
        {
        ecuacion: 'Un tanque tiene una capacidad de 500 litros. ¿Cuántos metros cúbicos de agua puede contener?',
        respuestaNumerica: ['Volumen = 0.5 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
        'Convertir la capacidad de litros a metros cúbicos dividiendo entre 1000.'
        ]
        },
        {
        ecuacion: 'Una mesa tiene una longitud de 1.5 metros y una anchura de 0.8 metros. ¿Cuál es su área en centímetros cuadrados?',
        respuestaNumerica: ['Área = 12000 centímetros cuadrados'],
        unidadRespuesta: ['cms^2'],
        pasos: [
        'Calcular el área en metros cuadrados y luego convertir a centímetros cuadrados multiplicando por 10000.'
        ]
        },
        {
        ecuacion: 'Una piscina tiene una longitud de 20 pies, un ancho de 10 pies y una profundidad de 5 pies. ¿Cuántos litros de agua se necesitan para llenarla?',
        respuestaNumerica: ['Volumen = 37854.1 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
        'Calcular el volumen en pies cúbicos y luego convertir a litros multiplicando por 28.3168.'
        ]
        },
        {
        ecuacion: 'Un estante tiene una altura de 2.5 metros. ¿Cuántos centímetros es eso?',
        respuestaNumerica: ['Altura = 250 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
        'Multiplicar la altura en metros por 100 para convertirla a centímetros.'
        ]
        },
        {
        ecuacion: 'Un terreno rectangular tiene una longitud de 50 metros y una anchura de 30 metros. Calcula su área en hectáreas.',
        respuestaNumerica: ['Área = 0.15 hectáreas'],
        unidadRespuesta: ['ha'],
        pasos: [
        'Calcular el área en metros cuadrados y luego convertir a hectáreas dividiendo entre 10000.'
        ]
        },
        {
        ecuacion: 'Un poste tiene una altura de 6 metros. Convierte esta altura a centímetros.',
        respuestaNumerica: ['Altura = 600 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
        'Multiplicar la altura en metros por 100 para convertirla a centímetros.'
        ]
        },
        {
        ecuacion: 'Un rectángulo tiene una longitud de 12 metros y una anchura de 8 metros. Calcula su perímetro en centímetros.',
        respuestaNumerica: ['Perímetro = 400 centímetros'],
        unidadRespuesta: ['cms'],
        pasos: [
        'Calcular el perímetro en metros y luego convertir a centímetros multiplicando por 100.'
        ]
        },
        {
        ecuacion: 'Una piscina rectangular tiene una longitud de 10 metros, un ancho de 5 metros y una profundidad de 2 metros. ¿Cuántos litros de agua se necesitan para llenarla?',
        respuestaNumerica: ['Volumen = 10000 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
        'Calcular el volumen en metros cúbicos y luego convertir a litros multiplicando por 1000.'
        ]
        },
        {
        ecuacion: 'Una habitación tiene una longitud de 3 metros, un ancho de 4 metros y una altura de 2.5 metros. ¿Cuál es su volumen en metros cúbicos?',
        respuestaNumerica: ['Volumen = 30 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
        'Calcular el volumen multiplicando la longitud por el ancho y luego por la altura.'
        ]
        },
        {
        ecuacion: 'Un campo tiene una longitud de 80 metros y una anchura de 60 metros. ¿Cuál es su área en kilómetros cuadrados?',
        respuestaNumerica: ['Área = 0.048 kilómetros cuadrados'],
        unidadRespuesta: ['km^2'],
        pasos: [
        'Calcular el área en metros cuadrados y luego convertir a kilómetros cuadrados dividiendo entre 1000000.'
        ]
        },
        {
        ecuacion: 'Un rectángulo tiene una longitud de 15 centímetros y una anchura de 10 centímetros. Calcula su área en metros cuadrados.',
        respuestaNumerica: ['Área = 0.015 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área en centímetros cuadrados y luego convertir a metros cuadrados dividiendo entre 10000.'
        ]
        },
        {
        ecuacion: 'Una mesa tiene una longitud de 120 centímetros y una anchura de 80 centímetros. ¿Cuál es su área en metros cuadrados?',
        respuestaNumerica: ['Área = 0.96 metros cuadrados'],
        unidadRespuesta: ['m^2'],
        pasos: [
        'Calcular el área en centímetros cuadrados y luego convertir a metros cuadrados dividiendo entre 10000.'
        ]
        },
        {
        ecuacion: 'Un estanque tiene una profundidad de 4 metros. ¿Cuántos litros de agua se necesitan para llenarlo si tiene una base de 6 metros de largo y 4 metros de ancho?',
        respuestaNumerica: ['Volumen = 96000 litros'],
        unidadRespuesta: ['lts'],
        pasos: [
        'Calcular el volumen en metros cúbicos y luego convertir a litros multiplicando por 1000.'
        ]
        },
        {
        ecuacion: 'Un cubo tiene una arista de 10 centímetros. ¿Cuál es su volumen en litros?',
        respuestaNumerica: ['Volumen = 1 litro'],
        unidadRespuesta: ['lts'],
        pasos: [
        'Calcular el volumen en centímetros cúbicos y luego convertir a litros dividiendo entre 1000.'
        ]
        },
        {
        ecuacion: 'Una piscina tiene una profundidad de 3 metros. ¿Cuántos metros cúbicos de agua puede contener si tiene una base rectangular con una longitud de 8 metros y una anchura de 4 metros?',
        respuestaNumerica: ['Volumen = 96 metros cúbicos'],
        unidadRespuesta: ['m^3'],
        pasos: [
        'Calcular el volumen multiplicando la longitud por la anchura y luego por la profundidad.'
        ]
        }
        
        


     

      




      


      
];

const problemasAlgebraicos = [
    {
        ecuacion: "Desarrolla la expresión y reduce sus términos semenjantes:" +"<br>"+ "-3(3x - 4).",
        respuestaNumerica: ["Expresión desarrollada:", "-9x + 12"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["-9x+12","12-9x","12-x9","-x9+12"],
        pasos: [
        "Multiplica cada término dentro del paréntesis por -3: -3 · 3x = -9x, y -3 · (-4) = 12."
        ]
    },
    {
        ecuacion: "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "3x + 2 - 4x + 5.",
        respuestaNumerica: ["Expresión reducida:", "-x + 7"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["-x + 7", "7 - x"],
        pasos: [
        "Combina los términos semejantes: (3x - 4x) + (2 + 5) = -x + 7."
        ]
    },
    {
        ecuacion: "Simplifica la expresión:" +"<br>"+ "2y - 3 - y + 4.",
        respuestaNumerica: ["Expresión simplificada:", "y + 1"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["y + 1", "1 + y"],
        pasos: [
        "Combina los términos semejantes: (2y - y) + (-3 + 4) = y + 1."
        ]
    },
    {
        ecuacion: "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "4a + 6 - 2a + 3.",
        respuestaNumerica: ["Expresión reducida:", "2a + 9"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["2a + 9", "9 + 2a"],
        pasos: [
        "Combina los términos semejantes: (4a - 2a) + (6 + 3) = 2a + 9."
        ]
    },
    {
        ecuacion: "Simplifica la expresión" +"<br>"+ "5b - 2 - 3b + 7.",
        respuestaNumerica: ["Expresión simplificada:", "2b + 5"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["2b + 5", "5 + 2b"],
        pasos: [
        "Combina los términos semejantes: (5b - 3b) + (-2 + 7) = 2b + 5."
        ]
    },
    {
        ecuacion: "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "6x - 2y - 3x + 4y.",
        respuestaNumerica: ["Expresión reducida:", "3x + 2y"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["3x+2y", "2y+3x"],
        pasos: [
        "Combina los términos semejantes: (6x - 3x) + (-2y + 4y) = 3x + 2y."
        ]
    },
    {
        ecuacion: "Simplifica la expresión" +"<br>"+ "-3a + 5b - 2a + 6b.",
        respuestaNumerica: ["Expresión simplificada:", "-5a + 11b"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["-5a + 11b", "11b - 5a"],
        pasos: [
        "Combina los términos semejantes: (-3a - 2a) + (5b + 6b) = -5a + 11b."
        ]
    },
    {
        ecuacion: "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2x - 3y - x + 4y.",
        respuestaNumerica: ["Expresión reducida:", "x + y"],
        unidadRespuesta: [],
        combinacionesRespuesta: ["x + y", "y + x"],
        pasos: [
        "Combina los términos semejantes: (2x - x) + (-3y + 4y) = x + y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "3(x + 2) - 2(2x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "x + 4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["x + 4", "4 + x"],
        "pasos": [
            "Distribuye el 3 y el -2: 3x + 6 - 4x + 2.",
            "Combina los términos semejantes: (3x - 4x) + (6 + 2) = -x + 8.",
            "Expresión reducida: x + 4"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(3x - 4) + 5(x + 2).",
        "respuestaNumerica": ["Expresión reducida:", "8 + 3x"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["8 + 3x", "3x + 8"],
        "pasos": [
            "Distribuye el -2 y el 5: -6x + 8 + 5x + 10.",
            "Combina los términos semejantes: (-6x + 5x) + (8 + 10) = -x + 18.",
            "Expresión reducida: 8 + 3x"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(2x + 3) - 3(x - 4).",
        "respuestaNumerica": ["Expresión reducida:", "x + 18"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["x + 18", "18 + x"],
        "pasos": [
            "Distribuye el 2 y el -3: 4x + 6 - 3x + 12.",
            "Combina los términos semejantes: (4x - 3x) + (6 + 12) = x + 18.",
            "Expresión reducida: x + 18"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(2x - 1) + 4(3x + 2).",
        "respuestaNumerica": ["Expresión reducida:", "6x + 11"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["6x + 11", "11 + 6x"],
        "pasos": [
            "Distribuye el -3 y el 4: -6x + 3 + 12x + 8.",
            "Combina los términos semejantes: (-6x + 12x) + (3 + 8) = 6x + 11.",
            "Expresión reducida: 6x + 11"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(2x - 3) - 3(3x + 2).",
        "respuestaNumerica": ["Expresión reducida:", "-5x - 12"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-5x - 12", "-12 - 5x"],
        "pasos": [
            "Distribuye el 2 y el -3: 4x - 6 - 9x - 6.",
            "Combina los términos semejantes: (4x - 9x) + (-6 - 6) = -5x - 12.",
            "Expresión reducida: -5x - 12"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(2x - 1) + 5(x + 4).",
        "respuestaNumerica": ["Expresión reducida:", "-x + 23"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-x + 23", "23 - x"],
        "pasos": [
            "Distribuye el -3 y el 5: -6x + 3 + 5x + 20.",
            "Combina los términos semejantes: (-6x + 5x) + (3 + 20) = -x + 23.",
            "Expresión reducida: -x + 23"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "3(2x + 4) - 4(x - 2).",
        "respuestaNumerica": ["Expresión reducida:", "2x + 20"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2x + 20", "20 + 2x"],
        "pasos": [
            "Distribuye el 3 y el -4: 6x + 12 - 4x + 8.",
            "Combina los términos semejantes: (6x - 4x) + (12 + 8) = 2x + 20.",
            "Expresión reducida: 2x + 20"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(2x - 3) + 3(x + 4).",
        "respuestaNumerica": ["Expresión reducida:", "x + 18"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["x + 18", "18 + x"],
        "pasos": [
            "Distribuye el -2 y el 3: -4x + 6 + 3x + 12.",
            "Combina los términos semejantes: (-4x + 3x) + (6 + 12) = x + 18.",
            "Expresión reducida: x + 18"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(3x + 2) + 4(2 - x).",
        "respuestaNumerica": ["Expresión reducida:", "-10x + 4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-10x + 4", "4 - 10x"],
        "pasos": [
            "Distribuye el -2 y el 4: -6x - 4 + 8 - 4x.",
            "Combina los términos semejantes: (-6x - 4x) + (-4 + 8) = -10x + 4.",
            "Expresión reducida: -10x + 4"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(2x - 3) - 3(3x + 2).",
        "respuestaNumerica": ["Expresión reducida:", "-5x - 12"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-5x - 12", "-12 - 5x"],
        "pasos": [
            "Distribuye el 2 y el -3: 4x - 6 - 9x - 6.",
            "Combina los términos semejantes: (4x - 9x) + (-6 - 6) = -5x - 12.",
            "Expresión reducida: -5x - 12"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 2) - 3(2x + 1) + 4(4 - x).",
        "respuestaNumerica": ["Expresión reducida:", "5x - 14"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5x - 14", "-14 + 5x"],
        "pasos": [
            "Distribuye el 2, el -3 y el 4: 6x - 4 - 6x - 3 + 16 - 4x.",
            "Combina los términos semejantes: (6x - 6x - 4x) + (-4 - 3 + 16) = 5x - 14.",
            "Expresión reducida: 5x - 14"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(2x + 3) - 2(3 - x) + 5(4x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "9x + 8"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["9x + 8", "8 + 9x"],
        "pasos": [
            "Distribuye el -3, el -2 y el 5: -6x - 9 - 6 + 2x + 20 - 5.",
            "Combina los términos semejantes: (-6x + 2x + 4x) + (-9 - 6 - 5 + 20) = 9x + 8.",
            "Expresión reducida: 9x + 8"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "4(3x - 2) - 2(2x + 3) - 3(x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "5x - 11"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5x - 11", "-11 + 5x"],
        "pasos": [
            "Distribuye el 4, el -2 y el -3: 12x - 8 - 4x - 6 - 3x + 3.",
            "Combina los términos semejantes: (12x - 4x - 3x) + (-8 - 6 + 3) = 5x - 11.",
            "Expresión reducida: 5x - 11"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(2x + 3) - 3(3 - x) + 4(4x - 2).",
        "respuestaNumerica": ["Expresión reducida:", "3x + 8"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["3x + 8", "8 + 3x"],
        "pasos": [
            "Distribuye el -2, el -3 y el 4: -4x - 6 - 9 + 3x + 16 - 8x + 4.",
            "Combina los términos semejantes: (-4x + 3x - 8x) + (-6 - 9 + 16 + 4) = 3x + 8.",
            "Expresión reducida: 3x + 8"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(2x - 3) + 3(x + 2) - 4(3 - x).",
        "respuestaNumerica": ["Expresión reducida:", "5x + 10"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5x + 10", "10 + 5x"],
        "pasos": [
            "Distribuye el 2, el 3 y el -4: 4x - 6 + 3x + 6 - 12 + 4x.",
            "Combina los términos semejantes: (4x + 3x + 4x) + (-6 + 6 - 12) = 5x + 10.",
            "Expresión reducida: 5x + 10"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(3x - 2) + 4(2x + 3) - 2(x + 1).",
        "respuestaNumerica": ["Expresión reducida:", "7x + 1"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["7x + 1", "1 + 7x"],
        "pasos": [
            "Distribuye el -3, el 4 y el -2: -9x + 6 + 8x + 12 - 2x - 2.",
            "Combina los términos semejantes: (-9x + 8x - 2x) + (6 + 12 - 2) = 7x + 1.",
            "Expresión reducida: 7x + 1"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "3(2x + 3) - 2(3 - x) + 5(x - 2).",
        "respuestaNumerica": ["Expresión reducida:", "9x - 4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["9x - 4", "-4 + 9x"],
        "pasos": [
            "Distribuye el 3, el -2 y el 5: 6x + 9 - 6 + 2x - 10 + 5x - 10.",
            "Combina los términos semejantes: (6x + 2x + 5x) + (9 - 6 - 10 - 10) = 9x - 4.",
            "Expresión reducida: 9x - 4"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(3x + 2) - 3(2 - x) + 4(4x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "5x + 4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5x + 4", "4 + 5x"],
        "pasos": [
            "Distribuye el -2, el -3 y el 4: -6x - 4 - 6 + 3x + 8 - 4x + 4.",
            "Combina los términos semejantes: (-6x + 3x - 4x) + (-4 - 6 + 8 + 4) = 5x + 4.",
            "Expresión reducida: 5x + 4"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(2x - 3) - 3(3 - x) + 4(x + 2).",
        "respuestaNumerica": ["Expresión reducida:", "9x + 5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["9x + 5", "5 + 9x"],
        "pasos": [
            "Distribuye el 2, el -3 y el 4: 4x - 6 - 9 + 3x + 12 + 4x + 8.",
            "Combina los términos semejantes: (4x + 3x + 4x) + (-6 - 9 + 12 + 8) = 9x + 5.",
            "Expresión reducida: 9x + 5"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(2x - 1) - 2(3x + 4) + 4(2 - x).",
        "respuestaNumerica": ["Expresión reducida:", "-9x + 11"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9x + 11", "11 - 9x"],
        "pasos": [
            "Distribuye el -3, el -2 y el 4: -6x + 3 - 6x - 8 + 8 - 4x.",
            "Combina los términos semejantes: (-6x - 6x - 4x) + (3 - 8 + 8) = -9x + 11.",
            "Expresión reducida: -9x + 11"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 4) + 3(x + 2) - 4(4 - x).",
        "respuestaNumerica": ["Expresión reducida:", "7x + 2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["7x + 2", "2 + 7x"],
        "pasos": [
            "Distribuye el 2, el 3 y el -4: 6x - 8 + 3x + 6 - 16 + 4x.",
            "Combina los términos semejantes: (6x + 3x + 4x) + (-8 + 6 - 16) = 7x + 2.",
            "Expresión reducida: 7x + 2"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(2x + 3) - 3(3 - x) + 4(x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "9x - 2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["9x - 2", "-2 + 9x"],
        "pasos": [
            "Distribuye el -2, el -3 y el 4: -4x - 6 - 9 + 3x - 12 + 4x - 4.",
            "Combina los términos semejantes: (-4x + 3x + 4x) + (-6 - 9 - 12 - 4) = 9x - 2.",
            "Expresión reducida: 9x - 2"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "3(2x + 3) + 4(x - 2) - 2(3 - x).",
        "respuestaNumerica": ["Expresión reducida:", "7x + 10"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["7x + 10", "10 + 7x"],
        "pasos": [
            "Distribuye el 3, el 4 y el -2: 6x + 9 + 4x - 8 - 6 + 2x.",
            "Combina los términos semejantes: (6x + 4x + 2x) + (9 - 8 - 6) = 7x + 10.",
            "Expresión reducida: 7x + 10"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(3x - 2) + 3(x + 4) + 4(2 - x).",
        "respuestaNumerica": ["Expresión reducida:", "-5x + 14"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-5x + 14", "14 - 5x"],
        "pasos": [
            "Distribuye el -2, el 3 y el 4: -6x + 4 + 3x + 12 + 8 - 4x.",
            "Combina los términos semejantes: (-6x + 3x - 4x) + (4 + 12 + 8) = -5x + 14.",
            "Expresión reducida: -5x + 14"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 4) - 3(2 - x) + 4(4x - 2).",
        "respuestaNumerica": ["Expresión reducida:", "9x + 2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["9x + 2", "2 + 9x"],
        "pasos": [
            "Distribuye el 2, el -3 y el 4: 6x - 8 - 6 + 3x + 12 - 8x + 4.",
            "Combina los términos semejantes: (6x + 3x - 8x) + (-8 - 6 + 12 + 4) = 9x + 2.",
            "Expresión reducida: 9x + 2"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(2x + 3) - 2(3 - x) + 5(4x - 1) - 2(5 + 2x).",
        "respuestaNumerica": ["Expresión reducida:", "11x + 1"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["11x + 1", "1 + 11x"],
        "pasos": [
            "Distribuye el -3, el -2, el 5 y el -2: -6x - 9 - 6 + 2x + 20 - 5 - 10 - 4x.",
            "Combina los términos semejantes: (-6x + 2x - 4x) + (-9 - 6 + 20 - 5 - 10) = 11x + 1.",
            "Expresión reducida: 11x + 1"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 2) - 3(2x + 1) + 4(4 - x) - (2x - 3) + 3(5 + 2x).",
        "respuestaNumerica": ["Expresión reducida:", "19x + 22"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["19x + 22", "22 + 19x"],
        "pasos": [
            "Distribuye el 2, el -3 y el 4: 6x - 4 - 6x - 3 + 16 - 4x - 2x + 3 + 12 + 6x.",
            "Combina los términos semejantes: (6x - 6x - 4x + 6x) + (-4 - 3 + 16 + 3 + 12) = 19x + 22.",
            "Expresión reducida: 19x + 22"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(2x + 3) - 3(3 - x) + 4(x - 1) - 3(5 + 2x) + 2(3 - x).",
        "respuestaNumerica": ["Expresión reducida:", "-15x - 13"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-15x - 13", "-13 - 15x"],
        "pasos": [
            "Distribuye el -2, el -3, el 4, el -3 y el 2: -4x - 6 - 9 + 3x - 12 + 4x - 4 - 15 - 6x + 3.",
            "Combina los términos semejantes: (-4x + 3x + 4x - 6x) + (-6 - 9 - 12 - 4 - 15 + 3) = -15x - 13.",
            "Expresión reducida: -15x - 13"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 2) + 3(x + 2) - 4(3 - x) + 2(5 + 3x) - 5(4x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "7x + 22"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["7x + 22", "22 + 7x"],
        "pasos": [
            "Distribuye el 2, el 3, el -4, el 2 y el -5: 6x - 4 + 3x + 6 - 12 + 4x - 8 + 10 + 6x - 5 - 20.",
            "Combina los términos semejantes: (6x + 3x + 4x + 6x) + (-4 + 6 - 12 - 8 + 10 - 5 - 20) = 7x + 22.",
            "Expresión reducida: 7x + 22"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(2x + 3) - 2(3 - x) + 5(4x - 1) - (2x - 3) + 3(5 + 2x) - 4(x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "14x + 18"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["14x + 18", "18 + 14x"],
        "pasos": [
            "Distribuye el -3, el -2, el 5, el -1, el 3 y el -4: -6x - 9 - 6 + 2x + 20 - 2x + 3 + 15 + 6x - 12 + 3 - 4x.",
            "Combina los términos semejantes: (-6x + 2x + 6x - 4x) + (-9 - 6 + 20 + 3 + 15 + 3 - 12) = 14x + 18.",
            "Expresión reducida: 14x + 18"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 2) + 3(x + 2) - 4(3 - x) - (2x - 3) + 3(5 + 2x) - 5(4x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "14x + 18"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["14x + 18", "18 + 14x"],
        "pasos": [
            "Distribuye el 2, el 3, el -4, el -1, el 3 y el -5: 6x - 4 + 3x + 6 - 12 - 4x + 6 - 2x + 3 + 15 + 6x - 12 + 3 - 4x.",
            "Combina los términos semejantes: (6x + 3x - 4x - 2x + 6x - 4x) + (-4 + 6 - 12 + 6 + 3 + 15 + 3 - 12) = 14x + 18.",
            "Expresión reducida: 14x + 18"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-2(2x + 3) - 3(3 - x) + 4(x - 1) - 3(5 + 2x) + 2(3 - x) - 4(x + 1).",
        "respuestaNumerica": ["Expresión reducida:", "-13x - 11"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-13x - 11", "-11 - 13x"],
        "pasos": [
            "Distribuye el -2, el -3, el 4, el -3, el 2 y el -4: -4x - 6 - 9 + 3x - 12 + 4x - 4 - 15 - 6x + 3 + 6 - 4x - 4.",
            "Combina los términos semejantes: (-4x + 3x + 4x - 6x - 4x) + (-6 - 9 - 12 - 4 - 15 + 3 + 6 - 4) = -13x - 11.",
            "Expresión reducida: -13x - 11"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 2) - 3(2x + 1) + 4(4 - x) - 2(5 + 2x) + 3(3 - x) - 5(4x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "-3x + 20"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-3x + 20", "20 - 3x"],
        "pasos": [
            "Distribuye el 2, el -3, el 4, el -2, el 3 y el -5: 6x - 4 - 6x - 3 + 16 - 4x - 10 - 4 + 6x - 2 - 15 + 3 - 20x + 5.",
            "Combina los términos semejantes: (6x - 6x + 6x) + (-4 - 3 - 4 - 10 - 2 + 3 + 5 + 16 - 15) = -3x + 20.",
            "Expresión reducida: -3x + 20"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-3(2x + 3) + 4(x - 1) - 2(3 - x) + 3(5 + 2x) - 5(4x - 1) + 2(2 - x).",
        "respuestaNumerica": ["Expresión reducida:", "-9x + 3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9x + 3", "3 - 9x"],
        "pasos": [
            "Distribuye el -3, el 4, el -2, el 3, el -5 y el 2: -6x - 9 + 4x - 4 - 6 + 2x + 15 + 6x - 12 - 5x + 5 + 4 - 2x.",
            "Combina los términos semejantes: (-6x + 4x + 2x + 6x - 5x - 2x) + (-9 - 4 - 6 + 15 - 12 + 5 + 4) = -9x + 3.",
            "Expresión reducida: -9x + 3"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "2(3x - 2) - 3(2 - x) + 4(x + 1) - 2(5 + 2x) + 3(3 - x) - 5(4x - 1).",
        "respuestaNumerica": ["Expresión reducida:", "-3x + 21"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-3x + 21", "21 - 3x"],
        "pasos": [
            "Distribuye el 2, el -3, el 4, el -2, el 3 y el -5: 6x - 4 - 6 + 3x + 4 - 4x - 10 + 2x - 4 + 9 - 3x + 15 - 20x + 5.",
            "Combina los términos semejantes: (6x + 3x - 4x + 2x - 3x) + (-4 - 6 + 4 - 10 - 4 + 9 + 15 + 5) = -3x + 21.",
            "Expresión reducida: -3x + 21"
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "(3/4)x - (1/2)y + (5/6)x - (2/3)y.",
        "respuestaNumerica": ["Expresión reducida:", "(11/12)x - (1/6)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(11/12)x - (1/6)y",
            "(-1/6)y + (11/12)x",
            "-(1/6)y + (11/12)x",
            "-1y/6 + 11x/12",
            "11x/12 - 1y/6"
        ],
        "pasos": [
            "Combina los términos semejantes: (3/4)x + (5/6)x - (1/2)y - (2/3)y = (11/12)x - (1/6)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-(2/5)x - (1/3)y - (4/7)x + (5/6)y.",
        "respuestaNumerica": ["Expresión reducida:", "(-46/35)x + (7/6)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(-46/35)x + (7/6)y",
            "(7/6)y - (46/35)x",
            "-(46/35)x + (7/6)y",
            "(7/6)y - 46x/35",
            "7y/6 - 46x/35"
        ],
        "pasos": [
            "Combina los términos semejantes: -(2/5)x - (4/7)x - (1/3)y + (5/6)y = (-46/35)x + (7/6)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "(3/4)x + (2/3)y - (5/6)x - (1/2)y.",
        "respuestaNumerica": ["Expresión reducida:", "(1/12)x + (1/6)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(1/12)x + (1/6)y",
            "(1/6)y + (1/12)x",
            "(1/6)y + (1/12)x",
            "1y/6 + 1x/12",
            "1x/12 + 1y/6"
        ],
        "pasos": [
            "Combina los términos semejantes: (3/4)x - (5/6)x + (2/3)y - (1/2)y = (1/12)x + (1/6)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-(2/3)x + (3/4)y + (5/6)x - (1/2)y.",
        "respuestaNumerica": ["Expresión reducida:", "(7/6)x + (1/4)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(7/6)x + (1/4)y",
            "(1/4)y + (7/6)x",
            "(1/4)y + 7x/6",
            "1y/4 + 7x/6"
        ],
        "pasos": [
            "Combina los términos semejantes: -(2/3)x + (5/6)x + (3/4)y - (1/2)y = (7/6)x + (1/4)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "(1/2)x - (3/5)y - (4/7)x + (5/6)y.",
        "respuestaNumerica": ["Expresión reducida:", "(1/14)x + (7/30)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(1/14)x + (7/30)y",
            "(7/30)y + (1/14)x",
            "(7/30)y + 1x/14",
            "7y/30 + 1x/14"
        ],
        "pasos": [
            "Combina los términos semejantes: (1/2)x - (4/7)x - (3/5)y + (5/6)y = (1/14)x + (7/30)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-(2/3)x + (3/4)y - (5/6)x - (4/5)y.",
        "respuestaNumerica": ["Expresión reducida:", "(-19/6)x - (11/20)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "-(19/6)x - (11/20)y",
            "(-19/6)x + (-11/20)y",
            "-(11/20)y - (19/6)x",
            "(-11/20)y + (-19/6)x",
            "-11y/20 - 19x/6",
            " -19x/6 - 11y/20",
      
        ],
        "pasos": [
            "Combina los términos semejantes: -(2/3)x - (5/6)x + (3/4)y - (4/5)y = (-19/6)x - (11/20)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "(4/5)x + (1/2)y - (2/3)x + (3/4)y.",
        "respuestaNumerica": ["Expresión reducida:", "(7/15)x + (5/4)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(7/15)x+(5/4)y",
            "(7/15)x+(5y/4)",
            "(5/4)y+(7/15)x",
            "(5y/4)+(7/15)x"
        ],
        "pasos": [
            "Combina los términos semejantes: (4/5)x - (2/3)x + (1/2)y + (3/4)y = (7/15)x + (5/4)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-(3/4)x - (1/3)y + (5/6)x - (2/5)y - (4/5)x + (3/4)y + (1/2)x - (3/5)y.",
        "respuestaNumerica": ["Expresión reducida:", "(-1/60)x - (7/60)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(-1/60)x - (7/60)y",
            "-x/60 - 7y/60",
            "-(7/60)y+(-1/60)x",
            "-7y/60-x/60",

        ],
        "pasos": [
            "Combina los términos semejantes: -(3/4)x + (5/6)x - (4/5)x + (1/2)x - (1/3)y - (2/5)y + (3/4)y - (3/5)y = (-1/60)x - (7/60)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "(1/2)x - (3/4)y - (4/5)x + (5/6)y - (2/3)x + (3/4)y - (5/6)x + (1/3)y.",
        "respuestaNumerica": ["Expresión reducida:", "(-3/10)x + (11/12)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(-3/10)x + (11/12)y",
            "(11/12)y - (3/10)x",
            "-(3/10)x + (11/12)y",
            "(11/12)y - 3x/10",
            "11y/12 - 3x/10",
            "- 3x/10+11y/12"
        ],
        "pasos": [
            "Combina los términos semejantes: (1/2)x - (4/5)x - (2/3)x - (5/6)x - (3/4)y + (5/6)y + (3/4)y + (1/3)y = (-3/10)x + (11/12)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "-(2/3)x + (3/4)y - (5/6)x - (4/5)y + (1/2)x - (3/4)y + (5/6)x - (1/3)y.",
        "respuestaNumerica": ["Expresión reducida:", "(-1/15)x - (11/20)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(-1/15)x - (11/20)y",
            "(-11/20)y - (1/15)x",
            "-(1/15)x - (11/20)y",
            "-11y/20 - 1x/15",
            "-11y/20 - 1x/15"
        ],
        "pasos": [
            "Combina los términos semejantes: -(2/3)x - (5/6)x + (1/2)x + (5/6)x + (3/4)y - (4/5)y - (3/4)y - (1/3)y = (-1/15)x - (11/20)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ "(7/3)x - (2/5)y + (5/4)x - (3/2)y.",
        "respuestaNumerica": ["Expresión reducida:", "(29/12)x - (11/10)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(29/12)x - (11/10)y",
            "(-11/10)y + (29/12)x",
            "-(11/10)y + (29/12)x",
            "-11y/10 + 29x/12",
            "29x/12 - 11y/10"
        ],
        "pasos": [
            "Combina los términos semejantes: (7/3)x + (5/4)x - (2/5)y - (3/2)y = (29/12)x - (11/10)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(5/6)x - (2/3)y - (4/5)x + (7/8)y.",
        "respuestaNumerica": ["Expresión reducida:", "(-41/30)x + (13/24)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(-41/30)x + (13/24)y",
            "(13/24)y - (41/30)x",
            "-(41/30)x + (13/24)y",
            "(13/24)y - 41x/30",
            "13y/24 - 41x/30"
        ],
        "pasos": [
            "Combina los términos semejantes: -(5/6)x - (4/5)x - (2/3)y + (7/8)y = (-41/30)x + (13/24)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación: (3/4)x + (5/6)y - (2/3)x - (1/2)y.",
        "respuestaNumerica": ["Expresión reducida:", "(1/12)x + (2/3)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(1/12)x + (2/3)y",
            "(2/3)y + (1/12)x",
            "x/12 +2y/3",
            "2y/3 + x/12"
            
        ],
        "pasos": [
            "Combina los términos semejantes: (3/4)x - (2/3)x + (5/6)y - (1/2)y = (1/12)x + (2/3)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(3/5)x + (4/7)y + (5/6)x - (1/3)y.",
        "respuestaNumerica": ["Expresión reducida:", "(7/30)x + (17/42)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(7/30)x + (17/42)y",
            "(17/42)y + (7/30)x",
            "x/30 + 17y/42",
            "17y/42 + x/30"
        ],
        "pasos": [
            "Combina los términos semejantes: -(3/5)x + (5/6)x + (4/7)y - (1/3)y = (7/30)x + (17/42)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (2/3)x - (5/6)y - (1/2)x + (3/4)y.",
        "respuestaNumerica": ["Expresión reducida:", "(1/6)x + (1/12)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(1/6)x + (1/12)y",
            "(1/12)y + (1/6)x",
            "x/6 + y/12",
            "y/12 + x/6"
        ],
        "pasos": [
            "Combina los términos semejantes: (2/3)x - (1/2)x - (5/6)y + (3/4)y = (1/6)x + (1/12)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(5/4)x - (3/5)y + (4/3)x + (2/7)y.",
        "respuestaNumerica": ["Expresión reducida:", "(11/12)x - (13/35)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(11/12)x - (13/35)y",
            "(-13/35)y + (11/12)x",
            "-(13/35)y + (11/12)x",
            "x/12 - 13y/35",
            "-13y/35 + x/12"
        ],
        "pasos": [
            "Combina los términos semejantes: -(5/4)x + (4/3)x - (3/5)y + (2/7)y = (11/12)x - (13/35)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (7/5)x + (3/4)y - (2/3)x + (5/6)y.",
        "respuestaNumerica": ["Expresión reducida:", "(11/15)x + (11/12)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(11/15)x + (11/12)y",
            "(11/12)y + (11/15)x",
            "x/15 + 11y/12",
            "11y/12 + x/15"
        ],
        "pasos": [
            "Combina los términos semejantes: (7/5)x - (2/3)x + (3/4)y + (5/6)y = (11/15)x + (11/12)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(4/3)x - (2/5)y + (3/2)x - (7/6)y.",
        "respuestaNumerica": ["Expresión reducida:", "(7/6)x - (19/30)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(7/6)x - (19/30)y",
            "(-19/30)y + (7/6)x",
            "-(19/30)y + (7/6)x",
            "x/6 - 19y/30",
            "-19y/30 + x/6"
        ],
        "pasos": [
            "Combina los términos semejantes: -(4/3)x + (3/2)x - (2/5)y - (7/6)y = (7/6)x - (19/30)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (3/5)x + (4/7)y - (2/3)x + (5/6)y.",
        "respuestaNumerica": ["Expresión reducida:", "(1/15)x + (67/42)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(1/15)x + (67/42)y",
            "(67/42)y + (1/15)x",
            "x/15 + 67y/42",
            "67y/42 + x/15"
        ],
        "pasos": [
            "Combina los términos semejantes: (3/5)x - (2/3)x + (4/7)y + (5/6)y = (1/15)x + (67/42)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(7/4)x + (5/6)y + (3/2)x - (2/3)y.",
        "respuestaNumerica": ["Expresión reducida:", "(1/12)x + (11/6)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(1/12)x + (11/6)y",
            "(11/6)y + (1/12)x",
            "x/12 + 11y/6",
            "11y/6 + x/12"
        ],
        "pasos": [
            "Combina los términos semejantes: -(7/4)x + (3/2)x + (5/6)y - (2/3)y = (1/12)x + (11/6)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (2/3)x - (5/4)y + (7/6)x - (3/5)y - (4/7)x + (5/8)y.",
        "respuestaNumerica": ["Expresión reducida:", "(25/42)x + (41/40)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(25/42)x + (41/40)y",
            "(41/40)y + (25/42)x",
            "x/42 + 41y/40",
            "41y/40 + x/42"
        ],
        "pasos": [
            "Combina los términos semejantes: (2/3)x + (7/6)x - (4/7)x - (5/4)y - (3/5)y + (5/8)y = (25/42)x + (41/40)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(3/5)x - (2/3)y - (4/7)x + (7/8)y + (1/2)x - (3/4)y.",
        "respuestaNumerica": ["Expresión reducida:", "(-19/35)x + (17/24)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(-19/35)x + (17/24)y",
            "(17/24)y - (19/35)x",
            "-(19/35)x + (17/24)y",
            "-19x/35 + 17y/24",
            "17y/24 - 19x/35"
        ],
        "pasos": [
            "Combina los términos semejantes: -(3/5)x - (4/7)x + (1/2)x - (2/3)y + (7/8)y - (3/4)y = (-19/35)x + (17/24)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (3/4)x + (5/6)y - (2/3)x - (1/2)y + (5/7)x - (3/5)y.",
        "respuestaNumerica": ["Expresión reducida:", "(29/28)x - (23/30)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(29/28)x - (23/30)y",
            "(-23/30)y + (29/28)x",
            "-(23/30)y + (29/28)x",
            "29x/28 - 23y/30",
            "23y/30 + 29x/28"
        ],
        "pasos": [
            "Combina los términos semejantes: (3/4)x - (2/3)x + (5/7)x + (5/6)y - (1/2)y - (3/5)y = (29/28)x - (23/30)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(2/3)x + (3/4)y - (5/6)x - (1/2)y + (7/9)x - (4/7)y.",
        "respuestaNumerica": ["Expresión reducida:", "(7/18)x - (29/28)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(7/18)x - (29/28)y",
            "(-29/28)y + (7/18)x",
            "-(29/28)y + (7/18)x",
            "7x/18 - 29y/28",
            "-29y/28 + 7x/18"
        ],
        "pasos": [
            "Combina los términos semejantes: -(2/3)x - (5/6)x + (7/9)x + (3/4)y - (1/2)y - (4/7)y = (7/18)x - (29/28)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (7/8)x + (1/3)y - (2/5)x - (4/7)y - (3/4)x + (5/6)y.",
        "respuestaNumerica": ["Expresión reducida:", "(7/40)x + (13/42)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(7/40)x + (13/42)y",
            "(13/42)y + (7/40)x",
            "x/40 + 13y/42",
            "13y/42 + x/40"
        ],
        "pasos": [
            "Combina los términos semejantes: (7/8)x - (2/5)x - (3/4)x + (1/3)y - (4/7)y + (5/6)y = (7/40)x + (13/42)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(3/4)x - (2/3)y + (4/5)x + (7/8)y - (1/2)x + (3/4)y.",
        "respuestaNumerica": ["Expresión reducida:", "(13/20)x + (5/24)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(13/20)x + (5/24)y",
            "(5/24)y + (13/20)x",
            "x/20 + 5y/24",
            "5y/24 + x/20"
        ],
        "pasos": [
            "Combina los términos semejantes: -(3/4)x + (4/5)x - (1/2)x - (2/3)y + (7/8)y + (3/4)y = (13/20)x + (5/24)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (5/6)x + (2/3)y - (4/5)x + (3/4)y + (1/2)x - (5/8)y.",
        "respuestaNumerica": ["Expresión reducida:", "(3/40)x + (41/24)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(3/40)x + (41/24)y",
            "(41/24)y + (3/40)x",
            "x/40 + 41y/24",
            "41y/24 + x/40"
        ],
        "pasos": [
            "Combina los términos semejantes: (5/6)x - (4/5)x + (1/2)x + (2/3)y + (3/4)y - (5/8)y = (3/40)x + (41/24)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(5/4)x - (3/5)y + (4/3)x + (2/7)y - (2/3)x + (3/4)y.",
        "respuestaNumerica": ["Expresión reducida:", "(1/12)x + (1/2)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(1/12)x + (1/2)y",
            "(1/2)y + (1/12)x",
            "x/12 + y/2",
            "y/2 + x/12"
        ],
        "pasos": [
            "Combina los términos semejantes: -(5/4)x + (4/3)x - (2/3)x - (3/5)y + (2/7)y + (3/4)y = (1/12)x + (1/2)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " (7/5)x + (3/4)y - (2/3)x + (5/6)y + (7/8)x - (5/7)y.",
        "respuestaNumerica": ["Expresión reducida:", "(189/140)x + (69/28)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(189/140)x + (69/28)y",
            "(69/28)y + (189/140)x",
            "x/140 + 69y/28",
            "69y/28 + x/140"
        ],
        "pasos": [
            "Combina los términos semejantes: (7/5)x - (2/3)x + (7/8)x + (3/4)y + (5/6)y - (5/7)y = (189/140)x + (69/28)y."
        ]
    },
    {
        "ecuacion": "Reduce los términos semejantes en la siguiente ecuación:" +"<br>"+ " -(7/4)x + (5/6)y - (3/2)x + (2/3)y + (1/2)x - (3/4)y.",
        "respuestaNumerica": ["Expresión reducida:", "(11/12)x - (29/24)y"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": [
            "(11/12)x - (29/24)y",
            "(-29/24)y + (11/12)x",
            "-(29/24)y + (11/12)x",
            "11x/12 - 29y/24",
            "-29y/24 + 11x/12"
        ],
        "pasos": [
            "Combina los términos semejantes: -(7/4)x - (3/2)x + (1/2)x + (5/6)y + (2/3)y - (3/4)y = (11/12)x - (29/24)y."
        ]
    },
    
   
    
    
    




]
      
const problemasEcuacionesPrimerGrado =[
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2x + 3 = 5.",
        "respuestaNumerica": ["Valor de x:", "1"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["1", "1.0", "1,0"],
        "pasos": [
            "Intercambie los lados para que todos los términos de las variables estén en el lado izquierdo: 2x + 3 = 5.",
            "Resta 3 en ambos lados de la ecuación: 2x = 5 - 3.",
            "Resta 3 de 5 para obtener 2: 2x = 2.",
            "Divide ambos lados por 2: x = 2/2.",
            "Divide 2 entre 2 para obtener 1: x = 1."
        ]
    },
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2x + 5 = 15.",
        "respuestaNumerica": ["Valor de x:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "5.0", "5,0"],
        "pasos": [
            "Resta 5 en ambos lados de la ecuación: 2x = 15 - 5.",
            "Resta 5 de 15 para obtener 10: 2x = 10.",
            "Divide ambos lados por 2: x = \frac{10}{2}.",
            "Divide 10 entre 2 para obtener 5: x = 5."
        ]
    },
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 3(x + 2) = 21.",
        "respuestaNumerica": ["Valor de x:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "5.0", "5,0"],
        "pasos": [
            "Divide ambos lados por 3: x + 2 = \\frac{21}{3}.",
            "Divide 21 entre 3 para obtener 7: x + 2 = 7.",
            "Resta 2 en ambos lados: x = 7 - 2.",
            "Resta 2 de 7 para obtener 5: x = 5."
        ]
    },
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 4x - 7 = 17.",
        "respuestaNumerica": ["Valor de x:", "6"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["6", "6.0", "6,0"],
        "pasos": [
            "Suma 7 a ambos lados de la ecuación: 4x = 24.",
            "Divide ambos lados por 4: x = 6."
        ]
    },
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2(3x - 1) = 20.",
        "respuestaNumerica": ["Valor de x:", "11/3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["11/3", "3.666666667"],
        "pasos": [
            "Divide ambos lados por 2: 3x - 1 = 10.",
            "Agrega 1 a ambos lados: 3x = 11.",
            "Divide ambos lados por 3: x = 11/3."
        ]
    },
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x/2) + 4 = 10.",
        "respuestaNumerica": ["Valor de x:", "12"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["12", "12.0", "12,0"],
        "pasos": [
            "Resta 4 de ambos lados: (x/2) = 6.",
            "Multiplica ambos lados por 2: x = 12."
        ]
    },
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 5 - 2x = 13.",
        "respuestaNumerica": ["Valor de x:", "-4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-4", "-4.0", "-4,0"],
        "pasos": [
            "Resta 5 de ambos lados: -2x = 8.",
            "Divide ambos lados por -2: x = -4."
        ]
    },
    {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (3/2)x - 1 = 5.",
        "respuestaNumerica": ["Valor de x:", "4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "4.0", "4,0"],
        "pasos": [
          "Suma 1 a ambos lados: (3/2)x = 6.",
          "Multiplica ambos lados por 2/3: x = 4."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (2/3)(x + 3) = 8.",
        "respuestaNumerica": ["Valor de x:", "9"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["9", "9.0", "9,0"],
        "pasos": [
          "Multiplica ambos lados por 3/2: x + 3 = 12.",
          "Resta 3 de ambos lados: x = 9."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2x + 5 = 13.",
        "respuestaNumerica": ["Valor de x:", "4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "4.0", "4,0"],
        "pasos": [
          "Resta 5 de ambos lados: 2x = 8.",
          "Divide ambos lados por 2: x = 4."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 3x - 7 = 1.",
        "respuestaNumerica": ["Valor de x:", "2.666"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2.6666666666666665", "2.6667", "2.667"],
        "pasos": [
          "Suma 7 a ambos lados: 3x = 8.",
          "Divide ambos lados por 3: x = 2.6666666666666665."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 4x + 2 = 10.",
        "respuestaNumerica": ["Valor de x:", "2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2", "2.0", "2,0"],
        "pasos": [
          "Resta 2 de ambos lados: 4x = 8.",
          "Divide ambos lados por 4: x = 2."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 5x - 3 = 17.",
        "respuestaNumerica": ["Valor de x:", "4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "4.0", "4,0"],
        "pasos": [
          "Suma 3 a ambos lados: 5x = 20.",
          "Divide ambos lados por 5: x = 4."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 6x + 4 = 22.",
        "respuestaNumerica": ["Valor de x:", "3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["3", "3.0", "3,0"],
        "pasos": [
          "Resta 4 de ambos lados: 6x = 18.",
          "Divide ambos lados por 6: x = 3."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 7x - 5 = 29.",
        "respuestaNumerica": ["Valor de x:", "4.857142857142857"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4.857142857142857", "4.8571", "4.857"],
        "pasos": [
          "Suma 5 a ambos lados: 7x = 34.",
          "Divide ambos lados por 7: x = 4.857142857142857."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 3(x + 2) = 15.",
        "respuestaNumerica": ["Valor de x:", "3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["3", "3.0", "3,0"],
        "pasos": [
          "Distribuye el 3 en el lado izquierdo: 3x + 6 = 15.",
          "Resta 6 de ambos lados: 3x = 9.",
          "Divide ambos lados por 3: x = 3."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2(x - 1) = 8.",
        "respuestaNumerica": ["Valor de x:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "5.0", "5,0"],
        "pasos": [
          "Distribuye el 2 en el lado izquierdo: 2x - 2 = 8.",
          "Suma 2 a ambos lados: 2x = 10.",
          "Divide ambos lados por 2: x = 5."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 5(2x + 3) = 25.",
        "respuestaNumerica": ["Valor de x:", "1"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["1", "1.0", "1,0"],
        "pasos": [
          "Distribuye el 5 en el lado izquierdo: 10x + 15 = 25.",
          "Resta 15 de ambos lados: 10x = 10.",
          "Divide ambos lados por 10: x = 1."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 4(x - 2) + 3 = 15.",
        "respuestaNumerica": ["Valor de x:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "5.0", "5,0"],
        "pasos": [
          "Distribuye el 4 en el lado izquierdo: 4x - 8 + 3 = 15.",
          "Combina las constantes: 4x - 5 = 15.",
          "Suma 5 a ambos lados: 4x = 20.",
          "Divide ambos lados por 4: x = 5."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 3(x + 1) - 2 = 10.",
        "respuestaNumerica": ["Valor de x:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "5.0", "5,0"],
        "pasos": [
          "Distribuye el 3 en el lado izquierdo: 3x + 3 - 2 = 10.",
          "Combina las constantes: 3x + 1 = 10.",
          "Resta 1 de ambos lados: 3x = 9.",
          "Divide ambos lados por 3: x = 3."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2(x - 3) + 5 = 9.",
        "respuestaNumerica": ["Valor de x:", "2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2", "2.0", "2,0"],
        "pasos": [
          "Distribuye el 2 en el lado izquierdo: 2x - 6 + 5 = 9.",
          "Combina las constantes: 2x - 1 = 9.",
          "Suma 1 a ambos lados: 2x = 10.",
          "Divide ambos lados por 2: x = 5."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 5(x + 2) - 3 = 22.",
        "respuestaNumerica": ["Valor de x:", "4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "4.0", "4,0"],
        "pasos": [
          "Distribuye el 5 en el lado izquierdo: 5x + 10 - 3 = 22.",
          "Combina las constantes: 5x + 7 = 22.",
          "Resta 7 de ambos lados: 5x = 15.",
          "Divide ambos lados por 5: x = 3."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 4(x - 1) + 2 = 14.",
        "respuestaNumerica": ["Valor de x:", "4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "4.0", "4,0"],
        "pasos": [
          "Distribuye el 4 en el lado izquierdo: 4x - 4 + 2 = 14.",
          "Combina las constantes: 4x - 2 = 14.",
          "Suma 2 a ambos lados: 4x = 16.",
          "Divide ambos lados por 4: x = 4."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 5x−2 = 2 (2x + 3).",
        "respuestaNumerica": ["Valor de x:", "8"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["8", "8.0", "8,0"],
        "pasos": [
          "Usa la propiedad distributiva para multiplicar 2 por 2x + 3: 5x − 2 = 4x + 6.",
          "Resta 4x en los dos lados: 5x − 2 − 4x = 6.",
          "Combina 5x y −4x para obtener x: x − 2 = 6.",
          "Agrega 2 a ambos lados: x = 6 + 2.",
          "Suma 6 y 2 para obtener 8: x = 8."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2x + 3 = 3x - 2.",
        "respuestaNumerica": ["Valor de x:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "5.0", "5,0"],
        "pasos": [
          "Resta 3x en los dos lados: 2x + 3 - 3x = -2.",
          "Combina 2x y -3x para obtener -x: -x + 3 = -2.",
          "Resta 3 en los dos lados: -x = -2 - 3.",
          "Resta 3 de -2 para obtener -5: -x = -5.",
          "Multiplica los dos lados por -1: x = 5."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 4x−2⋅3−x=5x+1.",
        "respuestaNumerica": ["Valor de x:", "-7/2", "-3.5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-7/2", "-3.5"],
        "pasos": [
          "Multiplica 2 y 3 para obtener 6: 4x - 6 - x = 5x + 1.",
          "Combina 4x y -x para obtener 3x: 3x - 6 = 5x + 1.",
          "Resta 5x en ambos lados: 3x - 6 - 5x = 1.",
          "Combina 3x y -5x para obtener -2x: -2x - 6 = 1.",
          "Agrega 6 a ambos lados: -2x = 1 + 6.",
          "Suma 1 y 6 para obtener 7: -2x = 7.",
          "Divide ambos lados por -2: x = -7/2.",
          "La fracción -7/2 se puede reescribir como -3 1/2."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 5x−2⋅2x−3=7.",
        "respuestaNumerica": ["Valor de x:", "10"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["10"],
        "pasos": [
          "Multiplica 2 y 2 para obtener 4: 5x - 4x - 3 = 7.",
          "Combina 5x y -4x para obtener x: x - 3 = 7.",
          "Agrega 3 a ambos lados: x = 7 + 3.",
          "Suma 7 y 3 para obtener 10: x = 10."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2x−3+4=x+5.",
        "respuestaNumerica": ["Valor de x:", "4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4"],
        "pasos": [
          "Suma -3 y 4 para obtener 1: 2x + 1 = x + 5.",
          "Resta x en los dos lados: 2x + 1 - x = 5.",
          "Combina 2x y -x para obtener x: x + 1 = 5.",
          "Resta 1 en los dos lados: x = 5 - 1.",
          "Resta 1 de 5 para obtener 4: x = 4."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 3x−2=4x+1.",
        "respuestaNumerica": ["Valor de x:", "-3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-3"],
        "pasos": [
          "Resta 4x en los dos lados: 3x − 2 − 4x = 1.",
          "Combina 3x y −4x para obtener −x: −x − 2 = 1.",
          "Agrega 2 a ambos lados: −x = 1 + 2.",
          "Suma 1 y 2 para obtener 3: −x = 3.",
          "Multiplica los dos lados por −1: x = −3."
        ]
      },
      {
        "ecuacion": "5x + 2 = 3x - 1",
        "respuestaNumerica": ["Valor de x:", "-1.5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-3/2", "-1.5"],
        "pasos": [
          "Resta 3x en ambos lados: 5x + 2 - 3x = -1.",
          "Combina 5x y -3x para obtener 2x: 2x + 2 = -1.",
          "Resta 2 en ambos lados: 2x = -1 - 2.",
          "Suma -1 y -2 para obtener -3: 2x = -3.",
          "Divide ambos lados por 2: x = -3 / 2."
        ]
      },
      {
        "ecuacion": "2(x + 3) - 4 = 3(x - 2) + 5",
        "respuestaNumerica": ["Valor de x:", "3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["3"],
        "pasos": [
          "Aplica la distributiva: 2x + 6 - 4 = 3x - 6 + 5.",
          "Combina términos semejantes: 2x + 2 = 3x - 1.",
          "Resta 2x en ambos lados: 2 = x - 1.",
          "Suma 1 en ambos lados: 2 + 1 = x.",
          "Obtenemos: x = 3."
        ]
      },
      {
        "ecuacion": "3(x - 4) + 2 = 4(2x + 1) - 5",
        "respuestaNumerica": ["Valor de x:", "-9/5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9/5, -1.8, -1(4/5)"],
        "pasos": [
          "Aplica la distributiva: 3x - 12 + 2 = 8x + 4 - 5.",
          "Combina términos semejantes: 3x - 10 = 8x - 1.",
          "Resta 3x en ambos lados: -10 = 5x - 1.",
          "Suma 1 en ambos lados: -10 + 1 = 5x.",
          "Obtenemos: -9 = 5x.",
          "Divide ambos lados por 5: x = -9 / 5."
        ]
      },
      {
        "ecuacion": "2(x - 3) - 5 = x + 4",
        "respuestaNumerica": ["Valor de x:", "15"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["15"],
        "pasos": [
          "Aplica la distributiva: 2x - 6 - 5 = x + 4.",
          "Combina términos semejantes: 2x - 11 = x + 4.",
          "Resta x en ambos lados: x - 11 = 4.",
          "Suma 11 en ambos lados: x = 4 + 11.",
          "Obtenemos: x = 15."
        ]
      },
      {
        "ecuacion": "4(2x + 3) + 2 = 3(4x - 1) - 5",
        "respuestaNumerica": ["Valor de x:", "11/2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["11/2, 5.5"],
        "pasos": [
          "Aplica la distributiva: 8x + 12 + 2 = 12x - 3 - 5.",
          "Combina términos semejantes: 8x + 14 = 12x - 8.",
          "Resta 8x en ambos lados: 14 = 4x - 8.",
          "Suma 8 en ambos lados: 14 + 8 = 4x.",
          "Obtenemos: 22 = 4x.",
          "Divide ambos lados por 4: x = 22 / 4.",
          "Simplificamos: x = 11 / 2."
        ]
      },
      {
        "ecuacion": "3(x + 5) - 2 = 2(x - 3) + 7",
        "respuestaNumerica": ["Valor de x:", "-12"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-12"],
        "pasos": [
          "Aplica la distributiva: 3x + 15 - 2 = 2x - 6 + 7.",
          "Combina términos semejantes: 3x + 13 = 2x + 1.",
          "Resta 2x en ambos lados: x + 13 = 1.",
          "Resta 13 en ambos lados: x = 1 - 13.",
          "Obtenemos: x = -12."
        ]
      },
      {
        "ecuacion": "5(x - 1) + 3 = 2(3x + 4) - 1",
        "respuestaNumerica": ["Valor de x:", "-9"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9"],
        "pasos": [
          "Aplica la distributiva: 5x - 5 + 3 = 6x + 8 - 1.",
          "Combina términos semejantes: 5x - 2 = 6x + 7.",
          "Resta 5x en ambos lados: -2 = x + 7.",
          "Resta 7 en ambos lados: -2 - 7 = x.",
          "Obtenemos: x = -9."
        ]
      },
      {
        "ecuacion": "5x + 3 = 2x - 4",
        "respuestaNumerica": ["Valor de x:", "-7/3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-7/3,-2.3,-2.33,-2.333"],
        "pasos": [
          "Resta 2x en ambos lados: 5x + 3 - 2x = -4.",
          "Combina 5x y -2x para obtener 3x: 3x + 3 = -4.",
          "Resta 3 en ambos lados: 3x = -4 - 3.",
          "Suma -4 y -3 para obtener -7: 3x = -7.",
          "Divide ambos lados por 3: x = -7/3."
        ]
      },
      {
        "ecuacion": "2(x - 1) = 3x + 5",
        "respuestaNumerica": ["Valor de x:", "-7"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-7"],
        "pasos": [
          "Distribuye el 2: 2x - 2 = 3x + 5.",
          "Resta 3x en ambos lados: 2x - 3x - 2 = 5.",
          "Combina 2x y -3x para obtener -x: -x - 2 = 5.",
          "Suma 2 en ambos lados: -x = 5 + 2.",
          "Suma 5 y 2 para obtener 7: -x = 7.",
          "Multiplica ambos lados por -1: x = -7."
        ]
      },
      {
        "ecuacion": "4(x + 2) - 3 = 2(3 - x)",
        "respuestaNumerica": ["Valor de x:", "1/6"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["1/6, 1.6, 1.66, 1.666 "],
        "pasos": [
          "Distribuye el 4: 4x + 8 - 3 = 6 - 2x.",
          "Combina términos semejantes: 4x + 5 = 6 - 2x.",
          "Suma 2x en ambos lados: 4x + 5 + 2x = 6.",
          "Combina 4x y 2x para obtener 6x: 6x + 5 = 6.",
          "Resta 5 en ambos lados: 6x = 6 - 5.",
          "Resta 5 de 6 para obtener 1: 6x = 1.",
          "Divide ambos lados por 6: x = 1/6."
        ]
      },
      {
        "ecuacion": "3(x + 1) - 2(x - 3) = 4(2 - x) - 5",
        "respuestaNumerica": ["Valor de x:", "-6/5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-6/5,-1.2"],
        "pasos": [
          "Distribuye el 3: 3x + 3 - 2(x - 3) = 8 - 4x - 5.",
          "Distribuye el -2: 3x + 3 - 2x + 6 = 8 - 4x - 5.",
          "Combina términos semejantes: x + 9 = 3 - 4x.",
          "Suma 4x en ambos lados: x + 4x + 9 = 3.",
          "Combina x y 4x para obtener 5x: 5x + 9 = 3.",
          "Resta 9 en ambos lados: 5x = 3 - 9.",
          "Resta 9 de 3 para obtener -6: 5x = -6.",
          "Divide ambos lados por 5: x = -6/5.",
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2(x+4)/3 - 1/2 = 3(x-1)/4.",
        "respuestaNumerica": ["Valor de x:", "35"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["35"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 12, el mínimo común denominador de 3, 2, 4: 4 × 2(x + 4) - 6 = 3 × 3(x − 1).",
          "Multiplica 4 y 2 para obtener 8: 8(x + 4) − 6 = 3 × 3(x − 1).",
          "Usa la propiedad distributiva para multiplicar 8 por x + 4: 8x + 32 − 6 = 3 × 3(x − 1).",
          "Resta 6 de 32 para obtener 26: 8x + 26 = 3 × 3(x − 1).",
          "Multiplica 3 y 3 para obtener 9: 8x + 26 = 9(x − 1).",
          "Usa la propiedad distributiva para multiplicar 9 por x − 1: 8x + 26 = 9x − 9.",
          "Resta 9x en los dos lados: 8x + 26 − 9x = −9.",
          "Combina 8x y −9x para obtener −x: −x + 26 = −9.",
          "Resta 26 en los dos lados: −x = −9 − 26.",
          "Resta 26 de −9 para obtener −35: −x = −35.",
          "Multiplica los dos lados por −1: x = 35."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 1(x-3)/4 + 1/3 = 1(x+2)/2.",
        "respuestaNumerica": ["Valor de x:", "-17/3 ≈ -5.666666667"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-17/3", "-5.6, -5.66, -5.666"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 12, el mínimo común denominador de 4, 3, 2: 3(x - 3) + 4 = 6(x + 2).",
          "Distribuye 3 en (x - 3) y suma 4: 3x - 9 + 4 = 6(x + 2).",
          "Simplifica dentro del paréntesis: 3x - 5 = 6(x + 2).",
          "Distribuye 6 en (x + 2): 3x - 5 = 6x + 12.",
          "Resta 3x en ambos lados: -5 = 3x + 12.",
          "Resta 12 en ambos lados: -17 = 3x.",
          "Divide ambos lados por 3: x = -17/3 ≈ -5.666666667."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2(x+1)/5 + 3/4 = (x-2)/2.",
        "respuestaNumerica": ["Valor de x:", "43/2 = 21.5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["43/2", "21.5"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 20, el mínimo común denominador de 5, 4, 2: 4 × 2 (x + 1) + 15 = 10 (x − 2).",
          "Multiplica 4 y 2 para obtener 8: 8 (x + 1) + 15 = 10 (x − 2).",
          "Usa la propiedad distributiva para multiplicar 8 por x + 1: 8x + 8 + 15 = 10 (x − 2).",
          "Suma 8 y 15 para obtener 23: 8x + 23 = 10 (x − 2).",
          "Usa la propiedad distributiva para multiplicar 10 por x − 2: 8x + 23 = 10x − 20.",
          "Resta 10x en ambos lados: 8x + 23 − 10x = −20.",
          "Combina 8x y −10x para obtener −2x: -2x + 23 = −20.",
          "Resta 23 en ambos lados: -2x = −20 − 23.",
          "Resta 23 de −20 para obtener −43: -2x = −43.",
          "Divide los dos lados por −2: x = -43 / -2.",
          "La fracción -43 / -2 se puede simplificar a 43/2 quitando el signo negativo del numerador y el denominador."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 3(x-1)/2 - 1/3 = 2(x+2)/5.",
        "respuestaNumerica": ["Valor de x:", "79/33 ≈ 2.393939394"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["79/33", "2.39", "2.4", "2.393"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 30, el mínimo común denominador de 2, 3, 5: 15 × 3 (x − 1) − 10 = 6 × 2 (x + 2).",
          "Multiplica 15 y 3 para obtener 45: 45 (x − 1) − 10 = 6 × 2 (x + 2).",
          "Usa la propiedad distributiva para multiplicar 45 por x − 1: 45x − 45 − 10 = 6 × 2 (x + 2).",
          "Resta 10 de −45 para obtener −55: 45x − 55 = 6 × 2 (x + 2).",
          "Multiplica 6 y 2 para obtener 12: 45x − 55 = 12 (x + 2).",
          "Usa la propiedad distributiva para multiplicar 12 por x + 2: 45x − 55 = 12x + 24.",
          "Resta 12x en ambos lados: 45x − 55 − 12x = 24.",
          "Combina 45x y −12x para obtener 33x: 33x − 55 = 24.",
          "Agrega 55 a ambos lados: 33x = 24 + 55.",
          "Suma 24 y 55 para obtener 79: 33x = 79.",
          "Divide ambos lados por 33: x = 79 / 33.",
          "La fracción 79 / 33 se puede simplificar a 2.393939394 aproximadamente."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2(x+2)/3 - 1/4 = (x-3)/5.",
        "respuestaNumerica": ["Valor de x:", "-101/28 ≈ -3.607142857"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-101/28", "-3.6"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 4, 5: 20 × 2 (x + 2) − 15 = 12 (x − 3).",
          "Multiplica 20 y 2 para obtener 40: 40 (x + 2) − 15 = 12 (x − 3).",
          "Usa la propiedad distributiva para multiplicar 40 por x + 2: 40x + 80 − 15 = 12 (x − 3).",
          "Resta 15 de 80 para obtener 65: 40x + 65 = 12 (x − 3).",
          "Usa la propiedad distributiva para multiplicar 12 por x − 3: 40x + 65 = 12x − 36.",
          "Resta 12x en ambos lados: 40x + 65 − 12x = −36.",
          "Combina 40x y −12x para obtener 28x: 28x + 65 = −36.",
          "Resta 65 en ambos lados: 28x = −36 − 65.",
          "Resta 65 de −36 para obtener −101: 28x = −101.",
          "Divide ambos lados por 28: x = -101 / 28.",
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x-2)/3 - 2/5 = (x+1)/4.",
        "respuestaNumerica": ["Valor de x:", "79/5 ≈ 15.8"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["79/5", "15.8"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 5, 4: 20(x - 2) - 24 = 15(x + 1).",
          "Usa la propiedad distributiva para multiplicar 20 por x - 2: 20x - 40 - 24 = 15(x + 1).",
          "Resta 24 de -40 para obtener -64: 20x - 64 = 15(x + 1).",
          "Usa la propiedad distributiva para multiplicar 15 por x + 1: 20x - 64 = 15x + 15.",
          "Resta 15x en ambos lados: 20x - 64 - 15x = 15.",
          "Combina 20x y -15x para obtener 5x: 5x - 64 = 15.",
          "Agrega 64 a ambos lados: 5x = 15 + 64.",
          "Suma 15 y 64 para obtener 79: 5x = 79.",
          "Divide ambos lados por 5: x = 79/5."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " 2(x+3)/3 + 1/4 = 3(x-2)/5.",
        "respuestaNumerica": ["Valor de x:", "-207/4 ≈ -51.75"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-207/4", "-51.75"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 4, 5: 20(2x + 3) + 15 = 12(3x - 2).",
          "Multiplica 20 y 2 para obtener 40: 40(x + 3) + 15 = 12(3x - 2).",
          "Usa la propiedad distributiva para multiplicar 40 por x + 3: 40x + 120 + 15 = 12(3x - 2).",
          "Suma 120 y 15 para obtener 135: 40x + 135 = 12(3x - 2).",
          "Multiplica 12 y 3 para obtener 36: 40x + 135 = 36(x - 2).",
          "Usa la propiedad distributiva para multiplicar 36 por x - 2: 40x + 135 = 36x - 72.",
          "Resta 36x en ambos lados: 40x + 135 - 36x = -72.",
          "Combina 40x y -36x para obtener 4x: 4x + 135 = -72.",
          "Resta 135 en ambos lados: 4x = -72 - 135.",
          "Resta 135 de -72 para obtener -207: 4x = -207.",
          "Divide ambos lados por 4: x = -207/4."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x-2)/4 - 1/5 = (x+1)/3.",
        "respuestaNumerica": ["Valor de x:", "-62/5 ≈ -12.4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-62/5", "-12.4"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 4, 5, 3: 15(x - 2) - 12 = 20(x + 1).",
          "Usa la propiedad distributiva para multiplicar 15 por x - 2: 15x - 30 - 12 = 20(x + 1).",
          "Resta 12 de -30 para obtener -42: 15x - 42 = 20(x + 1).",
          "Usa la propiedad distributiva para multiplicar 20 por x + 1: 15x - 42 = 20x + 20.",
          "Resta 20x en ambos lados: 15x - 42 - 20x = 20.",
          "Combina 15x y -20x para obtener -5x: -5x - 42 = 20.",
          "Agrega 42 a ambos lados: -5x = 20 + 42.",
          "Suma 20 y 42 para obtener 62: -5x = 62.",
          "Divide ambos lados por -5: x = 62/-5."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x+3)/2 - 3/4 = (x-2)/5.",
        "respuestaNumerica": ["Valor de x:", "-23/6 ≈ -3.833333333"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-23/6", "-3 5/6", "-3.83", "-3.8333"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 20, el mínimo común denominador de 2, 4, 5: 10(x + 3) - 15 = 4(x - 2).",
          "Usa la propiedad distributiva para multiplicar 10 por x + 3: 10x + 30 - 15 = 4(x - 2).",
          "Resta 15 de 30 para obtener 15: 10x + 15 = 4(x - 2).",
          "Usa la propiedad distributiva para multiplicar 4 por x - 2: 10x + 15 = 4x - 8.",
          "Resta 4x en ambos lados: 10x + 15 - 4x = -8.",
          "Combina 10x y -4x para obtener 6x: 6x + 15 = -8.",
          "Resta 15 en ambos lados: 6x = -8 - 15.",
          "Resta 15 de -8 para obtener -23: 6x = -23.",
          "Divide ambos lados por 6: x = -23/6."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (2x+3)/2 + (3x-4)/4 = (x-2)/5 - (4x+1)/6.",
        "respuestaNumerica": ["Valor de x:", "-64/133 ≈ -0.481203008"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-64/133", ,"-0.48", "-0.481", "-0.4812", "-0.48120"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 2, 4, 5, 6: 30(2x + 3) + 15(3x - 4) = 12(x - 2) - 10(4x + 1).",
          "Usa la propiedad distributiva para multiplicar 30 por 2x + 3: 60x + 90 + 15(3x - 4) = 12(x - 2) - 10(4x + 1).",
          "Usa la propiedad distributiva para multiplicar 15 por 3x - 4: 60x + 90 + 45x - 60 = 12(x - 2) - 10(4x + 1).",
          "Combina 60x y 45x para obtener 105x: 105x + 90 - 60 = 12(x - 2) - 10(4x + 1).",
          "Resta 60 de 90 para obtener 30: 105x + 30 = 12(x - 2) - 10(4x + 1).",
          "Usa la propiedad distributiva para multiplicar 12 por x - 2: 105x + 30 = 12x - 24 - 10(4x + 1).",
          "Usa la propiedad distributiva para multiplicar -10 por 4x + 1: 105x + 30 = 12x - 24 - 40x - 10.",
          "Combina 12x y -40x para obtener -28x: 105x + 30 = -28x - 24 - 10.",
          "Agrega 28x a ambos lados: 105x + 30 + 28x = -24 - 10.",
          "Combina 105x y 28x para obtener 133x: 133x + 30 = -24 - 10.",
          "Resta 30 en ambos lados: 133x = -24 - 10.",
          "Resta 10 de -24 para obtener -34: 133x = -34.",
          "Divide ambos lados por 133: x = -64/133."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x+4)/3 - (2x-1)/4 = (x-3)/5 + (3x+2)/6.",
        "respuestaNumerica": ["Valor de x:", "111/52 ≈ 2.134615385"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["111/52", "2.13", "2.134", "2.1346", "2.13461"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 4, 5, 6: 20(x + 4) - 15(2x - 1) = 12(x - 3) + 10(3x + 2).",
          "Usa la propiedad distributiva para multiplicar 20 por x + 4: 20x + 80 - 15(2x - 1) = 12(x - 3) + 10(3x + 2).",
          "Usa la propiedad distributiva para multiplicar -15 por 2x - 1: 20x + 80 - 30x + 15 = 12(x - 3) + 10(3x + 2).",
          "Combina 20x y -30x para obtener -10x: -10x + 80 + 15 = 12(x - 3) + 10(3x + 2).",
          "Suma 80 y 15 para obtener 95: -10x + 95 = 12(x - 3) + 10(3x + 2).",
          "Usa la propiedad distributiva para multiplicar 12 por x - 3: -10x + 95 = 12x - 36 + 10(3x + 2).",
          "Usa la propiedad distributiva para multiplicar 10 por 3x + 2: -10x + 95 = 12x - 36 + 30x + 20.",
          "Combina 12x y 30x para obtener 42x: -10x + 95 = 42x - 36 + 20.",
          "Suma -36 y 20 para obtener -16: -10x + 95 = 42x - 16.",
          "Resta 42x en ambos lados: -10x + 95 - 42x = -16.",
          "Combina -10x y -42x para obtener -52x: -52x + 95 = -16.",
          "Resta 95 en ambos lados: -52x = -16 - 95.",
          "Resta 95 de -16 para obtener -111: -52x = -111.",
          "Divide ambos lados por -52: x = 111/52."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (4x-3)/2 + (x-2)/5 = (x+3)/3 - (2x-1)/6.",
        "respuestaNumerica": ["Valor de x:", "46/33 ≈ 1.393939394"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["46/33", "1.393", "1.3939", "1.39393"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 30, el mínimo común denominador de 2, 5, 3, 6: 15(4x-3) + 6(x-2) = 10(x+3) - 5(2x-1).",
          "Usa la propiedad distributiva para multiplicar 15 por 4x-3: 60x-45 + 6(x-2) = 10(x+3) - 5(2x-1).",
          "Usa la propiedad distributiva para multiplicar 6 por x-2: 60x-45 + 6x-12 = 10(x+3) - 5(2x-1).",
          "Combina 60x y 6x para obtener 66x: 66x-45-12 = 10(x+3) - 5(2x-1).",
          "Resta 12 de -45 para obtener -57: 66x-57 = 10(x+3) - 5(2x-1).",
          "Usa la propiedad distributiva para multiplicar 10 por x+3: 66x-57 = 10x+30 - 5(2x-1).",
          "Usa la propiedad distributiva para multiplicar -5 por 2x-1: 66x-57 = 10x+30 - 10x+5.",
          "Combina 10x y -10x para obtener 0: 66x-57 = 30+5.",
          "Suma 30 y 5 para obtener 35: 66x-57 = 35.",
          "Agrega 57 a ambos lados: 66x = 35+57.",
          "Suma 35 y 57 para obtener 92: 66x = 92.",
          "Divide ambos lados por 66: x = 92/66.",
          "Reduce la fracción 92/66 a su mínima expresión extrayendo y anulando 2: x = 46/33."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x+2)/3 - (3x-1)/4 = (2x-3)/5 + (x+4)/6.",
        "respuestaNumerica": ["Valor de x:", "51/59 ≈ 0.86440678"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["51/59", "0.86", "0.864", "0.8644"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 4, 5, 6: 20(x+2) - 15(3x-1) = 12(2x-3) + 10(x+4).",
          "Usa la propiedad distributiva para multiplicar 20 por x+2: 20x+40 - 15(3x-1) = 12(2x-3) + 10(x+4).",
          "Usa la propiedad distributiva para multiplicar -15 por 3x-1: 20x+40 - 45x+15 = 12(2x-3) + 10(x+4).",
          "Combina 20x y -45x para obtener -25x: -25x+40+15 = 12(2x-3) + 10(x+4).",
          "Suma 40 y 15 para obtener 55: -25x+55 = 12(2x-3) + 10(x+4).",
          "Usa la propiedad distributiva para multiplicar 12 por 2x-3: -25x+55 = 24x-36 + 10(x+4).",
          "Usa la propiedad distributiva para multiplicar 10 por x+4: -25x+55 = 24x-36 + 10x+40.",
          "Combina 24x y 10x para obtener 34x: -25x+55 = 34x-36+40.",
          "Suma -36 y 40 para obtener 4: -25x+55 = 34x+4.",
          "Resta 34x en ambos lados: -25x+55-34x = 4.",
          "Combina -25x y -34x para obtener -59x: -59x+55 = 4.",
          "Resta 55 en ambos lados: -59x = 4-55.",
          "Resta 55 de 4 para obtener -51: -59x = -51.",
          "Divide ambos lados por -59: x = -51/-59.",
          "Simplifica la fracción -51/-59: x = 51/59."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x-3)/2 + (x-1)/4 = (2x+4)/5 - (3x+2)/6.",
        "respuestaNumerica": ["Valor de x:", "133/51 ≈ 2.607843137"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["133/51", "2.607", "2.608", "2.6078"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 2, 4, 5, 6: 30(x-3) + 15(x-1) = 12(2x+4) - 10(3x+2).",
          "Usa la propiedad distributiva para multiplicar 30 por x-3: 30x-90 + 15(x-1) = 12(2x+4) - 10(3x+2).",
          "Usa la propiedad distributiva para multiplicar 15 por x-1: 30x-90 + 15x-15 = 12(2x+4) - 10(3x+2).",
          "Combina 30x y 15x para obtener 45x: 45x-90-15 = 12(2x+4) - 10(3x+2).",
          "Resta 15 de -90 para obtener -105: 45x-105 = 12(2x+4) - 10(3x+2).",
          "Usa la propiedad distributiva para multiplicar 12 por 2x+4: 45x-105 = 24x+48 - 10(3x+2).",
          "Usa la propiedad distributiva para multiplicar -10 por 3x+2: 45x-105 = 24x+48 - 30x-20.",
          "Combina 24x y -30x para obtener -6x: 45x-105 = -6x+48-20.",
          "Resta 20 de 48 para obtener 28: 45x-105 = -6x+28.",
          "Agrega 6x a ambos lados: 45x-105+6x = 28.",
          "Combina 45x y 6x para obtener 51x: 51x-105 = 28.",
          "Agrega 105 a ambos lados: 51x = 28+105.",
          "Suma 28 y 105 para obtener 133: 51x = 133.",
          "Divide ambos lados por 51: x = 133/51."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x-4)/3 - (2x-1)/4 = (x+2)/5 + (3x-3)/6.",
        "respuestaNumerica": ["Valor de x:", "-59/52 ≈ -1.134615385"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-59/52", "-1.135", "-1.135", "-1.1346"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 4, 5, 6: 20(x-4) - 15(2x-1) = 12(x+2) + 10(3x-3).",
          "Usa la propiedad distributiva para multiplicar 20 por x-4: 20x-80 - 15(2x-1) = 12(x+2) + 10(3x-3).",
          "Usa la propiedad distributiva para multiplicar -15 por 2x-1: 20x-80 - 30x+15 = 12(x+2) + 10(3x-3).",
          "Combina 20x y -30x para obtener -10x: -10x-80+15 = 12(x+2) + 10(3x-3).",
          "Suma -80 y 15 para obtener -65: -10x-65 = 12(x+2) + 10(3x-3).",
          "Usa la propiedad distributiva para multiplicar 12 por x+2: -10x-65 = 12x+24 + 10(3x-3).",
          "Usa la propiedad distributiva para multiplicar 10 por 3x-3: -10x-65 = 12x+24 + 30x-30.",
          "Combina 12x y 30x para obtener 42x: -10x-65 = 42x+24-30.",
          "Resta 30 de 24 para obtener -6: -10x-65 = 42x-6.",
          "Resta 42x en ambos lados: -10x-65-42x = -6.",
          "Combina -10x y -42x para obtener -52x: -52x-65 = -6.",
          "Agrega 65 a ambos lados: -52x = -6+65.",
          "Suma -6 y 65 para obtener 59: -52x = 59.",
          "Divide ambos lados por -52: x = 59/-52.",
          "La fracción 59/-52 se puede reescribir como -59/52 extrayendo el signo negativo: x = -59/52."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (3x-2)/2 + (2x-1)/5 = (x+4)/3 - (x-3)/6.",
        "respuestaNumerica": ["Valor de x:", "7/4 ≈ 1.75"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["7/4", "1.75"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 30, el mínimo común denominador de 2, 5, 3, 6: 15(3x-2) + 6(2x-1) = 10(x+4) - 5(x-3).",
          "Usa la propiedad distributiva para multiplicar 15 por 3x-2: 45x-30 + 6(2x-1) = 10(x+4) - 5(x-3).",
          "Usa la propiedad distributiva para multiplicar 6 por 2x-1: 45x-30 + 12x-6 = 10(x+4) - 5(x-3).",
          "Combina 45x y 12x para obtener 57x: 57x-30-6 = 10(x+4) - 5(x-3).",
          "Resta 6 de -30 para obtener -36: 57x-36 = 10(x+4) - 5(x-3).",
          "Usa la propiedad distributiva para multiplicar 10 por x+4: 57x-36 = 10x+40 - 5(x-3).",
          "Usa la propiedad distributiva para multiplicar -5 por x-3: 57x-36 = 10x+40 - 5x+15.",
          "Combina 10x y -5x para obtener 5x: 57x-36 = 5x+40+15.",
          "Suma 40 y 15 para obtener 55: 57x-36 = 5x+55.",
          "Resta 5x en ambos lados: 57x-36-5x = 55.",
          "Combina 57x y -5x para obtener 52x: 52x-36 = 55.",
          "Agrega 36 a ambos lados: 52x = 55+36.",
          "Suma 55 y 36 para obtener 91: 52x = 91.",
          "Divide ambos lados por 52: x = 91/52.",
          "Reduzca la fracción 91/52 a su mínima expresión extrayendo y anulando 13: x = 7/4."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x+1)/3 - (3x-2)/4 = (x+3)/5 + (2x-4)/6.",
        "respuestaNumerica": ["Valor de x:", "18/19 ≈ 0.947368421"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["18/19", "0.947368421"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 4, 5, 6: 20(x+1) - 15(3x-2) = 12(x+3) + 10(2x-4).",
          "Usa la propiedad distributiva para multiplicar 20 por x+1: 20x+20 - 15(3x-2) = 12(x+3) + 10(2x-4).",
          "Usa la propiedad distributiva para multiplicar -15 por 3x-2: 20x+20 - 45x+30 = 12(x+3) + 10(2x-4).",
          "Combina 20x y -45x para obtener -25x: -25x+20+30 = 12(x+3) + 10(2x-4).",
          "Suma 20 y 30 para obtener 50: -25x+50 = 12(x+3) + 10(2x-4).",
          "Usa la propiedad distributiva para multiplicar 12 por x+3: -25x+50 = 12x+36 + 10(2x-4).",
          "Usa la propiedad distributiva para multiplicar 10 por 2x-4: -25x+50 = 12x+36 + 20x-40.",
          "Combina 12x y 20x para obtener 32x: -25x+50 = 32x+36-40.",
          "Resta 40 de 36 para obtener -4: -25x+50 = 32x-4.",
          "Resta 32x en ambos lados: -25x+50-32x = -4.",
          "Combina -25x y -32x para obtener -57x: -57x+50 = -4.",
          "Resta 50 en ambos lados: -57x = -4 - 50.",
          "Resta 50 de -4 para obtener -54: -57x = -54.",
          "Divide ambos lados por -57: x = -54 / -57.",
          "Reduzca la fracción -54 / -57 a su mínima expresión extrayendo y anulando -3: x = 18/19."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x+3)/2 + (2x-1)/4 = (4x+2)/5 - (x-4)/6.",
        "respuestaNumerica": ["Valor de x:", "-1/2 = -0.5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-1/2", "-0.5"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 2, 4, 5, 6: 30(x+3) + 15(2x-1) = 12(4x+2) - 10(x-4).",
          "Usa la propiedad distributiva para multiplicar 30 por x+3: 30x+90 + 15(2x-1) = 12(4x+2) - 10(x-4).",
          "Usa la propiedad distributiva para multiplicar 15 por 2x-1: 30x+90 + 30x-15 = 12(4x+2) - 10(x-4).",
          "Combina 30x y 30x para obtener 60x: 60x+90-15 = 12(4x+2) - 10(x-4).",
          "Resta 15 de 90 para obtener 75: 60x+75 = 12(4x+2) - 10(x-4).",
          "Usa la propiedad distributiva para multiplicar 12 por 4x+2: 60x+75 = 48x+24 - 10(x-4).",
          "Usa la propiedad distributiva para multiplicar -10 por x-4: 60x+75 = 48x+24 - 10x+40.",
          "Combina 48x y -10x para obtener 38x: 60x+75 = 38x+24+40.",
          "Suma 24 y 40 para obtener 64: 60x+75 = 38x+64.",
          "Resta 38x en ambos lados: 60x+75-38x = 64.",
          "Combina 60x y -38x para obtener 22x: 22x+75 = 64.",
          "Resta 75 en ambos lados: 22x = 64-75.",
          "Resta 75 de 64 para obtener -11: 22x = -11.",
          "Divide ambos lados por 22: x = -11 / 22.",
          "Reduzca la fracción -11 / 22 a su mínima expresión extrayendo y anulando 11: x = -1/2."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (2x+1)/3 - (x-2)/4 = (x+3)/5 + (3x-4)/6.",
        "respuestaNumerica": ["Valor de x:", "54/17 ≈ 3.176470588"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["54/17", "3.176470588"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 3, 4, 5, 6: 20(2x+1) - 15(x-2) = 12(x+3) + 10(3x-4).",
          "Usa la propiedad distributiva para multiplicar 20 por 2x+1: 40x+20 - 15(x-2) = 12(x+3) + 10(3x-4).",
          "Usa la propiedad distributiva para multiplicar -15 por x-2: 40x+20 - 15x+30 = 12(x+3) + 10(3x-4).",
          "Combina 40x y -15x para obtener 25x: 25x+20+30 = 12(x+3) + 10(3x-4).",
          "Suma 20 y 30 para obtener 50: 25x+50 = 12(x+3) + 10(3x-4).",
          "Usa la propiedad distributiva para multiplicar 12 por x+3: 25x+50 = 12x+36 + 10(3x-4).",
          "Usa la propiedad distributiva para multiplicar 10 por 3x-4: 25x+50 = 12x+36 + 30x-40.",
          "Combina 12x y 30x para obtener 42x: 25x+50 = 42x+36-40.",
          "Resta 40 de 36 para obtener -4: 25x+50 = 42x-4.",
          "Resta 42x en ambos lados: 25x+50-42x = -4.",
          "Combina 25x y -42x para obtener -17x: -17x+50 = -4.",
          "Resta 50 en ambos lados: -17x = -4-50.",
          "Resta 50 de -4 para obtener -54: -17x = -54.",
          "Divide ambos lados por -17: x = -54 / -17.",
          "La fracción -54 / -17 se puede simplificar a 54/17 quitando el signo negativo del numerador y el denominador."
        ]
      },
      {
        "ecuacion": "Encuentra el valor de x en la ecuación:" +"<br>"+ " (x-3)/2 + (x+4)/4 = (2x-1)/5 - (x+2)/6.",
        "respuestaNumerica": ["Valor de x:", "-2/31 ≈ -0.064516129"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-2/31", "-0.064516129"],
        "pasos": [
          "Multiplica ambos lados de la ecuación por 60, el mínimo común denominador de 2, 4, 5, 6: 30(x-3) + 15(x+4) = 12(2x-1) - 10(x+2).",
          "Usa la propiedad distributiva para multiplicar 30 por x-3: 30x-90 + 15(x+4) = 12(2x-1) - 10(x+2).",
          "Usa la propiedad distributiva para multiplicar 15 por x+4: 30x-90 + 15x+60 = 12(2x-1) - 10(x+2).",
          "Combina 30x y 15x para obtener 45x: 45x-90+60 = 12(2x-1) - 10(x+2).",
          "Suma -90 y 60 para obtener -30: 45x-30 = 12(2x-1) - 10(x+2).",
          "Usa la propiedad distributiva para multiplicar 12 por 2x-1: 45x-30 = 24x-12 - 10(x+2).",
          "Usa la propiedad distributiva para multiplicar -10 por x+2: 45x-30 = 24x-12 - 10x-20.",
          "Combina 24x y -10x para obtener 14x: 45x-30 = 14x-12-20.",
          "Resta 20 de -12 para obtener -32: 45x-30 = 14x-32.",
          "Resta 14x en ambos lados: 45x-30-14x = -32.",
          "Combina 45x y -14x para obtener 31x: 31x-30 = -32.",
          "Agrega 30 a ambos lados: 31x = -32+30.",
          "Suma -32 y 30 para obtener -2: 31x = -2.",
          "Divide ambos lados por 31: x = -2 / 31.",
          "La fracción -2 / 31 se puede reescribir como -2 31 extrayendo el signo negativo."
        ]
      }
      

      

      

      

      

      

      
      
      

      
      

      
      

      

      



      
      

      
      

      











      
      

      
      
      
      
    
















      
      

      
      
      

      
      

      
      

    
    

    

    

    



    

]

const frasesCelebres = [
    'No he tenido nunca más que un maestro: el pasado; una sola formación : el estudio del pasado.' + leCobusier, 'He sacado del pasado la lección de historia, la razón de ser de las cosas. Todo acontecimiento y todo objeto están “en relación a”.' + leCobusier, 'La historia se halla inscrita en los trazados y en las arquitecturas de las ciudades. Mis ideas revolucionarias están en la historia, en toda época y en todos sus países.' + leCobusier, 'La arquitectura es un acto de voluntad consciente. Hacer arquitectura es poner orden.' + leCobusier, 'La arquitectura es el resultado del estado de espíritu de una época.' + leCobusier, 'La arquitectura está más allá de los hechos utilitarios. La arquitectura es un hecho plástico.' + leCobusier, 'La arquitectura es arte en su sentido más elevado, es orden matemático, es teoría pura, armonía completa gracias a la exacta proporción de todas las relaciones: ésta es la “función” de la arquitectura.' + leCobusier, 'La arquitectura preside los destinos de la ciudad. Ordena la estructura de la vivienda, esa célula esencial del trazado urbano, cuya salubridad, alegría y armonía están sometidas a sus decisiones.' + leCobusier, 'Organizar es hacer geometría; hacer geometría en la naturaleza o en el magma surgido “naturalmente” de las agrupaciones de hombres en aglomeraciones urbanas, equivale a hacer cirugía.' + leCobusier, 'El arte, producto de la ecuación “razón-pasión”, es, para mí, el lugar de la felicidad humana.' + leCobusier, 'Lo maravilloso está en la exactitud. Lo duradero está en la perfección. La vida está hecha con un cálculo exacto.' + leCobusier, 'El sueño sólo se apoya sobre realidades esenciales. La poesía sólo procede mediante hechos exactos.' + leCobusier, 'La poesía es un acto humano: las relaciones concertadas entre imágenes perceptibles.' + leCobusier, 'El lirismo sólo tiene alas sobre la verdad. Sólo lo genuino nos conmueve. La arquitectura se propone emoción.' + leCobusier, 'La cosa más importante del mundo son los espacios vacíos.' + leCobusier, 'Charles Édouard Jeanneret, mejor conocido como Le Corbusier, fue una de las mentes más brillantes de la arquitectura moderna, cuyas obras traspasaron la teoría y el arte.', 'Le Corbusier nacío en Suiza y se formó en París, ahí encontró la manera de plasmar la vanguardia y su fascinación por la pintura de forma autodidacta, en estructuras lisas y blancas con volumen.', 'Le Corbusier se distinguió por la planificación urbana de viviendas sociales, al visualizar edificios sin ostentaciones decorativas para potenciar la imagen las ciudades.','Arquitectura es cosa de arte, un fenómeno de emociones, que queda fuera y más allá de las cuestiones constructivas.' + leCobusier, 'El propósito de la construcción es mantener las cosas juntas y el de la arquitectura es deleitarnos' + leCobusier,  'Siempre me interesó lo creativo, sobre todo, lo que se aplica al hombre y a su medio. Con la pintura pude desarrollar todo eso. Es un medio apasionante y peligroso' + leCobusier, 'La arquitectura es el juego sabio, correcto y magnífico de los volúmenes reunidos bajo la luz' + leCobusier, 'Prefiero dibujar a hablar. Dibujar es más rápido, y deja menos espacio para la mentira' + leCobusier, 'Una casa es una máquina para vivir. La casa debe ser el estuche de la vida, la máquina de felicidad' + leCobusier, 'La arquitectura debe de ser la expresión de nuestro tiempo y no un plagio de las culturas pasadas' + leCobusier, 'La geometría solucionará los problemas de la Arquitectura' + leCobusier, 'La arquitectura está reprimida por la costumbre, los estilos son una mentira' + leCobusier, 'La arquitectura es el punto de partida del que quiera llevar a la humanidad hacia un porvenir mejor' + leCobusier, 'Trabajé por lo que más necesitan los hombres hoy: el silencio y la paz' + leCobusier, 'Me impresiona profundamente el diseñador del universo. Estoy convencido de que yo nunca hubiera logrado hacer algo así, ni de lejos. - Richard Buckminster Fuller-','Un proceso de diseño abordado con profundidad puede hacer del promotor, del arquitecto y hasta de un visitante ocasional del edificio seres humanos sensiblemente mejores. -Juhani Pallasmaa-', 'He dicho adiós a la manida idea de que la arquitectura tiene que salvar el mundo. -Peter Zumthor-', 'Nosotros no creamos obras. Creo que, de hecho, somos descubridores.Glenn Murcutt', 'Para mí, cada día es algo nuevo. Me enfrento a cada proyecto con una renovada inseguridad, casi como si fuera el primero, y sudo tinta. Cuando me pongo a ello y empiezo a trabajar, nunca estoy seguro de hacia dónde voy; y si lo supiera, sencillamente no lo haría. -Frank O. Gehry-', 'Cojo el lápiz. El trazo fluye. Aparece un edificio. Ahí está. No hay nada más que decir. -Oscar Niemeyer-', 'Para mí, el lenguaje del dibujo es extremadamente revelador: bastan unos pocos trazos para saber si alguien es un arquitecto de verdad. -Eero Saarinen-', '¿Hay algo más agradable para la mente que el papel inmaculado? ¿Que comparar y estudiar la “variedad” de texturas y colores de tarjetas y papeles? -Frank Lloyd Wright-', 'AMO EL PAPEL. BASTAN UN BUEN MONTÓN DE HOJAS Y UN LÁPIZ PARA HACERME FELIZ. -Cecil Balmond-', 'Prefiero dibujar a hablar. Dibujar es más rápido y deja menos espacio a las mentiras. -Le Corbusier-','He advertido que el ordenador a veces conduce a decisiones y resultados insípidos. Ahora, cualquiera puede proyectar un edificio inestable y en forma de burbuja. -Peter Cook-', 'Siempre digo a mis alumnos: en vuestro trabajo tenéis que poner, en primer lugar, esfuerzo, en segundo, amor y en tercero, sufrimiento. -Glenn Murcutt-', 'Al hacer un proyecto me entra el pánico; eso es bueno, puede ser un método. Primero, el pánico. Segundo, conquistar el pánico con trabajo. Tercero, encontrar formas de resolver tus dudas. Eduardo Souto de Moura', 'Estudié arte y después arquitectura, y nunca sentí la necesidad de definirme claramente como arquitecta profesional o como artista: encontré una especie de terreno intermedio contaminado por ambos campos. -Elizabeth Diller-','Muchos arquitectos no son conscientes de sus propios patrones, como tampoco la mayoría de las personas lo son de los que rigen su vida privada. Nos atrae mucho esa cuestión, pues de repente acerca mucho la arquitectura y la psicología. -Jacques Herzog-', 'Siempre he sentido que lo más importante es encontrar la forma de escapar del esquema mental o de la conciencia estética con los que cargo. -Arata Isozaki-', 'EN UNA ARQUITECTURA PURA, EL MÁS NIMIO DETALLE DEBE TENER UN SENTIDO O SERVIR A ALGÚN PROPÓSITO. -Augustus W. N. Pugin-', 'Recuerda que las cosas más bellas del mundo son las más inútiles, como, por ejemplo, los pavos reales y los lirios. -John Ruskin-', 'No quiero desnudar la arquitectura. Quiero enriquecerla y añadirle capas. Básicamente, como sucede en una catedral gótica, donde el ornamento y la estructura forman una alianza. -Cecil Balmond-', 'Menos es más. -Ludwig Mies van der Rohe-', 'Menos es aburrido. -Robert Venturi-', 'Existe una cualidad genérica en el blanco que nos gusta. -Kazuyo Sejima-', 'Siempre trato de pensar con curvas. -Greg Lynn-', 'La forma siempre sigue a la función. -Louis H. Sullivan-', 'La forma sigue a la forma, no a la función. -Philip Johnson-', 'La forma sigue al beneficio” es el principio estético de nuestros tiempos. -Richard Rogers-', 'Una silla es un objeto muy difícil. Un rascacielos es casi más fácil. Por eso el mobiliario Chippendale es famoso. -Ludwig Mies van der Rohe-', 'EL DESEO DE TOCAR EL CIELO ESTÁ PROFUNDAMENTE ARRAIGADO EN LA PSIQUE HUMANA. -Cesar Pelli -', 'Proyecto cualquier cosa que me pidan, desde una catedral hasta un gallinero. Así es como me gano la vida. -Henry Hobson Richardson-','Nunca rechaces un encargo porque pienses que no está a tu altura. -Julia Morgan-', 'El proyecto ideal no existe. Existe la posibilidad de aproximarse a él en cada ocasión. -Paulo Mendes da Rocha-', 'Cuando le preguntas a un arquitecto cuál es su mejor edificio, suele contestar: el próximo. -Emilio Ambasz-', 'Cuidado con el exceso de confianza; sobre todo en cuestiones de estructura. -Cass Gilbert-', 'TAL VEZ NO SEA EL MÁS INTERESANTE DE LOS ARQUITECTOS, PERO SIGO ESTANDO AHÍ Y HE SABIDO MANTENER CIERTA INTEGRIDAD. -David Chipperfield-', 'Estoy absolutamente en contra de lo heroico. Nosotros hacemos cosas pequeñas. Estamos absolutamente a favor de lo patético. -Michael Meredith-', 'Básicamente, la idea es que, con todo el mundo tratando de ser revolucionario, serás más revolucionario si tratas de ser ordinario. -Denise Scott Brown-', 'La mejor de las formas ya está lista y nadie debería tener miedo de utilizarla, incluso si su idea básica procede de algún otro. Basta de genios y de originalidad. -Adolf Loos-','Si no te ves capaz de hacer del mundo un lugar mejor con tu trabajo, al menos asegúrate de no empeorarlo. -Herman Hertzberger-', 'Nunca reutilizo ideas. Una vez he usado una, se acabó. -Arthur Erickson-', 'Tener 65 ideas para solucionar un problema no es una muestra de creatividad. Es un desperdicio de energía. -Jan Kaplický-', 'Algo tan común como la pintura para una casa puede resultar fascinante cuando se pule hasta lograr un acabado espejado. -Tod Williams-', 'El juego de luces y sombras, de sólidos y huecos, puede apreciarse mejor contra una superficie blanca. -Richard Meier-', 'LA LUZ NO ES ALGO VAGO Y DIFUSO QUE PUEDA DARSE POR SENTADO POR EL MERO HECHO DE QUE ESTÁ SIEMPRE AHÍ. EL SOL NO SALE EN VANO CADA DÍA. -Alberto Campo Baeza-', 'Cada material tiene sus propias sombras. La sombra de la piedra no es la misma que la de una frágil hoja de otoño. La sombra penetra en el material e irradia su mensaje. -Sverre Fehn-', 'El Sol no supo de su grandeza hasta que incidió sobre la cara de un edificio. -Louis I. Kahn-', 'Siempre busco más luz y más espacio. -Santiago Calatrava-', 'LA ARQUITECTURA ESTÁ LIGADA AL EMPLAZAMIENTO Y, EN MI OPINIÓN, EL LUGAR ES COMO UN VÍNCULO METAFÍSICO Y POÉTICO CON AQUELLO QUE UN EDIFICO PUEDE LLEGAR A SER. -Steven Holl-', 'El diseño de edificios en entornos naturales, sean urbanos o rurales, debe responder al terreno sobre el que se levantan y al cielo contra el que se proyectan. -James Polshek-', '¿De dónde sale la idea de que nuestras calles tienen que parecer creadas por el mismo cliente o el mismo arquitecto? La diversidad, y no su contrario, es lo que nos atrae. -Günter Behnisch-', 'La incoherencia en sí genera vitalidad. -Kenzo Tange-', 'PUEDES CERRAR UN LIBRO MALO, PUEDES EVITAR ESCUCHAR MÚSICA MALA, PERO NO PUEDES LIBRARTE DE LA TORRE HORROROSA QUE TIENES FRENTE A TU CASA. -Renzo Piano-', 'Siempre me sorprende el poco énfasis que ponen las escuelas de arquitectura y, de hecho, muchos arquitectos en el proceso de integración de un edificio. -Norman Foster-', 'No puedes limitarte a poner algo nuevo en un lugar. Tienes que absorber lo que ves a tu alrededor, lo que existe ya en el terreno, y después usar ese conocimiento, junto con el pensamiento contemporáneo, para interpretar lo que ves. -Tadao Ando-', 'UN ARQUITECTO QUE PROYECTA REALMENTE PARA UN SER HUMANO TIENE QUE SABER BASTANTE MÁS QUE LOS CINCO CÁNONES DE VITRUVIO. -Richard Neutra-', 'Creo que los edificios deben imitar los sistemas ecológicos. -Ken Yeang-', 'UTILIZO MATERIALES BARATOS. -Herman Hertzberger-', 'Creo que para construir un edificio sólido no hace falta usar un material resistente. La solidez de un edificio no tiene nada que ver con la resistencia del material. -Shigeru Ban-', 'Creo que para construir un edificio sólido no hace falta usar un material resistente. La solidez de un edificio no tiene nada que ver con la resistencia del material. -Shigeru Ban-', 'Trato de contrarrestar la permanencia de los edificios, su imperturbabilidad, con elementos que confieran una inefable cualidad inmaterial. -Toyo Ito-','Con independencia de su belleza, la fachada y los muros de una casa, una iglesia o un palacio tan solo son un continente, una caja formada por paredes.El contenido es el espacio interior. -Bruno Zevi-', 'El espacio, el espacio... ¡los arquitectos siempre hablan del espacio! Pero crear un espacio no comporta, automáticamente, hacer arquitectura. Con el mismo espacio puedes hacer una obra maestra o provocar un desastre. -Jean Nouvel-', 'Recuerdo que, cuando era niño, solíamos tirar el balón desde la ventana del primer piso. Nunca íbamos a un espacio especialmente pensado para jugar; el espacio de juego se establecía en el momento de jugar. El juego era inspiración, no organización. -Louis I. Kahn-', 'Yo mismo estoy instalado en una oficina sin ventanas y con aire acondicionado, una especie de celda. Mis visitantes son conscientes de este hecho, lo que les induce a ser concisos e ir al grano. -Le Corbusier-', 'No sé por qué la gente contrata arquitectos para luego decirles lo que tienen que hacer. -Frank O. Gehry-', 'CREO QUE LAS RESTRICCIONES SON MUY IMPORTANTES. SON POSITIVAS PORQUE TE PERMITEN TRABAJAR A PARTIR DE ALGO. -Charles Gwathmey-', 'Odiábamos a la Bauhaus.Fue un mal momento para la arquitectura. Simplemente no tenían talento; todo lo que tenían era reglas. Hasta para los cuchillos y los tenedores crearon reglas. Picasso nunca hubiera aceptado reglas. ¿La casa es una máquina? ¡No! Lo mecánico es feo. La regla es lo peor que hay. Solo te hace querer romperla. -Oscar Niemeyer-', 'Si tienes libertad total, entonces tienes un problema. Es mucho mejor tener alguna obligación, cierta disciplina, algunas reglas. Cuando no tienes reglas, acabas por construirte las tuyas propias. -Renzo Piano-', 'La gente que construye su propia casa suele ser muy valiente. Son personas con curiosidad por la vida. Piensan en lo que significa vivir en una casa en lugar de limitarse a comprar un bien y darle uso. -Tom Kundig-', 'ODIO LAS VACACIONES. ¿PARA QUÉ ESTAR EN LA PLAYA SI PUEDES ESTAR CONSTRUYENDO EDIFICIOS? -Philip Johnson-', 'Siempre estamos trabajando con coreógrafos y directores, expertos en robótica y diferentes científicos e investigadores. Nos interesan siempre los vínculos y cruces entre disciplinas.-Elizabeth Diller-', 'Deberíamos aprender desde niños las posibilidades que ofrece nuestro entorno, las leyes físicas y psicológicas que gobiernan el mundo visual, y el goce supremo que produce participar del proceso creativo por el que uno da forma a su propio espacio vital. -Walter Gropius-', 'Prefiero trabajar con la holgura del lápiz que con la precisión de la tinta o del ordenador. -Thom Mayne-', 'ENTRE EL AÑO 1990 Y EL 2000 NO TUVE ENCARGOS, Y NO QUISE TAMPOCO UN PUESTO ACADÉMICO O EN EL GOBIERNO. SOLO QUERÍA TRABAJAR CON ARTESANOS, ADQUIRIR EXPERIENCIA SOBRE EL TERRENO Y NO SER RESPONSABLE DEL DISEÑO, SOLO DE LA CONSTRUCCIÓN. -Wang Shu-', 'Deberíamos trabajar para hacer nuestro mundo comprensible y no para volverlo aún más confuso. Cuando algo parece madera debería ser madera, y el hierro ser hierro. -Günter Behnisch-', 'Siempre considero un edificio como parte de un todo, una pieza que crea una acción colectiva: la ciudad. -Christian de Portzamparc-', 'TODA OBRA DE ARQUITECTURA QUE NO EXPRESE SERENIDAD ES UN ERROR. -Luis Barragán-', 'LA ARQUITECTURA QUE RECORDAMOS ES AQUELLA QUE NUNCA NOS CONSUELA O RECONFORTA. -Peter Eisenman-', 'Soy un arquitecto que construye y, por tanto, soy optimista. Ser optimista es un prerrequisito para todo aquel que quiera construir, porque la construcción tiene que ver con el optimismo, con encarar el futuro con confianza. -Cesar Pelli-', 'LO QUE MOTIVA ES TRABAJAR SOBRE LA DESAPARICIÓN, SOBRE LOS LÍMITES ENTRE LA PRESENCIA Y LA AUSENCIA DE LA ARQUITECTURA. -Dominique Perrault-', 'En realidad, algunas imágenes y dibujos tienen un impacto mayor que muchos edificios que llegan a construirse. -Emilio Ambasz-', 'Me gustan las ruinas porque lo que queda en ellas no es el diseño total, sino la claridad del pensamiento, la nuda estructura, el espíritu de la cosa. -Tadao Ando-', 'Piensa hasta el final:considera el final primero. -Leonardo da Vinci-'           



]

// Función para mostrar un problema aleatorio
function fraseAleatoria() {
    // Seleccionar aleatoriamente un problema
    fraseRandom = frasesCelebres[Math.floor(Math.random() * frasesCelebres.length)];

    //console.log(fraseRandom);

    // Actualizar el contenido del elemento problemaMat
    fraseElegida.innerHTML = `${fraseRandom}`;
    
}

let problemasMatematicos = "";

function actualizarProblemas() {
    const seleccion = document.getElementById("tema").value;
    const selectUnidades = document.getElementById("unidad");
    const textareaEcuaciones = document.getElementById("texto-encriptado");

    if (seleccion === "unidades") {
        problemasMatematicos = problemasUnidades;
        selectUnidades.style.display = "inline";
        advertencia.innerHTML = `${"¡Importante! Solo escribe respuestas numéricas con punto separadas por una coma. Por ejemplo: 6.9, 5.3, -206/3"}`;
    } else if (seleccion === "algebra") {
        problemasMatematicos = problemasAlgebraicos;
        // Ocultar el select de unidades y aumentar el tamaño del textarea
        selectUnidades.style.display = "none";
        textareaEcuaciones.style.width = "90%";
        advertencia.innerHTML = `${"¡Importante!. Pón atención a los parentesis por ejemplo (3/4)x es lo mismo que 3x/4 pero NO ES IGUAL A 3/4x. Tu respuesta puede incluir simbolos como: parentesis (), / para dividir, ^ para elevar entre otros. Las variables deben ir a la izquierda del valor numérico Por ejemplos: 205(x+3)/4, 103x/2, -3x+1"}`;
        
    } else if (seleccion === "ecuaciones") {
        problemasMatematicos = problemasEcuacionesPrimerGrado;
        // Ocultar el select de unidades y aumentar el tamaño del textarea
        selectUnidades.style.display = "none";
        textareaEcuaciones.style.width = "50%";
        advertencia.innerHTML = `${"¡Importante! Solo escribe respuestas numéricas con punto separadas por una coma. Por ejemplo: 6.9, 5.3"}`;
    console.log("Problemas matemáticos seleccionados:", problemasMatematicos);
    }
    console.log(problemasMatematicos.length);
}

function revisarResultado() {
    const seleccion = document.getElementById("tema").value;

    if (seleccion === "unidades") {
        revisarResultadoUnidades();
    } else if (seleccion === "algebra") {
        revisarResultadoAlgebra(); 
    } else if (seleccion === "ecuaciones") {
        revisarResultadoAlgebra(); 
    }
}

// Función para mostrar un problema aleatorio
function mostrarProblemaAleatorio() {
    // Seleccionar aleatoriamente un problema
    problemaAleatorio = problemasMatematicos[Math.floor(Math.random() * problemasMatematicos.length)];

    console.log(problemaAleatorio);

    // Actualizar el contenido del elemento problemaMat
    problemaMat.innerHTML = `${problemaAleatorio.ecuacion}`;
    // Mostrar un botón para mostrar las respuestas y los pasos
    
    document.querySelector(".btnCopiar").classList.add("ocultar");
    document.querySelector(".incorrecta").classList.add("ocultar");
    document.querySelector(".btnRepaso").classList.add("ocultar");
    document.querySelector(".repaso").classList.add("ocultar");

    // Asignar los valores a las variables globales
    respuestaOficial.innerHTML = `${problemaAleatorio.respuestaNumerica.join("<br>")}`;
    pasoApaso.innerHTML = `${problemaAleatorio.pasos.join("<br><br>")}`;
}

function revisarResultadoAlgebra() {
    let resultadoUsuario = respuesta.value.trim();
    // Si contiene letras, verificar si la respuesta es correcta
    if (esRespuestaCorrectaConLetras(resultadoUsuario)) {
        mostrarResultadoCorrecto();
    } else {
        mostrarResultadoIncorrecto();
    }
    return;
}


// Revisa resultados de conversion de unidades
function revisarResultadoUnidades() {
    // Obtener el resultado ingresado por el usuario desde el textarea
    let resultadoUsuario = respuesta.value.trim();
    let unidadUsuario = document.getElementById("unidad").value.trim();

    // Si no se ingresa ninguna respuesta, mostrar un mensaje de error
    if (!resultadoUsuario) {
        alert("Debes ingresar una respuesta.");
        return;
    }

    try {
        // Limpiar y aproximar las respuestas del usuario con margen de error
        let respuestasUsuarioAproximadas = limpiarYAproximarRespuestasConMargen(resultadoUsuario.split(','));

        // Limpiar y aproximar las respuestas correctas con margen de error
        let respuestasCorrectasAproximadas = limpiarYAproximarRespuestasConMargen(problemaAleatorio.respuestaNumerica);

        // Obtener la unidad de la respuesta correcta
        let unidadRespuestaCorrecta = problemaAleatorio.unidadRespuesta.join("");


        console.log("Unidad de respuesta correcta",unidadRespuestaCorrecta);
        console.log(unidadUsuario);

        if (unidadUsuario !== unidadRespuestaCorrecta) {
            console.log("Las unidades no coinciden."); // Imprimir solo si las unidades no coinciden
            mostrarResultadoIncorrecto();
            return;
        }

        // Ordenar los elementos de los arreglos
        respuestasUsuarioAproximadas.sort((a, b) => a.valor.localeCompare(b.valor));
        respuestasCorrectasAproximadas.sort((a, b) => a.valor.localeCompare(b.valor));

        // Comparar las respuestas del usuario con las correctas
        let sonRespuestasCorrectas = respuestasUsuarioAproximadas.every((respuestaUsuario, index) => {
            const respuestaCorrecta = respuestasCorrectasAproximadas[index];

            // Verificar si el valor de la respuesta del usuario está dentro del rango de margen de error
            return (
                respuestaUsuario.valor >= respuestaCorrecta.minimo &&
                respuestaUsuario.valor <= respuestaCorrecta.maximo
            );
        });

        // Mostrar el resultado según la comparación
        if (sonRespuestasCorrectas) {
            mostrarResultadoCorrecto();
        } else {
            mostrarResultadoIncorrecto();
        }

    } catch (error) {
        mostrarError(error.message);
    }
}

function esRespuestaCorrectaConLetras(resultadoUsuario) {
    if (!resultadoUsuario) {
        alert("Debes ingresar una respuesta.");
        return;
    } else {
   
    // Respuestas correctas del problema
    let respuestasCorrectas = problemaAleatorio.combinacionesRespuesta.map(respuesta => respuesta.replace(/\s/g, '').toLowerCase());

    console.log("Respuestas Correctas:", respuestasCorrectas);

    // Eliminar espacios y convertir a minúsculas la respuesta del usuario
    resultadoUsuario = resultadoUsuario.replace(/\s/g, '').toLowerCase();

    console.log("Resultado usuario sin normalizar:", resultadoUsuario);
    
    // Verificar si la respuesta del usuario coincide con alguna de las respuestas correctas
    return respuestasCorrectas.includes(resultadoUsuario);
    }
};

// Función para normalizar la respuesta
function normalizarRespuesta(respuesta) {
    // Dividir la respuesta en términos
    let terminos = respuesta.match(/[-+]?\s*\d*(?:\/\d+)?(?:\^\d+)?\s*[a-z]*|[+*\/-]/gi) || [];

    // Ordenar términos alfabéticamente
    terminos.sort();

    // Normalizar los términos
    let respuestaNormalizada = normalizarTerminos(terminos);

    return respuestaNormalizada;
}

// Función para normalizar los términos
function normalizarTerminos(terminos) {
    // Construir la respuesta normalizada
    let respuestaNormalizada = '';

    // Iterar sobre cada término
    for (let i = 0; i < terminos.length; i++) {
        let termino = terminos[i];

        // Verificar si el término es un operador
        if (termino.match(/[+*\/-]/)) {
            respuestaNormalizada += termino;
            continue;
        }

        // Obtener el signo de este término
        let signo = '+';
        if (termino.charAt(0) === '-') {
            signo = '-';
            termino = termino.slice(1);
        }

        // Agregar el término normalizado
        respuestaNormalizada += signo + termino;
    }

    return respuestaNormalizada.trim();
}

function inicializar(){
    problemaAleatorio = mostrarProblemaAleatorio();
// Función para mostrar un problema aleatorio
}

// Función para mostrar el resultado correcto
function mostrarResultadoCorrecto() {
    // Ocultar el mensaje de bienvenida en ambos casos
    document.querySelector(".bienvenida").classList.add("ocultar");
    document.querySelector(".arquitecto").classList.add("ocultar");
    document.querySelector(".sin-Texto").classList.remove("ocultar");
    document.querySelector(".intentos").classList.add("ocultar");
    document.querySelector(".incorrecta").classList.add("ocultar");
    document.querySelector(".croquis").classList.remove("ocultar");
    document.querySelector(".excelente").classList.remove("ocultar");
    document.querySelector(".btnEncriptar").classList.add("desactivar");
}

let intentos = 3;


function mostrarResultadoIncorrecto() {
    // Ocultar el mensaje de bienvenida en ambos casos
    document.querySelector(".bienvenida").classList.add("ocultar");
  if (intentos > 0) {
    intentos--;

    document.querySelector(".incorrecta").classList.remove("ocultar"); 

    if (intentos === 2) {
      document.querySelector(".incorrecta").textContent = "La respuesta es incorrecta. Intenta nuevamente";
    } else if (intentos === 1) {
      document.querySelector(".incorrecta").textContent = "Creo que es momento de repasar la materia";
      document.querySelector(".arquitecto").classList.add("ocultar");
      document.querySelector(".repaso").classList.remove("ocultar");
  
    } else if (intentos === 0) {
        document.querySelector(".incorrecta").classList.add("ocultar");
       
        document.querySelector(".btnRepaso").classList.remove("ocultar");
    }
    
   
  } else {
    // Desactivar botón y mostrar mensaje final
    document.querySelector(".btnRepaso").classList.add("ocultar");
    document.querySelector(".btnCopiar").classList.remove("ocultar");
    btnCopiar.removeAttribute("disabled"); // Activa el botón
    document.querySelector(".incorrecta").classList.add("ocultar");
    document.querySelector(".btnEncriptar").classList.add("desactivar");
  }
}

// Función para mostrar un mensaje de error
function mostrarError(mensajeError) {
    alert(mensajeError);
}

// Función para mostrar los pasos
function mostrarPasos() {
    document.querySelector(".repaso").classList.add("ocultar");
    document.querySelector(".arquitecto").classList.add("ocultar");
    document.querySelector(".intentos").classList.add("ocultar");
    document.querySelector(".fin-intentos").classList.remove("ocultar"); 
    document.querySelector(".btnCopiar").classList.add("ocultar");
    document.querySelector(".incorrecta").classList.add("ocultar");
    document.querySelector(".respuestaOficial").classList.remove("ocultar");
    document.querySelector(".pasoApaso").classList.remove("ocultar");
    document.querySelector(".btnEncriptar").classList.add("desactivar");

}

function quieroRepasar(){
    const seleccion = document.getElementById("tema").value;
    
    if (seleccion === "unidades") {
        window.open("https://edu.gcfglobal.org/es/unidades-de-medida/conversion-de-unidades-/1/");
    } else if (seleccion === "algebra") {
        window.open("https://edu.gcfglobal.org/es/algebra/expresiones-algebraicas/1/");
        
    } else if (seleccion === "ecuaciones") {
        window.open("https://edu.gcfglobal.org/es/algebra/como-resolver-ecuaciones-algebraicas/1/");
    }
    console.log(seleccion)
    
}

// Reiniciar
function probarOtraVez() {
    intentos = 3; // Asigna el valor 4 a la variable "intentos"
    // Mostrar los pasos en el textarea
    document.querySelector(".btnEncriptar").classList.remove("desactivar");
    document.querySelector(".arquitecto").classList.remove("ocultar");
    document.querySelector(".bienvenida").classList.remove("ocultar");
    document.querySelector(".sin-Texto").classList.add("ocultar");
    document.querySelector(".incorrecta").classList.add("ocultar");
    document.querySelector(".btnCopiar").classList.add("ocultar");
    document.querySelector(".respuestaOficial").classList.add("ocultar");
    document.querySelector(".pasoApaso").classList.add("ocultar");
    document.querySelector(".croquis").classList.add("ocultar");
    document.querySelector(".excelente").classList.add("ocultar");

    //Borrar texto del textarea
    textarea.value = "";
    
}

// Agrega un evento de clic al textarea
textarea.addEventListener('click', function () {
    // Borra el contenido del textarea
    this.value = '';
});

const DECIMALES = 1;
const MARGEN_ERROR_PORCENTUAL = 5;

function limpiarYAproximarRespuestasConMargen(respuestasConLetrasYNumeros) {
    return respuestasConLetrasYNumeros.map(respuesta => {
        const soloNumeros = respuesta.match(/-?\d+(\.\d+)?/g);
        if (!soloNumeros) {
            throw new Error(`Error al convertir la respuesta "${respuesta}" a un número.`);
        }

        const numeroAproximado = parseFloat(soloNumeros[0]);

        if (isNaN(numeroAproximado)) {
            throw new Error(`Error al convertir la respuesta "${respuesta}" a un número.`);
        }

        const margenError = numeroAproximado * (MARGEN_ERROR_PORCENTUAL / 100);

        return {
            valor: numeroAproximado.toFixed(DECIMALES),
            minimo: (numeroAproximado - margenError).toFixed(DECIMALES),
            maximo: (numeroAproximado + margenError).toFixed(DECIMALES),
        };
    });
}





