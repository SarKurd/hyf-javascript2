// 2
let booksTitles = [
    "the_hobbit",
    "hard_times",
    "house_rules",
    "leaving_time",
    "lucky_jim",
    "lost_horizon",
    "moby_dick",
    "one_day",
    "plain_truth",
    "perfect_match"
];

//3 & 5
function generateUlFromArray(arg)
{
    let listOfBooksNames = document.createElement("ul");
    arg.forEach(element => {
        let bookAsLi = document.createElement("li");
        bookAsLi.setAttribute("id", element);
        
        let aBookTitle = document.createElement("h2");
        aBookTitle.appendChild(document.createTextNode(objectOfBooksNames[element]["title"]));

        let aBookLanguage = document.createElement("h3");
        aBookLanguage.appendChild(document.createTextNode(objectOfBooksNames[element]["language"]));

        let aBookAuthor = document.createElement("h3");
        aBookAuthor.appendChild(document.createTextNode(objectOfBooksNames[element]["author"]));

        bookAsLi.appendChild(aBookTitle);
        bookAsLi.appendChild(aBookLanguage);
        bookAsLi.appendChild(aBookAuthor);

        listOfBooksNames.appendChild(bookAsLi);
    });

    return listOfBooksNames;
}

//4
let objectOfBooksNames = {}
booksTitles.forEach(element => {
    let temp = element;
    element = element.replace("_", " ");
    //capitalise first letter of the first word
    element = element.charAt(0).toUpperCase() + element.slice(1);
    //Capitalise first letter of the second word
    let position = element.indexOf(" ") + 1;
    element = element.slice(0, position) + element.charAt(position).toUpperCase() + element.slice(position+1);

    objectOfBooksNames[temp] = {"title": element, "language": "English", "author": "NA"};
});

// var hello = "hello world";
// let postion = hello.indexOf(" ") + 1;
// hello = hello.slice(0, postion) + hello.charAt(postion).toUpperCase() + hello.slice(postion+1); 
// console.log(hello);

// let objectOfBooksNames = {
//     "the_hobbit" :{title: "The Hobbit", language: "English", author: "NA"},
//     "hard_times" :{title: "Hard Times", language: "English", author: "NA"},
//     "house_rules" :{title: "House Rules", language: "English", author: "NA"},
//     "leaving_time" :{title: "Leaving Time", language: "English", author: "NA"},
//     "lucky_jim" : {title: "Lucky Jim", language: "English", author: "NA"},
//     "lost_horizon" : {title: "Lost Horizon", language: "English", author: "NA"},
//     "moby_dick" :{title: "Moby Dick", language: "English", author: "NA"},
//     "one_day" :{title: "One Day", language: "English", author: "NA"},
//     "plain_truth" :{title: "Plain Truth", language: "English", author: "NA"},
//     "perfect_match" :{title: "Perfect Match", language: "English", author: "NA"}
// };

document.body.appendChild(generateUlFromArray(booksTitles));

//7

let bookCovers = {
    "the_hobbit" : "img/the_hobbit.jpeg",
    "hard_times" : "img/hard_times.jpg",
    "house_rules" : "img/house_rules.jpg",
    "leaving_time" : "img/leaving_time.jpg",
    "lucky_jim" : "img/lucky_jim.jpg",
    "lost_horizon" : "img/lost_horizon.jpg",
    "moby_dick" : "img/moby_dick.jpg",
    "one_day" : "img/one_day.jpeg",
    "plain_truth" : "img/plain_truth.jpg",
    "perfect_match" : "img/perfect_match.jpg"
};

function addImagesToTheli(){
    let arrayOfBookCoversKeys = Object.keys(bookCovers);
    arrayOfBookCoversKeys.forEach(element => {
        switch(element){
            case "the_hobbit":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("the_hobbit");
                anIMG.setAttribute("alt", "The hobbit");
                anIMG.setAttribute("src", bookCovers["the_hobbit"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "hard_times":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("hard_times");
                anIMG.setAttribute("alt", "Hard Times");
                anIMG.setAttribute("src", bookCovers["hard_times"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "house_rules":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("house_rules");
                anIMG.setAttribute("alt", "House Rules");
                anIMG.setAttribute("src", bookCovers["house_rules"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "leaving_time":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("leaving_time");
                anIMG.setAttribute("alt", "Leaving Time");
                anIMG.setAttribute("src", bookCovers["leaving_time"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "lucky_jim":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("lucky_jim");
                anIMG.setAttribute("alt", "Lucky Jim");
                anIMG.setAttribute("src", bookCovers["lucky_jim"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "lost_horizon":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("lost_horizon");
                anIMG.setAttribute("alt", "Lost Horizon");
                anIMG.setAttribute("src", bookCovers["lost_horizon"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "moby_dick":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("moby_dick");
                anIMG.setAttribute("alt", "Moby Dick");
                anIMG.setAttribute("src", bookCovers["moby_dick"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "one_day":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("one_day");
                anIMG.setAttribute("alt", "One Day");
                anIMG.setAttribute("src", bookCovers["one_day"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "plain_truth":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("plain_truth");
                anIMG.setAttribute("alt", "plain truth");
                anIMG.setAttribute("src", bookCovers["plain_truth"]);
                theLi.appendChild(anIMG);
                break;
            }
            case "perfect_match":{
                let anIMG = document.createElement("img");
                let theLi = document.getElementById("perfect_match");
                anIMG.setAttribute("alt", "Perfect Match");
                anIMG.setAttribute("src", bookCovers["perfect_match"]);
                theLi.appendChild(anIMG);
                break;
            }
        }
    });

}

addImagesToTheli();