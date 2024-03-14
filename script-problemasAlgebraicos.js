


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

// Obtener la unidad seleccionada por el usuario
let unidadUsuario = document.getElementById("unidad").value.trim();

const problemasMatematicos = [
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
          'Calcular el área total de la habitación: largo x ancho.',
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
          'Calcular el área total del suelo del balcón: largo x ancho.',
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
          'Calcular el volumen de un bloque de hormigón: largo x ancho x alto.',
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
          'Calcular el volumen de la canalización: largo x ancho x altura.'
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
            "ecuacion": "Desarrolla la expresión y reduce sus términos semenjantes :  -3(3x - 4).",
            "respuestaNumerica": ["Expresión desarrollada:", "-9x + 12"],
            "unidadRespuesta": [],
            "pasos": [
            "Multiplica cada término dentro del paréntesis por -3: -3 · 3x = -9x, y -3 · (-4) = 12."
            ]
        },
        {
            "ecuacion": "Desarrolla la expresión y reduce sus términos semenjantes :  4(2x + 7).",
            "respuestaNumerica": ["Expresión desarrollada:", "8x + 28"],
            "unidadRespuesta": [],
            "pasos": [
            "Multiplica cada término dentro del paréntesis por 4: 4 · 2x = 8x, y 4 · 7 = 28."
            ]
        },
        {
            "ecuacion": "Desarrolla la expresión y reduce sus términos semenjantes :  3(5x - 2).",
            "respuestaNumerica": ["Expresión desarrollada:", "15x - 6"],
            "unidadRespuesta": [],
            "pasos": [
            "Multiplica cada término dentro del paréntesis por 3: 3 · 5x = 15x, y 3 · (-2) = -6."
            ]
        },
        
             
            
            




                    
]
      
console.log(problemasMatematicos.length);

const frasesCelebres = [
    'No he tenido nunca más que un maestro: el pasado; una sola formación: el estudio del pasado.' + leCobusier,
    'He sacado del pasado la lección de historia, la razón de ser de las cosas. Todo acontecimiento y todo objeto están “en relación a”.' + leCobusier, 'La historia se halla inscrita en los trazados y en las arquitecturas de las ciudades. Mis ideas revolucionarias están en la historia, en toda época y en todos sus países.' + leCobusier, 'La arquitectura es un acto de voluntad consciente. Hacer arquitectura es poner orden.' + leCobusier, 'La arquitectura es el resultado del estado de espíritu de una época.' + leCobusier, 'La arquitectura está más allá de los hechos utilitarios. La arquitectura es un hecho plástico.' + leCobusier, 'La arquitectura es arte en su sentido más elevado, es orden matemático, es teoría pura, armonía completa gracias a la exacta proporción de todas las relaciones: ésta es la “función” de la arquitectura.' + leCobusier, 'La arquitectura preside los destinos de la ciudad. Ordena la estructura de la vivienda, esa célula esencial del trazado urbano, cuya salubridad, alegría y armonía están sometidas a sus decisiones.' + leCobusier, 'Organizar es hacer geometría; hacer geometría en la naturaleza o en el magma surgido “naturalmente” de las agrupaciones de hombres en aglomeraciones urbanas, equivale a hacer cirugía.' + leCobusier, 'El arte, producto de la ecuación “razón-pasión”, es, para mí, el lugar de la felicidad humana.' + leCobusier, 'Lo maravilloso está en la exactitud. Lo duradero está en la perfección. La vida está hecha con un cálculo exacto.' + leCobusier, 'El sueño sólo se apoya sobre realidades esenciales. La poesía sólo procede mediante hechos exactos.' + leCobusier, 'La poesía es un acto humano: las relaciones concertadas entre imágenes perceptibles.' + leCobusier, 'El lirismo sólo tiene alas sobre la verdad. Sólo lo genuino nos conmueve. La arquitectura se propone emoción.' + leCobusier, 'La cosa más importante del mundo son los espacios vacíos.' + leCobusier, 'Charles Édouard Jeanneret, mejor conocido como Le Corbusier, fue una de las mentes más brillantes de la arquitectura moderna, cuyas obras traspasaron la teoría y el arte.', 'Le Corbusier nacío en Suiza y se formó en París, ahí encontró la manera de plasmar la vanguardia y su fascinación por la pintura de forma autodidacta, en estructuras lisas y blancas con volumen.', 'Le Corbusier se distinguió por la planificación urbana de viviendas sociales, al visualizar edificios sin ostentaciones decorativas para potenciar la imagen las ciudades.','Arquitectura es cosa de arte, un fenómeno de emociones, que queda fuera y más allá de las cuestiones constructivas.' + leCobusier, 'El propósito de la construcción es mantener las cosas juntas y el de la arquitectura es deleitarnos' + leCobusier,  'Siempre me interesó lo creativo, sobre todo, lo que se aplica al hombre y a su medio. Con la pintura pude desarrollar todo eso. Es un medio apasionante y peligroso' + leCobusier, 'La arquitectura es el juego sabio, correcto y magnífico de los volúmenes reunidos bajo la luz' + leCobusier, 'Prefiero dibujar a hablar. Dibujar es más rápido, y deja menos espacio para la mentira' + leCobusier, 'Una casa es una máquina para vivir. La casa debe ser el estuche de la vida, la máquina de felicidad' + leCobusier, 'La arquitectura debe de ser la expresión de nuestro tiempo y no un plagio de las culturas pasadas' + leCobusier, 'La geometría solucionará los problemas de la Arquitectura' + leCobusier, 'La arquitectura está reprimida por la costumbre, los estilos son una mentira' + leCobusier, 'La arquitectura es el punto de partida del que quiera llevar a la humanidad hacia un porvenir mejor' + leCobusier, 'Trabajé por lo que más necesitan los hombres hoy: el silencio y la paz' + leCobusier          



]

// Función para mostrar un problema aleatorio
function fraseAleatoria() {
    // Seleccionar aleatoriamente un problema
    fraseRandom = frasesCelebres[Math.floor(Math.random() * frasesCelebres.length)];

    //console.log(fraseRandom);

    // Actualizar el contenido del elemento problemaMat
    fraseElegida.innerHTML = `${fraseRandom}`;
    
}

//import problemasMatematicos from './script-problemasUnidades.js';

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

    // Asignar los valores a las variables globales
    respuestaOficial.innerHTML = `${problemaAleatorio.respuestaNumerica.join("<br>")}`;
    pasoApaso.innerHTML = `${problemaAleatorio.pasos.join("<br><br>")}`;
}

// Llamada a la función para inicializar las variables globales

function revisarResultado() {
    // Obtener el resultado ingresado por el usuario desde el textarea
    let resultadoUsuario = respuesta.value.trim();
    let unidadUsuario = document.getElementById("unidad").value.trim();

    // Si no se ingresa ninguna respuesta, mostrar un mensaje de error
    if (!resultadoUsuario) {
        alert("Debes ingresar una respuesta.");
        return;
    }

    // Verificar si la respuesta contiene letras
    if (/[a-zA-Z]/.test(resultadoUsuario)) {
        // Si contiene letras, verificar si la respuesta es correcta
        if (esRespuestaCorrectaConLetras(resultadoUsuario)) {
            mostrarResultadoCorrecto();
        } else {
            mostrarResultadoIncorrecto();
        }
        return;
    }

    try {
        // Limpiar y aproximar las respuestas del usuario con margen de error
        let respuestasUsuarioAproximadas = limpiarYAproximarRespuestasConMargen(resultadoUsuario.split(','));

        // Limpiar y aproximar las respuestas correctas con margen de error
        let respuestasCorrectasAproximadas = limpiarYAproximarRespuestasConMargen(problemaAleatorio.respuestaNumerica);

        // Obtener la unidad de la respuesta correcta
        let unidadRespuestaCorrecta = problemaAleatorio.unidadRespuesta.join("");

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
    // Respuesta correcta del problema
    let respuestaCorrecta = problemaAleatorio.respuestaNumerica[1].replace(/\s/g, '');
    
    console.log("Respuesta Correcta:", respuestaCorrecta);

    // Eliminar espacios y convertir a minúsculas la respuesta del usuario
    resultadoUsuario = resultadoUsuario.replace(/\s/g, '').toLowerCase();

    console.log("Resultado usuario sin normalizar:", resultadoUsuario);
    // Normalizar la respuesta del usuario
    let resultadoUsuarioNormalizado = normalizarRespuesta(resultadoUsuario);


    console.log("Resultado usuario normalizado:", resultadoUsuarioNormalizado);
    console.log("Resultado correcta normalizado:", normalizarRespuesta(respuestaCorrecta));
    // Verificar si la respuesta normalizada del usuario coincide con la respuesta correcta
    return resultadoUsuarioNormalizado === normalizarRespuesta(respuestaCorrecta);
    

}




function normalizarRespuesta(respuesta) {
    // Dividir la respuesta en términos
    let terminos = respuesta.match(/[-+]?\s*\d*(?:\/\d+)?(?:\^\d+)?\s*[a-z]*|[+*\/-]/gi) || [];

    // Separar términos numéricos y con letras
    let terminosNumericos = [];
    let terminosConLetras = [];
    let operadores = [];

    terminos.forEach(termino => {
        if (termino.match(/[a-z]/i)) {
            terminosConLetras.push(termino);
        } else if (termino.match(/[+*\/-]/)) {
            operadores.push(termino);
        } else {
            terminosNumericos.push(termino);
        }
    });

    // Ordenar términos con letras alfabéticamente
    terminosConLetras.sort();

    // Ordenar términos numéricos de menor a mayor
    terminosNumericos.sort((a, b) => parseFloat(a) - parseFloat(b));

    // Normalizar términos con letras
    let terminosObj = {};

    terminosConLetras.forEach(termino => {
        // Extraer el coeficiente y el término sin el signo
        let match = termino.match(/([-+]?\s*\d*(?:\/\d+)?(?:\^\d+)?)?\s*([a-z]*)/i);
        let coeficiente = match[1] ? match[1] : ''; // Si no hay coeficiente, asignar cadena vacía
        let terminoSinCoeficiente = match[2];

        // Normalizar término sin coeficiente
        let terminoNormalizado = terminoSinCoeficiente.split('').sort().join('');

        // Almacenar el término y su coeficiente
        if (terminosObj[terminoNormalizado]) {
            terminosObj[terminoNormalizado] += ` ${coeficiente}`;
        } else {
            terminosObj[terminoNormalizado] = coeficiente;
        }
    });

    // Construir la respuesta normalizada
    let respuestaNormalizada = '';

    // Agregar términos con letras normalizados
    Object.keys(terminosObj).forEach(terminoNormalizado => {
        let coeficiente = terminosObj[terminoNormalizado];
        respuestaNormalizada += `${coeficiente}${terminoNormalizado}`;
    });

    // Agregar operadores
    operadores.forEach(operador => {
        respuestaNormalizada += `${operador}`;
    });

    // Agregar términos numéricos
    terminosNumericos.forEach(termino => {
        // Agregar signo "+" si el término no es el primero y hay un espacio antes de él
        if (respuestaNormalizada && respuestaNormalizada.charAt(respuestaNormalizada.length - 1) === ' ') {
            respuestaNormalizada += '+';
        }
        respuestaNormalizada += `${termino}`;
    });

    // Reemplazar espacios vacíos entre términos por un signo "+"
    respuestaNormalizada = respuestaNormalizada.replace(/\s+/g, '+');

    // Eliminar signo "+" al principio o al final de la cadena
    respuestaNormalizada = respuestaNormalizada.trim().replace(/^(\+)|(\+)$/, '');

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
let pasoActual = 1;

function mostrarResultadoIncorrecto() {
    // Ocultar el mensaje de bienvenida en ambos casos
    document.querySelector(".bienvenida").classList.add("ocultar");
  if (intentos > 0) {
    intentos--;

    if (intentos === 2) {
      document.querySelector(".incorrecta").textContent = "La respuesta es incorrecta. Intenta nuevamente";
    } else if (intentos === 1) {
      document.querySelector(".incorrecta").textContent = "Te quedan 2 intentos";
    } else if (intentos === 0) {
      document.querySelector(".incorrecta").textContent = "Te queda 1 intento";
    }

    document.querySelector(".incorrecta").classList.remove("ocultar");
    
  } else {
    // Desactivar botón y mostrar mensaje final
    
    document.querySelector(".btnCopiar").classList.remove("ocultar");
    btnCopiar.removeAttribute("disabled"); // Activa el botón
    document.querySelector(".incorrecta").classList.add("ocultar");
    
  }
}


// Función para mostrar un mensaje de error
function mostrarError(mensajeError) {
    alert(mensajeError);
}

// Función para mostrar los pasos
function mostrarPasos() {
    document.querySelector(".arquitecto").classList.add("ocultar");
    document.querySelector(".intentos").classList.add("ocultar");
    document.querySelector(".fin-intentos").classList.remove("ocultar"); 
    document.querySelector(".btnCopiar").classList.add("ocultar");
    document.querySelector(".incorrecta").classList.add("ocultar");
    document.querySelector(".respuestaOficial").classList.remove("ocultar");
    document.querySelector(".pasoApaso").classList.remove("ocultar");
    document.querySelector(".btnEncriptar").classList.add("desactivar");

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
    //textarea.textContent = "";
    
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





