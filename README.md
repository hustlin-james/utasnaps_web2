utasnaps_web2
=============

#UTASnaps

## Install
1. "npm install"
2. "bower install"

## Unit Testing
1. "grunt test"

## E2E Testing
1. "webdriver-manager start" / "sudo webdriver-manager start"
2. open another cmd and go to the directory where protractor.conf.js is located
3. "protractor protractor.conf.js"

## Notes:
### adding bower dependencies: 
1. add the name and version to the bower.json
2. do "bower update";
3. do "grunt wiredep" to automatically add the script tags to the index.html
