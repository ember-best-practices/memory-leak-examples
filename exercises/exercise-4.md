# Exercise #4 - Module Leaks

Now that you have successfully identified and fixed several memory leaks, we're
going to change things up a bit and talk about a certain kind of memory leak
without a specific test to follow.

## The Pattern

Module memory leaks occur when state is kept within a [JS module](http://2ality.com/2014/09/es6-modules-final.html)
and has no explicit mechanism to remove or reset it at any point in time.

An easy example would be like so:

```js
const cache = new Map();
export default function complexTask(userObj) {
  if (cache.get(userObj)) {
    return cache.get(userObj);
  }

  // ...

  cache.set(userObj, result);

  return result;
}
```

In the above, any value that is ever stored in `cache` will be retained forever.
This is because once a JS module is evaluated, the code remains in memory
indefinitely. This is similar to the "scope" leaks in that it is a by-product of
the exported function having closed over the scope in which `cache` is defined.

So, how does one fix a leak like this? Well, we have several options.

First, we should evaluate if `cache` is even needed. There is the chance that
if arguments to a given function are non-primitive values, then caching may
actually lead to more bugs.

Second, cache primitives instead of references, we should try, as much as
possible not to store references to input values in our cache. Doing so, makes
it very easy to leak objects which you never intended to be stored elsewhere.

Finally, if a cache is needed and it must store non-primitive information, a
caching service that knows to reset itself on destruction of the host
application is a good approach. We essentially want a mechanism to ensure the
cache does not outlive the lifespan of its host. The exact approach here will
vary depending on your framework.

In the above example, we're currently using an input object as our cache key,
but if we only need two properties, maybe `foo` and `bar`, we could use those
as our key instead:

```js
let key = userObj.foo + userObj.bar;
if (cache.gey(ket)) {
  // ...
```

## Key Takeaways

* Be wary of placing state in module scope
* Favor primitive values over references when possible

[Prev: Exercise #3](./exercise-3.md) | [Next: Exercise #5](./exercise-5.md)
