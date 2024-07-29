# UI-Components

A React UI library for internal use, with components viewable in Storybook

## Installation

### Using as a Package

> [!IMPORTANT]
> To use the @mmlee0819/my-ui-components in your React project, please ensure your React version is higher than 18.3.1.

**Install the component library:**

1. Log in to npm with the following command:

```sh
npm login --scope=@mmlee0819 --registry=https://npm.pkg.github.com/
```

<figure class="inline" markdown>
  <img alt="npm login image" src="https://github.com/user-attachments/assets/8980514c-9a14-4622-9da0-df9f0825d41f">  
  <br/>
  <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;Enter your Github Username. The password is your Personal Access Token.</figcaption>  
</figure>

&nbsp;&nbsp;&nbsp;
<br/>

2. Install the package with:

```sh
npm install @mmlee0819/my-ui-components --registry=https://npm.pkg.github.com
```

## Usage

To use the components from @mmlee0819/my-ui-components, follow these steps:

1. To apply the CSS styles defined in the package, please import the CSS file into a global file in your project.

   For example, you can add the following line to the main.js in a vite project or the layout.js file in your next.js project:
   
```js
// main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  
import "@mmlee0819/my-ui-components/style.css" // Insert this line to use the CSS styles defined in the package

...
...
...

```

2. Use <Button /> in your js / jsx file:

```jsx
// Example.jsx
import { Button } from '@mmlee0819/my-ui-components'

function Example() {
  return (
    <Button primary label="Button"/>
  )
}
```

You should see a button on the page with primary styles applied.

<img src="https://github.com/user-attachments/assets/d3270622-4603-4256-85e4-d8dccc4ebccc" width="45%"/>
<img src="https://github.com/user-attachments/assets/59eae23c-cf4e-4f01-b4f5-ba8ef05424c9" width="45%"/>




---

### Viewing Component Library Content

To explore the components within the library, clone the repository and run Storybook:

```sh
git clone https://github.com/mmlee0819/my-ui-components.git

npm run storybook
```

<figure class="inline" markdown>
  <figcaption>Storybook provides an interactive interface where you can see all the components, along with their props and usage examples.</figcaption>  
  ![image](https://github.com/user-attachments/assets/8dcd71a1-653c-4b4b-a6b0-cedc8f5a6579)

</figure>
