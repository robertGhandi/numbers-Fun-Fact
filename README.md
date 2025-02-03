 
# 📌 Number Properties API

A simple Express.js API that determines various properties of a given number, such as whether it is prime, perfect, or an Armstrong number. It also fetches fun facts about the number from the [Numbers API](http://numbersapi.com/). 🚀

---

## 🌟 Features
✔️ Check if a number is **prime**  

✔️ Check if a number is **perfect** # 
A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself). In other words, when you add up all the divisors of the number, excluding the number itself, the sum equals the original number.

Here's an example:

6: The divisors of 6 are 1, 2, and 3. When you add these up (1 + 2 + 3), the sum is 6. So, 6 is a perfect number. 

✔️ Check if a number is an **Armstrong number**  # An Armstrong number (also known as a narcissistic number, pluperfect digital invariant (PPDI), or digitally balanced number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

✔️ Determine if a number is **even** or **odd**  
✔️ Calculate the **digit sum** of a number  
✔️ Fetch a **fun fact** about the number  

---

## 📂 Project Structure

```
/project-root
│── /src
│   ├── /routes
│   │   ├── numberRoutes.js         
│   ├── /controllers
│   │   ├── numberController.js     
│   ├── /utils
│   │   ├── numberUtils.js          
│   ├── app.js                      
│── index.js                        
│── package.json                     
│── README.md                        
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/robertGhandi/numbers-Fun-Fact.git
cd number-properties-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Server
```sh
npm start
```
By default, the server will run on `http://localhost:3000`.

---

## 📌 API Endpoint

### **GET /number/:num**
Fetches properties of a given number.

#### **Example Request**
```sh
GET /api/classify-number?number=371
```

#### **Example Response**
```json
{
    "number": 28,
    "is_prime": false,
    "is_perfect": true,
    "properties": ["even"],
    "digit_sum": 10,
    "fun_fact": "28 is the atomic mass of silicon."
}
```

---

## 🛠 Technologies Used
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for handling routes
- **Axios** – HTTP client for fetching fun facts

---

## 🤝 Contributing
Contributions are welcome! If you'd like to improve this project:
1. **Fork** the repository 🍴
2. **Create** a new branch (`git checkout -b feature-branch`)  
3. **Commit** your changes (`git commit -m "Add new feature"`)  
4. **Push** to your branch (`git push origin feature-branch`)  
5. Open a **Pull Request** ✅

---

## Hire Node.js Developers
If you're looking to hire Node.js developers, check out [this link](https://hng.tech/hire/nodejs-developers).



