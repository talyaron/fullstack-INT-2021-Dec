var tsavi = {
    name: 'tzavi hatzav',
    favouriteFoods: ['cabbage', 'lettece', 'marshmello'],
    disLikedFood: ['strawberry', 'pasta', 'pizza'],
    funcFavouriteFood: function () {
        var favouriteFoodStr = "my favourite foods are ";
        for (var i = 0; i < this.favouriteFoods.length; i++) {
            favouriteFoodStr += this.favouriteFoods[i] + " ";
        }
        return favouriteFoodStr;
    }
};
var tzaviTwo = {
    name: 'tzaviTwo',
    favouriteFoods: ['chocolate', 'seaweed', 'sushi'],
    disLikedFood: ['strawberry', 'pasta', 'pizza'],
    printDisLikedFood: function () {
        return "my least favourite foods are " + this.disLikedFood;
    }
};
console.log(tsavi.funcFavouriteFood());
console.log(tzaviTwo.printDisLikedFood());
