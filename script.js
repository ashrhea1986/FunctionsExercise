// 1
function spookyGhost(){
    console.log(`BOO!!!`);
};
spookyGhost();

// 2
function candy(goal){
    console.log(`${goal}`);
    console.log(`${goal}`);
    console.log(`${goal}`);
    console.log(`${goal}`);
};
candy(`Get Candy`);

// 3
function werewolf(a, b){
    if (`Full` === a && `Moon` === b){
        console.log(`ARH-WOOO!`);
    }
};
werewolf(`Full`, `Moon`);

// 4
function halloween(){
    console.log(`October 31st`);
    return;
}
halloween();

// 5
function isEnoughCandy(pieces){
    if (pieces > 31){
        return true;
    } else if (pieces < 31){
        return false;
    }
};
const neverEnough = isEnoughCandy(10);
console.log(neverEnough); // Checking functionality

// 6
function candyCounter(nums){
    let total = 0;
    for(i=0; i<nums.length; i++){
        total += nums[i]
    }
    console.log(total); // Added to check functionality
    return total;
};
candyCounter([3,2,1]);

// 7
const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

// 8
ghostBusters = () => `Who you gonna call?`
console.log(ghostBusters());

// 9
// No

// 10
// Yes

// 11a
const costumes = [
    "Ghosts",
    "Princess",
    "Pirate"
];

// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());
console.log(upperCostumes);


// 12a 
const stephenKingMovies = [
    "The Shining",
    "Christine",
    "It",
    "The Mist",
    "Creepshow",
    "Pet Sematary"
];

// 12b
const twoMovies = stephenKingMovies.filter(i => i.length === 9);
console.log(twoMovies);

// 13a 
const halloweenSongs1 = [
    "Monster Mash",
    "Thriller"
];

// 13b 
const halloweenSongs2 = [
    "I Put a Spell On You",
    "This is Halloween",
    "Ghostbusters"
];

// 13c
halloweenJukeBox = (songs) => {
    const random = Math.floor(Math.random()*songs.length);
    console.log(songs[random]);
};

// 13d
halloweenJukeBox(halloweenSongs1);
halloweenJukeBox(halloweenSongs2);

// 14
caps = (string) => {
    for (i=0; i < string.length; i+=2){
        string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i+1);
    }
    return string;
};

const hello = caps("hello how are you?") // Added to check functionality
console.log(hello);