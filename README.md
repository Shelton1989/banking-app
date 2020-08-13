## Introduction

For ease of viewing, a live version can be viewed at [qdb.sheltonwilson.co.za](https://qdb.sheltonwilson.co.za/).

The project is a simple user dashboard that satifies the following:
1. Two Column layout with a fixed sidebar.
2. Two routes named `dahsboard` and `settings`
3. REST API call to fetch data.
4. Data is persisted to both local storage and app state.
4. Unit tests to tests the REST API call.
5. Use of [Ant Design](https://ant.design)

Furthermore, the following is satisfied:
- Secrets are stored in an `.env` file.
- This is a Typescript implementation of React.
- Start scripts automatically read from the created `.env` file.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using the following command
```bash
yarn create react-app --template typescript
```
## Project Setup

clone this repository by running the following command
```bash
git clone https://github.com/Shelton1989/qdb.git
```
**Important note: Do not skip this step or the REST API call will fail.**

In the project root directory, create a `.env` file with the following entry:
```txt
REACT_APP_BASE_URL= <BASE_API_URL>
```
where `<BASE_API_URL>` is the base url e.g. `https://www.example.com/` for accessing the RESTful service. Please include the trailing slash.

Run 
```bash
yarn install
```
to install the dependencies.

## Available Scripts

In the project root directory, please run:

### `yarn install`
This command will install the dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Tests

This project uses [Jest](https://jestjs.io) and the [React Testing Library](https://testing-library.com/) for the unit test implementation.
To run the simple unit test run the following command:
```bash
yarn test
```
