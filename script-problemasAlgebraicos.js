
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

//Problemas malos revisar o remplazar
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

const problemasSistemasEcuaciones =[
    {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+ "8x + 2y = 46"+"<br>"+"7x + 3y = 47}",
        "respuestaNumerica": ["Valor de x:", "22/5 ≈ 4.4", "Valor de y:", "27/5 ≈ 5.4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["22/5", "4.4", "27/5", "5.4"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelva una de las ecuaciones para una de las variables. Después, sustituya el resultado de esa variable en la otra ecuación.",
          "Elija una de las ecuaciones y solucione el x mediante el aislamiento de x en el lado izquierdo del signo igual: 8x + 2y = 46.",
          "Resta 2y en ambos lados de la ecuación: 8x = -2y + 46.",
          "Divide ambos lados por 8: x = (-2y + 46) / 8.",
          "Multiplica 1/8 por -2y + 46: x = -1/4y + 23/4.",
          "Sustituye -y + 23/4 por x en la otra ecuación, 7x + 3y = 47.",
          "Multiplica 7 por -1/4y + 23/4: -7/4y + 161/4 + 3y = 47.",
          "Suma -7y/4 y 3y: 5y/4 + 161/4 = 47.",
          "Resta 161/4 en ambos lados de la ecuación: 5y/4 = 27/4.",
          "Divide ambos lados de la ecuación por 5/4, que es lo mismo que multiplicar los dos lados por el recíproco de la fracción: y = 27/5.",
          "Sustituye 27/5 por y en x = -1/4y + 23/4.",
          "Multiplica -1/4 por 27/5: x = -27/20 + 23/4.",
          "Suma 23/4 y -27/20: x = 22/5.",
          "El sistema ya funciona correctamente."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+ "3x+4y=20"+"<br>"+ "5x-2y=10",
        "respuestaNumerica": ["Valor de x:", "40/13 ≈ 3.076923077", "Valor de y:", "35/13 ≈ 2.692307692"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["40/13", "3.07", "35/13", "2.69"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelva una de las ecuaciones para una de las variables. Después, sustituya el resultado de esa variable en la otra ecuación.",
          "Elija una de las ecuaciones y solucione el x mediante el aislamiento de x en el lado izquierdo del signo igual: 3x + 4y = 20.",
          "Resta 4y en ambos lados de la ecuación: 3x = -4y + 20.",
          "Divide ambos lados por 3: x = (-4y + 20) / 3.",
          "Multiplica 1/3 por -4y + 20: x = -4/3y + 20/3.",
          "Sustituye -4y+20/3 por x en la otra ecuación, 5x - 2y = 10.",
          "Multiplica 5 por -4/3y + 20/3: -20/3y + 100/3 - 2y = 10.",
          "Suma -20y/3 y -2y: -26y/3 + 100/3 = 10.",
          "Resta 100/3 en ambos lados de la ecuación: -26y/3 = -70/3.",
          "Divide ambos lados de la ecuación por -26/3, que es lo mismo que multiplicar los dos lados por el recíproco de la fracción: y = 35/13.",
          "Sustituye 35/13 por y en x = -4/3y + 20/3. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Multiplica -4/3 por 35/13: x = -140/39 + 20/3.",
          "Suma 20/3 y -140/39: x = 40/13.",
          "El sistema ya funciona correctamente."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+ "2x-3y=15"+"<br>"+ "4x+5y=35",
        "respuestaNumerica": ["Valor de x:", "90/11 ≈ 8.181818182", "Valor de y:", "5/11 ≈ 0.454545455"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["90/11", "8.18", "5/11", "0.45"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelva una de las ecuaciones para una de las variables. Después, sustituya el resultado de esa variable en la otra ecuación.",
          "Elija una de las ecuaciones y solucione el x mediante el aislamiento de x en el lado izquierdo del signo igual: 2x - 3y = 15.",
          "Resta 3y en ambos lados de la ecuación: 2x = 3y + 15.",
          "Divide ambos lados por 2: x = (3y + 15) / 2.",
          "Sustituye 3y+15/2 por x en la otra ecuación, 4x + 5y = 35.",
          "Multiplica 4 por 3y+15/2: 4(3y + 15)/2 + 5y = 35.",
          "Simplifica la expresión: 6y + 30 + 5y = 35.",
          "Suma 6y y 5y: 11y + 30 = 35.",
          "Resta 30 en ambos lados de la ecuación: 11y = 5.",
          "Divide ambos lados de la ecuación por 11: y = 5/11.",
          "Sustituye 5/11 por y en x = (3y + 15) / 2. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye 5/11 en la ecuación: x = (3(5/11) + 15) / 2.",
          "Realiza las operaciones: x = 90/11.",
          "El sistema ya funciona correctamente."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"6x+7y=50"+"<br>"+"3x-2y=15",
        "respuestaNumerica": ["Valor de x:", "205/33 ≈ 6.212121212", "Valor de y:", "20/11 ≈ 1.818181818"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["205/33", "6.212121212", "20/11", "1.818181818"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelva una de las ecuaciones para una de las variables. Después, sustituya el resultado de esa variable en la otra ecuación.",
          "Elija una de las ecuaciones y solucione el x mediante el aislamiento de x en el lado izquierdo del signo igual: 6x + 7y = 50.",
          "Resta 7y en ambos lados de la ecuación: 6x = -7y + 50.",
          "Divide ambos lados por 6: x = (-7y + 50)/6.",
          "Sustituye (-7y + 50)/6 por x en la otra ecuación, 3x - 2y = 15.",
          "Multiplica 3 por (-7y + 50)/6: 3((-7y + 50)/6) - 2y = 15.",
          "Simplifica la expresión: (-21y + 150)/6 - 2y = 15.",
          "Multiplica ambos lados de la ecuación por 6 para deshacerse del denominador: -21y + 150 - 12y = 90.",
          "Suma -21y y -12y: -33y + 150 = 90.",
          "Resta 150 en ambos lados de la ecuación: -33y = -60.",
          "Divide ambos lados de la ecuación por -33: y = 20/11.",
          "Sustituye 20/11 por y en x = (-7y + 50)/6. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye 20/11 en la ecuación: x = (-7(20/11) + 50)/6.",
          "Realiza las operaciones: x = 205/33.",
          "El sistema ya funciona correctamente.",
          "x=205/33, y=20/11"
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"9x-4y=30"+"<br>"+"2x+6y=10",
        "respuestaNumerica": ["Valor de x:", "110/31 ≈ 3.548387097", "Valor de y:", "15/31 ≈ 0.483870968"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["110/31", "3.548387097", "15/31", "0.483870968"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelva una de las ecuaciones para una de las variables. Después, sustituya el resultado de esa variable en la otra ecuación.",
          "Elija una de las ecuaciones y solucione el x mediante el aislamiento de x en el lado izquierdo del signo igual: 9x - 4y = 30.",
          "Resta 4y en ambos lados de la ecuación: 9x = 4y + 30.",
          "Divide ambos lados por 9: x = (4y + 30) / 9.",
          "Sustituye (4y+30)/9 por x en la otra ecuación, 2x + 6y = 10.",
          "Multiplica 2 por (4y+30)/9: 2((4y + 30)/9) + 6y = 10.",
          "Simplifica la expresión: (8y + 60)/9 + 6y = 10.",
          "Multiplica ambos lados de la ecuación por 9 para deshacerse del denominador: 8y + 60 + 54y = 90.",
          "Suma 8y y 54y: 62y + 60 = 90.",
          "Resta 60 en ambos lados de la ecuación: 62y = 30.",
          "Divide ambos lados de la ecuación por 62: y = 15/31.",
          "Sustituye 15/31 por y en x = (4y + 30) / 9. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye 15/31 en la ecuación: x = (4(15/31) + 30) / 9.",
          "Realiza las operaciones: x = 110/31.",
          "El sistema ya funciona correctamente.",
          "x=110/31, y=15/31"  
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"5x+3y=25"+"<br>"+"8x-2y=50",
        "respuestaNumerica": ["Valor de x:", "100/17 ≈ 5.882352941", "Valor de y:", "-25/17 ≈ -1.470588235"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["100/17", "5.882352941", "-25/17", "-1.470588235"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelve una de las ecuaciones para una de las variables. Después, sustituye el resultado de esa variable en la otra ecuación.",
          "Elige una de las ecuaciones y resuelve para x, aislándolo en el lado izquierdo del signo igual: 5x + 3y = 25.",
          "Resta 3y en ambos lados de la ecuación: 5x = -3y + 25.",
          "Divide ambos lados por 5: x = (-3y + 25) / 5.",
          "Sustituye (-3y+25)/5 por x en la otra ecuación, 8x - 2y = 50.",
          "Multiplica 8 por (-3y+25)/5: 8((-3y + 25) / 5) - 2y = 50.",
          "Simplifica la expresión: (-24y + 200)/5 - 2y = 50.",
          "Multiplica ambos lados de la ecuación por 5 para deshacerte del denominador: -24y + 200 - 10y = 250.",
          "Combina términos semejantes: -34y + 200 = 250.",
          "Resta 200 en ambos lados de la ecuación: -34y = 50.",
          "Divide ambos lados de la ecuación por -34: y = -25/17.",
          "Sustituye -25/17 por y en x = (-3y + 25) / 5. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye -25/17 en la ecuación: x = (-3(-25/17) + 25) / 5.",
          "Realiza las operaciones: x = 100/17.",
          "El sistema ya funciona correctamente.",
          "x=100/17, y=-25/17"
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"4x+9y=60"+"<br>"+"6x-5y=30",
        "respuestaNumerica": ["Valor de x:", "285/37 ≈ 7.702702703", "Valor de y:", "120/37 ≈ 3.243243243"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["285/37", "7.702702703", "120/37", "3.243243243"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelve una de las ecuaciones para una de las variables. Después, sustituye el resultado de esa variable en la otra ecuación.",
          "Elige una de las ecuaciones y resuelve para x mediante el aislamiento de x en el lado izquierdo del signo igual.",
          "Resta 9y en ambos lados de la ecuación: 4x = -9y + 60.",
          "Divide ambos lados por 4: x = (-9y + 60) / 4.",
          "Sustituye (-9y+60)/4 por x en la otra ecuación, 6x - 5y = 30.",
          "Multiplica 6 por (-9y+60)/4: 6((-9y + 60) / 4) - 5y = 30.",
          "Simplifica la expresión: (-27y + 90)/2 - 5y = 30.",
          "Multiplica ambos lados de la ecuación por 2 para deshacerte del denominador: -27y + 90 - 10y = 60.",
          "Combina términos semejantes: -37y + 90 = 60.",
          "Resta 90 en ambos lados de la ecuación: -37y = -30.",
          "Divide ambos lados de la ecuación por -37: y = 120/37.",
          "Sustituye 120/37 por y en x = (-9y + 60) / 4. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye 120/37 en la ecuación: x = (-9(120/37) + 60) / 4.",
          "Realiza las operaciones: x = 285/37.",
          "El sistema ya funciona correctamente.",
          "x = 285/37, y=120/37"
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"7x-2y=40"+"<br>"+"3x+8y=25",
        "respuestaNumerica": ["Valor de x:", "185/31 ≈ 5.967741935", "Valor de y:", "55/62 ≈ 0.887096774"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["185/31", "5.967741935", "55/62", "0.887096774"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelve una de las ecuaciones para una de las variables. Después, sustituya el resultado de esa variable en la otra ecuación.",
          "Elige una de las ecuaciones y resuelve para x mediante el aislamiento de x en el lado izquierdo del signo igual.",
          "Suma 2y a ambos lados de la ecuación: 7x = 2y + 40.",
          "Divide ambos lados por 7: x = (2y + 40) / 7.",
          "Sustituye (2y+40)/7 por x en la otra ecuación, 3x + 8y = 25.",
          "Multiplica 3 por (2y+40)/7: 3((2y + 40) / 7) + 8y = 25.",
          "Simplifica la expresión: (6y + 120)/7 + 8y = 25.",
          "Multiplica ambos lados de la ecuación por 7 para deshacerte del denominador: 6y + 120 + 56y = 175.",
          "Combina términos semejantes: 62y + 120 = 175.",
          "Resta 120 en ambos lados de la ecuación: 62y = 55.",
          "Divide ambos lados de la ecuación por 62: y = 55/62.",
          "Sustituye 55/62 por y en x = (2y + 40) / 7. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye 55/62 en la ecuación: x = (2(55/62) + 40) / 7.",
          "Realiza las operaciones: x = 185/31.",
          "El sistema ya funciona correctamente.",
          "x = 185/31, y=55/62"
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"6x-8y=10"+"<br>"+"4x+7y=45",
        "respuestaNumerica": ["Valor de x:", "215/37 ≈ 5.810810811", "Valor de y:", "115/37 ≈ 3.108108108"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["215/37", "5.810810811", "115/37", "3.108108108"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelve una de las ecuaciones para una de las variables. Después, sustituya el resultado de esa variable en la otra ecuación.",
          "Elige una de las ecuaciones y resuelve para x mediante el aislamiento de x en el lado izquierdo del signo igual.",
          "Suma 8y a ambos lados de la ecuación: 6x = 8y + 10.",
          "Divide ambos lados por 6: x = (8y + 10) / 6.",
          "Sustituye (8y+10)/6 por x en la otra ecuación, 4x + 7y = 45.",
          "Multiplica 4 por (8y+10)/6: 4((8y + 10) / 6) + 7y = 45.",
          "Simplifica la expresión: (16y + 20)/3 + 7y = 45.",
          "Multiplica ambos lados de la ecuación por 3 para deshacerte del denominador: 16y + 20 + 21y = 135.",
          "Combina términos semejantes: 37y + 20 = 135.",
          "Resta 20 en ambos lados de la ecuación: 37y = 115.",
          "Divide ambos lados de la ecuación por 37: y = 115/37.",
          "Sustituye 115/37 por y en x = (8y + 10) / 6. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye 115/37 en la ecuación: x = (8(115/37) + 10) / 6.",
          "Realiza las operaciones: x = 215/37.",
          "El sistema ya funciona correctamente.",
          "x = 215/37, y=115/37 "
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"2x+3y=10"+"<br>"+"4x-2y=8",
        "respuestaNumerica": ["Valor de x:", "11/4 ≈ 2.75", "Valor de y:", "3/2 ≈ 1.5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["11/4", "2.75", "3/2", "1.5"],
        "pasos": [
          "Para resolver un par de ecuaciones con sustituciones, primero resuelve una de las ecuaciones para una de las variables. Después, sustituye el resultado de esa variable en la otra ecuación.",
          "Elige una de las ecuaciones y resuelve para x mediante el aislamiento de x en el lado izquierdo del signo igual.",
          "Resta 3y en ambos lados de la ecuación: 2x = -3y + 10.",
          "Divide ambos lados por 2: x = (-3y + 10) / 2.",
          "Sustituye (-3y+10)/2 por x en la otra ecuación, 4x - 2y = 8.",
          "Multiplica 4 por (-3y+10)/2: 4((-3y + 10) / 2) - 2y = 8.",
          "Simplifica la expresión: -6y + 20 - 2y = 8.",
          "Combina términos semejantes: -8y + 20 = 8.",
          "Resta 20 en ambos lados de la ecuación: -8y = -12.",
          "Divide ambos lados de la ecuación por -8: y = 3/2.",
          "Sustituye 3/2 por y en x = (-3/2)y + 5. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Sustituye 3/2 en la ecuación: x = (-3/2)(3/2) + 5.",
          "Realiza las operaciones: x = 11/4.",
          "El sistema ya funciona correctamente.",
          "x = 11/4, y=3/2."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"5x-2y=15"+"<br>"+"3x+4y=25",
        "respuestaNumerica": ["Valor de x:", "55/13 ≈ 4.23", "Valor de y:", "40/13 ≈ 3.08"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["55/13", "4.23", "40/13", "3.08"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables han de coincidir en las dos ecuaciones, de forma que la variable se anule cuando una ecuación se reste de la otra.",
          "Para que 5x y 3x sean iguales, multiplica todos los términos de cada lado de la primera ecuación por 3 y todos los términos de cada lado de la segunda por 5.",
          "Simplifica: 15x - 6y = 45, 15x + 20y = 125.",
          "Resta 15x + 20y = 125 de 15x - 6y = 45.",
          "Suma y resta términos semejantes: -6y - 20y = 45 - 125.",
          "Combina términos: -26y = -80.",
          "Divide ambos lados por -26: y = 40/13.",
          "Sustituye 40/13 por y en 3x + 4y = 25.",
          "Multiplica 4 por 40/13: 3x + 160/13 = 25.",
          "Resta 160/13 en ambos lados: 3x = 165/13.",
          "Divide ambos lados por 3: x = 55/13.",
          "El sistema ya funciona correctamente.",
          "x=55/13, y=40/13"
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"6x+7y=30"+"<br>"+"2x-5y=-5",
        "respuestaNumerica": ["Valor de x:", "115/44 ≈ 2.614", "Valor de y:", "45/22 ≈ 2.045"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["115/44", "2.614", "45/22", "2.045"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones, de forma que la variable se anule cuando una ecuación se reste de la otra.",
          "Para que 6x y 2x sean iguales, multiplica todos los términos de cada lado de la primera ecuación por 2 y todos los términos de cada lado de la segunda por 6.",
          "Simplifica: 12x + 14y = 60, 12x - 30y = -30.",
          "Resta 12x - 30y = -30 de 12x + 14y = 60.",
          "Suma y resta términos semejantes: 14y + 30y = 60 + 30.",
          "Combina términos: 44y = 90.",
          "Divide ambos lados por 44: y = 45/22.",
          "Sustituye 45/22 por y en 2x - 5y = -5.",
          "Multiplica -5 por 45/22: 2x - 225/22 = -5.",
          "Suma 225/22 a ambos lados de la ecuación: 2x = 115/22.",
          "Divide ambos lados por 2: x = 115/44.",
          "El sistema ya funciona correctamente.",
          "x = 115/44, y=45/22"
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"x+y=5"+"<br>"+"3x-2y=10",
        "respuestaNumerica": ["Valor de x:", "4", "Valor de y:", "1"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "1"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones.",
          "Multiplica todos los términos de cada lado de la primera ecuación por 3 y todos los términos de cada lado de la segunda por 1 para que los coeficientes de x sean iguales en ambas ecuaciones.",
          "Esto resulta en: 3x + 3y = 15 y 3x - 2y = 10.",
          "Resta la segunda ecuación de la primera para eliminar x. Obtenemos 5y = 5.",
          "Divide ambos lados por 5 para encontrar el valor de y, que es 1.",
          "Sustituye el valor de y en la segunda ecuación: 3x - 2(1) = 10.",
          "Resuelve para x. Suma 2 a ambos lados y luego divide por 3 para obtener x = 4."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"2x+3y=10"+"<br>"+"4x-2y=8",
        "respuestaNumerica": ["Valor de x:", "11/4", "Valor de y:", "3/2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["11/4", "2.75","1.5", "3/2"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones.",
          "Multiplica todos los términos de cada lado de la primera ecuación por 4 y todos los términos de cada lado de la segunda por 2 para que los coeficientes de x sean iguales en ambas ecuaciones.",
          "Esto resulta en: 8x + 12y = 40 y 8x - 4y = 16.",
          "Resta la segunda ecuación de la primera para eliminar x. Obtenemos 16y = 24.",
          "Divide ambos lados por 16 para encontrar el valor de y, que es 3/2.",
          "Sustituye 3/2 por y en 4x - 2y = 8. Como la ecuación resultante solo contiene una variable, se puede resolver para x directamente.",
          "Resuelve para x. Resta 3 de ambos lados y luego divide por 4 para obtener x = 11/4."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones por el método de eliminación:"+"<br>"+"3x-y=5"+"<br>"+"x+2y=8",
        "respuestaNumerica": ["Valor de x:", "18/7 ≈ 2.57", "Valor de y:", "19/7 ≈ 2.71"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["18/7","2.57","2.71", "19/7"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones.",
          "Multiplica todos los términos de cada lado de la primera ecuación por 2 y todos los términos de cada lado de la segunda por 3 para que los coeficientes de y sean iguales en ambas ecuaciones.",
          "Esto resulta en: 6x - 2y = 10 y 3x + 6y = 24.",
          "Resta la primera ecuación de la segunda para eliminar y. Obtenemos 9x = 14.",
          "Divide ambos lados por 9 para encontrar el valor de x, que es 18/7.",
          "Sustituye 18/7 por x en la primera ecuación para encontrar el valor de y.",
          "Resuelve para y. Resta 3x de ambos lados y luego divide por -1 para obtener y = 19/7."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"4x+y=5"+"<br>"+"2x-3y=-8",
        "respuestaNumerica": ["Valor de x:", "1/2 = 0.5", "Valor de y:", "3"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["1/2","0.5", "3"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones.",
          "Multiplica todos los términos de cada lado de la primera ecuación por 3 y todos los términos de cada lado de la segunda por 1 para que los coeficientes de y sean iguales en ambas ecuaciones.",
          "Esto resulta en: 12x + 3y = 15 y 2x - 3y = -8.",
          "Resta la segunda ecuación de la primera para eliminar y. Obtenemos 10x = 23.",
          "Divide ambos lados por 10 para encontrar el valor de x, que es 1/2.",
          "Sustituye 1/2 por x en la segunda ecuación para encontrar el valor de y.",
          "Resuelve para y. Multiplica -3 por 1/2 y luego suma 2x a ambos lados para obtener y = 3."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones por eliminación:"+"<br>"+"5x-2y=11"+"<br>"+"3x+4y=1",
        "respuestaNumerica": ["Valor de x:", "23/13 ≈ 1.769230769", "Valor de y:", "-14/13 ≈ -1.076923077"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["23/13","1.76","-1.07", "-14/13"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones.",
          "Multiplica todos los términos de cada lado de la primera ecuación por 3 y todos los términos de cada lado de la segunda por 5 para que los coeficientes de x sean iguales en ambas ecuaciones.",
          "Esto resulta en: 15x - 6y = 33 y 15x + 20y = 5.",
          "Resta la segunda ecuación de la primera para eliminar x. Obtenemos -26y = 28.",
          "Divide ambos lados por -26 para encontrar el valor de y, que es -14/13.",
          "Sustituye -14/13 por y en 3x + 4y = 1 para encontrar el valor de x.",
          "Resuelve para x. Multiplica 4 por -14/13 y luego suma 3x a ambos lados para obtener x = 23/13."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones por eliminación:"+"<br>"+"x+2y=10"+"<br>"+"2x-3y=5",
        "respuestaNumerica": ["Valor de x:", "40/7 ≈ 5.714285714", "Valor de y:", "15/7 ≈ 2.142857143"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["40/7","5.71","2.14", "15/7"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones.",
          "Multiplica todos los términos de cada lado de la primera ecuación por 2 y todos los términos de cada lado de la segunda por 1 para que los coeficientes de x sean iguales en ambas ecuaciones.",
          "Esto resulta en: 2x + 4y = 20 y 2x - 3y = 5.",
          "Resta la segunda ecuación de la primera para eliminar x. Obtenemos 7y = 15.",
          "Divide ambos lados por 7 para encontrar el valor de y, que es 15/7.",
          "Sustituye 15/7 por y en x + 2y = 10 para encontrar el valor de x.",
          "Resuelve para x. Resta 2y de ambos lados y luego divide por 1 para obtener x = 40/7."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones por eliminación:"+"<br>"+"3x+y=9"+"<br>"+"2x-4y=-2",
        "respuestaNumerica": ["Valor de x:", "17/7 ≈ 2.428571429", "Valor de y:", "12/7 ≈ 1.714285714"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["17/7","0.14","1.71", "12/7"],
        "pasos": [
          "Para resolver por eliminación, los coeficientes de una de las variables deben coincidir en las dos ecuaciones.",
          "Multiplica todos los términos de cada lado de la primera ecuación por 2 y todos los términos de cada lado de la segunda por 3 para que los coeficientes de x sean iguales en ambas ecuaciones.",
          "Esto resulta en: 6x + 2y = 18 y 6x - 12y = -6.",
          "Resta la segunda ecuación de la primera para eliminar x. Obtenemos 14y = 24.",
          "Divide ambos lados por 14 para encontrar el valor de y, que es 12/7.",
          "Sustituye 12/7 por y en 2x - 4y = -2 para encontrar el valor de x.",
          "Resuelve para x. Suma 4y a ambos lados y luego divide por 2 para obtener x = 17/7."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones por eliminación:"+"<br>"+"2x-y=4"+"<br>"+"x+3y=9",
        "respuestaNumerica": ["Valor de x:", "3", "Valor de y:", "2"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["3", "2"],
        "pasos": [
          "Para resolver por sustitución, despeja una de las variables en una de las ecuaciones.",
          "Despeja y en la primera ecuación: y = 2x - 4.",
          "Sustituye esta expresión de y en la segunda ecuación.",
          "Obtendrás x + 3(2x - 4) = 9.",
          "Resuelve para x: 7x - 12 = 9.",
          "Entonces, x = 3.",
          "Sustituye el valor de x en la primera ecuación para encontrar y: 2(3) - y = 4.",
          "Por lo tanto, y = 2."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones por eliminación:"+"<br>"+"3x-2y=14"+"<br>"+"x-y=3",
        "respuestaNumerica": ["Valor de x:", "8", "Valor de y:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["8", "5"],
        "pasos": [
          "Para resolver por eliminación, asegúrate de que los coeficientes de una de las variables sean iguales en ambas ecuaciones.",
          "Multiplica todos los términos de la segunda ecuación por 3 para igualar los coeficientes de x.",
          "Obtendrás: 3x - 3y = 9.",
          "Resta esta ecuación de la primera: (3x - 2y) - (3x - 3y) = 14 - 9.",
          "Resuelve para y: y = 5.",
          "Sustituye el valor de y en la segunda ecuación: x - 5 = 3.",
          "Entonces, x = 8."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"(3/2)x = 4 - 2x"+"<br>"+"(5/3)x - 2y = 7",
        "respuestaNumerica": ["Valor de x:", "8/7 ≈ 1.142857143", "Valor de y:", "-107/42 ≈ -2.547619048"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["8/7","1.14","-2.54", "-107/42"],
        "pasos": [
          "Para resolver el sistema, primero considera la primera ecuación: 3/2x = 4 - 2x.",
          "Suma 2x a ambos lados para obtener 7/2x = 4.",
          "Multiplica ambos lados por 2/7 para despejar x, resultando en x = 8/7 ≈ 1.142857143.",
          "Ahora, inserta el valor de x en la segunda ecuación: 5/3(8/7) - 2y = 7.",
          "Resuelve para obtener -107/42 como el valor de y.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x = 8/7 y y = -107/42."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"x/2 + 3y = 6"+"<br>"+"2 - y/4 = x",
        "respuestaNumerica": ["Valor de x:", "36/23 ≈ 1.565217391", "Valor de y:", "40/23 ≈ 1.739130435"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["36/23","1.56","1.73", "40/23"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, usa el método de sustitución.",
          "Despeja x en la segunda ecuación: x = 2 - y/4.",
          "Sustituye x en la primera ecuación: (2 - y/4)/2 + 3y = 6.",
          "Resuelve para y.",
          "Después de encontrar y, sustitúyelo de nuevo en la segunda ecuación para encontrar el valor de x.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x=36/23 ≈ 1.565217391 y y=40/23 ≈ 1.739130435."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"(4/3)y + 2 = x"+"<br>"+"5 - (3/2)x = y",
        "respuestaNumerica": ["Valor de x:", "26/9 ≈ 2.888888889", "Valor de y:", "2/3 ≈ 0.666666667"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["26/9","2.88","0.66", "2/3"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, usa el método de sustitución.",
          "Despeja x en la primera ecuación: x = 4/3y + 2.",
          "Sustituye x en la segunda ecuación: 5 - 3/2(4/3y + 2) = y.",
          "Resuelve para y.",
          "Después de encontrar y, sustitúyelo de nuevo en la primera ecuación para encontrar el valor de x.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x=26/9 ≈ 2.888888889 y y=2/3 ≈ 0.666666667."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"3x + y/2 = 10"+"<br>"+"x/4 - 3/2y = 4",
        "respuestaNumerica": ["Valor de x:", "136/37 ≈ 3.675675676", "Valor de y:", "-76/37 ≈ -2.054054054"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["136/37","3.67","-2.05", "-76/37"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, puedes utilizar el método de eliminación.",
          "Multiplica todos los términos de la primera ecuación por 4 y los de la segunda por 2 para eliminar los denominadores.",
          "Obtienes las ecuaciones: 12x + 4y = 40 y 2x - 6y = 16.",
          "Ahora puedes sumar o restar las ecuaciones para eliminar una variable.",
          "Resta la segunda ecuación de la primera: (12x + 4y) - (2x - 6y) = 40 - 16.",
          "Esto te da la ecuación 10x + 10y = 24.",
          "Resuelve esta nueva ecuación para encontrar el valor de una de las variables.",
          "Luego, sustituye este valor en una de las ecuaciones originales para encontrar el valor de la otra variable.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x=136/37 ≈ 3.675675676 y y=-76/37 ≈ -2.054054054."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"2 - y/3 = x"+"<br>"+"(2/3)x + (1/2)y = 3",
        "respuestaNumerica": ["Valor de x:", "0", "Valor de y:", "6"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["0", "6"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, puedes utilizar el método de sustitución o eliminación.",
          "Por la primera ecuación, despeja x: x = 2 - y/3.",
          "Sustituye este valor de x en la segunda ecuación: 2/3(2 - y/3) + 1/2y = 3.",
          "Resuelve esta ecuación para encontrar el valor de y.",
          "Una vez que encuentres el valor de y, sustitúyelo en la primera ecuación para hallar el valor de x.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x = 0 e y = 6."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"4 - y/5 = x"+"<br>"+"(3/2)x + (2/3)y = 7",
        "respuestaNumerica": ["Valor de x:", "38/11 ≈ 3.454545455", "Valor de y:", "30/11 ≈ 2.727272727"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["38/11", "3.454545455", "30/11", "2.727272727"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, puedes utilizar el método de sustitución o eliminación.",
          "Por la primera ecuación, despeja x: x = 4 - y/5.",
          "Sustituye este valor de x en la segunda ecuación: 3/2(4 - y/5) + 2/3y = 7.",
          "Resuelve esta ecuación para encontrar el valor de y.",
          "Una vez que encuentres el valor de y, sustitúyelo en la primera ecuación para hallar el valor de x.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x=38/11 ≈ 3.454545455 e y=30/11 ≈ 2.727272727."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"(1/2)x - (2/3)y = 3"+"<br>"+"(3/4)y + 2x = 9",
        "respuestaNumerica": ["Valor de x:", "198/41 ≈ 4.829268293", "Valor de y:", "-36/41 ≈ -0.87804878"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["198/41","4.829268293", "-36/41","-0.87804878"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, puedes utilizar el método de sustitución o eliminación.",
          "Por la primera ecuación, despeja x: x = 6 - y/3.",
          "Sustituye este valor de x en la segunda ecuación: 3/4y + 2(6 - y/3) = 9.",
          "Resuelve esta ecuación para encontrar el valor de y.",
          "Una vez que encuentres el valor de y, sustitúyelo en la primera ecuación para hallar el valor de x.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x ≈ 4.829268293 e y ≈ -0.87804878."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"(2(x+1))/3 - y = -3"+"<br>"+"3(x+5-y) + 3x = 12",
        "respuestaNumerica": ["Valor de x:", "2", "Valor de y:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2", "5"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, puedes utilizar el método de sustitución o eliminación.",
          "Por la primera ecuación, despeja x: x = 3(y + 3) - 1.",
          "Sustituye este valor de x en la segunda ecuación: 3(y + 3) + 3(y + 3) - 1 + 3 = 12.",
          "Resuelve esta ecuación para encontrar el valor de y.",
          "Una vez que encuentres el valor de y, sustitúyelo en la primera ecuación para hallar el valor de x.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x = 2 e y = 5."
        ]
      },
      {
        "ecuacion": "Encuentra los valores de x e y en el sistema de ecuaciones:"+"<br>"+"(7x-9y)/2 - (2x+4)/2 = -15"+"<br>"+"5(x - 1 + y) = 25",
        "respuestaNumerica": ["Valor de x:", "2", "Valor de y:", "4"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2", "4"],
        "pasos": [
          "Para resolver el sistema de ecuaciones, puedes utilizar el método de sustitución o eliminación.",
          "Por la primera ecuación, despeja x: x = 2(y - 1) - 1.",
          "Sustituye este valor de x en la segunda ecuación: 5(2(y - 1) - 1 - 1 + y) = 25.",
          "Resuelve esta ecuación para encontrar el valor de y.",
          "Una vez que encuentres el valor de y, sustitúyelo en la primera ecuación para hallar el valor de x.",
          "Por lo tanto, los valores de x e y en el sistema de ecuaciones son x = 2 e y = 4."
        ]
      }
      
      
      
      
      
      
      
      
      

      
      

      
      
      
      
      
      
      
      
      
      
      
      

      

      
      
      
      

      

      

        
]

const problemasEcuacionesSegundoGrado =[
      {
        "ecuacion": "Resolver x^2 - 3x = 28",
        "respuestaNumerica": ["Valor de x:", "-4", "Valor de x:", "7"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-4", "7"],
        "pasos": [
          "Para resolver la ecuación cuadrática, primero lleva todos los términos a un lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, tenemos x^2 - 3x - 28 = 0.",
          "Usa la fórmula cuadrática: x = (-b ± √(b^2 - 4ac)) / (2a).",
          "En este caso, a = 1, b = -3 y c = -28.",
          "Sustituye estos valores en la fórmula cuadrática para obtener las soluciones para x.",
          "Calcula las soluciones: x = (-(-3) ± √((-3)^2 - 4(1)(-28))) / (2(1)).",
          "Esto se simplifica a x = (3 ± √(9 + 112)) / 2.",
          "Por lo tanto, las soluciones son x = (3 ± √121) / 2.",
          "Esto da como resultado dos soluciones: x = (3 + 11) / 2 y x = (3 - 11) / 2.",
          "Por lo tanto, las soluciones son x = 7 y x = -4."
        ]
      },
      {
        "ecuacion": "Resolver x^2 - 10x + 25 = 0",
        "respuestaNumerica": ["Valor de x:", "5"],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5"],
        "pasos": [
          "Para resolver la ecuación cuadrática, primero lleva todos los términos a un lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, tenemos x^2 - 10x + 25 = 0.",
          "Observa que esta ecuación es un trinomio cuadrado perfecto, ya que (x - 5)^2 = x^2 - 10x + 25.",
          "Por lo tanto, la ecuación se puede reescribir como (x - 5)^2 = 0.",
          "La única forma en que un cuadrado pueda ser igual a cero es si el término interior también es cero, entonces x - 5 = 0.",
          "Resuelve para x: x = 5.",
          "Por lo tanto, la única solución es x = 5."
        ]
      },
      {
        "ecuacion": "Resolver x^2 - 5x = -6 + 2x",
        "respuestaNumerica": [
          "Valores de x:", "1", "6"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["1", "6"],
        "pasos": [
          "Para resolver la ecuación, primero lleva todos los términos a un lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, tenemos la ecuación x^2 - 5x = -6 + 2x.",
          "Resta 2x en ambos lados de la ecuación para obtener todos los términos en un solo lado.",
          "Esto nos da x^2 - 7x + 6 = 0.",
          "Ahora podemos resolver esta ecuación cuadrática utilizando la fórmula cuadrática.",
          "Aplicando la fórmula cuadrática, obtenemos las siguientes soluciones para 'x'.",
          "Cuando resolvemos la ecuación obtenemos:",
          "x = 6 y x = 1."
        ]
      },
      {
        "ecuacion": "Resolver (a + 5)^2 = 100",
        "respuestaNumerica": [
          "Valores de a:", "5", "-15"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "-15"],
        "pasos": [
          "Para resolver la ecuación, primero expandimos el binomio al cuadrado (a + 5)^2 utilizando el teorema binomial.",
          "Esto nos da a^2 + 10a + 25 = 100.",
          "Restamos 100 en ambos lados de la ecuación para llevar todos los términos a un solo lado.",
          "Así obtenemos a^2 + 10a + 25 - 100 = 0, que se simplifica a a^2 + 10a - 75 = 0.",
          "Ahora, sustituimos los valores de a, b y c en la fórmula cuadrática: a = -b ± √(b^2 - 4ac) / (2a).",
          "Desarrollamos los cálculos paso a paso:",
          "a = (-10 ± √(10^2 - 4 * 1 * (-75))) / (2 * 1)",
          "a = (-10 ± √(100 + 300)) / 2",
          "a = (-10 ± √400) / 2",
          "a = (-10 ± 20) / 2",
          "Esto nos da dos soluciones:",
          "Cuando resolvemos para el signo positivo, obtenemos a = (10 + 20) / 2, que es a = 30 / 2 = 15.",
          "Cuando resolvemos para el signo negativo, obtenemos a = (10 - 20) / 2, que es a = -10 / 2 = -5.",
          "Por lo tanto, las soluciones de la ecuación son a = 15 y a = -5."
        ]
      },
      {
        "ecuacion": "Resolver (a - 3)^2 = 576",
        "respuestaNumerica": [
          "Valores de a:", "27", "-21"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["27", "-21"],
        "pasos": [
          "Para resolver la ecuación, primero expandimos el binomio al cuadrado (a - 3)^2 utilizando el teorema binomial.",
          "Esto nos da a^2 - 6a + 9 = 576.",
          "Restamos 576 en ambos lados de la ecuación para llevar todos los términos a un solo lado.",
          "Así obtenemos a^2 - 6a + 9 - 576 = 0, que se simplifica a a^2 - 6a - 567 = 0.",
          "Ahora, sustituimos los valores de a, b y c en la fórmula cuadrática: a = -b ± √(b^2 - 4ac) / (2a).",
          "Desarrollamos los cálculos paso a paso:",
          "a = (6 ± √(6^2 - 4 * 1 * (-567))) / (2 * 1)",
          "a = (6 ± √(36 + 2268)) / 2",
          "a = (6 ± √2304) / 2",
          "a = (6 ± 48) / 2",
          "Esto nos da dos soluciones:",
          "Cuando resolvemos para el signo positivo, obtenemos a = (6 + 48) / 2, que es a = 54 / 2 = 27.",
          "Cuando resolvemos para el signo negativo, obtenemos a = (6 - 48) / 2, que es a = -42 / 2 = -21.",
          "Por lo tanto, las soluciones de la ecuación son a = 27 y a = -21."
        ]
      },
      {
        "ecuacion": "Resolver (w - 4)^2 = 16",
        "respuestaNumerica": [
          "Valores de w:", "8", "0"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["8", "0"],
        "pasos": [
          "Para resolver la ecuación, primero expandimos el binomio al cuadrado (w - 4)^2 utilizando el teorema binomial.",
          "Esto nos da w^2 - 8w + 16 = 16.",
          "Restamos 16 en ambos lados de la ecuación para llevar todos los términos a un solo lado.",
          "Así obtenemos w^2 - 8w + 16 - 16 = 0, que se simplifica a w^2 - 8w = 0.",
          "Factorizamos la ecuación para encontrar las soluciones, obteniendo w(w - 8) = 0.",
          "Esto nos da dos posibilidades: w = 0 y w - 8 = 0, que nos lleva a w = 8.",
          "Por lo tanto, las soluciones de la ecuación son w = 8 y w = 0."
        ]
      },
      {
        "ecuacion": "Resolver -2q^2 + 18q - 28 = 0",
        "respuestaNumerica": [
          "Valores de q:", "2", "7"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2", "7"],
        "pasos": [
          "Para resolver la ecuación, primero aplicamos la fórmula cuadrática, que se aplica a ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -2, b = 18 y c = -28.",
          "Sustituimos estos valores en la fórmula cuadrática: q = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (18^2 - 4*(-2)*(-28)) = 324.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: q = (-18 ± sqrt(324)) / (-4).",
          "Esto nos da dos soluciones: q = ( -18 ± 18) / -4.",
          "Resolviendo cada una de las posibilidades, obtenemos q = 2 y q = 7.",
          "Por lo tanto, las soluciones de la ecuación son q = 2 y q = 7."
        ]
      },
      {
        "ecuacion": "Resolver -4x^2 + 20x - 24 = 0",
        "respuestaNumerica": [
          "Valores de x:", "2", "3"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2", "3"],
        "pasos": [
          "Para resolver la ecuación, primero aplicamos la fórmula cuadrática, que se aplica a ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -4, b = 20 y c = -24.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (20^2 - 4*(-4)*(-24)) = 400.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (-20 ± sqrt(400)) / (-8).",
          "Esto nos da dos soluciones: x = ( -20 ± 20) / -8.",
          "Resolviendo cada una de las posibilidades, obtenemos x = 2 y x = 3.",
          "Por lo tanto, las soluciones de la ecuación son x = 2 y x = 3."
        ]
      },
      {
        "ecuacion": "Resolver -7x^2 + 49x - 70 = 0",
        "respuestaNumerica": [
          "Valores de x:", "2", "5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["2", "5"],
        "pasos": [
          "Para resolver la ecuación, primero aplicamos la fórmula cuadrática, que se aplica a ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -7, b = 49 y c = -70.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (49^2 - 4*(-7)*(-70)) = 2401.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (-49 ± sqrt(2401)) / (-14).",
          "Esto nos da dos soluciones: x = ( -49 ± 49) / -14.",
          "Resolviendo cada una de las posibilidades, obtenemos x = 2 y x = 5.",
          "Por lo tanto, las soluciones de la ecuación son x = 2 y x = 5."
        ]
      },
      {
        "ecuacion": "Resolver 6a^2 - 60a + 150 = 0",
        "respuestaNumerica": [
          "Valores de a:", "5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5"],
        "pasos": [
          "Para resolver la ecuación, primero aplicamos la fórmula cuadrática, que se aplica a ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = 6, b = -60 y c = 150.",
          "Sustituimos estos valores en la fórmula cuadrática: a = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (-60)^2 - 4 * 6 * 150 = 0.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: a = (-(-60) ± sqrt(0)) / (2 * 6).",
          "Esto nos da una sola solución: a = (60) / (12).",
          "Por lo tanto, la única solución de la ecuación es a = 5."
        ]
      },
      {
        "ecuacion": "Resolver -6a^2 + 48a - 42 = 0",
        "respuestaNumerica": [
          "Valores de a:", "7","y", "1"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["7","1"],
        "pasos": [
          "Para resolver la ecuación, primero aplicamos la fórmula cuadrática, que se aplica a ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -6, b = 48 y c = -42.",
          "Sustituimos estos valores en la fórmula cuadrática: a = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (48)^2 - 4 * (-6) * (-42) = 1296.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: a = (48 ± sqrt(1296)) / (-12).",
          "Esto nos da dos soluciones: a = (48 ± 36) / (-12).",
          "Simplificando, obtenemos dos soluciones: a = (48 + 36) / (-12) = 7 y a = (48 - 36) / (-12) = 1.",
          "Por lo tanto, las soluciones de la ecuación son a = 7 y a = 1."
        ]
      },
      {
        "ecuacion": "Resolver -5a^2 + 15a - 10 = 0",
        "respuestaNumerica": [
          "Valores de a:", "1", "y", "2"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["1", "2"],
        "pasos": [
          "Para resolver la ecuación, primero aplicamos la fórmula cuadrática, que se aplica a ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -5, b = 15 y c = -10.",
          "Sustituimos estos valores en la fórmula cuadrática: a = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (15)^2 - 4 * (-5) * (-10) = 225.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: a = (15 ± sqrt(225)) / (-10).",
          "Esto nos da dos soluciones: a = (15 + 15) / (-10) = 1 y a = (15 - 15) / (-10) = 2.",
          "Por lo tanto, las soluciones de la ecuación son a = 1 y a = 2."
        ]
      },
      {
        "ecuacion": "Resolver 7x^2 - 70x + 147 = 0",
        "respuestaNumerica": [
          "Valores de x:", "3", "y", "7"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["3", "7"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = 7, b = -70 y c = 147.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (-70)^2 - 4 * 7 * 147 = 784.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (70 ± sqrt(784)) / (2 * 7).",
          "Esto nos da dos soluciones: x = (70 + 28) / 14 = 7 y x = (70 - 28) / 14 = 3.",
          "Por lo tanto, las soluciones de la ecuación son x = 7 y x = 3."
        ]
      },
      {
        "ecuacion": "Resolver -6x^2 + 60x - 144 = 0",
        "respuestaNumerica": [
          "Valores de x:", "4", "y", "6"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "6"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -6, b = 60 y c = -144.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (60)^2 - 4 * (-6) * (-144) = 3600.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (-60 ± sqrt(3600)) / (2 * (-6)).",
          "Esto nos da dos soluciones: x = (-60 + sqrt(3600)) / -12 = 4 y x = (-60 - sqrt(3600)) / -12 = 6.",
          "Por lo tanto, las soluciones de la ecuación son x = 4 y x = 6."
        ]
      },
      {
        "ecuacion": "Resolver 5x^2 - 25x + 20 = 0",
        "respuestaNumerica": [
          "Valores de x:", "1", "y", "4"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["1", "4"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = 5, b = -25 y c = 20.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (-25)^2 - 4 * 5 * 20 = 25.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (-(-25) ± sqrt(25)) / (2 * 5).",
          "Esto nos da dos soluciones: x = (25 + 5) / 10 = 1 y x = (25 - 5) / 10 = 4.",
          "Por lo tanto, las soluciones de la ecuación son x = 1 y x = 4."
        ]
      },
      {
        "ecuacion": "Resolver -5x^2 + 45x - 100 = 0",
        "respuestaNumerica": [
          "Valores de x:", "4", "y", "5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "5"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -5, b = 45 y c = -100.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (45)^2 - 4 * (-5) * (-100) = 2025.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (45 ± sqrt(2025)) / (-10).",
          "Esto nos da dos soluciones: x = (45 + 45) / (-10) = 4 y x = (45 - 45) / (-10) = 5.",
          "Por lo tanto, las soluciones de la ecuación son x = 4 y x = 5."
        ]
      },
      {
        "ecuacion": "Resolver -9x^2 - 144x - 540 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-10", "y", "-6"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-10", "-6"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -9, b = -144 y c = -540.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (-144)^2 - 4 * (-9) * (-540) = 20736.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (144 ± sqrt(20736)) / (-18).",
          "Esto nos da dos soluciones: x = (144 + 144) / (-18) = -10 y x = (144 - 144) / (-18) = -6.",
          "Por lo tanto, las soluciones de la ecuación son x = -10 y x = -6."
        ]
      },
      {
        "ecuacion": "Resolver -5x^2 - 70x - 225 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-9", "y", "-5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9", "-5"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -5, b = -70 y c = -225.",
          "Sustituimos estos valores en la fórmula cuadrática: x = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (-70)^2 - 4 * (-5) * (-225) = 4900.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: x = (70 ± sqrt(4900)) / (-10).",
          "Esto nos da dos soluciones: x = (70 + 70) / (-10) = -9 y x = (70 - 70) / (-10) = -5.",
          "Por lo tanto, las soluciones de la ecuación son x = -9 y x = -5."
        ]
      },
      {
        "ecuacion": "Resolver 9m^2 + 9m - 270 = 0",
        "respuestaNumerica": [
          "Valores de m:", "-6", "y", "5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-6", "5"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = 9, b = 9 y c = -270.",
          "Sustituimos estos valores en la fórmula cuadrática: m = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (9)^2 - 4 * 9 * (-270) = 2916.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: m = (-9 ± sqrt(2916)) / (18).",
          "Esto nos da dos soluciones: m = (-9 + 54) / 18 = -6 y m = (-9 - 54) / 18 = 5.",
          "Por lo tanto, las soluciones de la ecuación son m = -6 y m = 5."
        ]
      },
      {
        "ecuacion": "Resolver -4m^2 + 68m - 288 = 0",
        "respuestaNumerica": [
          "Valores de m:", "8", "y", "9"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["8", "9"],
        "pasos": [
          "Para resolver la ecuación, aplicamos la fórmula cuadrática, que se utiliza para ecuaciones de la forma ax^2 + bx + c = 0.",
          "Identificamos los coeficientes a = -4, b = 68 y c = -288.",
          "Sustituimos estos valores en la fórmula cuadrática: m = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (68)^2 - 4 * (-4) * (-288) = 4624.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: m = (-68 ± sqrt(4624)) / (-8).",
          "Esto nos da dos soluciones: m = (-68 + 68) / (-8) = 8 y m = (-68 - 68) / (-8) = 9.",
          "Por lo tanto, las soluciones de la ecuación son m = 8 y m = 9."
        ]
      },
      {
        "ecuacion": "Resolver 7n^2 - 63n + 140 = 0",
        "respuestaNumerica": [
          "Valores de n:", "4", "y", "5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "5"],
        "pasos": [
          "Para resolver esta ecuación cuadrática, utilizamos la fórmula cuadrática.",
          "Identificamos los coeficientes: a = 7, b = -63 y c = 140.",
          "Sustituimos estos valores en la fórmula cuadrática: n = (-b ± sqrt(b^2 - 4ac)) / (2a).",
          "Calculamos el discriminante, b^2 - 4ac, que en este caso es (-63)^2 - 4 * 7 * 140 = 3969 - 3920 = 49.",
          "Obtenemos las soluciones utilizando la fórmula cuadrática: n = (63 ± sqrt(49)) / (2 * 7).",
          "Esto nos da dos soluciones: n = (63 + 7) / 14 = 70 / 14 = 5 y n = (63 - 7) / 14 = 56 / 14 = 4.",
          "Por lo tanto, las soluciones de la ecuación son n = 4 y n = 5."
        ]
      },
      {
        "ecuacion": "Resolver -5n^2 + 30n = -560",
        "respuestaNumerica": [
          "Valores de n:", "-8", "y", "14"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-8", "14"],
        "pasos": [
          "Para resolver esta ecuación cuadrática, primero llevamos todos los términos al mismo lado de la ecuación, de modo que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como -5n^2 + 30n + 560 = 0.",
          "Ahora, utilizamos la fórmula cuadrática, que es n = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = -5, b = 30 y c = 560.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (30)^2 - 4 * (-5) * 560 = 900 - (-11200) = 12100.",
          "Luego, sustituimos los valores en la fórmula cuadrática: n = (-30 ± sqrt(12100)) / (2 * -5).",
          "Esto nos da dos soluciones: n = (-30 + 110) / -10 = 80 / -10 = -8 y n = (-30 - 110) / -10 = -140 / -10 = 14.",
          "Por lo tanto, las soluciones de la ecuación son n = -8 y n = 14."
        ]
      },
      {
        "ecuacion": "Resolver -13n^2 + 936 = 13n",
        "respuestaNumerica": [
          "Valores de n:", "-9", "y", "8"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9", "8"],
        "pasos": [
          "Para resolver esta ecuación cuadrática, primero llevamos todos los términos al mismo lado de la ecuación, de modo que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como -13n^2 + 13n + 936 = 0.",
          "Ahora, utilizamos la fórmula cuadrática, que es n = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = -13, b = 13 y c = 936.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (13)^2 - 4 * (-13) * 936 = 169 - (-48624) = 48793.",
          "Luego, sustituimos los valores en la fórmula cuadrática: n = (-13 ± sqrt(48793)) / (2 * -13).",
          "Esto nos da dos soluciones: n = (-13 + sqrt(48793)) / -26 ≈ -8.9999 y n = (-13 - sqrt(48793)) / -26 ≈ 8.0001.",
          "Sin embargo, debido a la precisión limitada de los cálculos, redondeamos estas soluciones a n = -9 y n = 8.",
          "Por lo tanto, las soluciones de la ecuación son n = -9 y n = 8."
        ]
      },
      {
        "ecuacion": "5n^2 - 80n + 240 = 0",
        "respuestaNumerica": [
          "Valores de n:", "4", "y", "12"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["4", "12"],
        "pasos": [
          "Para resolver esta ecuación cuadrática, primero llevamos todos los términos al mismo lado de la ecuación, de modo que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 5n^2 - 80n + 240 = 0.",
          "Ahora, utilizamos la fórmula cuadrática, que es n = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 5, b = -80 y c = 240.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (-80)^2 - 4 * 5 * 240 = 6400 - 4800 = 1600.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Luego, sustituimos los valores en la fórmula cuadrática: n = (80 ± sqrt(1600)) / 10.",
          "Esto nos da dos soluciones: n = (80 ± 40) / 10.",
          "Después de simplificar, obtenemos las soluciones n = 12 y n = 4.",
          "Por lo tanto, las soluciones de la ecuación son n = 12 y n = 4."
        ]
      },
      {
        "ecuacion": "9x^2 + 153x + 648 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-9", "y", "-8"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9", "-8"],
        "pasos": [
          "Para resolver esta ecuación cuadrática, primero llevamos todos los términos al mismo lado de la ecuación, de modo que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 9x^2 + 153x + 648 = 0.",
          "Ahora, utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 9, b = 153 y c = 648.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (153)^2 - 4 * 9 * 648 = 23409 - 23328 = 81.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Luego, sustituimos los valores en la fórmula cuadrática: x = (-153 ± sqrt(81)) / 18.",
          "Esto nos da dos soluciones: x = (-153 ± 9) / 18.",
          "Después de simplificar, obtenemos las soluciones x = -9 y x = -8.",
          "Por lo tanto, las soluciones de la ecuación son x = -9 y x = -8."
        ]
      },
      {
        "ecuacion": "-11x^2 + 22x + 264 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-4", "y", "6"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-4", "6"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como -11x^2 + 22x + 264 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = -11, b = 22 y c = 264.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (22)^2 - 4 * (-11) * 264 = 484 + 11616 = 12100.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (-22 ± sqrt(12100)) / (-22).",
          "Esto nos da dos soluciones: x = (-22 ± 110) / (-22).",
          "Simplificando, obtenemos las soluciones x = -4 y x = 6.",
          "Por lo tanto, las soluciones de la ecuación son x = -4 y x = 6."
        ]
      },
      {
        "ecuacion": "-7x^2 + 112x - 441 = 0",
        "respuestaNumerica": [
          "Valores de x:", "7", "y", "9"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["7", "9"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como -7x^2 + 112x - 441 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = -7, b = 112 y c = -441.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (112)^2 - 4 * (-7) * (-441) = 12544 - 12348 = 196.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (-112 ± sqrt(196)) / (-14).",
          "Esto nos da dos soluciones: x = (-112 ± 14) / (-14).",
          "Simplificando, obtenemos las soluciones x = 7 y x = 9.",
          "Por lo tanto, las soluciones de la ecuación son x = 7 y x = 9."
        ]
      },
      {
        "ecuacion": "6x^2 + 6x - 180 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-6", "y", "5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-6", "5"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 6x^2 + 6x - 180 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 6, b = 6 y c = -180.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (6)^2 - 4 * (6) * (-180) = 36 + 4320 = 4356.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (-6 ± sqrt(4356)) / (2 * 6).",
          "Esto nos da dos soluciones: x = (-6 ± 66) / 12.",
          "Simplificando, obtenemos las soluciones x = (-6 + 66) / 12 y x = (-6 - 66) / 12.",
          "Por lo tanto, las soluciones de la ecuación son x = 5 y x = -6."
        ]
      },
      {
        "ecuacion": "4x^2 - 28x - 176 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-4", "y", "11"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-4", "11"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 4x^2 - 28x - 176 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 4, b = -28 y c = -176.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (-28)^2 - 4 * 4 * (-176) = 784 + 2816 = 3600.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (-(-28) ± sqrt(3600)) / (2 * 4).",
          "Esto nos da dos soluciones: x = (28 ± 60) / 8.",
          "Simplificando, obtenemos las soluciones x = (28 + 60) / 8 y x = (28 - 60) / 8.",
          "Por lo tanto, las soluciones de la ecuación son x = 11 y x = -4."
        ]
      },
      {
        "ecuacion": "-9x^2 + 99x - 270 = 0",
        "respuestaNumerica": [
          "Valores de x:", "5", "y", "6"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["5", "6"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como -9x^2 + 99x - 270 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = -9, b = 99 y c = -270.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (99)^2 - 4 * (-9) * (-270) = 9801 - 9720 = 81.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (-99 ± sqrt(81)) / (2 * (-9)).",
          "Esto nos da dos soluciones: x = (-99 + 9) / (-18) y x = (-99 - 9) / (-18).",
          "Simplificando, obtenemos las soluciones x = (-90) / (-18) y x = (-108) / (-18).",
          "Por lo tanto, las soluciones de la ecuación son x = 5 y x = 6."
        ]
      },
      {
        "ecuacion": "10x^2 - 140x + 480 = 0",
        "respuestaNumerica": [
          "Valores de x:", "6", "y", "8"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["6", "8"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 10x^2 - 140x + 480 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 10, b = -140 y c = 480.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (-140)^2 - 4 * 10 * 480 = 19600 - 19200 = 400.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (140 ± sqrt(400)) / (2 * 10).",
          "Esto nos da dos soluciones: x = (140 + 20) / 20 y x = (140 - 20) / 20.",
          "Simplificando, obtenemos las soluciones x = 160 / 20 y x = 120 / 20.",
          "Por lo tanto, las soluciones de la ecuación son x = 8 y x = 6."
        ]
      },
      {
        "ecuacion": "4x^2 + 60x + 224 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-8", "y", "-7"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-8", "-7"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 4x^2 + 60x + 224 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 4, b = 60 y c = 224.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (60)^2 - 4 * 4 * 224 = 3600 - 3584 = 16.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (-60 ± sqrt(16)) / (2 * 4).",
          "Esto nos da dos soluciones: x = (-60 + 4) / 8 y x = (-60 - 4) / 8.",
          "Simplificando, obtenemos las soluciones x = -56 / 8 y x = -64 / 8.",
          "Por lo tanto, las soluciones de la ecuación son x = -7 y x = -8."
        ]
      },
      {
        "ecuacion": "11x^2 - 231x + 1188 = 0",
        "respuestaNumerica": [
          "Valores de x:", "9", "y", "12"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["9", "12"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 11x^2 - 231x + 1188 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 11, b = -231 y c = 1188.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (-231)^2 - 4 * 11 * 1188 = 53361 - 52272 = 1089.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (231 ± sqrt(1089)) / (2 * 11).",
          "Esto nos da dos soluciones: x = (231 + 33) / 22 y x = (231 - 33) / 22.",
          "Simplificando, obtenemos las soluciones x = 264 / 22 y x = 198 / 22.",
          "Por lo tanto, las soluciones de la ecuación son x = 12 y x = 9."
        ]
      },
      {
        "ecuacion": "4x^2 + 16x - 180 = 0",
        "respuestaNumerica": [
          "Valores de x:", "-9", "y", "5"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["-9", "5"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 4x^2 + 16x - 180 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 4, b = 16 y c = -180.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (16)^2 - 4 * 4 * (-180) = 256 + 2880 = 3136.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (-16 ± sqrt(3136)) / (2 * 4).",
          "Esto nos da dos soluciones: x = (-16 + 56) / 8 y x = (-16 - 56) / 8.",
          "Simplificando, obtenemos las soluciones x = 40 / 8 y x = -72 / 8.",
          "Por lo tanto, las soluciones de la ecuación son x = 5 y x = -9."
        ]
      },
      {
        "ecuacion": "9x^2 - 153x + 648 = 0",
        "respuestaNumerica": [
          "Valores de x:", "8", "y", "9"
        ],
        "unidadRespuesta": [],
        "combinacionesRespuesta": ["8", "9"],
        "pasos": [
          "Primero, llevamos todos los términos al mismo lado de la ecuación para que quede en la forma estándar ax^2 + bx + c = 0.",
          "Entonces, reescribimos la ecuación como 9x^2 - 153x + 648 = 0.",
          "Utilizamos la fórmula cuadrática, que es x = (-b ± sqrt(b^2 - 4ac)) / (2a), donde a = 9, b = -153 y c = 648.",
          "Calculamos el discriminante, que es b^2 - 4ac, y obtenemos (-153)^2 - 4 * 9 * 648 = 23409 - 23328 = 81.",
          "Como el discriminante es positivo, la ecuación tiene dos raíces reales distintas.",
          "Sustituimos los valores en la fórmula cuadrática: x = (153 ± sqrt(81)) / (2 * 9).",
          "Esto nos da dos soluciones: x = (153 + 9) / 18 y x = (153 - 9) / 18.",
          "Simplificando, obtenemos las soluciones x = 162 / 18 y x = 144 / 18.",
          "Por lo tanto, las soluciones de la ecuación son x = 9 y x = 8."
        ]
      },



]

const problemasAreasYVolumenes =[
  {
    "ecuacion": "Un triángulo cuya base mide 10 cm, su lado 43.17 cm y su altura 42 cm. Cúal es su área y su perímetro (en cms^3 y cms)?",
    "respuestaNumerica": ["Su área es: 210 cm^3", "Su perímetro es 96,34 cms"],
    "unidadRespuesta": [],
    "combinacionesRespuesta": ["210","96.34"],
    "pasos": [
      "El triángulo tiene una base de 10 cm, un lado de 43.17 cm y una altura de 42 cm.",
      "La fórmula para calcular el área de un triángulo es área = (base × altura) / 2.",
      "Sustituimos los valores: área = (10 × 42) / 2.",
      "Calculamos el área: área = 420 / 2 = 210 cm²."
    ]
  },
  {
  "ecuacion": "Un triángulo cuya base mide 18 cm, su lado 35 cm y su altura 32 cm. Cúal es su área y su perímetro (en cms^2 y cms)?",
  "respuestaNumerica": ["Su área es: 288 cm^2", "Su perímetro es 85.55 cms"],
  "unidadRespuesta": [],
  "combinacionesRespuesta": ["288","85.55"],
  "pasos": [
  "El triángulo tiene una base de 18 cm, un lado de 35 cm y una altura de 32 cm.",
  "La fórmula para calcular el área de un triángulo es área = (base × altura) / 2.",
  "Sustituimos los valores: área = (18 × 32) / 2.",
  "Calculamos el área: área = 576 / 2 = 288 cm².",
  "Para calcular el perímetro, sumamos los lados del triángulo: perímetro = 18 + 35 + 32 = 85.55 cms."
  ]
  },
  {
  "ecuacion": "Un triángulo cuya base mide 20 cm, su lado 50 cm y su altura 48 cm. Cúal es su área y su perímetro (en cms^2 y cms)?",
  "respuestaNumerica": ["Su área es: 480 cm^2", "Su perímetro es 118.28 cms"],
  "unidadRespuesta": [],
  "combinacionesRespuesta": ["480","118.28"],
  "pasos": [
  "El triángulo tiene una base de 20 cm, un lado de 50 cm y una altura de 48 cm.",
  "La fórmula para calcular el área de un triángulo es área = (base × altura) / 2.",
  "Sustituimos los valores: área = (20 × 48) / 2.",
  "Calculamos el área: área = 960 / 2 = 480 cm².",
  "Para calcular el perímetro, sumamos los lados del triángulo: perímetro = 20 + 50 + 48 = 118.28 cms."
  ]
  },
  {
  "ecuacion": "Un edificio en forma de L tiene una longitud de 30 metros y una anchura de 20 metros en una parte, y una longitud de 20 metros y una anchura de 15 metros en la otra parte. ¿Cuál es el área total del edificio?",
  "respuestaNumerica": ["Su área es: 650 m^2"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["650"],
  "pasos": [
  "Dividimos el edificio en dos rectángulos: uno con longitud 30 m y anchura 20 m, y otro con longitud 20 m y anchura 15 m.",
  "Calculamos el área de cada rectángulo: área1 = 30 × 20 = 600 m^2, área2 = 20 × 15 = 300 m^2.",
  "Sumamos las áreas de los dos rectángulos: área total = área1 + área2 = 600 + 300 = 900 m^2.",
  "Sin embargo, notamos que hay un área que se repite en la intersección de los dos rectángulos, que es un cuadrado de lado 10 m.",
  "Calculamos el área del cuadrado: área cuadrado = 10 × 10 = 100 m^2.",
  "Restamos el área del cuadrado del área total: área total = 900 - 100 = 800 m^2.",
  "Por lo tanto, el área total del edificio es de 800 m^2."
  ]
  },
  {
  "ecuacion": "Un edificio en forma de L tiene una longitud de 40 metros y una anchura de 25 metros en una parte, y una longitud de 30 metros y una anchura de 20 metros en la otra parte. ¿Cuál es el área total del edificio?",
  "respuestaNumerica": ["Su área es: 925 m^2"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["925"],
  "pasos": [
  "Dividimos el edificio en dos rectángulos: uno con longitud 40 m y anchura 25 m, y otro con longitud 30 m y anchura 20 m.",
  "Calculamos el área de cada rectángulo: área1 = 40 × 25 = 1000 m^2, área2 = 30 × 20 = 600 m^2.",
  "Sumamos las áreas de los dos rectángulos: área total = área1 + área2 = 1000 + 600 = 1600 m^2.",
  "Sin embargo, notamos que hay un área que se repite en la intersección de los dos rectángulos, que es un cuadrado de lado 15 m.",
  "Calculamos el área del cuadrado: área cuadrado = 15 × 15 = 225 m^2.",
  "Restamos el área del cuadrado del área total: área total = 1600 - 225 = 1375 m^2.",
  "Por lo tanto, el área total del edificio es de 1375 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la base tiene una longitud de 12 y el perímetro es de 44.",
  "respuestaNumerica": ["Su área es: 120 m^2"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["132"],
  "pasos": [
  "Como p = 2b + 2h, tenemos 44 = 2(12) + 2h.",
  "Simplificando, obtenemos 44 = 24 + 2h.",
  "Restando 24 de ambos lados, obtenemos 20 = 2h.",
  "Dividiendo ambos lados entre 2, obtenemos h = 10.",
  "Por lo tanto, A = bh = 12(10) = 120 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la base tiene una longitud de 8 y el perímetro es de 36.",
  "respuestaNumerica": ["Su área es: 80 m^2"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["80"],
  "pasos": [
  "Como p = 2b + 2h, tenemos 36 = 2(8) + 2h.",
  "Simplificando, obtenemos 36 = 16 + 2h.",
  "Restando 16 de ambos lados, obtenemos 20 = 2h.",
  "Dividiendo ambos lados entre 2, obtenemos h = 10.",
  "Por lo tanto, A = bh = 8(10) = 80 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la base tiene una longitud de 20 y el perímetro es de 72.",
  "respuestaNumerica": ["Su área es: 320 m^2"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["320"],
  "pasos": [
  "Como p = 2b + 2h, tenemos 72 = 2(20) + 2h.",
  "Simplificando, obtenemos 72 = 40 + 2h.",
  "Restando 40 de ambos lados, obtenemos 32 = 2h.",
  "Dividiendo ambos lados entre 2, obtenemos h = 16.",
  "Por lo tanto, A = bh = 20(16) = 320 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la base tiene una longitud de 18 y el perímetro es de 68.",
  "respuestaNumerica": ["Su área es: 288 m^2"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["288"],
  "pasos": [
  "Como p = 2b + 2h, tenemos 68 = 2(18) + 2h.",
  "Simplificando, obtenemos 68 = 36 + 2h.",
  "Restando 36 de ambos lados, obtenemos 32 = 2h.",
  "Dividiendo ambos lados entre 2, obtenemos h = 16.",
  "Por lo tanto, A = bh = 18(16) = 288 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la altura tiene una longitud de 10 y la diagonal tiene una longitud de 26.",
  "respuestaNumerica": ["Su área es: 240 m^2"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["240"],
  "pasos": [
  "Usamos la fórmula de Pitágoras: diagonal^2 = base^2 + altura^2.",
  "Despejamos la base: base^2 = diagonal^2 - altura^2.",
  "Sustituimos los valores: base^2 = 26^2 - 10^2.",
  "Calculamos la base: base = sqrt(676 - 100) = sqrt(576) = 24.",
  "Calculamos el área: A = base × altura = 24 × 10 = 240 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la altura tiene una longitud de 8 y la diagonal tiene una longitud de 20.",
  "respuestaNumerica": ["Su área es: 144"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["144"],
  "pasos": [
  "Usamos la fórmula de Pitágoras: diagonal^2 = base^2 + altura^2.",
  "Despejamos la base: base^2 = diagonal^2 - altura^2.",
  "Sustituimos los valores: base^2 = 20^2 - 8^2.",
  "Calculamos la base: base = sqrt(400 - 64) = sqrt(336) = 18.",
  "Calculamos el área: A = base × altura = 18 × 8 = 144 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la altura tiene una longitud de 12 y la diagonal tiene una longitud de 30.",
  "respuestaNumerica": ["Su área es: 336"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["336"],
  "pasos": [
  "Usamos la fórmula de Pitágoras: diagonal^2 = base^2 + altura^2.",
  "Despejamos la base: base^2 = diagonal^2 - altura^2.",
  "Sustituimos los valores: base^2 = 30^2 - 12^2.",
  "Calculamos la base: base = sqrt(900 - 144) = sqrt(756) = 28.",
  "Calculamos el área: A = base × altura = 28 × 12 = 336 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la altura tiene una longitud de 15 y la diagonal tiene una longitud de 35.",
  "respuestaNumerica": ["Su área es: 450"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["450"],
  "pasos": [
  "Usamos la fórmula de Pitágoras: diagonal^2 = base^2 + altura^2.",
  "Despejamos la base: base^2 = diagonal^2 - altura^2.",
  "Sustituimos los valores: base^2 = 35^2 - 15^2.",
  "Calculamos la base: base = sqrt(1225 - 225) = sqrt(1000) = 30.",
  "Calculamos el área: A = base × altura = 30 × 15 = 450 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un rectángulo si la altura tiene una longitud de 18 y la diagonal tiene una longitud de 40.",
  "respuestaNumerica": ["Su área es: 576"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["576"],
  "pasos": [
  "Usamos la fórmula de Pitágoras: diagonal^2 = base^2 + altura^2.",
  "Despejamos la base: base^2 = diagonal^2 - altura^2.",
  "Sustituimos los valores: base^2 = 40^2 - 18^2.",
  "Calculamos la base: base = sqrt(1600 - 324) = sqrt(1276) = 32.",
  "Calculamos el área: A = base × altura = 32 × 18 = 576 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un cuadrado cuyo perímetro es 36.",
  "respuestaNumerica": ["Su área es: 81"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["81"],
  "pasos": [
  "Usamos la fórmula del perímetro de un cuadrado: perímetro = 4 × lado.",
  "Despejamos el lado: lado = perímetro / 4.",
  "Sustituimos los valores: lado = 36 / 4.",
  "Calculamos el lado: lado = 9.",
  "Calculamos el área: A = lado × lado = 9 × 9 = 81 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un cuadrado cuyo perímetro es 40.",
  "respuestaNumerica": ["Su área es: 100"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["100"],
  "pasos": [
  "Usamos la fórmula del perímetro de un cuadrado: perímetro = 4 × lado.",
  "Despejamos el lado: lado = perímetro / 4.",
  "Sustituimos los valores: lado = 40 / 4.",
  "Calculamos el lado: lado = 10.",
  "Calculamos el área: A = lado × lado = 10 × 10 = 100 m^2."
  ]
  },
  {
  "ecuacion": "Encuentra el área de un cuadrado cuyo perímetro es 48.",
  "respuestaNumerica": ["Su área es: 144"],
  "unidadRespuesta": ["m^2"],
  "combinacionesRespuesta": ["144"],
  "pasos": [
  "Usamos la fórmula del perímetro de un cuadrado: perímetro = 4 × lado.",
  "Despejamos el lado: lado = perímetro / 4.",
  "Sustituimos los valores: lado = 48 / 4.",
  "Calculamos el lado: lado = 12.",
  "Calculamos el área: A = lado × lado = 12 × 12 = 144 m^2."
  ]
  },
  {
    "ecuacion": "Encuentra el área de un paralelogramo si el área está representada por x^2 + 4, la longitud de un lado por x + 4, y la longitud de la altura respecto a ese lado por x - 3.",
    "respuestaNumerica": ["Su área es: 260 m^2"],
    "unidadRespuesta": ["m^2"],
    "combinacionesRespuesta": ["260"],
    "pasos": [
    "Usamos la fórmula del área de un paralelogramo: área = base × altura.",
    "Sustituimos los valores: área = (x + 4) × (x - 3).",
    "Desarrollamos la expresión: área = x^2 + 4x - 3x - 12.",
    "Simplificamos la expresión: área = x^2 + x - 12.",
    "Comparamos con la expresión dada: x^2 + 4.",
    "Concluimos que x = 16.",
    "Calculamos el área: área = 16^2 + 4 = 260 m^2."
    ]
    },
    {
    "ecuacion": "Encuentra el área de un paralelogramo si el área está representada por x^2 - 3, la longitud de un lado por x - 2, y la longitud de la altura respecto a ese lado por x + 1.",
    "respuestaNumerica": ["Su área es: 12"],
    "unidadRespuesta": ["m^2"],
    "combinacionesRespuesta": ["12"],
    "pasos": [
    "Usamos la fórmula del área de un paralelogramo: área = base × altura.",
    "Sustituimos los valores: área = (x - 2) × (x + 1).",
    "Desarrollamos la expresión: área = x^2 - x - 2.",
    "Simplificamos la expresión: área = x^2 - 3.",
    "Comparamos con la expresión dada: x^2 - 3.",
    "Concluimos que x = 3.",
    "Calculamos el área: área = (3 - 2) × (3 + 1) = 12 m^2."
    ]
    },
    {
    "ecuacion": "Encuentra el área de un trapecio si las bases tienen longitudes 7.3 y 2.7, y la altura tiene longitud 3.8.",
    "respuestaNumerica": ["Su área es: 19 m^2"],
    "unidadRespuesta": ["m^2"],
    "combinacionesRespuesta": ["19"],
    "pasos": [
    "La fórmula para calcular el área de un trapecio es A = (1/2) × h × (b1 + b2).",
    "Sustituimos los valores: A = (1/2) × 3.8 × (7.3 + 2.7).",
    "Desarrollamos la expresión: A = (1/2) × 3.8 × 10.",
    "Calculamos el área: A = 19 m^2."
    ]
    },
    {
    "ecuacion": "Encuentra el área de un trapecio isósceles si las bases tienen longitudes 22 y 10, y las piernas tienen longitud 10.",
    "respuestaNumerica": ["Su área es: 128 m^2"],
    "unidadRespuesta": ["m^2"],
    "combinacionesRespuesta": ["128"],
    "pasos": [
    "Dibuja un trapecio isosceles con aristas A,B,C y D. E y F serán los puntos donde la altura toca la base en angulo recto. Su base larga será b1 y el lado corto b2",
    "Dados los valores: b1 = 22, b2 = 10, AB = 10.",
    "También se sabe que EF = b2 = 10 y AE = (1/2)(22 - 10) = 6.",
    "En el triángulo BEA, aplicamos el teorema de Pitágoras: h^2 = 10^2 - 6^2 = 64, entonces h = 8.",
    "La fórmula para calcular el área de un trapecio es A = (1/2) × h × (b1 + b2).",
    "Sustituimos los valores: A = (1/2) × 8 × (22 + 10).",
    "Calculamos el área: A = 128 m^2."
    ]
    },
    {
      "ecuacion": "Encuentra el área de un rectángulo inscrito en un círculo si el radio del círculo es 5 y la base tiene longitud 6.",
      "respuestaNumerica": ["Su área es: 48 m^2"],
      "unidadRespuesta": ["m^2"],
      "combinacionesRespuesta": ["48"],
      "pasos": [
      "Dados los valores: radio = 5, base = 6.",
      "La altura del rectángulo se puede calcular utilizando el teorema de Pitágoras: altura = sqrt(diametro^2 - base^2) = sqrt(10^2 - 6^2) = sqrt(100 - 36) = sqrt(64) = 8.",
      "La fórmula para calcular el área de un rectángulo es área = base × altura.",
      "Sustituimos los valores: área = 6 × 8.",
      "Calculamos el área: área = 48 m^2."
      ]
      },
      {
      "ecuacion": "Encuentra el área de un rectángulo inscrito en un círculo si el radio del círculo es 7 y la base tiene longitud 8.",
      "respuestaNumerica": ["Su área es: 91.84 m^2"],
      "unidadRespuesta": ["m^2"],
      "combinacionesRespuesta": ["91.84"],
      "pasos": [
      "Dados los valores: radio = 7, base = 8.",
      "La altura del rectángulo se puede calcular utilizando el teorema de Pitágoras: altura = sqrt(radio^2 - (base/2)^2) = sqrt(7^2 - (8/2)^2) = sqrt(49 - 16) = sqrt(33) = 5.74.",
      "La fórmula para calcular el área de un rectángulo es área = base × altura.",
      "Sustituimos los valores: área = 8 × 5.74 x 2.",
      "Calculamos el área: área = 91.84 m^2."
      ]
      },
      {
      "ecuacion": "Encuentra el área de un rectángulo inscrito en un círculo si el radio del círculo es 9 y la base tiene longitud 10.",
      "respuestaNumerica": ["Su área es: 149.6 m^2"],
      "unidadRespuesta": ["m^2"],
      "combinacionesRespuesta": ["149.6"],
      "pasos": [
      "Dados los valores: radio = 9, base = 10.",
      "La altura del rectángulo se puede calcular utilizando el teorema de Pitágoras: altura = sqrt(radio^2 - (base/2)^2) = sqrt(9^2 - (10/2)^2) = sqrt(81 - 25) = sqrt(56) = 7.48.",
      "La fórmula para calcular el área de un rectángulo es área = base × altura.",
      "Sustituimos los valores: área = 10 × 7.48 x 2.",
      "Calculamos el área: área = 149.6 m^2."
      ]
      },
      {
        "ecuacion": "Encuentra el área de un rectángulo inscrito en un círculo si el radio del círculo es 11 y la base tiene longitud 12.",
        "respuestaNumerica": ["Su área es: 221.28 m^2"],
        "unidadRespuesta": ["m^2"],
        "combinacionesRespuesta": ["221.28"],
        "pasos": [
        "Dados los valores: radio = 11, base = 12.",
        "La altura del rectángulo se puede calcular utilizando el teorema de Pitágoras: altura = sqrt(radio^2 - (base/2)^2) = sqrt(11^2 - (12/2)^2) = sqrt(121 - 36) = sqrt(85) = 9.22.",
        "La fórmula para calcular el área de un rectángulo es área = base × altura.",
        "Sustituimos los valores: área = 12 × 9.22 x 2",
        "Calculamos el área: área = 221.28 m^2."
        ]
        },
        {
        "ecuacion": "Si un piso tiene 20 m de largo y 80 m de ancho, ¿cuántos azulejos se necesitan para cubrirlo si cada azulejo tiene un área de 1 m^2?",
        "respuestaNumerica": ["Se necesitan 1600 azulejos"],
        "unidadRespuesta": ["azulejos"],
        "combinacionesRespuesta": ["1600"],
        "pasos": [
        "Dados los valores: largo = 20 m, ancho = 80 m.",
        "La fórmula para calcular el área del piso es área = largo × ancho.",
        "Sustituimos los valores: área = 20 × 80 = 1600 m^2.",
        "Como cada azulejo tiene un área de 1 m^2, se necesitan 1600 azulejos para cubrir el piso."
        ]
        },
        {
          "ecuacion": "Un muro de 10 metros x 4 metros tiene dos ventanas cuadradas de 1 m x 1,5 m y dos ventanas triangularares. Estas ultimas son tringualos equilateros de lado 1.2 metros. Si quiero pintar el muro, ¿cuántos metros cuadrados debo considerar?",
          "respuestaNumerica": ["Debo considerar 35.75 m^2"],
          "unidadRespuesta": ["m^2"],
          "combinacionesRespuesta": ["35.75"],
          "pasos": [
          "Dados los valores: largo = 10 m, ancho = 4 m.",
          "La fórmula para calcular el área del muro es área = largo × ancho.",
          "Sustituimos los valores: área = 10 × 4 = 40 m^2.",
          "Las dos ventanas cuadradas tienen un área total de 2 × (1 × 1,5) = 3 m^2.",
          "Las dos ventanas triangularares tienen un área total de ((b x h)/2)*2, es decir, (b x h)",
          "La base (b) la tenemos es 1.2 pero la altura se debe calcular con pitagoras. h^2 =(1.2)^2+h^2. Es decir h = 1.04",
          "Si remplazamos en la formula del área del tringulo (b x h)/2 sera (1.04 x 1.2)/2 = 0.624 por ventana triangular osea 1.25 m^2 en las dos ventanas",
          "El área total a pintar es área - área ventanas cuadradas - área ventanas triangularares = 40 - 3 - 1,25 = 35.75 m^2."
          ]
          },
          {
            "ecuacion": "Una pared de 8 metros de largo por 6 metros de ancho tiene una puerta cuadrada de 2 metros de lado y una ventana rectangular de 1.5 metros de alto por 1 metro de ancho. Si quiero pintar la pared, ¿cuántos metros cuadrados debo considerar?",
            "respuestaNumerica": ["Debo considerar 42.5 m^2"],
            "unidadRespuesta": ["m^2"],
            "combinacionesRespuesta": ["42.5"],
            "pasos": [
              "Dado los valores: largo = 8 m, ancho = 6 m.",
              "La fórmula para calcular el área de la pared es área = largo × ancho.",
              "Sustituimos los valores: área = 8 × 6 = 48 m^2.",
              "La puerta cuadrada tiene un área de 2 × 2 = 4 m^2.",
              "La ventana rectangular tiene un área de 1.5 × 1 = 1.5 m^2.",
              "El área total a pintar es área - área puerta - área ventana = 48 - 4 - 1.5 = 42.5 m^2."
            ]
          },
          {
            "ecuacion": "Una habitación rectangular mide 12 metros de largo por 5 metros de ancho y 2 de alto. Tiene una ventana cuadrada de 1.5 metros de lado y una puerta rectangular de 2 metros de alto por 1 metro de ancho. Si quiero pintar las paredes, ¿cuántos metros cuadrados debo considerar?",
            "respuestaNumerica": ["Debo considerar 73 m^2"],
            "unidadRespuesta": ["m^2"],
            "combinacionesRespuesta": ["73"],
            "pasos": [
              "Dados los valores: largo = 12 m, ancho = 5 m., alto = 2 m",
              "La fórmula para calcular el área de las paredes es área = 2(largo × altura) + 2(ancho × altura).",
              "Sustituimos los valores: área = 2 × (12 × 2) + 2(5 × 2) = 2 × (24 + 10) = 2 × 34 = 68 m^2.",
              "La ventana cuadrada tiene un área de 1.5 × 1.5 = 2.25 m^2.",
              "La puerta rectangular tiene un área de 2 × 1 = 2 m^2.",
              "El área total a pintar es área - área ventana - área puerta = 68 - 2.25 - 2 = 63.75 m^2."
            ]
          },
          {
          "ecuacion": "Un edificio tiene una planta en forma de trapecio con bases de 15 metros y 20 metros, y una altura de 10 metros. ¿Cuál es el área de la planta del edificio?",
          "respuestaNumerica": ["175 m^2"],
          "unidadRespuesta": ["m^2"],
          "combinacionesRespuesta": ["175"],
          "pasos": [
          "Dados los valores: base1 = 15 m, base2 = 20 m, altura = 10 m",
          "La fórmula para calcular el área de un trapecio es área = (base1 + base2) × altura / 2.",
          "Sustituimos los valores: área = (15 + 20) × 10 / 2 = 35 × 10 / 2 = 175 m^2."
          ]
          },
          {
            "ecuacion": "Un edificio tiene una planta en forma cilindrica de radio 30 metros con un espacio central cilindrico de 14 metros de radio, ambos con una altura de 32 metros. ¿Cuál es el volumen construido del edificio?",
            "respuestaNumerica": ["552.9 m^3"],
            "unidadRespuesta": ["m^3"],
            "combinacionesRespuesta": ["552.9"],
            "pasos": [
            "Este ejercicio es un desafío",
            "Debes llegar al resultado por tu cuenta"
            ]
            },
            {
            "ecuacion": "Un florero con forma cilíndrica tiene un diámetro interior de 12 cm y su altura es de 25 cm. Queremos llenarlo hasta los 2/3 de su capacidad. ¿Cuántos litros de agua necesitamos?",
            "respuestaNumerica": ["Necesitamos 1.884 litros de agua"],
            "unidadRespuesta": ["lts"],
            "combinacionesRespuesta": ["1.884"],
            "pasos": [
            "Este ejercicio es un desafío",
            "Debes llegar al resultado por tu cuenta"
            ]
            },  
            {
            "ecuacion": "Calcula el volumen de una pirámide regular cuya base es un hexágono de 20 cm de lado y su arista lateral es de 29 cm.",
            "respuestaNumerica": ["El volumen es de 7266 cms^3"],
            "unidadRespuesta": ["cms^2"],
            "combinacionesRespuesta": ["7266"],
            "pasos": [
            "Este ejercicio es un desafío",
            "Debes llegar al resultado por tu cuenta, investigando que es una pirámide regular"
            ]
            },
            {
            "ecuacion": "Calcula el volumen en cms^3 de un cono cuya generatriz mide 20 cm y el radio de su base es de 10 cm",
            "respuestaNumerica": ["El volumen es de 1810.7 cms^3"],
            "unidadRespuesta": ["cms^2"],
            "combinacionesRespuesta": ["1810.7"],
            "pasos": [
            "Este ejercicio es un desafío",
            "Debes llegar al resultado por tu cuenta"
            ]
            },  
            {
            "ecuacion": "Calcula el volumen de una pirámide de altura 15 cms y base cuadrada de base 12 cms a la que se le han truncado 5 cms desde la cuspide",
            "respuestaNumerica": ["El volumen es de 693.3 cms^3"],
            "unidadRespuesta": ["cms^2"],
            "combinacionesRespuesta": ["693.3"],
            "pasos": [
            "Este ejercicio es un desafío",
            "Debes llegar al resultado por tu cuenta"
            ]
            }, 
            {
            "ecuacion": "Calcula el volumen en cms^3 de un cono truncado de radio 8 en su base, radio 6 en su cara superior y una altura de 16 cms",
            "respuestaNumerica": ["El volumen es de 2478.5 cms^3"],
            "unidadRespuesta": ["cms^2"],
            "combinacionesRespuesta": ["2478.5"],
            "pasos": [
            "Este ejercicio es un desafío",
            "Debes llegar al resultado por tu cuenta. Debes investigar"
            ]
            }, 
          {
          "ecuacion": "Un cono esta unido a una semi-esfera en su base. El radio de la semi-esfera es 5 cms. La altura del cono es 12 cms. ¿Cúal es el volumen de las figuras sumadas en cms^3?",
          "respuestaNumerica": ["El volumen es de 52.3 cms^3"],
          "unidadRespuesta": ["cms^2"],
          "combinacionesRespuesta": ["52.3"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Una piscina tiene forma de prisma rectangular de dimensiones 25m x 15m x 3m. ¿Cuántos litros de agua son necesarios para llenar los 4/5 de su volumen?",
          "respuestaNumerica": ["Son necesarios 900000 litros"],
          "unidadRespuesta": ["lts"],
          "combinacionesRespuesta": ["900000"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Calcula el volumen de un prisma de base cuadrada de 12 cms con las diagonales de sus caras rectangulares de 37 cms",
          "respuestaNumerica": ["Su volumen equivale a 5040 cms^3"],
          "unidadRespuesta": ["cms^3"],
          "combinacionesRespuesta": ["5040"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Calcula el volumen de una pirámide regular cuya base es un hexágono de 18 cm de lado y su altura es de 40 cm.",
          "respuestaNumerica": ["Su volumen equivale a 11232 cms^3"],
          "unidadRespuesta": ["cms^3"],
          "combinacionesRespuesta": ["11232"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Calcula el volumen de una figura compuesta por un cubo de lado 9 cms sobre el cual se dispone una pirámide de altura 9 cms a la cual se le han truncado 3 cms desde la cuspide",
          "respuestaNumerica": ["Su volumen equivale a 963 cms^3"],
          "unidadRespuesta": ["cms^3"],
          "combinacionesRespuesta": ["963"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "El volumen de un prisma recto, cuyas aristas laterales miden 26 cm, es 5.200 cm3. Determine cuánto mide el radio de la circunferencia que ciscunscribe a la base cuadrada del prisma.",
          "respuestaNumerica": ["El radio de la circunferencia es 10 cms"],
          "unidadRespuesta": ["cms"],
          "combinacionesRespuesta": ["10"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
        },
        {
        "ecuacion": "Un paralelepípedo recto de 164 m2 de área total, tiene 5 m como medida de la diagonal de las bases y 17 m como suma de las 3 dimensiones. Calcule la altura del paralelepípedo.",
        "respuestaNumerica": ["La altura del paralelepipedo es de 10 m"],
        "unidadRespuesta": ["m"],
        "combinacionesRespuesta": ["10"],
        "pasos": [
        "Este ejercicio es un desafío",
        "Debes llegar al resultado por tu cuenta. Debes investigar"
        ]
        },
        {
          "ecuacion": "Un paralelepípedo recto de 164 m2 de área total, tiene 5 m como medida de la diagonal de las bases y 17 m como suma de las 3 dimensiones. Calcule la altura del paralelepípedo.",
          "respuestaNumerica": ["La altura del paralelepipedo es de 10 m"],
          "unidadRespuesta": ["m"],
          "combinacionesRespuesta": ["10"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Un recipiente de forma cúbica contiene 14 m3 de agua. Se introduce un cubo macizo de hierro cuya arista es la mitad de la del recipiente. Si el agua se eleva hasta la parte superior del recipiente, determine el volumen del recipiente.",
          "respuestaNumerica": ["El volumen del recipiente es de 16 m^3"],
          "unidadRespuesta": ["m^3"],
          "combinacionesRespuesta": ["16"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Un recipiente de forma cúbica contiene 14 m3 de agua. Se introduce un cubo macizo de hierro cuya arista es la mitad de la del recipiente. Si el agua se eleva hasta la parte superior del recipiente, determine el volumen del recipiente.",
          "respuestaNumerica": ["El volumen del recipiente es de 16 m^3"],
          "unidadRespuesta": ["m^3"],
          "combinacionesRespuesta": ["16"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "El volumen de una pirámide truncada es de 392 m^3. Si su altura es de 24 m y una de sus bases tiene 9 m^2 de área, determine el área de la otra base.",
          "respuestaNumerica": ["La otra cara tiene un área de 25 m^2"],
          "unidadRespuesta": ["m^2"],
          "combinacionesRespuesta": ["25"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Una pirámide tiene por base un triángulo de lados 13, 14 y 15 m. Las 3 aristas laterales son iguales y miden 20 m. Calcule el volumen de la pirámide.",
          "respuestaNumerica": ["Su volumen es 511.70 m^3"],
          "unidadRespuesta": ["m^3"],
          "combinacionesRespuesta": ["511.70"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "El volumen de un cilindro de 1,60 m de altura es igual a 8 m3. Calcule el volumen de un cono de igual base e igual generatriz que el cilindro.",
          "respuestaNumerica": ["Su volumen es 1.64 m^3"],
          "unidadRespuesta": ["m^3"],
          "combinacionesRespuesta": ["1.64"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Calcule el volumen de un cono de revolución cuya generatriz mide 2 m, y la distancia de este al centro de la base es de 1 m.",
          "respuestaNumerica": ["Su volumen es 2.96 m^3"],
          "unidadRespuesta": ["m^3"],
          "combinacionesRespuesta": ["2.96"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
          "ecuacion": "Un triángulo isósceles de 10 m de base y 8 m de altura gira alrededor de su eje (altura), lo que genera un cono. Calcule el volumen del cono generado",
          "respuestaNumerica": ["Su volumen es 1256 m^3"],
          "unidadRespuesta": ["m^3"],
          "combinacionesRespuesta": ["1256"],
          "pasos": [
          "Este ejercicio es un desafío",
          "Debes llegar al resultado por tu cuenta. Debes investigar"
          ]
          },
          {
            "ecuacion": "Se tiene un triángulo isósceles de 6 m de base y 4 m de altura que gira alrededor de una perpendicular a la base, levantada en uno de sus extremos. Calcule el volumen generado.",
            "respuestaNumerica": ["Su volumen es 226 m^3"],
            "unidadRespuesta": ["m^3"],
            "combinacionesRespuesta": ["226"],
            "pasos": [
            "Este ejercicio es un desafío",
            "Debes llegar al resultado por tu cuenta. Debes investigar"
            ]
            },
            {
              "ecuacion": "El volumen de un cono truncado circular recto es 336π m^3. Si la altura mide 4 m y el radio de la base mayor es el doble del radio de la base menor, ¿cuánto suman ambos radios?",
              "respuestaNumerica": ["Suman 18 metros"],
              "unidadRespuesta": ["m"],
              "combinacionesRespuesta": ["18"],
              "pasos": [
              "Este ejercicio es un desafío",
              "Debes llegar al resultado por tu cuenta. Debes investigar"
              ]
              },
      

          
          








]

const frasesCelebres = [
    'No he tenido nunca más que un maestro: el pasado; una sola formación : el estudio del pasado.' + leCobusier, 'He sacado del pasado la lección de historia, la razón de ser de las cosas. Todo acontecimiento y todo objeto están “en relación a”.' + leCobusier, 'La historia se halla inscrita en los trazados y en las arquitecturas de las ciudades. Mis ideas revolucionarias están en la historia, en toda época y en todos sus países.' + leCobusier, 'La arquitectura es un acto de voluntad consciente. Hacer arquitectura es poner orden.' + leCobusier, 'La arquitectura es el resultado del estado de espíritu de una época.' + leCobusier, 'La arquitectura está más allá de los hechos utilitarios. La arquitectura es un hecho plástico.' + leCobusier, 'La arquitectura es arte en su sentido más elevado, es orden matemático, es teoría pura, armonía completa gracias a la exacta proporción de todas las relaciones: ésta es la “función” de la arquitectura.' + leCobusier, 'La arquitectura preside los destinos de la ciudad. Ordena la estructura de la vivienda, esa célula esencial del trazado urbano, cuya salubridad, alegría y armonía están sometidas a sus decisiones.' + leCobusier, 'Organizar es hacer geometría; hacer geometría en la naturaleza o en el magma surgido “naturalmente” de las agrupaciones de hombres en aglomeraciones urbanas, equivale a hacer cirugía.' + leCobusier, 'El arte, producto de la ecuación “razón-pasión”, es, para mí, el lugar de la felicidad humana.' + leCobusier, 'Lo maravilloso está en la exactitud. Lo duradero está en la perfección. La vida está hecha con un cálculo exacto.' + leCobusier, 'El sueño sólo se apoya sobre realidades esenciales. La poesía sólo procede mediante hechos exactos.' + leCobusier, 'La poesía es un acto humano: las relaciones concertadas entre imágenes perceptibles.' + leCobusier, 'El lirismo sólo tiene alas sobre la verdad. Sólo lo genuino nos conmueve. La arquitectura se propone emoción.' + leCobusier, 'La cosa más importante del mundo son los espacios vacíos.' + leCobusier, 'Charles Édouard Jeanneret, mejor conocido como Le Corbusier, fue una de las mentes más brillantes de la arquitectura moderna, cuyas obras traspasaron la teoría y el arte.', 'Le Corbusier nacío en Suiza y se formó en París, ahí encontró la manera de plasmar la vanguardia y su fascinación por la pintura de forma autodidacta, en estructuras lisas y blancas con volumen.', 'Le Corbusier se distinguió por la planificación urbana de viviendas sociales, al visualizar edificios sin ostentaciones decorativas para potenciar la imagen las ciudades.','Arquitectura es cosa de arte, un fenómeno de emociones, que queda fuera y más allá de las cuestiones constructivas.' + leCobusier, 'El propósito de la construcción es mantener las cosas juntas y el de la arquitectura es deleitarnos' + leCobusier,  'Siempre me interesó lo creativo, sobre todo, lo que se aplica al hombre y a su medio. Con la pintura pude desarrollar todo eso. Es un medio apasionante y peligroso' + leCobusier, 'La arquitectura es el juego sabio, correcto y magnífico de los volúmenes reunidos bajo la luz' + leCobusier, 'Prefiero dibujar a hablar. Dibujar es más rápido, y deja menos espacio para la mentira' + leCobusier, 'Una casa es una máquina para vivir. La casa debe ser el estuche de la vida, la máquina de felicidad' + leCobusier, 'La arquitectura debe de ser la expresión de nuestro tiempo y no un plagio de las culturas pasadas' + leCobusier, 'La geometría solucionará los problemas de la Arquitectura' + leCobusier, 'La arquitectura está reprimida por la costumbre, los estilos son una mentira' + leCobusier, 'La arquitectura es el punto de partida del que quiera llevar a la humanidad hacia un porvenir mejor' + leCobusier, 'Trabajé por lo que más necesitan los hombres hoy: el silencio y la paz' + leCobusier, 'Me impresiona profundamente el diseñador del universo. Estoy convencido de que yo nunca hubiera logrado hacer algo así, ni de lejos. - Richard Buckminster Fuller-','Un proceso de diseño abordado con profundidad puede hacer del promotor, del arquitecto y hasta de un visitante ocasional del edificio seres humanos sensiblemente mejores. -Juhani Pallasmaa-', 'He dicho adiós a la manida idea de que la arquitectura tiene que salvar el mundo. -Peter Zumthor-', 'Nosotros no creamos obras. Creo que, de hecho, somos descubridores.Glenn Murcutt', 'Para mí, cada día es algo nuevo. Me enfrento a cada proyecto con una renovada inseguridad, casi como si fuera el primero, y sudo tinta. Cuando me pongo a ello y empiezo a trabajar, nunca estoy seguro de hacia dónde voy; y si lo supiera, sencillamente no lo haría. -Frank O. Gehry-', 'Cojo el lápiz. El trazo fluye. Aparece un edificio. Ahí está. No hay nada más que decir. -Oscar Niemeyer-', 'Para mí, el lenguaje del dibujo es extremadamente revelador: bastan unos pocos trazos para saber si alguien es un arquitecto de verdad. -Eero Saarinen-', '¿Hay algo más agradable para la mente que el papel inmaculado? ¿Que comparar y estudiar la “variedad” de texturas y colores de tarjetas y papeles? -Frank Lloyd Wright-', 'AMO EL PAPEL. BASTAN UN BUEN MONTÓN DE HOJAS Y UN LÁPIZ PARA HACERME FELIZ. -Cecil Balmond-', 'Prefiero dibujar a hablar. Dibujar es más rápido y deja menos espacio a las mentiras. -Le Corbusier-','He advertido que el ordenador a veces conduce a decisiones y resultados insípidos. Ahora, cualquiera puede proyectar un edificio inestable y en forma de burbuja. -Peter Cook-', 'Siempre digo a mis alumnos: en vuestro trabajo tenéis que poner, en primer lugar, esfuerzo, en segundo, amor y en tercero, sufrimiento. -Glenn Murcutt-', 'Al hacer un proyecto me entra el pánico; eso es bueno, puede ser un método. Primero, el pánico. Segundo, conquistar el pánico con trabajo. Tercero, encontrar formas de resolver tus dudas. Eduardo Souto de Moura', 'Estudié arte y después arquitectura, y nunca sentí la necesidad de definirme claramente como arquitecta profesional o como artista: encontré una especie de terreno intermedio contaminado por ambos campos. -Elizabeth Diller-','Muchos arquitectos no son conscientes de sus propios patrones, como tampoco la mayoría de las personas lo son de los que rigen su vida privada. Nos atrae mucho esa cuestión, pues de repente acerca mucho la arquitectura y la psicología. -Jacques Herzog-', 'Siempre he sentido que lo más importante es encontrar la forma de escapar del esquema mental o de la conciencia estética con los que cargo. -Arata Isozaki-', 'EN UNA ARQUITECTURA PURA, EL MÁS NIMIO DETALLE DEBE TENER UN SENTIDO O SERVIR A ALGÚN PROPÓSITO. -Augustus W. N. Pugin-', 'Recuerda que las cosas más bellas del mundo son las más inútiles, como, por ejemplo, los pavos reales y los lirios. -John Ruskin-', 'No quiero desnudar la arquitectura. Quiero enriquecerla y añadirle capas. Básicamente, como sucede en una catedral gótica, donde el ornamento y la estructura forman una alianza. -Cecil Balmond-', 'Menos es más. -Ludwig Mies van der Rohe-', 'Menos es aburrido. -Robert Venturi-', 'Existe una cualidad genérica en el blanco que nos gusta. -Kazuyo Sejima-', 'Siempre trato de pensar con curvas. -Greg Lynn-', 'La forma siempre sigue a la función. -Louis H. Sullivan-', 'La forma sigue a la forma, no a la función. -Philip Johnson-', 'La forma sigue al beneficio” es el principio estético de nuestros tiempos. -Richard Rogers-', 'Una silla es un objeto muy difícil. Un rascacielos es casi más fácil. Por eso el mobiliario Chippendale es famoso. -Ludwig Mies van der Rohe-', 'EL DESEO DE TOCAR EL CIELO ESTÁ PROFUNDAMENTE ARRAIGADO EN LA PSIQUE HUMANA. -Cesar Pelli -', 'Proyecto cualquier cosa que me pidan, desde una catedral hasta un gallinero. Así es como me gano la vida. -Henry Hobson Richardson-','Nunca rechaces un encargo porque pienses que no está a tu altura. -Julia Morgan-', 'El proyecto ideal no existe. Existe la posibilidad de aproximarse a él en cada ocasión. -Paulo Mendes da Rocha-', 'Cuando le preguntas a un arquitecto cuál es su mejor edificio, suele contestar: el próximo. -Emilio Ambasz-', 'Cuidado con el exceso de confianza; sobre todo en cuestiones de estructura. -Cass Gilbert-', 'TAL VEZ NO SEA EL MÁS INTERESANTE DE LOS ARQUITECTOS, PERO SIGO ESTANDO AHÍ Y HE SABIDO MANTENER CIERTA INTEGRIDAD. -David Chipperfield-', 'Estoy absolutamente en contra de lo heroico. Nosotros hacemos cosas pequeñas. Estamos absolutamente a favor de lo patético. -Michael Meredith-', 'Básicamente, la idea es que, con todo el mundo tratando de ser revolucionario, serás más revolucionario si tratas de ser ordinario. -Denise Scott Brown-', 'La mejor de las formas ya está lista y nadie debería tener miedo de utilizarla, incluso si su idea básica procede de algún otro. Basta de genios y de originalidad. -Adolf Loos-','Si no te ves capaz de hacer del mundo un lugar mejor con tu trabajo, al menos asegúrate de no empeorarlo. -Herman Hertzberger-', 'Nunca reutilizo ideas. Una vez he usado una, se acabó. -Arthur Erickson-', 'Tener 65 ideas para solucionar un problema no es una muestra de creatividad. Es un desperdicio de energía. -Jan Kaplický-', 'Algo tan común como la pintura para una casa puede resultar fascinante cuando se pule hasta lograr un acabado espejado. -Tod Williams-', 'El juego de luces y sombras, de sólidos y huecos, puede apreciarse mejor contra una superficie blanca. -Richard Meier-', 'LA LUZ NO ES ALGO VAGO Y DIFUSO QUE PUEDA DARSE POR SENTADO POR EL MERO HECHO DE QUE ESTÁ SIEMPRE AHÍ. EL SOL NO SALE EN VANO CADA DÍA. -Alberto Campo Baeza-', 'Cada material tiene sus propias sombras. La sombra de la piedra no es la misma que la de una frágil hoja de otoño. La sombra penetra en el material e irradia su mensaje. -Sverre Fehn-', 'El Sol no supo de su grandeza hasta que incidió sobre la cara de un edificio. -Louis I. Kahn-', 'Siempre busco más luz y más espacio. -Santiago Calatrava-', 'LA ARQUITECTURA ESTÁ LIGADA AL EMPLAZAMIENTO Y, EN MI OPINIÓN, EL LUGAR ES COMO UN VÍNCULO METAFÍSICO Y POÉTICO CON AQUELLO QUE UN EDIFICO PUEDE LLEGAR A SER. -Steven Holl-', 'El diseño de edificios en entornos naturales, sean urbanos o rurales, debe responder al terreno sobre el que se levantan y al cielo contra el que se proyectan. -James Polshek-', '¿De dónde sale la idea de que nuestras calles tienen que parecer creadas por el mismo cliente o el mismo arquitecto? La diversidad, y no su contrario, es lo que nos atrae. -Günter Behnisch-', 'La incoherencia en sí genera vitalidad. -Kenzo Tange-', 'PUEDES CERRAR UN LIBRO MALO, PUEDES EVITAR ESCUCHAR MÚSICA MALA, PERO NO PUEDES LIBRARTE DE LA TORRE HORROROSA QUE TIENES FRENTE A TU CASA. -Renzo Piano-', 'Siempre me sorprende el poco énfasis que ponen las escuelas de arquitectura y, de hecho, muchos arquitectos en el proceso de integración de un edificio. -Norman Foster-', 'No puedes limitarte a poner algo nuevo en un lugar. Tienes que absorber lo que ves a tu alrededor, lo que existe ya en el terreno, y después usar ese conocimiento, junto con el pensamiento contemporáneo, para interpretar lo que ves. -Tadao Ando-', 'UN ARQUITECTO QUE PROYECTA REALMENTE PARA UN SER HUMANO TIENE QUE SABER BASTANTE MÁS QUE LOS CINCO CÁNONES DE VITRUVIO. -Richard Neutra-', 'Creo que los edificios deben imitar los sistemas ecológicos. -Ken Yeang-', 'UTILIZO MATERIALES BARATOS. -Herman Hertzberger-', 'Creo que para construir un edificio sólido no hace falta usar un material resistente. La solidez de un edificio no tiene nada que ver con la resistencia del material. -Shigeru Ban-', 'Creo que para construir un edificio sólido no hace falta usar un material resistente. La solidez de un edificio no tiene nada que ver con la resistencia del material. -Shigeru Ban-', 'Trato de contrarrestar la permanencia de los edificios, su imperturbabilidad, con elementos que confieran una inefable cualidad inmaterial. -Toyo Ito-','Con independencia de su belleza, la fachada y los muros de una casa, una iglesia o un palacio tan solo son un continente, una caja formada por paredes.El contenido es el espacio interior. -Bruno Zevi-', 'El espacio, el espacio... ¡los arquitectos siempre hablan del espacio! Pero crear un espacio no comporta, automáticamente, hacer arquitectura. Con el mismo espacio puedes hacer una obra maestra o provocar un desastre. -Jean Nouvel-', 'Recuerdo que, cuando era niño, solíamos tirar el balón desde la ventana del primer piso. Nunca íbamos a un espacio especialmente pensado para jugar; el espacio de juego se establecía en el momento de jugar. El juego era inspiración, no organización. -Louis I. Kahn-', 'Yo mismo estoy instalado en una oficina sin ventanas y con aire acondicionado, una especie de celda. Mis visitantes son conscientes de este hecho, lo que les induce a ser concisos e ir al grano. -Le Corbusier-', 'No sé por qué la gente contrata arquitectos para luego decirles lo que tienen que hacer. -Frank O. Gehry-', 'CREO QUE LAS RESTRICCIONES SON MUY IMPORTANTES. SON POSITIVAS PORQUE TE PERMITEN TRABAJAR A PARTIR DE ALGO. -Charles Gwathmey-', 'Odiábamos a la Bauhaus.Fue un mal momento para la arquitectura. Simplemente no tenían talento; todo lo que tenían era reglas. Hasta para los cuchillos y los tenedores crearon reglas. Picasso nunca hubiera aceptado reglas. ¿La casa es una máquina? ¡No! Lo mecánico es feo. La regla es lo peor que hay. Solo te hace querer romperla. -Oscar Niemeyer-', 'Si tienes libertad total, entonces tienes un problema. Es mucho mejor tener alguna obligación, cierta disciplina, algunas reglas. Cuando no tienes reglas, acabas por construirte las tuyas propias. -Renzo Piano-', 'La gente que construye su propia casa suele ser muy valiente. Son personas con curiosidad por la vida. Piensan en lo que significa vivir en una casa en lugar de limitarse a comprar un bien y darle uso. -Tom Kundig-', 'ODIO LAS VACACIONES. ¿PARA QUÉ ESTAR EN LA PLAYA SI PUEDES ESTAR CONSTRUYENDO EDIFICIOS? -Philip Johnson-', 'Siempre estamos trabajando con coreógrafos y directores, expertos en robótica y diferentes científicos e investigadores. Nos interesan siempre los vínculos y cruces entre disciplinas.-Elizabeth Diller-', 'Deberíamos aprender desde niños las posibilidades que ofrece nuestro entorno, las leyes físicas y psicológicas que gobiernan el mundo visual, y el goce supremo que produce participar del proceso creativo por el que uno da forma a su propio espacio vital. -Walter Gropius-', 'Prefiero trabajar con la holgura del lápiz que con la precisión de la tinta o del ordenador. -Thom Mayne-', 'ENTRE EL AÑO 1990 Y EL 2000 NO TUVE ENCARGOS, Y NO QUISE TAMPOCO UN PUESTO ACADÉMICO O EN EL GOBIERNO. SOLO QUERÍA TRABAJAR CON ARTESANOS, ADQUIRIR EXPERIENCIA SOBRE EL TERRENO Y NO SER RESPONSABLE DEL DISEÑO, SOLO DE LA CONSTRUCCIÓN. -Wang Shu-', 'Deberíamos trabajar para hacer nuestro mundo comprensible y no para volverlo aún más confuso. Cuando algo parece madera debería ser madera, y el hierro ser hierro. -Günter Behnisch-', 'Siempre considero un edificio como parte de un todo, una pieza que crea una acción colectiva: la ciudad. -Christian de Portzamparc-', 'TODA OBRA DE ARQUITECTURA QUE NO EXPRESE SERENIDAD ES UN ERROR. -Luis Barragán-', 'LA ARQUITECTURA QUE RECORDAMOS ES AQUELLA QUE NUNCA NOS CONSUELA O RECONFORTA. -Peter Eisenman-', 'Soy un arquitecto que construye y, por tanto, soy optimista. Ser optimista es un prerrequisito para todo aquel que quiera construir, porque la construcción tiene que ver con el optimismo, con encarar el futuro con confianza. -Cesar Pelli-', 'LO QUE MOTIVA ES TRABAJAR SOBRE LA DESAPARICIÓN, SOBRE LOS LÍMITES ENTRE LA PRESENCIA Y LA AUSENCIA DE LA ARQUITECTURA. -Dominique Perrault-', 'En realidad, algunas imágenes y dibujos tienen un impacto mayor que muchos edificios que llegan a construirse. -Emilio Ambasz-', 'Me gustan las ruinas porque lo que queda en ellas no es el diseño total, sino la claridad del pensamiento, la nuda estructura, el espíritu de la cosa. -Tadao Ando-', 'Piensa hasta el final:considera el final primero. -Leonardo da Vinci-'           



]

// Función para mostrar un problema aleatorio
function fraseAleatoria() {
    // Seleccionar aleatoriamente una frase
    //fraseRandom = frasesCelebres[Math.floor(Math.random() * frasesCelebres.length)];
    //console.log(fraseRandom);

    let fechaHoraActual = new Date();
    // Extraer los componentes de la fecha y hora
    let dia = fechaHoraActual.getDate();
    let hora = fechaHoraActual.getHours();
    let minutos = fechaHoraActual.getMinutes();
    let segundos = fechaHoraActual.getSeconds();
    

    // Concatenar y formatear el número
    let numeroUnico = `${dia}${hora}${minutos}${segundos}`;

    let fechaHoraEncriptada = Math.floor(numeroUnico/Math.PI); 
    fraseRandom = fechaHoraEncriptada;
    

    //console.log("Fecha y Hora Encriptada:", fechaHoraEncriptada);
    
    // Actualizar el contenido del elemento problemaMat
    fraseElegida.innerHTML = "Tu código es : " + `${fraseRandom}` + "<br>" + " Este código es único, no se repite nunca. Anótalo en tu guía para verificar tu resultado";
    
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

    } else if (seleccion === "sistemasEcuaciones") {
        problemasMatematicos = problemasSistemasEcuaciones;
        // Ocultar el select de unidades y aumentar el tamaño del textarea
        selectUnidades.style.display = "none";
        textareaEcuaciones.style.width = "50%";
        advertencia.innerHTML = `${"¡Importante! Debes ingresar dos valores(x e y) separados por una coma (sin letras), estos pueden ser fracciones o numeros. Por ejemplo 35/56, 25/3 "}`;

    } else if (seleccion === "ecuacionesSegundoGrado") {
        problemasMatematicos = problemasEcuacionesSegundoGrado;
        // Ocultar el select de unidades y aumentar el tamaño del textarea
        selectUnidades.style.display = "none";
        textareaEcuaciones.style.width = "50%";
        advertencia.innerHTML = `${"¡Importante! Si aparece x^2 esto equivale a x elevado a 2. Si aparece sqrt(x+2) esto equivale a raiz cuadrada de (x+2). Debes ingresar dos valores separados por una coma (sin letras). Si el ejercicio tiene un solo resultado ingresalo dos veces separado por una coma."}`;
    } else if (seleccion === "areasYVolumenes") {
      problemasMatematicos = problemasAreasYVolumenes;
      // Ocultar el select de unidades y aumentar el tamaño del textarea
      selectUnidades.style.display = "none";
      textareaEcuaciones.style.width = "50%";
      advertencia.innerHTML = `${"¡Importante! Si aparece x^2 esto equivale a x elevado a 2. Si aparece sqrt(x+2) esto equivale a raiz cuadrada de (x+2). Debes ingresar un valor (sin letras). Si tiene decimales debes usar punto."}`;


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
    } else if (seleccion === "sistemasEcuaciones") {
        revisarResultadosSistemasEcuaciones();
    } else if (seleccion === "ecuacionesSegundoGrado") {
        revisarResultadosEcuacionesSegundoGrado();
    } else if (seleccion === "areasYVolumenes") {
        revisarResultadosAreasYVolumenes();
    }
}    

// Crear un arreglo para almacenar los problemas ya mostrados
let problemasMostrados = [];

// Función para mostrar un problema aleatorio
function mostrarProblemaAleatorio() {
  // Seleccionar aleatoriamente un problema
 
  do {
    problemaAleatorio = problemasMatematicos[Math.floor(Math.random() * problemasMatematicos.length)];
  } while (problemasMostrados.includes(problemaAleatorio));

  // Agregar el problema seleccionado al arreglo de problemas mostrados
  problemasMostrados.push(problemaAleatorio);

  console.log(problemaAleatorio);

  // Actualizar el contenido del elemento problemaMat
  problemaMat.innerHTML = `${problemaAleatorio.ecuacion}`;
  // Mostrar un botón para mostrar las respuestas y los pasos
    
  document.querySelector(".btnCopiar").classList.add("ocultar");
  document.querySelector(".incorrecta").classList.add("ocultar");
  document.querySelector(".btnRepaso").classList.add("ocultar");
  document.querySelector(".repaso").classList.add("ocultar");

  // Asignar los valores a las variables globales
  respuestaOficial.innerHTML = `${problemaAleatorio.respuestaNumerica.join("")}`;
  pasoApaso.innerHTML = `${problemaAleatorio.pasos.join("")}`;
  return problemaAleatorio;
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

//Aun tiene problemas para revisar fracciones negativas
function revisarResultadosSistemasEcuaciones() {

    let resultadoUsuario = respuesta.value.trim().replace(/\s/g, ''); // Eliminar espacios en blanco

    // Separar cada una de las respuestas por una coma
    let respuestasUsuario = resultadoUsuario.split(',');

    // Verificar si el usuario ingresó exactamente dos respuestas
    if (respuestasUsuario.length !== 2) {
        mostrarResultadoIncorrecto();
        return;
    }

        // Convertir fracciones en números decimales para las respuestas del usuario
    respuestasUsuario = respuestasUsuario.map(respuesta => {
        let fraccion = respuesta.match(/^(-?\d+)\/(\d+)$/); // Verificar si es una fracción
        if (fraccion) {
            let numerador = parseInt(fraccion[1], 10);
            let denominador = parseInt(fraccion[2], 10);
            let numeroDecimal = numerador / denominador; // Convertir a decimal
            return respuesta.includes('-') ? -numeroDecimal : numeroDecimal; // Mantener el signo negativo si es una fracción negativa
        } else {
            return parseFloat(respuesta); // Convertir a decimal si no es una fracción
        }
    });

    console.log("Respuestas del Usuario:", respuestasUsuario);

    // Obtener las respuestas correctas y convertir fracciones en números decimales
    let respuestasCorrectas = problemaAleatorio.combinacionesRespuesta.map(respuesta => {
        let fraccion = respuesta.match(/^(-?\d+)\/(\d+)$/); // Verificar si es una fracción
        if (fraccion) {
            let numerador = parseInt(fraccion[1], 10);
            let denominador = parseInt(fraccion[2], 10);
            let numeroDecimal = numerador / denominador; // Convertir a decimal
            return respuesta.includes('-') ? -numeroDecimal : numeroDecimal; // Mantener el signo negativo si es una fracción negativa
        } else {
            return parseFloat(respuesta); // Convertir a decimal si no es una fracción
        }
    });

    console.log("Respuestas Correctas:", respuestasCorrectas);


    // Calcular el margen de error individual para cada respuesta del usuario en comparación con cada respuesta correcta
    let margenError = 0.05; // 5% de margen de error
    let respuestasCorrectasConMargen = respuestasCorrectas.map((respuesta, index) => {
        let margen = Math.abs(respuesta) * margenError; // Calcula el margen de error basado en el valor absoluto de la respuesta correcta
        return {
            minimo: respuesta - margen,
            maximo: respuesta + margen
        };
    });

    console.log("Respuesta Correctas con Margen", respuestasCorrectasConMargen);

    // Verificar si las respuestas del usuario están contenidas en las respuestas correctas con margen de error
    let todasLasRespuestasCorrectas = respuestasUsuario.every(respuestaUsuario => {
        return respuestasCorrectasConMargen.some(respuestaCorrectaConMargen => {
            return respuestaUsuario >= respuestaCorrectaConMargen.minimo && respuestaUsuario <= respuestaCorrectaConMargen.maximo;
        });
    });

    console.log("Todas las repuestas Correctas:", todasLasRespuestasCorrectas);

    // Si todas las respuestas del usuario están dentro del margen de error de al menos una respuesta correcta, mostrar resultado correcto
    if (todasLasRespuestasCorrectas) {
        mostrarResultadoCorrecto();
    } else {
        mostrarResultadoIncorrecto();
    }
    return;
}

function revisarResultadosEcuacionesSegundoGrado() {

    let resultadoUsuario = respuesta.value.trim().replace(/\s/g, ''); // Eliminar espacios en blanco

    // Separar cada una de las respuestas por una coma
    let respuestasUsuario = resultadoUsuario.split(',');

    // Verificar si el usuario ingresó exactamente dos respuestas
    if (respuestasUsuario.length !== 2) {
        mostrarResultadoIncorrecto();
        return;
    }

    // Convertir fracciones en números decimales para las respuestas del usuario
    respuestasUsuario = respuestasUsuario.map(respuesta => {
        let fraccion = respuesta.match(/^(-?\d+)\/(\d+)$/); // Verificar si es una fracción
        if (fraccion) {
            let numerador = parseInt(fraccion[1], 10);
            let denominador = parseInt(fraccion[2], 10);
            let numeroDecimal = numerador / denominador; // Convertir a decimal
            return parseFloat(respuesta) < 0 ? -numeroDecimal : numeroDecimal; // Mantener el signo negativo si es una fracción negativa
        } else {
            return parseFloat(respuesta); // Convertir a decimal si no es una fracción
        }
    });

    console.log("Respuestas del Usuario:", respuestasUsuario);

    // Obtener las respuestas correctas y convertir fracciones en números decimales
    let respuestasCorrectas = problemaAleatorio.combinacionesRespuesta.map(respuesta => {
        let fraccion = respuesta.match(/^(-?\d+)\/(\d+)$/); // Verificar si es una fracción
        if (fraccion) {
            let numerador = parseInt(fraccion[1], 10);
            let denominador = parseInt(fraccion[2], 10);
            let numeroDecimal = numerador / denominador; // Convertir a decimal
            return parseFloat(respuesta) < 0 ? -numeroDecimal : numeroDecimal; // Mantener el signo negativo si es una fracción negativa
        } else {
            return parseFloat(respuesta); // Convertir a decimal si no es una fracción
        }
    });

    console.log("Respuestas Correctas:", respuestasCorrectas);

    // Calcular el margen de error individual para cada respuesta del usuario en comparación con cada respuesta correcta
    let margenError = 0.05; // 5% de margen de error
    let respuestasCorrectasConMargen = respuestasCorrectas.map((respuesta, index) => {
        let margen = Math.abs(respuesta) * margenError; // Calcula el margen de error basado en el valor absoluto de la respuesta correcta
        return {
            minimo: respuesta - margen,
            maximo: respuesta + margen
        };
    });

    console.log("Respuesta Correctas con Margen", respuestasCorrectasConMargen);

    // Verificar si las respuestas del usuario están contenidas en las respuestas correctas con margen de error
    let todasLasRespuestasCorrectas = respuestasUsuario.every(respuestaUsuario => {
        return respuestasCorrectasConMargen.some(respuestaCorrectaConMargen => {
            return respuestaUsuario >= respuestaCorrectaConMargen.minimo && respuestaUsuario <= respuestaCorrectaConMargen.maximo;
        });
    });

    console.log("Todas las repuestas Correctas:", todasLasRespuestasCorrectas);

    // Si todas las respuestas del usuario están dentro del margen de error de al menos una respuesta correcta, mostrar resultado correcto
    if (todasLasRespuestasCorrectas) {
        mostrarResultadoCorrecto();
    } else {
        mostrarResultadoIncorrecto();
    }
    return;
}

function revisarResultadosAreasYVolumenes() {

  let resultadoUsuario = respuesta.value.trim().replace(/\s/g, ''); // Eliminar espacios en blanco

  // Separar cada una de las respuestas por una coma
  let respuestasUsuario = resultadoUsuario.split(',');

  // Convertir fracciones en números decimales para las respuestas del usuario
  respuestasUsuario = respuestasUsuario.map(respuesta => {
      let fraccion = respuesta.match(/^(-?\d+)\/(\d+)$/); // Verificar si es una fracción
      if (fraccion) {
          let numerador = parseInt(fraccion[1], 10);
          let denominador = parseInt(fraccion[2], 10);
          let numeroDecimal = numerador / denominador; // Convertir a decimal
          return parseFloat(respuesta) < 0 ? -numeroDecimal : numeroDecimal; // Mantener el signo negativo si es una fracción negativa
      } else {
          return parseFloat(respuesta); // Convertir a decimal si no es una fracción
      }
  });

  console.log("Respuestas del Usuario:", respuestasUsuario);

  // Obtener las respuestas correctas y convertir fracciones en números decimales
  let respuestasCorrectas = problemaAleatorio.combinacionesRespuesta.map(respuesta => {
      let fraccion = respuesta.match(/^(-?\d+)\/(\d+)$/); // Verificar si es una fracción
      if (fraccion) {
          let numerador = parseInt(fraccion[1], 10);
          let denominador = parseInt(fraccion[2], 10);
          let numeroDecimal = numerador / denominador; // Convertir a decimal
          return parseFloat(respuesta) < 0 ? -numeroDecimal : numeroDecimal; // Mantener el signo negativo si es una fracción negativa
      } else {
          return parseFloat(respuesta); // Convertir a decimal si no es una fracción
      }
  });

  console.log("Respuestas Correctas:", respuestasCorrectas);

  // Calcular el margen de error individual para cada respuesta del usuario en comparación con cada respuesta correcta
  let margenError = 0.05; // 5% de margen de error
  let respuestasCorrectasConMargen = respuestasCorrectas.map((respuesta, index) => {
      let margen = Math.abs(respuesta) * margenError; // Calcula el margen de error basado en el valor absoluto de la respuesta correcta
      return {
          minimo: respuesta - margen,
          maximo: respuesta + margen
      };
  });

  console.log("Respuesta Correctas con Margen", respuestasCorrectasConMargen);

  // Verificar si las respuestas del usuario están contenidas en las respuestas correctas con margen de error
  let todasLasRespuestasCorrectas = respuestasUsuario.every(respuestaUsuario => {
      return respuestasCorrectasConMargen.some(respuestaCorrectaConMargen => {
          return respuestaUsuario >= respuestaCorrectaConMargen.minimo && respuestaUsuario <= respuestaCorrectaConMargen.maximo;
      });
  });

  console.log("Todas las repuestas Correctas:", todasLasRespuestasCorrectas);

  // Si todas las respuestas del usuario están dentro del margen de error de al menos una respuesta correcta, mostrar resultado correcto
  if (todasLasRespuestasCorrectas) {
      mostrarResultadoCorrecto();
  } else {
      mostrarResultadoIncorrecto();
  }
  return;
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

    } else if (seleccion === "sistemasEcuaciones") {
        window.open("https://es.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:introduction-to-systems-of-equations/v/trolls-tolls-and-systems-of-equations");
    } else if (seleccion === "ecuacionesSegundoGrado") {
        window.open("https://es.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:quadratic-formula-a1/v/using-the-quadratic-formula");
    } else if (seleccion === "areasYVolumenes") {
      window.open("https://es.khanacademy.org/math/basic-geo/basic-geo-area-and-perimeter/basic-geo-unit-squares-area/v/introduction-to-area-and-unit-squares");
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

