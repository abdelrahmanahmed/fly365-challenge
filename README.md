[![Build Status](https://travis-ci.org/abdelrahmanahmed/fly365-challenge.svg?branch=master)](https://travis-ci.org/abdelrahmanahmed/fly365-challenge)

# Description
This repository is created to fetch hotels data from fly-365 API , 

#Frameworks and tools
- react
- Material UI

# Installation
```
npm install && npm start
```

# Assumptions
- For Hotel review i assumed that score:
    - if it is more than `9` , it will evaluated to `Excellent`
    - from `7.001` to `8.999` , it will evaluated to `Very Good`
    -  from `5` to `7` , it will evaluated to `Good`
    - less than `5` , it will evaluated to `Bad`

# Testing
- i used Enzyme to test UI functionalities along with Jest. 
- to run unit tests 
```
npm test
```

# Todo
- [ ] enhance error handling
- [ ] add loaders
- [ ] make Gallery component more generalized

