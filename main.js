function validateOrder() {
  // Récupérer les quantités saisies
  const quantity1 = document.getElementById('quantity1').value;
  const quantity2 = document.getElementById('quantity2').value;

  // Calculer le total
  const total1 = 1000 * quantity1;
  const total2 = 2500 * quantity2;
  const grandTotal = total1 + total2;

  // Mettre à jour les totaux
  document.getElementById('total1').textContent = `${total1} DZD`;
  document.getElementById('total2').textContent = `${total2} DZD`;
  document.getElementById('grandTotal').textContent = `${grandTotal} DZD`;

  // Afficher un message de confirmation
  alert(`Commande validée ! Montant total : ${grandTotal} DZD`);
}
// script.js
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
      // Ajoutez ici votre code pour l'effet "Suivant"
      console.log('Bouton "Suivant" cliqué !');
    });
} );
  // Sélectionnez les éléments de texte à animer
const textElements = document.querySelectorAll('.animated-text');

// Fonction d'animation
function animateText() {
  textElements.forEach(element => {
    // Ajoutez la classe d'animation lorsque l'élément est visible à l'écran
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

// Vérifiez si un élément est visible à l'écran
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}