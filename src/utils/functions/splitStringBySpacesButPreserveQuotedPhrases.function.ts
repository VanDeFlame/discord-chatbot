export const splitStringBySpacesButPreserveQuotedPhrases = (input: string) => {
    if (!input) return []; // Devuelve un array vacío si la entrada es una cadena vacía.

    // Expresión regular para capturar texto entre comillas dobles, comillas simples y palabras
    const regex = /"(.*?)"|'(.*?)'|(\S+)/g;
    const matches = [];
    let match;

    while ((match = regex.exec(input)) !== null) {
        if (match[1] !== undefined) {
            // Captura frases entre comillas dobles sin escapar
            matches.push(match[1]);
        } else if (match[2] !== undefined) {
            // Captura frases entre comillas simples sin escapar
            matches.push(match[2]);
        } else if (match[3] !== undefined) {
            // Captura palabras normales y reemplaza comillas escapadas
            matches.push(match[3].replace(/\\"/g, `"`).replace(/\\'/g, `'`));
        }
    }

    return matches;
};
