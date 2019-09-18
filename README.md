## amplify https://master.d93u222e43m14.amplifyapp.com/

## S3 Bucket http://hanna-alemu-lab-27.s3-website-us-west-2.amazonaws.com/
netlify https://vigorous-archimedes-87bad7.netlify.com/

travis https://www.travis-ci.com/401-advanced-javascript-hanna-alemu/Lab-27-Deployment/builds/128112427

# LAB - 

## Project Name

### Author: Student/Group Name

### Mongo DB URL

mongodb://localhost:27017/

### Common npm Scripts
 "lint": "eslint \"**/*.js\"",  
   "start": "node index.js",  
   "test": "jest --verbose --coverage",  
   "test-watch": "jest --watchAll --verbose --coverage",  
   "jsdoc": "jsdoc -c ./docs/config/jsdoc.config.json",  
   "startDB": "mkdir -p ./.db && mongod --dbpath ./.db"

### For JS DOCS
[Leyla's Guide to JSDocs](https://docs.google.com/document/d/1ifvEDvWpdaCO3AtY6P2KBdDvHaG2GkWpfTFIHBx8BoE/edit?usp=sharing)
* for your server file: app.use('/docs', express.static('./docs'));

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events