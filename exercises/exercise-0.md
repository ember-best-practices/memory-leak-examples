# Exercise #0 - Introduction

Welcome to the training!

If you've made it this far, then you should have all the prerequisite tools and dependencies installed. If you haven't done that yet, you should jump back to the [`README`](../README.md).

## Starting Your Environment

The first thing we need to do is orient ourselves with our development environment.

Make sure your current working directory is the root of this repo and run the following command:

```bash
ember serve
```

Now, you should be able to visit the application in your web browser at [http://localhost:4200/](http://localhost:4200/).

Click around the app a bit and get a feel for it. The application is relatively simplistic and is read-only in terms of data consumption.

Once you've oriented yourself, visit [http://localhost:4200/tests/](http://localhost:4200/tests/) and check out the tests for the application, which should all be passing. This is where we will be spending the majority of our time since the automated execution of tests makes identifying and fixing memory leaks much easier than within the application itself.

One last thing to do before we move on: try modifying `app/app.js`. I recommend doing something like adding `console.log('boo!')` and save the file. This should cause the browser to auto-reload with your changes. By default, Ember is watching the files in our `app` and `tests` directories, so we should get quick feedback when working through these exercises.

## Using Chrome Canary

Some developers recommend using Chrome Canary whenever you do profiling and debugging work for applications. The reason for this is that Chrome Canary often has what are considered the latest and greatest in terms of developer tools. It also gives you access to running special feature flags should you need them.

For the purpose of these exercises, however, you can use Chrome Canary if you want to check it out, but using the current stable version of Chrome is also fine (v57 as of this writing). All screenshots and instructions will be from the current stable version of Chrome.
