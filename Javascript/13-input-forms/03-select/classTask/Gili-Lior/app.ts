
console.log(`Connected!`);
interface PlayersArr {
    name: string,
    src: string
}
const basketballPlayer: Array<PlayersArr> = [
    {
        name: 'Lebron James',
        src: 'https://avatarfiles.alphacoders.com/141/141680.jpg'
    },
    {
        name: "Michael Jordan",
        src: 'https://cdn.wallpapersafari.com/57/69/XF2z75.jpg'
    },
    {
        name: 'Limor Mizrachi',
        src: 'http://www.cadursela.co.il/Images/pics/abc/cadursela10.jpg',
    }

];
const tennisPlayer: Array<PlayersArr> = [
    {
        name: 'Rafael Nadal',
        src: 'https://i.pinimg.com/736x/5f/fa/3f/5ffa3f2ae385d750a8a6f7106fc7fe5e--tv-schedule-rafael-nadal.jpg'
    },
    {
        name: "Roger Federer",
        src: 'https://thespun.com/wp-content/uploads/2019/04/GettyImages-1139535247-1024x683.jpg'
    },
    {
        name: 'Shahar Peer',
        src: 'https://images1.ynet.co.il/PicServer5/2017/03/01/7619231/279473001000100980653no.jpg',
    }

];
const footballPlayer: Array<PlayersArr> = [
    {
        name: 'Lionel Messi',
        src: 'https://pbs.twimg.com/media/DyhGubJX0AYjCkn.jpg'
    },
    {
        name: "Cristiano Ronaldo",
        src: 'https://pbs.twimg.com/media/EnbDAFKXcAAVBsO?format=jpg&name=large'
    },
    {
        name: 'Neymar da Silva',
        src: 'https://pbs.twimg.com/media/EPAEawWWsAAGLRq.jpg',
    }

];

const newOptionDiv: HTMLDivElement = document.querySelector('#second_option');
const playerimg: HTMLImageElement = document.querySelector('#playerimg');


function handleSelectSport(event) {
    if (event.target.value === "basketball") {
        createOptions(basketballPlayer)
    } else if (event.target.value === "football") {
        createOptions(footballPlayer)
    } else if (event.target.value === "tennis") {
        createOptions(tennisPlayer)
    }
}

function createOptions(arr: Array<object>) {
    newOptionDiv.innerHTML = '<img id="back" src="images/back2.png" alt="" srcset="">';
    const newSelect = document.createElement('select');
    newOptionDiv.append(newSelect);
    newSelect.setAttribute("id", "sports_select");
    const choose = document.createElement('option');
    choose.innerHTML = `Choose Player`;
    newSelect.append(choose)
    newSelect.onchange = function handleCheck(event) {
        const playerName = event.target.value;
        arr.forEach(player => {
            console.dir(player)
            if (playerName === player.name) {
                playerimg.src = `${player.src}`;
            }
        })
    };

    arr.forEach(elm => {
        const newOption = document.createElement('option');
        newOption.innerHTML = elm.name;
        newOption.value = `${elm.name}`;
        newSelect.append(newOption);
    })
}


