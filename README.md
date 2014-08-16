dojo
====

##Initialize: 

From the command line inside of the cloned dojo folder:

npm install

##Build:

From the command line inside of the cloned dojo folder:


node build 

--or-- 

node build -w 

-w watches the file system and rebuilds the files as they are built

##Reading Material

Browserify Handbook - [click here](https://github.com/substack/browserify-handbook)

React - [click here](https://facebook.github.io/react/)

##File Structure

All files being developed are located under *src*. node build automatically complies the files from *src* into *public*. Open *index.html* inside of the *public* folder to view the project. The *js* folder inside of *src* doesn't need to be used, it's just a replica of the *jsx* folder. Write all of your browserify/react files inside of the *jsx* folder. jsx allows you to build react components with html syntax, other than that it's identical to javascript.

##Task

* Build something with browserify and React. 

* Get familiar with  the commonjs (require) syntax. -- var React = require('react') -- 

* Build a simple form or rebuild a dojo project using React + browserify. 

Google is always your friend. 

##Contact

Email me if you have any questions: dwisner6@gmail.com
