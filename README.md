# Application for managing books

### Requirements

---

- node >= 19.0.1
- yarn >= 1.22.19

### Install application

---

#### Open terminal in the folder you will clone repo and type next commands:

```bash
git clone repo
cd ./books-manager-mock-server/
yarn install # install node dependencies locally
yarn start # start the mocked server for frontend application
cd ../books-manager-app/
yarn install # install node dependencies locally
yarn start #Runs the app in the development mode.
yarn husky-install # install husky & create folder(automatically) - optional
npx husky add .husky/pre-commit "yarn lint-staged" # add a pre-commit hook - optional
```

---

### Launch the application if you already installed all the necessary dependencies

#### You need to run back-end(1) and frontend(2) projects separately from a particular folders

```bash
yarn start #Runs the app in the development mode.
```

Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.
You will also see all lint errors in the console.

---

```bash
yarn lint #Fix esling issues if its capable, prettify code corresponding to .prettierrc.js
```
