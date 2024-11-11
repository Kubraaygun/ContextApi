# User and Task Management Application with Context API

This project, which I prepared using React Native and Context API, is designed to learn how to easily manage data sharing between components. The Context API allows for centralized management of data used throughout the application and ensures it can be easily passed to the relevant components.

## Project Purpose

The purpose of this project is to learn how to manage user and task data within the application using Context API, and how to transfer this data between components.

## Features

- **User Management (UserContext):**
  - User data is fetched from the JSON Placeholder API and managed with UserContext.
  - User data is displayed as a list, and details of a selected user can be accessed.
- **Task Management (TaskContext):**
  - Tasks can be added, deleted, and listed.
  - Task data is managed with TaskContext and shared between components.

## Project Structure

- **Context Structure:**

  - **UserContext:** The context that contains user data. It acts as a central data store for components in the application that need user data.
  - **TaskContext:** The context that contains task data and related functions. It provides a central data store for task management within the application.

- **Provider Usage:** Both contexts, UserProvider and TaskProvider, wrap the App component, making the data available throughout the application.

- **Fetching and Updating Data from Context:** Components can use the useContext hook to access the required data and functions, allowing them to manage user and task data.

## Used Screens and Components

- **UserListScreen:** Displays the list of users. Tapping on a user's name navigates to the detail page.
- **UserDetailScreen:** Shows the user's name, email, and phone information. From this screen, users can also navigate to the task list.
- **TaskScreen:** Includes functions to list tasks, add new tasks, and delete existing tasks.
- **Loader and Error Components:** Provide a loading indicator and display error messages during data fetching.
