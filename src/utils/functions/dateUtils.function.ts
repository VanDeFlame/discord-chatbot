export function generateIsoDate() {
    return new Date().toISOString();
}

export function generateOnlyDate() {
    return generateIsoDate().slice(0, 10);
}
