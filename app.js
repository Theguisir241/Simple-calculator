let resultField = document.getElementById("result"); // Récupère l'élément du champ de résultat (input)

function appendNumber(number) {
  resultField.value += number; // Ajoute un chiffre à la valeur actuelle dans le champ de résultat
}

function appendOperator(operator) {
  resultField.value += ` ${operator} `; // Ajoute un opérateur avec des espaces pour séparer les éléments
}

function clearResult() {
  resultField.value = ''; // Efface tout le contenu du champ de résultat
}

function calculateResult() {
  try {
    resultField.value = eval(resultField.value); // Utilise la fonction eval pour calculer l'expression
  } catch (error) {
    resultField.value = 'Erreur'; // Affiche "Erreur" si l'expression est invalide
  }
}
