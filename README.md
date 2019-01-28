[![Build Status](https://travis-ci.org/abdelrahmanahmed/fly365-challenge.svg?branch=master)](https://travis-ci.org/abdelrahmanahmed/fly365-challenge)
[![codecov](https://codecov.io/gh/abdelrahmanahmed/fly365-challenge/branch/master/graph/badge.svg)](https://codecov.io/gh/abdelrahmanahmed/fly365-challenge)

# Description
This repository is created to fetch hotels data from fly-365 API , 

# Prerequests 
- install npm `5.6.0`
- install node `8.10.0`

# Frameworks and tools
- react - redux
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
- For number of nights i assumed that max number of nights is 30 days, and i set this value in app config

# Testing
- i used Enzyme to test UI functionalities along with Jest. 
- to run unit tests
```
npm test
```

# bundling
- to bundle the app run
```
npm build:prod
```

# Todo
- [ ] enhance error handling
- [ ] add loaders
- [ ] make Gallery component more generalized
- [ ] add CD pipeline  