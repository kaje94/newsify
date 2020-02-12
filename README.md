# Newsify

##### A mobile application built with React-Native & Ignite-CLI(Andross boilerplate).

## Functions

1. List headline news and custom news(based on user preference), by calling https://newsapi.org APIs.
2. View full details and redirect to full article.
3. Simple login feature where the username will be persisted in local storage.

## Getting Started

1. Make sure you're set up for React Native & Node 7.6+
2. Clone this repo
3. cd to the cloned repo
4. Install dependencies with `yarn` or `npm i`
5. Create a .env file with NEWS_API_SECRET variable
6. Run the app using one of following commands

- for iOS
  - run `npx react-native run-ios`
- for Android
  - run `npx react-native run-android`

## Project Structure

Everything related to react-native is within the App folder

- Containers: The four main screens can be found here(Home,Feed,Profile & ViewDetails) along with their styles.
- Components: Any custom reusable components can be found here. Eg: CardListItem
- Config: Initialization configurations can be found here.
- Images: All images can be found here.
- Navigation: Route setup and redux navigation config can be found here
- Redux, Saga: State management and redux persist configs can be found here.
- Services: Contains API service and other important utilities.
- Themes: Styling themes used throughout the app styles.

### Screenshots

![Image description](https://drive.google.com/uc?export=view&id=1rahhDVetPn38NeqvoFxgrT53Iz2byQFn)
![Image description](https://drive.google.com/uc?export=view&id=1ANld7TIe9V_Oq6qyiaYFIDFhKX-dJ4B1)
![Image description](https://drive.google.com/uc?export=view&id=1a4Q8xqIHEHVCbxMh6DZcheQHtc-lWgwU)
![Image description](https://drive.google.com/uc?export=view&id=1CwMp-wfy8mRHrFgWZ5b4QCFiPJkLXZMe)
![Image description](https://drive.google.com/uc?export=view&id=19sGrijG7shGY2Pef6TuBMLyK3XsbsxZz)
![Image description](https://drive.google.com/uc?export=view&id=1cHROrlH3qfEbwIfLz0iK3mD042wL8o4T)
