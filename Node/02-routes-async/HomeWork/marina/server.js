

const express = require('express');
const app = express();
const port = process.env.PORT || 4006;
app.use(express.static('public'));

const jokes = [
    { text: '', title: 'Extinguish Fire On Paper', url: 'https://www.askideas.com/wp-content/uploads/2018/04/extinguish-fire-on-paper-funny-art.jpg' },
    { text: '', title: 'Fishing', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95p4f0p3tG4FcpN82pSxh_9c8flKRcT8v73rypveWa1_R2USjv2nZ-WhCZtb4DcRYqac&usqp=CAU' },
    { text: '', title: 'Ooops', url: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2016/12/paper3.jpg' },
    { text: '', title: 'Cutted Tree', url: 'https://i.pinimg.com/564x/b7/27/76/b7277661e13739cd48600f9adf342e6b.jpg' },
    { text: '', title: 'Horror Movie', url: 'https://i.pinimg.com/originals/dc/63/3c/dc633c33fc9e265adcae320a85777552.jpg' },
    { text: '', title: 'Mouse for Dinner', url: 'https://i.pinimg.com/564x/4d/94/3c/4d943c8b7a2475987d287f43bab31f06.jpg' },
    { text: '', title: 'Thief', url: 'https://i.pinimg.com/564x/f3/b7/e2/f3b7e272d7b6ab0a97777558ece727c2.jpg' },

    { text: 'Customer: "Waiter, do you server crabs?" Waiter: "Please sit down sir, we serve everyone"', title: '', url: '' },
    { text: 'Life is like a box of chocolate. It doesnt last long for fat people.', title: '', url: ''  },
    { text: 'The best way to make somebody remember you is to borrow money from them.', title: '', url: ''  },
    { text: 'I never make the same mistake twice. I make it 5-6 times, just to be sure.', title: '', url: ''  },
    { text: 'Imagine that your in the forest where there is a tiger in front of you right about to eat you. What do you do? You stop imagine...', title: '', url: ''  }
];

app.get('/stock-img', (req, res) => {

    try {
        return res.send({ stock: jokes[randomJoke()]}); 
        // console.log(stock);  
    } catch (error) {
        res.send({ error: error.message });
    }
});

function randomJoke() {
    return Math.floor(Math.random() * jokes.length);
};

app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});

