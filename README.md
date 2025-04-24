# Custom Error Handling Utility

This package provides simple and structured custom error classes (`ClientError`, `ServerError`) and a global error handler (`globalError`) for consistent error responses in your Node.js or Express.js applications.

### ✨ Features

- `ClientError`: for user-induced errors (e.g. bad requests, unauthorized, etc.)
- `ServerError`: for internal server errors
- `globalError`: centralized error handling for consistent API responses

---

### 📦 Installation

You can copy the `error.js` file directly into your project or use it as a local module.

---

### 📄 Usage

#### 1. Importing

```js
const { ClientError, ServerError, globalError } = require('./error'); // path to your file
