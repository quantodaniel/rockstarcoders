# Getting Started with CoderFlix

This project was created for the RockStar Coders challenge.

## Install and run

In a folder of your choice, download the project files:\
`git clone https://github.com/quantodaniel/rockstarcoders.git`

In the project directory, you can run:

### `yarn install`

Runs the installation of all dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### About the project

This project was created using `create-react-app` with the typescript template. (React @17.0.2) \
Also using `bootstrap` to keep everthing in place for large screens. Small screens are not supported.

### State management

I decided to use `useSwr` for caching queries instead of adding complexity with state management.\
Also used `react-router-dom` in order to control navigation and passing movie data to the dialog with details.\
Search input and rating filter are managed by url params, this way can be more effective when sharing urls and keeping the current state.

## Learn More

You can learn more about my profile and work experience [here](https://www.linkedin.com/in/quantodaniel/).
