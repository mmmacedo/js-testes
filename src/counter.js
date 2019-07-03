module.exports = {
    count: 0,
    increment: function() {
        return ++this.count;        
    },
    decrement: function() {
        return --this.count        
    },
    incrementValue: function(value) {
        return (value + this.count);
    },
    decrementValue: function(value) {
        return (value - this.count);
    }
};

