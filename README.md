# Dev Stack

## About The Project

Dev Stack is a simple website for developers. Here users can explore different technologies and create their own technology stack.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* React-Toastify
* JSON
* Vite

## Features

* Explore different development technologies.
* Add technologies to your own stack and remove them anytime.
* Responsive design with loading and toast notifications.

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easy to write and understand.

### 2. What is the difference between props and state?

Props are used to send data from one component to another. State is used to store data that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store data in a component. I used it for technologies, selected stack, and loading.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code when the component loads. I used it to get the technology data from the JSON file.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It helps React update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition. I used it to show a message when the stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Props are used to send data from a parent component to a child component. A child can send something back by using a function passed from the parent. I did not use props in this project.
