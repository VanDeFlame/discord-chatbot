import { shuffleArray } from './shuffleArray.function';

const frasesJavaScript = shuffleArray([
    'JavaScript fue creado en solo 10 días por Brendan Eich mientras trabajaba en Netscape.',
    'JavaScript se ejecuta en el navegador, lo que permite crear sitios interactivos sin necesidad de recargar la página.',
    'Aunque JavaScript y Java comparten el nombre, ¡son como el día y la noche en cuanto a sintaxis y propósito!',
    "El '==' en JavaScript puede generar resultados sorprendentes debido a la coerción de tipos. ¡Por eso usamos '===' para comparar sin sorpresas!",
    'JavaScript tiene una curva de aprendizaje mucho más suave que Java, perfecto para comenzar en la programación web.',
    'Con JavaScript puedes modificar el DOM en tiempo real, mientras que en Java necesitas un servidor y frameworks adicionales.',
    'JavaScript es más flexible y rápido de prototipar, mientras que Java puede volverse pesado para proyectos pequeños.',
    "Gracias a Node.js, JavaScript ahora es un lenguaje de 'full-stack', ¡puedes hacer frontend y backend con el mismo código!",
    "¿Por qué los programadores de Java no se preocupan por el cambio climático? Porque el 'calor' no afecta a sus 'abstract factories'.",
    'Los desarrolladores de JavaScript necesitan solo un navegador para probar su código; los de Java necesitan un servidor... y paciencia.',
    "¿Por qué los programadores de Java no pueden jugar a las cartas? Porque no encuentran el 'ArrayList' de las reglas.",
    'Un programador de JavaScript puede hacerlo todo con solo un navegador y un editor. ¡Hasta la cafetera necesita Java!',
    'Java y JavaScript son como un café y un jugo de frutas. Uno es un estimulante, el otro es refrescante, ¡pero no mezcles ambos!',
]);

function* fraseGenerador(): Generator<string, void, unknown> {
    let index = 0;
    while (true) {
        yield frasesJavaScript[index];
        index++;
    }
}

const generador = fraseGenerador();

export function getJavascriptPhrase(): string | void {
    return generador.next().value;
}
