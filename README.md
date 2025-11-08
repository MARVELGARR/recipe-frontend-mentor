# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them  
- Increase/decrease the number of items in the cart  
- See an order confirmation modal when they click **"Confirm Order"**  
- Reset their selections when they click **"Start New Order"**  
- View the optimal layout for their device’s screen size  
- See hover and focus states for all interactive elements  

---

### Screenshot

![Screenshot](./screenshot.jpg)

*Add your own screenshot here. You can use Firefox’s “Take a Screenshot” or another tool of your choice.*

---

### Links

- **Solution URL:** [https://github.com/MARVELGARR/recipe-frontend-mentor](https://github.com/MARVELGARR/recipe-frontend-mentor)  
- **Live Site URL:** [https://fronrendproductlist.netlify.app/](https://fronrendproductlist.netlify.app/)

---

## My process

### Built with

- **Semantic HTML5 markup**  
- **SCSS (Sass)**  
- **Flexbox**  
- **CSS Grid**  
- **Mobile-first workflow**  
- **[React](https://reactjs.org/)** – JS library  
- **[Vite](https://vitejs.dev/)** – Build tool  
- **[TypeScript](https://www.typescriptlang.org/)** – Type-safe JavaScript  

---

### What I learned

This project strengthened my understanding of React, TypeScript, and SCSS architecture. I practiced:

- Setting up a React + TypeScript project with Vite  
- Managing cart state using React Context and `useReducer`  
- Organizing and sharing SCSS variables and mixins across components  
- Implementing responsive layouts using CSS Grid and Flexbox  
- Handling component-based state updates and UI feedback in React  

#### Example Code Snippets

tsx
// Cart context reducer example
const cartReducer = (state: CartType[], action: CartAction): CartType[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "INCREASE_QTY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QTY":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};
```tsx