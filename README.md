# Phase 2 Code Challenge: Plantsy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Overview

Plantsy is a React admin interface for a plant store. The app connects to a local backend API to fetch, display, and manage plant inventory. Features include viewing all plants on load, adding new plants via form submission, marking plants as sold out, and filtering plants by name via search.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server` to start the backend on port `6001`.
3. In a new terminal, run `npm run dev` to start the frontend.
4. Open [http://localhost:6001/plants](http://localhost:6001/plants) to verify the backend is running before proceeding.
5. Run `npm run test` to run the test suite.

## Endpoints

Base URL: `http://localhost:6001`

#### GET /plants

Returns all plants.

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99,
    "inStock": true
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98,
    "inStock": true
  }
]
```

#### POST /plants

Required Headers:

```json
{
  "Content-Type": "application/json"
}
```

Request Body:

```json
{
  "name": "string",
  "image": "string",
  "price": "string"
}
```

Example Response:

```json
{
  "id": 8,
  "name": "New Plant",
  "image": "./images/new-plant.jpg",
  "price": "12.99"
}
```

## Deliverables

1. **View all plants** — On page load, all plants are fetched from the backend and displayed.
2. **Add a new plant** — Submit the form to POST a new plant to the backend and display it on the page.
3. **Mark as sold out** — Click the button on a plant card to toggle it between "In Stock" and "Out of Stock" (non-persisting).
4. **Search** — Type in the search bar to filter plants displayed by name in real time.

## Screenshot

![App Screenshot](./screenshot.png)

## Best Practices
- `useEffect` used for data fetching on component mount.
- State managed with `useState` for plants, loading, and search query.
- Components kept modular and reusable.
- No unnecessary console logs or commented-out code.

## Submission
Once all tests pass and code is pushed to GitHub, submit the repo through Canvas using CodeGrade.