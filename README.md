## Full Stack E-commerce Website
#Overview
This project is a full stack e-commerce website built using Next.js, with TypeScript. The website allows users to browse products, add them to the cart, and proceed to checkout. The admin panel enables managing products, orders, and users.

## Features
- User Authentication: Sign up, log in, and manage user accounts.
- Product Management: View, add, edit, and delete products.
- Shopping Cart: Add products to the cart, update quantities, and remove items.
- Order Management: Place orders, view order history, and manage order statuses.
- Responsive Design: Mobile-first design using Tailwind CSS.
- Admin Panel: Manage products, orders, and users.
- API Integration: RESTful API built with Next.js API routes.
## Technologies Used
#Frontend:

Next.js
React
TypeScript
Tailwind CSS
#Backend:

Next.js API Routes
Prisma
#Database:

mongoDB

#Authentication:

NextAuth.js

## Set up Prisma

Generate Prisma Client and migrate the database:

npx prisma generate
npx prisma migrate dev --name init

## Usage

Product Management
Admins can add, edit, and delete products through the admin panel. Product information includes name, description, price, and images.

Shopping Cart
Users can add products to their cart, update quantities, and remove items. The cart's state is managed using React's context API.
