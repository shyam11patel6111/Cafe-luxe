 // Menu Items Ingredients Data
const menuIngredients = {
    // Hot Coffee
    "Espresso": {
        ingredients: ["Espresso shot (30ml)", "Freshly ground coffee beans", "Hot water"]
    },
    "Doppio": {
        ingredients: ["Double espresso shot (60ml)", "Freshly ground coffee beans", "Hot water"]
    },
    "Americano": {
        ingredients: ["Espresso shot", "Hot water", "Optional: milk or cream"]
    },
    "Cappuccino": {
        ingredients: ["Espresso shot", "Steamed milk", "Milk foam", "Optional: cocoa powder or cinnamon"]
    },
    "Cafe Latte": {
        ingredients: ["Espresso shot", "Steamed milk", "Light milk foam"]
    },
    "Macchiato": {
        ingredients: ["Espresso shot", "Small amount of steamed milk", "Milk foam"]
    },
    "Flat White": {
        ingredients: ["Double espresso shot", "Steamed milk", "Microfoam"]
    },
    "Caramel Latte": {
        ingredients: ["Espresso shot", "Steamed milk", "Caramel syrup", "Whipped cream (optional)"]
    },
    "Tiramisu Latte": {
        ingredients: ["Espresso shot", "Steamed milk", "Tiramisu syrup", "Cocoa powder", "Mascarpone flavor"]
    },
    "Hazelnut Delight": {
        ingredients: ["Espresso shot", "Steamed milk", "Hazelnut syrup", "Whipped cream"]
    },
    "French Vanilla": {
        ingredients: ["Espresso shot", "Steamed milk", "Vanilla syrup", "Whipped cream"]
    },
    "Irish Latte": {
        ingredients: ["Espresso shot", "Steamed milk", "Irish cream syrup", "Whipped cream"]
    },
    "Cafe Mocha": {
        ingredients: ["Espresso shot", "Steamed milk", "Chocolate syrup", "Whipped cream", "Cocoa powder"]
    },
    "Dark Chocolate Mocha": {
        ingredients: ["Espresso shot", "Steamed milk", "Dark chocolate syrup", "Whipped cream", "Dark cocoa powder"]
    },
    "Dark Caramel Mocha": {
        ingredients: ["Espresso shot", "Steamed milk", "Dark caramel syrup", "Chocolate syrup", "Whipped cream"]
    },
    "Nuttela Mocha": {
        ingredients: ["Espresso shot", "Steamed milk", "Nutella spread", "Whipped cream", "Hazelnuts"]
    },
    "Biscoff Latte": {
        ingredients: ["Espresso shot", "Steamed milk", "Biscoff cookie butter", "Crushed Biscoff cookies", "Whipped cream"]
    },
    "Almond Crunch Latte": {
        ingredients: ["Espresso shot", "Steamed milk", "Almond syrup", "Toasted almonds", "Whipped cream"]
    },
    "Tiramisu Crunch Latte": {
        ingredients: ["Espresso shot", "Steamed milk", "Tiramisu syrup", "Crushed ladyfingers", "Cocoa powder"]
    },
    "Affogato": {
        ingredients: ["Espresso shot", "Vanilla ice cream", "Optional: chocolate sauce"]
    },
    
    // Hot Chocolate
    "Premium": {
        ingredients: ["Premium dark chocolate", "Steamed milk", "Whipped cream", "Chocolate shavings"]
    },
    "Cinnamon": {
        ingredients: ["Dark chocolate", "Steamed milk", "Cinnamon powder", "Whipped cream", "Cinnamon stick"]
    },
    "Roasted Hazelnut": {
        ingredients: ["Dark chocolate", "Steamed milk", "Roasted hazelnut syrup", "Whipped cream", "Hazelnuts"]
    },
    "Dark Caramel": {
        ingredients: ["Dark chocolate", "Steamed milk", "Dark caramel syrup", "Whipped cream", "Caramel drizzle"]
    },
    "Caramel": {
        ingredients: ["Milk chocolate", "Steamed milk", "Caramel syrup", "Whipped cream", "Caramel sauce"]
    },
    "Mint Hot Chocolate": {
        ingredients: ["Dark chocolate", "Steamed milk", "Mint syrup", "Whipped cream", "Fresh mint leaves"]
    },
    "Cocoa Cookies": {
        ingredients: ["Dark chocolate", "Steamed milk", "Crushed cookies", "Whipped cream", "Cookie crumbs"]
    },
    
    // Hot Tea
    "Green Tea": {
        ingredients: ["Premium green tea leaves", "Hot water", "Optional: honey or lemon"]
    },
    "Kahwa Tea": {
        ingredients: ["Green tea", "Saffron", "Cardamom", "Cinnamon", "Almonds", "Honey"]
    },
    "Masala Tea": {
        ingredients: ["Black tea", "Ginger", "Cardamom", "Cinnamon", "Cloves", "Milk", "Sugar"]
    },
    "Masala Chai Latte": {
        ingredients: ["Black tea", "Masala spices (ginger, cardamom, cinnamon, cloves)", "Steamed milk", "Frothy milk", "Sugar"]
    },
    
    // Cold Coffee
    "Classic Cold Coffee": {
        ingredients: ["Espresso shot", "Cold milk", "Ice cubes", "Sugar", "Whipped cream (optional)"]
    },
    "Hazelnut": {
        ingredients: ["Espresso shot", "Cold milk", "Hazelnut syrup", "Ice cubes", "Whipped cream"]
    },
    "Caramel": {
        ingredients: ["Espresso shot", "Cold milk", "Caramel syrup", "Ice cubes", "Whipped cream", "Caramel drizzle"]
    },
    "Irish": {
        ingredients: ["Espresso shot", "Cold milk", "Irish cream syrup", "Ice cubes", "Whipped cream"]
    },
    "Tiramisu": {
        ingredients: ["Espresso shot", "Cold milk", "Tiramisu syrup", "Ice cubes", "Cocoa powder", "Whipped cream"]
    },
    "Salted Caramel": {
        ingredients: ["Espresso shot", "Cold milk", "Salted caramel syrup", "Ice cubes", "Whipped cream", "Sea salt"]
    },
    "Jawa Chip": {
        ingredients: ["Espresso shot", "Cold milk", "Chocolate chips", "Ice cubes", "Whipped cream", "Chocolate sauce"]
    },
    "Mocha": {
        ingredients: ["Espresso shot", "Cold milk", "Chocolate syrup", "Ice cubes", "Whipped cream", "Cocoa powder"]
    },
    "Nutella": {
        ingredients: ["Espresso shot", "Cold milk", "Nutella spread", "Ice cubes", "Whipped cream", "Hazelnuts"]
    },
    "Biscoff": {
        ingredients: ["Espresso shot", "Cold milk", "Biscoff cookie butter", "Ice cubes", "Crushed Biscoff cookies", "Whipped cream"]
    },
    "Biscoff Shake": {
        ingredients: ["Vanilla ice cream", "Biscoff cookie butter", "Cold milk", "Crushed Biscoff cookies", "Whipped cream"]
    },
    "Biscoff Iced Coffee": {
        ingredients: ["Espresso shot", "Cold milk", "Biscoff cookie butter", "Ice cubes", "Crushed Biscoff cookies"]
    },
    "Oreo": {
        ingredients: ["Espresso shot", "Cold milk", "Crushed Oreo cookies", "Ice cubes", "Whipped cream", "Oreo pieces"]
    },
    "Kitkat": {
        ingredients: ["Espresso shot", "Cold milk", "KitKat pieces", "Ice cubes", "Whipped cream", "Chocolate sauce"]
    },
    "Luxe Special": {
        ingredients: ["Espresso shot", "Cold milk", "House special syrup blend", "Ice cubes", "Whipped cream", "Special toppings"]
    },
    "Cookie Crumble": {
        ingredients: ["Espresso shot", "Cold milk", "Cookie crumble", "Ice cubes", "Whipped cream", "Cookie pieces"]
    },
    "Mud Pie": {
        ingredients: ["Espresso shot", "Cold milk", "Chocolate fudge", "Ice cubes", "Whipped cream", "Chocolate chunks"]
    },
    "Dark Truffle": {
        ingredients: ["Espresso shot", "Cold milk", "Dark chocolate truffle", "Ice cubes", "Whipped cream", "Dark cocoa powder"]
    },
    
    // Iced Coffee
    "Classic Iced Latte": {
        ingredients: ["Espresso shot", "Cold milk", "Ice cubes", "Simple syrup"]
    },
    "Vietnamese": {
        ingredients: ["Strong coffee", "Condensed milk (optional)", "Ice cubes", "Optional: regular milk"]
    },
    "Espresso Ginger Ale": {
        ingredients: ["Espresso shot", "Ginger ale", "Ice cubes", "Lemon slice"]
    },
    "Redbull Espresso": {
        ingredients: ["Espresso shot", "Red Bull energy drink", "Ice cubes"]
    },
    "Iced Mocha": {
        ingredients: ["Espresso shot", "Cold milk", "Chocolate syrup", "Ice cubes", "Whipped cream"]
    },
    "Espresso Tonic": {
        ingredients: ["Espresso shot", "Tonic water", "Ice cubes", "Lemon slice"]
    },
    "Sea Salt Caramel Latte": {
        ingredients: ["Espresso shot", "Cold milk", "Salted caramel syrup", "Ice cubes", "Sea salt", "Whipped cream"]
    },
    "Matcha Iced Latte": {
        ingredients: ["Matcha powder", "Cold milk", "Ice cubes", "Simple syrup", "Optional: vanilla"]
    },
    "Biscoff Iced Coffee": {
        ingredients: ["Espresso shot", "Cold milk", "Biscoff cookie butter", "Ice cubes", "Crushed Biscoff cookies"]
    },
    "Biscoff Shake": {
        ingredients: ["Vanilla ice cream", "Biscoff cookie butter", "Cold milk", "Crushed Biscoff cookies", "Whipped cream"]
    },
    "Iced Americano": {
        ingredients: ["Espresso shot", "Cold water", "Ice cubes"]
    },
    
    // Cold Brew
    "Classic": {
        ingredients: ["Cold brewed coffee", "Ice cubes", "Optional: milk or cream"]
    },
    "Coldbrew Tonic": {
        ingredients: ["Cold brewed coffee", "Tonic water", "Ice cubes", "Lemon slice"]
    },
    "Red Eye Cold Brew": {
        ingredients: ["Cold brewed coffee", "Espresso shot", "Ice cubes", "Optional: milk"]
    },
    "Gingerale Cold Brew": {
        ingredients: ["Cold brewed coffee", "Ginger ale", "Ice cubes", "Lemon slice"]
    },
    
    // Iced Tea
    "Lemon Mint": {
        ingredients: ["Black tea", "Fresh lemon juice", "Fresh mint leaves", "Ice cubes", "Sugar or honey"]
    },
    "Passion Fruit": {
        ingredients: ["Black tea", "Passion fruit juice", "Ice cubes", "Sugar", "Fresh passion fruit"]
    },
    "Peach": {
        ingredients: ["Black tea", "Peach syrup", "Ice cubes", "Fresh peach slices"]
    },
    "Wild Berry": {
        ingredients: ["Black tea", "Mixed berry syrup", "Ice cubes", "Fresh berries"]
    },
    "Blue Berry": {
        ingredients: ["Black tea", "Blueberry syrup", "Ice cubes", "Fresh blueberries"]
    },
    "Mango": {
        ingredients: ["Black tea", "Mango syrup", "Ice cubes", "Fresh mango pieces"]
    },
    "Strawberry": {
        ingredients: ["Black tea", "Strawberry syrup", "Ice cubes", "Fresh strawberry slices"]
    },
    
    // Shakes
    "Black Forest": {
        ingredients: ["Chocolate ice cream", "Cherry syrup", "Whipped cream", "Chocolate shavings", "Cherries"]
    },
    "Strawberry": {
        ingredients: ["Vanilla ice cream", "Strawberry syrup", "Fresh strawberries", "Whipped cream"]
    },
    "Brownie": {
        ingredients: ["Chocolate ice cream", "Brownie pieces", "Chocolate sauce", "Whipped cream", "Brownie chunks"]
    },
    "Blueberry": {
        ingredients: ["Vanilla ice cream", "Blueberry syrup", "Fresh blueberries", "Whipped cream"]
    },
    "Mango": {
        ingredients: ["Vanilla ice cream", "Mango pulp", "Fresh mango pieces", "Whipped cream"]
    },
    "Mix Berry": {
        ingredients: ["Vanilla ice cream", "Mixed berry syrup", "Fresh berries (strawberry, blueberry, raspberry)", "Whipped cream"]
    },
    
    // Mocktails
    "Mojitos": {
        ingredients: ["Fresh mint leaves", "Lime juice", "Sugar syrup", "Soda water", "Ice cubes", "Flavor options: Mint, Lemon, Peach, Blueberry, Cranberry, Pomegranate, Coffee"]
    },
    "Roy Roger": {
        ingredients: ["Pomegranate juice", "Grenadine syrup", "Cola", "Ice cubes", "Lime slice"]
    },
    "Costa Rica Sunrise": {
        ingredients: ["Orange juice", "Pineapple juice", "Grenadine", "Ice cubes", "Mango boba", "Orange slice"]
    },
    "Frozen Chilli Mango Margarita": {
        ingredients: ["Frozen mango", "Chili powder", "Lime juice", "Sugar syrup", "Ice", "Fresh mint"]
    },
    "Virgin Pina Colada": {
        ingredients: ["Pineapple juice", "Coconut cream", "Soda water", "Orange cubes", "Ice cubes", "Pineapple slice"]
    },
    "Bellini": {
        ingredients: ["Grape nectar juice", "Orange juice", "Fresh apple slices", "Lemon popping boba", "Ice cubes"]
    },
    "Café Luxe Universe": {
        ingredients: ["Blue Curacao syrup", "Soda water", "Lemon juice", "Fresh mint", "Ice cubes"]
    },
    "Rocking Salty Dock": {
        ingredients: ["Guava juice", "Salt", "Lime juice", "Sugar syrup", "Ice cubes", "Soda water"]
    },
    
    // Pasta
    "Creamy Alfredo": {
        ingredients: ["Penne pasta", "Alfredo sauce (cream, butter, parmesan)", "Exotic vegetables (bell peppers, mushrooms, broccoli)", "Garlic", "Herbs"]
    },
    "Tangy Spice Arrabbiata": {
        ingredients: ["Penne pasta", "Spicy tomato sauce", "Garlic", "Red chili flakes", "Mixed vegetables", "Olive oil", "Fresh basil"]
    },
    "Italian Love Basil Pesto Creamy": {
        ingredients: ["Choice of pasta", "Fresh basil pesto", "Cream", "Mixed vegetables", "Parmesan cheese", "Pine nuts", "Garlic"]
    },
    "Cheesy Alla Mamma Rosa": {
        ingredients: ["Penne pasta", "Tomato cream sauce", "Mixed vegetables", "Mozzarella cheese", "Herbs", "Garlic"]
    },
    "Baked Mac & Cheese With Pineapple": {
        ingredients: ["Elbow macaroni", "Cheese sauce (cheddar, mozzarella)", "Pineapple chunks", "Breadcrumbs", "Butter"]
    },
    
    // Pizza
    "Classic Margarita": {
        ingredients: ["Fresh pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil leaves", "Olive oil"]
    },
    "Neapolitan Style": {
        ingredients: ["Wood-fired pizza dough", "Buffalo mozzarella", "Black olives", "Fresh basil", "Tomato sauce", "Olive oil"]
    },
    "Veggi Hotch Potch": {
        ingredients: ["Pizza dough", "Pizza sauce", "Roasted bell peppers", "Jalapeños", "Onions", "Mozzarella cheese"]
    },
    "Spicy BBQ Cottage Cheese": {
        ingredients: ["Pizza dough", "BBQ sauce base", "BBQ spiced paneer", "Fresh mozzarella", "Onions", "Jalapeños", "Coriander"]
    },
    "Quatro Cheese": {
        ingredients: ["Pizza dough", "Cheesy sauce", "Mozzarella", "Cheddar", "Feta", "Burrata"]
    },
    "Valentino": {
        ingredients: ["Pizza dough", "Pizza sauce", "Fresh mozzarella", "Spicy paneer", "Onions", "Capsicum"]
    },
    "Americano": {
        ingredients: ["Pizza dough", "Pizza sauce", "Fresh mozzarella", "Corn", "Capers", "Onions", "Exotic vegetables"]
    },
    "Peri Peri Pepper Paneer": {
        ingredients: ["Pizza dough", "Pizza sauce", "Fresh mozzarella", "Peri peri spiced paneer", "Onions", "Spring onions"]
    },
    "Cheese Beast": {
        ingredients: ["Wood-fired fresh dough", "5 types of cheese", "Fresh burrata", "Cheese sauce"]
    },
    "Marinara Pizza": {
        ingredients: ["Pizza dough", "Marinara sauce", "Cherry tomatoes", "Minced garlic", "Mozzarella cheese", "Fresh basil"]
    },
    "Sun Dried Tomato & Feta Cheese Pizza": {
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Sun-dried tomatoes", "Feta cheese", "Fresh basil"]
    },
    
    // Bowls
    "Mexican Treasure Hot Pot": {
        ingredients: ["Mexican corn & bean rice", "Spicy Mexican bean curry", "Nachos", "Salsa", "Cheese", "Sour cream"]
    },
    "Burrito Rice Bowl": {
        ingredients: ["Spicy Mexican rice", "Vegetable curry", "Cheese sauce", "Nachos", "Sour cream", "Salsa"]
    },
    "K-Pop Bowl": {
        ingredients: ["Korean-spiced ramen noodles", "Chili vegetables", "Korean spices", "Sesame seeds"]
    },
    "Asian Prime Bowl": {
        ingredients: ["Green veg Thai curry", "Basil rice", "Sago crackles", "Sambal", "Fresh herbs"]
    },
    "Italian Love": {
        ingredients: ["Creamy vegetable curry", "Pesto rice", "Parmesan cheese", "Fresh basil"]
    },
    "American Delight": {
        ingredients: ["Pan-tossed corn rice", "BBQ vegetable curry", "BBQ sauce", "Mixed vegetables"]
    },
    "Chinese Checkmate": {
        ingredients: ["Chili garlic paneer", "Schezwan fried rice", "Schezwan sauce", "Bell peppers", "Spring onions"]
    },
    "Amritsari Tadka": {
        ingredients: ["Veg pulao", "Amritsari chole", "Spices", "Onions", "Coriander"]
    },
    "The Desi Indian Bowl": {
        ingredients: ["Paneer tikka masala", "Jeera rice", "Tikka masala sauce", "Cream", "Spices"]
    },
    
    // Appetizers
    "Loaded Pepper & Chipotle Nachos with Beans": {
        ingredients: ["Tortilla chips", "Pan-tossed beans", "Spicy pepper-bean mixture", "Cherry tomatoes", "Olives", "Jalapeños", "Sour cream", "Cheese sauce", "Salsa"]
    },
    "Smoked Nachos": {
        ingredients: ["Tortilla chips", "Smoky cheese sauce", "Salsa", "Jalapeños"]
    },
    "Tex-Mex Tacos / Cheese Paneer Tacos": {
        ingredients: ["Crispy tortillas", "Tex-Mex beans OR Paneer tikka masala", "Mexican salad", "Sour cream", "Cheese", "Fresh salsa"]
    },
    "Hottie Cheese Balls": {
        ingredients: ["Stuffed spicy cheese", "Breadcrumbs", "Fried coating", "Salsa", "Cocktail dips"]
    },
    "Dragon Cottage Cheese": {
        ingredients: ["Paneer", "Bell peppers", "Schezwan sauce", "Fried spinach bed", "Spring onions"]
    },
    "Paneer Chilli": {
        ingredients: ["Paneer cubes", "Bell peppers", "Schezwan sauce", "Fried spinach bed", "Spring onions"]
    },
    "Veg Manchurian Dry": {
        ingredients: ["Manchurian balls (vegetable)", "Schezwan sauce", "Green onions", "Garlic", "Ginger"]
    },
    
    // Finger Foods
    "French Fries": {
        ingredients: ["Potato fries", "Salt", "Optional: ketchup"]
    },
    "Loaded Fries": {
        ingredients: ["French fries", "Choice of: Peri Peri, Chipotle, Indian Chatpata, or Cheese sauce", "Cheese sauce", "Salsa", "Herbs"]
    },
    "Korean Spiced French Fries": {
        ingredients: ["French fries", "Korean spices", "Cheesy herbs", "Sesame seeds"]
    },
    "Stir-Fried Veggies": {
        ingredients: ["Mixed vegetables", "Butter", "Salt", "Pepper", "Basil"]
    },
    "Garlic Bread / Chilli Butter Bread": {
        ingredients: ["French bread slices", "Garlic butter OR Chilli butter", "Baked until crispy"]
    },
    "Cheese Garlic Bread / Chilli Cheese Bread": {
        ingredients: ["French bread slices", "Butter", "Fresh cheese", "Garlic OR Chilli flavor", "Baked until crispy"]
    },
    
    // Burgers & Wraps
    "Spicy Aloo Tikki Cheese": {
        ingredients: ["Spicy aloo tikki", "Indian sauces", "Cheese", "French fries", "Bun"]
    },
    "Grilled Tandoori Paneer": {
        ingredients: ["Tandoori paneer", "Indian spice sauce", "Cheese", "Chips", "Bun"]
    },
    "Mexican": {
        ingredients: ["Spicy Mexican filling", "Cheese", "Baked", "Side fries", "Burger bun OR Wrap"]
    },
    
    // Sandwiches
    "Chutney Cheese Desi": {
        ingredients: ["Green spicy chutney", "Cheese", "Grilled bread", "Wafers"]
    },
    "Chowpatty Spicy Masala Loaded Sandwich": {
        ingredients: ["3-layered bread", "Indian street-style masala", "Cheese", "Nylon sev", "Chutneys"]
    },
    "Cheese Blast Sandwich": {
        ingredients: ["Bread", "Loaded vegetables", "Mozzarella cheese", "Baked", "Herbs"]
    },
    "Peri Peri Paneer": {
        ingredients: ["BBQ sauce", "Paneer", "Tomatoes", "Onions", "Grilled bread"]
    },
    "Tandoori Paneer": {
        ingredients: ["Cheese", "Onion", "Chutney", "Tandoori paneer slices", "Grilled bread"]
    },
    "Hulk Sandwich": {
        ingredients: ["1-pound bread", "Spicy vegetables", "Cheese", "Baked"]
    },
    
    // Salads
    "Classic Caesar Salad": {
        ingredients: ["Mixed sprouts", "Beans", "Paneer", "Honey-lime mustard dressing", "Lettuce", "Croutons"]
    },
    "Healthy Buddha Bowl": {
        ingredients: ["Sautéed vegetables", "Beans", "Corn", "Paneer", "Sour cream", "House dressing"]
    },
    "Healthy Mexican": {
        ingredients: ["Tossed beans", "Corn", "Peas", "Paneer", "Mexicano-spiced vegetables", "Lettuce bed"]
    },
    
    // Indian Platters
    "Chole Bhature Platter": {
        ingredients: ["Authentic bhatura", "Amritsari chole", "Chutney", "Salad", "Onions"]
    },
    "Amritsari Kulcha Platter": {
        ingredients: ["Stuffed kulcha", "Amritsari chole", "Chutney", "Salad", "Onions"]
    },
    "Chur Chur Paratha Platter": {
        ingredients: ["Crispy paratha", "Amritsari chole", "Paneer masala", "Chutney", "Salad"]
    },
    
    // Desserts
    "Waffles - Classic Style": {
        ingredients: ["Classic waffle", "Ice cream", "Maple syrup OR Honey"]
    },
    "Ultimate Chocolate-Loaded Waffle with Candy Sticks": {
        ingredients: ["Waffle", "Candy sticks", "Chocolate sauce", "Crumbled brownie", "Chocolate ice cream"]
    },
    "Ultimate Dutch Brownie": {
        ingredients: ["Homemade crusty brownie", "Dutch chocolate", "Ice cream", "Chocolate sauce"]
    },
    "Sizzling Brownie": {
        ingredients: ["Walnut brownie", "Ice cream", "Chocolate sauce", "Served on hot plate"]
    }
};

