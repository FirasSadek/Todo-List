# 📝 To-Dolist

To-Dolist is a modern, minimal to-do list web application with a hand-drawn paper look, designed to help users quickly write down their tasks, mark them as done, and keep them saved in the browser.

## 📌 About the Project

To-Dolist provides a clean and simple user interface focused on a smooth experience. Tasks are written on a sheet of paper over a blurred background, and the list is saved automatically so it is still there the next time you open the app.

**🔗 Live Demo:** https://firassadek.github.io/Todo-List/

## ✨ Features

* ➕ Add tasks quickly (Enter key or Add button)
* ✅ Mark tasks as done with a strikethrough
* 🗑️ Delete tasks with one click
* 💾 Automatic saving using `localStorage`
* 🖼️ Paper image changes when the list is empty or has tasks
* 📜 Scrollable list for long task lists
* 📱 Fully responsive design
* 🚀 Automatic deployment to GitHub Pages

## 🛠️ Technologies Used

* React 19
* TypeScript
* Vite
* Tailwind CSS 4
* Oxlint
* GitHub Actions & GitHub Pages
* Google Fonts – Patrick Hand

## 📂 Project Structure

```
todo-list/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── background.jpg
│   │   ├── paper-nothing.jpg
│   │   └── paper-tasks.jpg
│   │
│   ├── hooks/
│   │   └── useTasks.ts
│   │
│   ├── types/
│   │   └── Task.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 📱 App Sections

### 🏠 Paper Sheet
The main area of the app. Tasks are displayed on a sheet of paper, slightly rotated to match the paper image. The image changes depending on whether there are tasks or not.

### ➕ Add Task Bar
An input field and an Add button at the bottom of the page. Press Enter or click Add to add a new task.

### ✅ Task Actions
Click on a task to mark it as completed (or undo it). Use the × button next to a task to delete it.

### 💾 Saved Data
All tasks are stored in the browser's `localStorage`, so they are restored automatically when the page is reloaded.

## 📱 Responsive Design

The website is responsive and optimized for:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

The paper and text scale with the screen size using CSS container query units.

## 🚀 How to Run

Install the dependencies and start the development server:

```
npm install
npm run dev
```

Then open the link shown in the terminal in your browser.

## 🔗 External Libraries

* React 19
* Tailwind CSS 4
* Vite 8
* Google Fonts – Patrick Hand

## 👨‍💻 Developer

Firas Sadek

* 📧 Email: `firassadek666@gmail.com`
* 📍 Syria

## 📄 License

This project was developed for educational and development purposes.