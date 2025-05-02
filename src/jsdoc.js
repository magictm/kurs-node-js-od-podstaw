/**
 * Funkcja tworząca powitanie dla użytkownika.
 * @param {string} name Imię użytkownika.
 * @param {string} [greeting='Hello'] Opcjonalne powitanie (domyślnie 'Hello').
 * @returns {string} Pełne powitanie.
 * @throws {TypeError} Jeśli 'name' nie jest stringiem.
 */
module.exports = function createGreeting(name, greeting = 'Hello') {
    if (typeof name !== 'string') {
        throw new TypeError('Parametr "name" musi być stringiem.');
    }
    return `${greeting}, ${name}!`;
};
