# TODO-LIST

## How to install

### Prerequisites

You must have `nodejs` (https://nodejs.org/fr/download/) installed on your machine. You will also need one of the following package manager: `yarn`.

### Installation

Installing dependencies

```sh
yarn install
```

### Run

The project was created using **Vite**.

1. Start the project:

```sh
yarn dev
```

2. Build the project:

```sh
yarn build
```

3. Preview the project:

```sh
yarn preview
```

### Online version

An online version has been deployed thanks to Firebase ([Hosting](https://firebase.google.com/products/hosting)): https://todo-list-748be.web.app/.

### Feedbacks

#### Difficulties

-   DRY best practices were difficult to follow because of the UI/UX design or behaviour that were sometimes subtly different.
-   It is not always easy to tell the difference between atomic components and to push logic to the right place. Sometimes several revisions are required.

#### Success

-   I am proud to have identified most of the behaviours
-   I took advantage of this test to test [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/docs), so in addition to React, it was very advantageous for me.

#### Software Evolution and Maintenance

-   For the design, i will try use [daisyUI](https://daisyui.com/), a Tailwind CSS component library and try to design more reusable components (modal, button, input field, etc.).
-   Refactor to have a simpler logic (more custom Hooks, more `Context`)

Thank you! ☀️
