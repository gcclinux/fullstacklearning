### Personal training & learning Full Stack 
* Course: Full Stack Web Development Bootcamp with React and Python
* Author: Bogdan Stashchuk
* Provider: O'Reilly Learning

### Check required installations
```
$ node --version
v22.1.0

$ npm --version
10.7.0

$ npx --version
10.7.0
```

### Install React.JS and create project
```
$ npm create vite@latest
$ cp frontend
$ npm install
$ npm run dev
```

### As I am not following the course exactly had to update dependencies in package.json
FROM:
```
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
  },
```
INCLUDE:
```
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "^5.0.0"
  },
```

