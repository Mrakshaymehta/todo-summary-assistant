# 📝 Todo Summary Assistant

A full-stack productivity web app to manage personal to-do items, generate AI-powered summaries using OpenAI, and send them to a Slack channel with a single click.

---

## 🚀 Features

- ✅ Create, view, and delete to-do items
- 🧠 Summarize all pending tasks using GPT-3.5
- 💬 Automatically send summaries to Slack via webhook
- 📡 Backend API with RESTful endpoints
- 🔐 Environment-based configuration for secure API keys

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React, Axios           |
| Backend     | Node.js, Express       |
| AI Service  | OpenAI API (GPT-3.5)   |
| Messaging   | Slack Incoming Webhooks|
| Hosting     | (Optional) Vercel, Render |

---

## 🧾 Project Structure

```
todo-summary-assistant/
├── backend/        # Express API
│   ├── controllers/
│   ├── routes/
│   ├── index.js
│   └── .env
├── frontend/       # React app
│   ├── src/
│   └── ...
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/Mrakshaymehta/todo-summary-assistant.git
cd todo-summary-assistant
```

---

### 🔹 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

Run the backend:

```bash
node index.js
```

---

### 🔹 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Make sure the backend runs on `http://localhost:5000`.

---

## 🔗 API Endpoints

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/todos`         | Fetch all to-do items            |
| POST   | `/todos`         | Create a new to-do               |
| DELETE | `/todos/:id`     | Delete a to-do by ID             |
| POST   | `/summarize`     | Generate and post summary to Slack |

---

## 🔐 OpenAI Setup

1. Visit [OpenAI Platform](https://platform.openai.com/account/api-keys)
2. Generate an API key
3. Add it to `.env` as `OPENAI_API_KEY`

---

## 💬 Slack Webhook Setup

1. Go to your Slack workspace settings
2. Create an [Incoming Webhook](https://api.slack.com/messaging/webhooks)
3. Paste the URL in `.env` as `SLACK_WEBHOOK_URL`

---
# 📝 Todo Summary Assistant

🔗 **Live Frontend:** [https://todo-summary-assistant.vercel.app](https://todo-summary-assistant.vercel.app)  
🔗 **Live Backend (API):** [https://todo-summary-backend.onrender.com](https://todo-summary-backend.onrender.com)

A full-stack productivity web app to manage personal to-do items...

## 📌 Future Enhancements

- 🗃️ Replace in-memory storage with Supabase/PostgreSQL
- 🔐 Add user authentication (e.g., Firebase/Auth0)
- ☁️ Deploy frontend (Vercel) and backend (Render)

---

## 👨‍💻 Author

**Akshay Mehta**  
📎 [GitHub](https://github.com/Mrakshaymehta)

---

## 🌟 License

This project is for educational/demo purposes. Feel free to fork and build on it.
