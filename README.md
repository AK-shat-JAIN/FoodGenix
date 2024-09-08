# 🍽️ FoodGenix

Welcome to **FoodGenix**, a web application that allows users to browse through various food items, add them to their cart, and generate a final bill. This project offers an intuitive interface for users to select food, manage their cart, and proceed to checkout. 

## 🚀 Features

- **Food Listings**: Browse a wide variety of food items, each with descriptions and prices.
- **Cart Management**: Add or remove items from the cart, and view the updated cart in real-time.
- **Billing**: A final bill is generated based on items in the cart.
- **User-friendly Interface**: Simple, clean, and responsive design for easy navigation.

## 🛠️ Routes

- **GET `/food-items`**: Retrieve the list of available food items.
- **POST `/cart/add/:itemId`**: Add an item to the cart using its `itemId`.
- **POST `/cart/remove/:itemId`**: Remove an item from the cart using its `itemId`.
- **GET `/cart`**: View the current cart with all added items.
- **GET `/checkout`**: Display the final bill with all selected items and total cost.

## 🛑 Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## ⚙️ Installation

Follow these steps to install and run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/AK-shat-JAIN/FoodGenix.git

2. Navigate to the project directory:

   ```bash
   cd FoodGenix

3. Install dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm start

5. Open your browser and visit:

   ```
   http://localhost:3000

##  📂 Project Structure

    FoodGenix/
    │
    ├── public/
    │   └── index.html       # Main HTML page
    │
    ├── src/
    │   ├── components/      # React components
    │   ├── pages/           # Application pages
    │   ├── App.js           # Main App component
    │   └── index.js         # React entry point
    │
    ├── package.json         # Project metadata and dependencies
    └── README.md            # Project README

## 📝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## 🤝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

