(function (factory, window) {
    "use strict";
    
    var hashmapUrl = {
        amd: "./hashmap",
        node: "hashmap"
    }
    
    if(typeof define === "function" && define.amd) {
        define([hashmapUrl.amd], factory);
    }
    else if (typeof exports === "object") {
        exports.SpatialHashMap = factory( require(hashmapUrl.node).HashMap );
    }
    else {
        window.SpatialHashMap = factory(window.HashMap);
    }
    
    
}(function(HashMap) {
    "use strict";
    
    
    
    
    function SpatialHashMap(cellSize) {
        this.cellSize = cellSize;
        this.grid = {};
        this.objects = 
        
        return this;
    }
    
    SpatialHashMap.prototype.key = function(obj) {
        var cellSize = this.cellSize;
        var x = Math.floor(obj.x / cellSize) * cellSize;
        var y = Math.floor(obj.y / cellSize) * cellSize;
        
        return x + ":" + y;
    }
    
    SpatialHashMap.prototype.keys = function(obj) {
        var cellSize = this.cellSize;
        var Xmin = Math.floor(obj.x / cellSize);
        var Xmax = Math.ceil((obj.x + dim.w) / cellSize);
        var Ymin = Math.floor(obj.y / cellSize);
        var Ymax = Math.ceil((obj.y + dim.h) / cellSize);
        var keys = [];
        
        for(var x = Xmin; x < Xmax; x++) {
            for(var y = Ymin; y < Ymax; y++) {
                keys.push(this.key({x:x, y:y}));
            }
        }
        
        return keys;
    }
    
    SpatialHashMap.prototype.allKeys = function() {
        return Object.keys(this.grid);
    }
    
    SpatialHashMap.prototype.insert = function(obj) {
        var grid = this.grid;
        var keys = this.keys(obj);
        
        for(var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if(!grid[key]) {grid[key] === [];}
            grid[key].push(obj);
        }
        
        return this;
    }
    
    SpatialHashMap.prototype.remove = function(obj) {
        var keys = this.keys(obj);
        
        for(var i = 0, len = keys.length; i < len; i++) {
            this.removeFromCell(keys[i], obj);
        }
        
        return this;
    }
    
    SpatialHashMap.prototype.removeFromCell = function(key, obj) {
        var cell = this.grid[key];
        
        if(cell) {
            this.grid[key] = cell.filter(function(item) {
                return item !== obj;
            });
        }
        
        return this;
    }
    
    SpatialHashMap.prototype.retrieve = function(obj) {
        var keys = this.keys(obj);
        var cells = [];
        
        for(var i = 0, len = keys.length; i < len; i++) {
            var cell = this.grid[keys[i]];
            if(cell) {
                cells.push(cell);
            }
        }
        
        return [].concat.apply([], cells);
    }
    
    SpatialHashMap.prototype.moveBy(obj, vector) {
        var cellSize = this.cellSize;
        
        if(vector.x > 0 && vector.x > (cellSize - ((obj.x + obj.w) % cellSize))) {
            
        }
        else if(vector.x < 0 && -vector.x > (cellSize - ((obj.x + obj.w) % cellSize))) {
            
        }
    }
    
    SpatialHashMap.prototype.moveTo(obj, vector) {
        
    }
    
    
    
    return SpatialHashMap;
    
    
}), window);
