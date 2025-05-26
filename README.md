# EJS Basics 📚

## EJS (Embedded JavaScript) is a templating engine for Node.js that allows you to generate HTML templates with JavaScript. 💻

## Features 🚀
- Templating: Separate presentation logic from application logic 📈
- JavaScript: Use JavaScript code in your templates 💻
- Flexible: Supports conditionals, loops, and functions 🔁

## Basic Syntax 📝
- <% %>: Execute JavaScript code 🤖
- <%= %>: Output JavaScript value 📝
- <%- %>: Output unescaped JavaScript value 📝

## Example 📄

### ejs 
``` <h1><%= title %></h1>
<ul>
    <% users.forEach(function(user) { %>
        <li><%= user.name %></li>
    <% }); %>
</ul>  


## Getting Started 🚀
1. Install EJS using npm: npm install ejs
2. Use EJS in your Node.js application to generate dynamic HTML content 🌐

## Resources 📚
- EJS Documentation: https://ejs.co/
- Node.js Documentation: https://nodejs.org/en/docs/

### Happy Coding!