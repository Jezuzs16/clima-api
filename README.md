# Weather API App ☁️

A simple and functional application to check the weather in any city in real-time. This project is a technical practice focused on **REST API** consumption, state management, and data conversion logic.

## 🚀 Features

* **Real-time Search:** Direct connection to the OpenWeatherMap API.
* **Unit Conversion:** Implementation of custom logic to transform Kelvin to Celsius.
* **Dark Mode:** A dynamic interface that toggles visual themes using DOM manipulation and CSS.
* **Responsive Design:** Optimized styles through Media Queries for a seamless experience on both mobile and desktop.
* **Dynamic Visualization:** Rendering of official weather icons based on current meteorological conditions.

## 🛠️ Technologies Used

* **React** (Functional Components & Hooks)
* **Vite** (Fast build tool)
* **JavaScript (ES6+)**
* **CSS3** (Variables and responsive design)
* **OpenWeatherMap API** (Weather data provider)

## 📂 Code Structure

The project follows a modular approach to separate logic from the interface:

* `WheaterApi.jsx`: Main component managing search state and rendering.
* `DarkMode.jsx`: Independent component for theme control.
* `helpers/`: Contains pure functions like `fetchClima` and `kelvinToCelsius` for better maintainability and testing.

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/repository-name.git](https://github.com/your-username/repository-name.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the project:**
    ```bash
    npm run dev
    ```

---

> **Security Note:** The API Key is currently hardcoded for demonstration purposes. In a production environment, using environment variables (`.env`) is highly recommended.

---
Developed with 💻 and ☕.
