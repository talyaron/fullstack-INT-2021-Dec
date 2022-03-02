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
console.log(tsavi.funcFavouriteFood());
