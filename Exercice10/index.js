//votre code ici

function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
        //À chaque itération, le nombre actuel i est ajouté à la chaîne result suivi d'un espace (' ').
    }
    return result.trim();
    // Retourne la chaîne résultante sans l'espace final grâce à la méthode trim().
}

// Exemple d'utilisation :
console.log(printNumbers(5)); // Affiche "1 2 3 4 5"

