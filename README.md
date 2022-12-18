# Book Fair App

It is a platform where the community can exchange books and refer what they like.The admins can upload the available books and receive comments.Users can make online payments and can get their favourite books at their doorstep.

## Features

- Cart
- Reviews and ratings
- Pagination
- Search feature
- User profile
- Admin profile
- Payment Integration(Stripe)

### Admin profile can be accessed via:

- email : admin@example.com
- password : 123456

## Tech Stack

**Client:** HTML , CSS , JS , BootStrap , React , React BootStrap , Redux

**Server:** Node , Express

**DataBase:** MongoDB

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = any secret
STRIPE_SECRET_KEY
REACT_APP_STRIPE_PUBLISHABLE_KEY
```

## Installation

```bash
# Installing dependencies
npm install
cd frontend
npm install

# Run frontend (3000) & backend (5000) concurrently
npm run dev

# Run backend only
npm run server
```

## API Reference

[Stripe](https://stripe.com/docs/api)

The Stripe API is used to accept payments via a Credit or Debit Card. You can test this using 4242 4242 4242 4242 and any combition of date/cvv

## Deployment

The app is deployed here

[LIVE](https://book-fair-app-mern.onrender.com/)
