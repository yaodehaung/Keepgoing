/**
*Initialize a new stack
*
*@api public
*/
let Stackjs = function(){
    this._storage = []; //Strorage of stack items
    this._pointer = -1; //pointer
    this._temp = 0; //use for temporary values
};

/**
*Add a item to stack
*
*@param {String} data
*@api public
*/
Stackjs.prototype.push = function(data){
    this._storage.push(data);
    this._pointer++;
};


/**
*Remove item from stack
*
*@api public
*/
Stackjs.prototype.pop = function(){
    if(this._pointer >= 0){
        this._storage.pop();
        this._pointer--;
    }else {
        this._pointer = -1;
    }
};


/**
*Peek item from stack
*
*@api public
*/
Stackjs.prototype.peek = function(){
    if(this._pointer >= 0){
        this._temp = this._storage[this._pointer];
        this._storage.pop();
        this._pointer--;
        
        return this._temp;
    }else {
        this._pointer = -1;
    }
};

/**
*Return item from stack
*
*@api public
*/
Stackjs.prototype.show = function(){
    if(this._pointer >= 0){
        return this._storage;
    }
};

/**
*Remove all stack items
*
*@api public
*/
Stackjs.prototype.clear = function(){
    this._storage = [];
    this._pointer = -1;
};


/**
*get length of stack
*
*@api public
*/
Stackjs.prototype.length = function() {
    if(this._pointer >= 0){
        return (this._pointer + 1);
    } else {
        return 0;
    }
};


let factor =  new Stackjs();


factor.push(1);

factor.push(5);
factor.push(9);
console.log(factor.show())

factor.clear();
console.log(factor.show())

