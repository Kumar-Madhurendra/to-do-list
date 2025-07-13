# Todo List Application

A React-based todo list application with features like task management, sorting, filtering, and localStorage persistence.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Remove tasks
- Sort tasks (A-Z or Z-A)
- Filter tasks (All/Completed/Incomplete)
- Persistent storage using localStorage
- Duplicate task prevention
- Responsive design with toast notifications

## Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Testing Instructions

1. **Adding Tasks**
   - Click in the input field and type a task
   - Click the "Add" button or press Enter
   - Try adding a duplicate task (should show warning)

2. **Task Management**
   - Click the checkbox to mark a task as complete
   - Click the delete button to remove a task
   - Try adding and removing multiple tasks

3. **Sorting**
   - Click the "Sort" button to toggle between ascending and descending order
   - Verify tasks are sorted alphabetically
   - Try sorting with different types of tasks

4. **Filtering**
   - Use the dropdown to filter tasks
   - Select "All" to see all tasks
   - Select "Completed" to see only completed tasks
   - Select "Incomplete" to see only incomplete tasks

5. **Persistence Testing**
   - Add some tasks and mark some as complete
   - Refresh the page
   - Verify all tasks and their completion status are preserved
   - Verify sort order and filter status are preserved

## Available Scripts

In the project directory, you can run:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
