// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

// Add item to cart
function addToCart(itemName, itemPrice, itemDesc) {
    // Extract numeric price from string (e.g., "140/-" or "180/- / 250/-")
    const priceMatch = itemPrice.match(/(\d+)/);
    const numericPrice = priceMatch ? parseInt(priceMatch[1]) : 0;
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === itemName && item.price === itemPrice);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            price: itemPrice,
            numericPrice: numericPrice,
            description: itemDesc,
            quantity: 1
        });
    }
    
    saveCart();
    showCartNotification();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

// Update item quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        saveCart();
    }
}

// Calculate total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.numericPrice * item.quantity), 0);
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <p>Your cart is empty</p>
                <span class="cart-empty-icon">🛒</span>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">−</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${index})" aria-label="Remove item">×</button>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
    
    // Update total
    cartTotal.textContent = `₹${calculateTotal()}`;
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;

// Helper function to find ingredients for an item
function findItemIngredients(itemName, item) {
            let itemData = menuIngredients[itemName];
            
            // If not found, try to find a partial match with context
            if (!itemData && itemName) {
                const category = item.closest('.category-subsection')?.querySelector('.subsection-title')?.textContent || '';
                const parentCategory = item.closest('.menu-category')?.querySelector('.category-title')?.textContent || '';
                
                const keys = Object.keys(menuIngredients);
                const match = keys.find(key => {
                    const itemLower = itemName.toLowerCase();
                    const keyLower = key.toLowerCase();
                    const matches = itemLower.includes(keyLower) || keyLower.includes(itemLower);
                    
                    // For "Biscoff", try to match based on context
                    if (itemName === 'Biscoff') {
                        if (category.includes('Shake')) {
                            return key === 'Biscoff Shake';
                        } else if (category.includes('Iced Coffee')) {
                            return key === 'Biscoff Iced Coffee';
                        } else if (category.includes('Cold Coffee')) {
                            return key === 'Biscoff' || key.includes('Biscoff');
                        } else if (parentCategory.includes('Hot')) {
                            return key === 'Biscoff Latte';
                        }
                    }
                    
                    return matches;
                });
                if (match) {
                    itemData = menuIngredients[match];
        }
    }
    
    return itemData;
}

// Helper function to get item name from element
function getItemName(item) {
    let itemName = item.getAttribute('data-item-name');
    
    if (!itemName) {
        const nameElement = item.querySelector('.item-name');
        if (nameElement) {
            itemName = nameElement.textContent.trim();
            itemName = itemName.replace(/[🌶️👆]/g, '').trim();
        }
    }
    
    return itemName;
}

// Menu Item Click and Hover Handler
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Create hover popups for each menu item
    menuItems.forEach(item => {
        // Remove pointer cursor since items are no longer clickable
        item.style.cursor = 'default';
        
        // Get item name
        const itemName = getItemName(item);
        if (!itemName) return;
        
        // Find ingredients
        const itemData = findItemIngredients(itemName, item);
        
        // Create popup element if ingredients exist
            if (itemData && itemData.ingredients) {
            const popup = document.createElement('div');
            popup.className = 'ingredients-popup';
            
            const title = document.createElement('div');
            title.className = 'ingredients-popup-title';
            title.textContent = itemName;
            
            const list = document.createElement('ul');
            list.className = 'ingredients-popup-list';
            
                itemData.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                list.appendChild(li);
                });

            // Add to Cart button
            const addToCartBtn = document.createElement('button');
            addToCartBtn.className = 'add-to-cart-popup-btn';
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const name = getItemName(item);
                const itemPrice = item.getAttribute('data-item-price') || 
                                item.querySelector('.item-price')?.textContent.trim() || '';
                const itemDesc = item.getAttribute('data-item-desc') || 
                               item.querySelector('.item-desc')?.textContent.trim() || '';
                
                if (name) {
                    addToCart(name, itemPrice, itemDesc);
                }
            });

            popup.appendChild(title);
            popup.appendChild(list);
            popup.appendChild(addToCartBtn);
            item.appendChild(popup);
            item.style.position = 'relative'; // Ensure relative positioning for popup
        } else {
            // If no ingredients, still show Add to Cart button on hover
            const popup = document.createElement('div');
            popup.className = 'ingredients-popup';
            
            const title = document.createElement('div');
            title.className = 'ingredients-popup-title';
            title.textContent = itemName;
            
            // Add to Cart button for items without ingredients
            const addToCartBtn = document.createElement('button');
            addToCartBtn.className = 'add-to-cart-popup-btn';
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const name = getItemName(item);
                const itemPrice = item.getAttribute('data-item-price') || 
                                item.querySelector('.item-price')?.textContent.trim() || '';
                const itemDesc = item.getAttribute('data-item-desc') || 
                               item.querySelector('.item-desc')?.textContent.trim() || '';
                
                if (name) {
                    addToCart(name, itemPrice, itemDesc);
                }
            });

            popup.appendChild(title);
            popup.appendChild(addToCartBtn);
            item.appendChild(popup);
            item.style.position = 'relative';
        }
        
        // Remove click handler - items no longer added to cart on click
    });
    
    // Cart sidebar handlers
    const cartIconBtn = document.getElementById('cartIconBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const orderModal = document.getElementById('orderModal');
    const orderOverlay = document.getElementById('orderOverlay');
    const orderModalClose = document.getElementById('orderModalClose');
    const orderForm = document.getElementById('orderForm');
    const customerNameInput = document.getElementById('customerName');
    const customerPhoneInput = document.getElementById('customerPhone');
    const customerAddressInput = document.getElementById('customerAddress');
    const customerNotesInput = document.getElementById('customerNotes');
    const dietaryPreferenceSelect = document.getElementById('dietaryPreference');
    const paymentMethodSelect = document.getElementById('paymentMethod');
    
    // Open cart
    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close cart
    function closeCart() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    if (cartCloseBtn) {
        cartCloseBtn.addEventListener('click', closeCart);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
    
    // Helper: open order form modal
    function openOrderModal() {
        if (orderModal && orderOverlay) {
            orderModal.style.display = 'block';
            orderOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (customerNameInput) customerNameInput.focus();
        }
    }

    // Helper: close order form modal
    function closeOrderModal() {
        if (orderModal && orderOverlay) {
            orderModal.style.display = 'none';
            orderOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Checkout / Order on WhatsApp button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                openOrderModal();
            }
        });
    }

    // Order modal close handlers
    if (orderModalClose) {
        orderModalClose.addEventListener('click', closeOrderModal);
    }
    if (orderOverlay) {
        orderOverlay.addEventListener('click', closeOrderModal);
    }

    // Order form submit
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cart.length === 0) return;

            const name = (customerNameInput?.value || '').trim();
            const phone = (customerPhoneInput?.value || '').trim();
            const address = (customerAddressInput?.value || '').trim();
            const notes = (customerNotesInput?.value || '').trim();
            const dietaryPreference = (dietaryPreferenceSelect?.value || 'Regular').trim();
            const paymentMethod = (paymentMethodSelect?.value || 'Cash on Delivery').trim();

            if (!name || !phone || !address) {
                alert('Please fill in Name, Phone Number, and Address.');
                return;
            }

            const whatsappNumber = '919723552291'; // CAFE LUXE contact number in international format (without +)

            const lines = [
                `NAME: ${name}`,
                `CONTACT NUMBER: ${phone}`,
                `DIETARY PREFERENCE: ${dietaryPreference}`,
                `PAYMENT METHOD: ${paymentMethod}`,
                'ORDER:',
                ...cart.map(item => `${item.name} ${item.quantity}`),
                `ADDRESS: ${address}`
            ];

            // Only add note section if customer has written something
            if (notes) {
                lines.push(`NOTE: ${notes}`);
            }

            lines.push('LOCATION REQUEST: Please share your current delivery location as well.');

            const message = lines.join('\n');
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open WhatsApp (mobile app or WhatsApp Web, depending on device)
            window.open(whatsappUrl, '_blank');

            // Close modals/overlays
            closeOrderModal();
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Initialize cart UI
    updateCartUI();
    
    // Category Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    // Function to filter categories
    function filterCategories(selectedCategory) {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to matching button
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-category') === selectedCategory) {
                btn.classList.add('active');
            }
        });
        
        // Filter menu categories
        menuCategories.forEach(category => {
            if (selectedCategory === 'all') {
                category.classList.remove('hidden');
            } else {
                const categoryType = category.getAttribute('data-category');
                if (categoryType === selectedCategory) {
                    category.classList.remove('hidden');
                } else {
                    category.classList.add('hidden');
                }
            }
        });
        
        // Scroll to menu section or specific category
        setTimeout(() => {
            if (selectedCategory === 'all') {
                const menuSection = document.querySelector('.menu-section');
                if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                const targetCategory = document.getElementById(selectedCategory);
                if (targetCategory) {
                    targetCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, 100);
    }
    
    // Handle filter button clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');
            filterCategories(selectedCategory);
        });
    });
    
    // Handle URL hash on page load (for links from homepage)
    const hash = window.location.hash.substring(1); // Remove # symbol
    if (hash && (hash === 'beverages' || hash === 'food' || hash === 'desserts')) {
        // Use setTimeout to ensure DOM is fully loaded
        setTimeout(() => {
            filterCategories(hash);
        }, 100);
    }
    
    // Scroll to Top Functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

