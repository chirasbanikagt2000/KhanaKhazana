//Add to cart functionality

const cartCount = document.getElementById('cart-count');
let cartItemsCount = 0;

function updateCartCount(action, productId) {
    const cartItem = document.querySelector(`.box[data-id="${productId}"]`);
    const addToCartButton = cartItem.querySelector('.add-to-cart');
    const removeFromCartButton = cartItem.querySelector('.remove-from-cart');

    if (action === 'add') {
        cartItemsCount++;
        addToCartButton.style.display = 'none';
        removeFromCartButton.style.display = 'inline-block';
    } else if (action === 'remove') {
        cartItemsCount--;
        addToCartButton.style.display = 'inline-block';
        removeFromCartButton.style.display = 'none';
    }
    cartCount.textContent = cartItemsCount;
}



document.querySelectorAll('.add-to-cart, .remove-from-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const action = event.target.classList.contains('add-to-cart') ? 'add' : 'remove';
        const productId = event.target.getAttribute('data-id');
        updateCartCount(action, productId);
        const productName = event.target.closest('.box').querySelector('h3').textContent;
        if (action === 'add') {
            alert(`Added ${productName} to cart!`);
        } else if (action === 'remove') {
            alert(`Removed ${productName} from cart!`);
        }
    });
});


//Swiper box functionality

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1220: {
      slidesPerView: 3,
    },
  },
});


