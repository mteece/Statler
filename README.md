# Notes

### Checkout then install dependencies:

    $ npm install

### using the in-browser JSX transformer. Be sure to precompile your JSX for production

    $ jsx --watch src/ build/


### spool up Mongo DB

    $ mongod -dbpath /Users/mteece/Databases/MongoDB/


### spool up Express

    $ npm start

### Useful Queries

    $ use statler
    $ db.comments.find()
    $ db.comments.update(
        { author: { $eq: "Matthew" } },
        { $set: { text: "Testing from NH." }  }
      )

### URLS
* http://localhost:3000/
* http://localhost:3000/edit/:id