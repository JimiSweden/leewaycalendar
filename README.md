# Generating components etc with generate-react-cli
Using configuration in generate-react-cli.json
default is for components, other types has to be specified using the --type=page, where page is the name of the configuration.
examples:
```json
npx generate-react-cli component HomePage --type=page
npx generate-react-cli component BoxLayout --type=layout
npx generate-react-cli component MyService --type=service
```


## quick notes: 
'withStory' creates a [storybook](https://storybook.js.org/) story file with this component, very useful project for a visual testable UI library.

also look at this description for setting up custom templates
https://github.com/arminbro/generate-react-cli#example-of-using-the-customtemplates-object-within-your-generate-react-clijson-config-file 

# Stores and States (Recoil and Redux)
debugging recoil in chrome is possible using https://github.com/open-source-labs/Recoilize , however it only supports React v16 at the moment.
therefore the component RecoilDebugObserver.ts us used in the index.ts file (below RecoilRoot) to display atom (i.e. state) changes

for Redux debugging use chrome/firefox extension "Redux DevTools"

## Serializable data and Redux 
Note: creating data from typescript Classes is not working /recommended when using the data in redux store since the data is not serializable.
- https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state
- https://redux.js.org/tutorials/essentials/part-6-performance-normalization#normalizing-data


# Storybook (visual testing of components, pages etc)

to run storybook 
```cmd
npm run storybook
```
This will open storybook UI  http://localhost:6006/?path=/docs/example-introduction--docs
in the left menu under "Example" there are som good simple examples to understand how it works and how you might use the stories
- you should also read https://storybook.js.org/docs/react/get-started/why-storybook 
  - How to write stories https://storybook.js.org/docs/react/writing-stories/introduction
  - Tutorials https://storybook.js.org/tutorials/  plenty of good stuff
  - How to document components https://storybook.js.org/docs/react/writing-docs/introduction 
  - Essential addons https://storybook.js.org/docs/react/essentials/introduction

## remember to add good JSDoc comments to your components 
JSDoc makes the components documentation available not only on hovering usage of them, but is also displayed in the Storybook stories (unless overriding them) [how to override the component comments](https://storybook.js.org/docs/react/api/doc-block-description#writing-descriptions)
```ts
/**
 * A header component including a logo, title, and buttons for logging in, logging out, and creating an account.
 */
export const Header //...
```

# other notes

## Lazy components 
While using React.lazy() can improve the performance of your application by reducing the initial bundle size and loading components as needed, it is not always necessary or beneficial to use it on all components.

Here are some considerations to help you decide whether to use React.lazy():

Component size: If a component is small and has a minimal impact on the overall bundle size, using React.lazy() might not provide a significant performance improvement. Additionally, wrapping every component with React.lazy() and Suspense can make your code more complex and harder to maintain. If the Task component is small and used frequently, it might be better to load it normally, without using React.lazy().

Commonly used components: Components that are used frequently across your application or are part of the initial render should not be lazily loaded, as this can cause unnecessary loading delays.

Nested components: If a parent component is already using React.lazy(), you generally do not need to lazily load its children, as they will be included when the parent component is loaded.

---

# (default readme >> ) Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
