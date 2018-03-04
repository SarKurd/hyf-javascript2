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

        let aBookLanguage = document.createElement("h5");
        aBookLanguage.appendChild(document.createTextNode(objectOfBooksNames[element]["language"]));

        let aBookAuthor = document.createElement("h5");
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
                let anIMG = document.createElement("img");
                let theLi = document.getElementById(element);
                anIMG.setAttribute("alt", objectOfBooksNames[element]["title"]);
                anIMG.setAttribute("src", bookCovers[element]);
                theLi.appendChild(anIMG);
    });

}

addImagesToTheli();