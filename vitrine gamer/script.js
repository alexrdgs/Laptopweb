// Simule le panier en localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fonction d'ajout au panier
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Produit ajouté au panier !');
    });
});

// Affichage des produits dans le panier
if (document.getElementById('cart')) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDisplay = document.getElementById('cart');
    cartItems.forEach(item => {
        let productDiv = document.createElement('div');
        productDiv.textContent = `Produit ${item}`;
        cartDisplay.appendChild(productDiv);
    });
}
