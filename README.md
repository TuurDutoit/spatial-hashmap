spatial-hashmap
===============

A spatial hashmap implementation in javascript

Issues and bugs in the [bug tracker](https://github.com/TuurDutoit/spatial-hashmap/issues), please. Pull requests are very welcome!


__Note: These docs are out of date. I added a lot of methods and changed quite a few, but I haven't had the time to update the docs. Sorry for that :(. However, I will probably update the docs in the next few days, and in the meantime you can use the source (which is very clear, I think).__

__Note: Performance is OK, I think (I didn't test thoroughly, and on a quite slow laptop):  
Adding 100:       10-30ms  
Adding 1,000:     60-80ms  
Adding 10,000:    650ms  
Adding 100,000:   7-9s  
Adding 1,000,000: Crashes :(  
Unfortunately, Chrome crashed after about half a minute when adding 1M items  
If you want a more stable and faster hashmap, use [RBush](https://github.com/mourner/rbush) ([NPM](https://www.npmjs.com/package/rbush))__



## Installation

### With npm (for node.js):

    $ npm install spatial-hashmap

And require it in your code:
    
```javascript
var SpatialHashMap = require("spatial-hashmap").SpatialHashMap;
```


### With bower:

    $ bower install spatial-hashmap


### With AMD loader:

Download the `spatial-hashmap.js` file in `src`, get a copy of `hashmap.js` from [here](https://github.com/flesler/hashmap) and place both files next to each other. If they can't be next to each other, change the `hashmapUrl.amd` variable at the top of the `spatial-hashmap.js` file to the path to `hashmap.js` (relative to `spatial-hashmap.js`). This variable will be passed as a dependency to the `define()` function.

Then, load `spatial-hashmap` in your code:

```javascript
var SpatialHashMap = require("path/to/spatial-hashmap");
```

Don't forget to minify the code in production! Hopefully, in the future, I'll provide a minified script.


### Browser (vanilla JS):

Download the `spatial-hashmap.js` file in `src` and get a copy of `hashmap.js` from [here](https://github.com/flesler/hashmap).

Then, load `hashmap.js` and `spatial-hashmap.js` in your HTML (place the following in the `<head>` or at the bottom of the `<body>`, for example) :

```html
<script type="text/javascript" src="path/to/hashmap.js"></script>
<script type="text/javascript" src="path/to/spatial-hashmap.js"></script>
```

Don't forget to minify the code in production! Hopefully, in the future, I'll provide a minified script.




## Usage

__Note__: All methods return the SpatialHashMap object they have been called on, allowing for chaining.

### SpatialHashMap (number: cellSize) [constructor]

__cellSize__: *number | required*. Denotes the size of the grid cells.

First, create a new Spatial HashMap:

```javascript
var shm = new SpatialHashMap (cellSize);
```


### SHM.add (Dimensions: dimensions, [any: object])

__dimensions__: *Dimensions | required*. Stores the dimensions of the axis-aligned bounding box (AABB) of the object. See 'Dimensions' for more info.  
__object__: *any | optional*. The object to store here. If omitted, `dimensions` will be stored instead.

To add objects, use the `add()` method:

```javascript
var dimensions = {x: 10, y: 10, w: 20, h: 20};
var object = {life: 13, velocity: 4.35, name: "Enemy"};
shm.add (dimensions, object);
```

`SHM.add()` takes two arguments: `dimensions` and `object`. `dimensions` is an special object that stores the dimensions of the AABB of the object. `object` is the object to store. It can be of any type and is optional: if it is not provided, the `dimensions` will be stored instead.





### SHM.moveBy | SHM.move (Vector: vector, any: object)

__vector__: *Vector | required*. The vector by which to move the `object`.  
__object__: *any | required*. The object to be moved.

To move objects a certain amount around in space, use the `moveBy` method, or its alias `move`:

```javascript
var vector = {x: 5, y: 0};
shm.moveBy (vector, object);
```

`SHM.moveBy()` takes two arguments: `vector` and `object`. `vector` is the vector by which to move `object`. It has `x` and `y` attributes to move over the X-axis and Y-axis, respectively. `object` is the object to be moved.


### SHM.moveTo (Vector: position, any: object)

__position__: *Vector | required*. The new position of the `object`.  
__object__: *any | required*. The object to be moved.

To move objects to a specific place in space, use the `moveTo` method:

```javascript
var position = {x: 50, y:5};
shm.moveTo (position, object);
```

`SHM.moveTo()` takes two arguments: `position` and `object`. `position` is a `Vector` denoting the new position of the `object`. `object` is the object to be moved to a new position.


### SHM.remove | SHM.delete (any: object)

__object__: *any | required*. The object to remove from the hashmap.

To remove an object from the hashmap, use the `remove()` method, or its alias `delete()`:

```javascript
shm.remove (object);
```


### Vector (Object)

__x__: *number*. The X-coordinate of the point.  
__y__: *number*. The Y-coordinate of the point.

A `Vector` represents a point or translation in space. There is no special class included: it is a simple Object.


### Dimensions (Object)

__x__: *number*. The X-coordinate of the AABB.  
__y__: *number*. The Y-coordinate of the AABB.  
__w__: *number*. The width of the AABB.  
__h__: *number*. The height of the AABB.

A `Dimensions` object represents an axis-aligned bounding box (AABB) of an object. The `x` and `y` coordinates are meant to be those of the bottom-left corner, but I think it should work with any corner (as long as you use the same for all your objects).  
There is no special class included: it is a simple Object.



## That's it

Now, go play!
