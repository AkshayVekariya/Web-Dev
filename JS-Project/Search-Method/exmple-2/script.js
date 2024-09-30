const movies = [
    {
        name: "Inception",
        type: "Sci-Fi",
        releaseYear: 2010,
        director: "Christopher Nolan",
        imgLink: "https://imgs.search.brave.com/5jlcmOtWDsDb6Q8_5N71ZHQkd9Y2uWy5Qavi8gMMEzk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzc2NC81OTAv/MzkxL2luY2VwdGlv/bi1sZW9uYXJkby1k/aWNhcHJpby1tb3Zp/ZS1wb3N0ZXJzLTI0/MDB4MzUwMC1lbnRl/cnRhaW5tZW50LW1v/dmllcy1oZC1hcnQt/d2FsbHBhcGVyLXBy/ZXZpZXcuanBn",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 8.8
    },
    {
        name: "The Dark Knight",
        type: "Action",
        releaseYear: 2008,
        director: "Christopher Nolan",
        imgLink: "https://www.movieposters.com/cdn/shop/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_480x.progressive.jpg?v=1707491191",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        rating: 9.0
    },
    {
        name: "Interstellar",
        type: "Sci-Fi",
        releaseYear: 2014,
        director: "Christopher Nolan",
        imgLink: "https://www.movieposters.com/cdn/shop/files/interstellar-139399_480x.progressive.jpg?v=1708527823",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 8.6
    },
    {
        name: "Titanic",
        type: "Romance",
        releaseYear: 1997,
        director: "James Cameron",
        imgLink: "https://www.movieposters.com/cdn/shop/files/titanic_480x.progressive.jpg?v=1710255673",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        rating: 7.8
    },
    {
        name: "Avatar",
        type: "Sci-Fi",
        releaseYear: 2009,
        director: "James Cameron",
        imgLink: "https://www.movieposters.com/cdn/shop/files/avatar.reg.24x36_480x.progressive.jpg?v=1707410693",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        rating: 7.8
    },
    {
        name: "The Godfather",
        type: "Crime",
        releaseYear: 1972,
        director: "Francis Ford Coppola",
        imgLink: "https://www.movieposters.com/cdn/shop/products/the-godfather_k9z3jipv_480x.progressive.jpg?v=1670518644",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        rating: 9.2
    },
    {
        name: "Pulp Fiction",
        type: "Crime",
        releaseYear: 1994,
        director: "Quentin Tarantino",
        imgLink: "https://www.movieposters.com/cdn/shop/products/f1bad449aad5ee4ec37313a57d6b2f46_b77bf6b5-04c3-415c-adb6-8b030d92da75_480x.progressive.jpg?v=1573588597",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 8.9
    },
    {
        name: "Forrest Gump",
        type: "Drama",
        releaseYear: 1994,
        director: "Robert Zemeckis",
        imgLink: "https://www.movieposters.com/cdn/shop/files/forrest-gump_tv2rjxd9_480x.progressive.jpg?v=1720113720",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        rating: 8.8
    },
    {
        name: "The Shawshank Redemption",
        type: "Drama",
        releaseYear: 1994,
        director: "Frank Darabont",
        imgLink: "https://www.movieposters.com/cdn/shop/files/shawshank_eb84716b-efa9-44dc-a19d-c17924a3f7df_480x.progressive.jpg?v=1709821984",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 9.3
    },
    {
        name: "Fight Club",
        type: "Drama",
        releaseYear: 1999,
        director: "David Fincher",
        imgLink: "https://www.movieposters.com/cdn/shop/products/fight-club_b9ee8c73_480x.progressive.jpg?v=1677601096",
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
        rating: 8.8
    },
    {
        name: "The Matrix",
        type: "Sci-Fi",
        releaseYear: 1999,
        director: "The Wachowskis",
        imgLink: "https://www.movieposters.com/cdn/shop/files/Matrix.mpw.102176_bb2f6cc5-4a16-4512-881b-f855ead3c8ec_480x.progressive.jpg?v=1708703624",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        rating: 8.7
    },
    {
        name: "Gladiator",
        type: "Action",
        releaseYear: 2000,
        director: "Ridley Scott",
        imgLink: "https://www.movieposters.com/cdn/shop/files/ddc117c59c72b706eb4a5621b5858d14_0213e924-9471-4ffd-be10-45fb95f9fa94_480x.progressive.jpg?v=1707242788",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        rating: 8.5
    },
    {
        name: "Star Wars: Episode IV - A New Hope",
        type: "Sci-Fi",
        releaseYear: 1977,
        director: "George Lucas",
        imgLink: "https://www.movieposters.com/cdn/shop/products/starwars.setof3.lcs_480x.progressive.jpg?v=1611859788",
        description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        rating: 8.6
    },
    {
        name: "Jurassic Park",
        type: "Sci-Fi",
        releaseYear: 1993,
        director: "Steven Spielberg",
        imgLink: "https://www.movieposters.com/cdn/shop/files/jurassicpark.mpw_480x.progressive.jpg?v=1713805481",
        description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        rating: 8.1
    },
    {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        type: "Fantasy",
        releaseYear: 2001,
        director: "Peter Jackson",
        imgLink: "https://www.movieposters.com/cdn/shop/files/ItemR81771_jpg_480x.progressive.jpg?v=1694023916",
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        rating: 8.8
    },
    {
        name: "The Lion King",
        type: "Animation",
        releaseYear: 1994,
        director: "Roger Allers, Rob Minkoff",
        imgLink: "https://www.movieposters.com/cdn/shop/files/lionking.blue.mpw.120038_480x.progressive.jpg?v=1708549099",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        rating: 8.5
    },
    {
        name: "Back to the Future",
        type: "Sci-Fi",
        releaseYear: 1985,
        director: "Robert Zemeckis",
        imgLink: "https://www.movieposters.com/cdn/shop/products/073f63f9433cede1fde4fe548e595c25_54d911be-ee94-4162-b685-5b200af0cf53_480x.progressive.jpg?v=1573587341",
        description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, eccentric scientist Doc Brown.",
        rating: 8.5
    },
    {
        name: "The Silence of the Lambs",
        type: "Thriller",
        releaseYear: 1991,
        director: "Jonathan Demme",
        imgLink: "https://www.movieposters.com/cdn/shop/products/b163110398b63ab34701e5653934b5da_0f9daf7c-d36f-40a0-a589-b5484664de78_480x.progressive.jpg?v=1573587503",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        rating: 8.6
    },
    {
        name: "Schindler's List",
        type: "Drama",
        releaseYear: 1993,
        director: "Steven Spielberg",
        imgLink: "https://www.movieposters.com/cdn/shop/files/schindlers-list_d41a77ec_480x.progressive.jpg?v=1697746571",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        rating: 9.0
    },
    {
        imgLink: "https://www.movieposters.com/cdn/shop/files/weloveyou_480x.progressive.jpg?v=1684425519",
        name: "The Avengers",
        type: "Action",
        releaseYear: 2012,
        director: "Joss Whedon",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        rating: 8.0
    }
];

function toggleDesc(btn) {
    const display = btn.previousElementSibling.style.display;

    if (display === "block") {
        btn.innerText = "View More";
        btn.previousElementSibling.style.display = "-webkit-box";
    } else {
        btn.innerText = "View Less";
        btn.previousElementSibling.style.display = "block";
    }
}

const moviesListItem = document.getElementById("moivesList")
const search = document.getElementById("search")

function renderMoivesCard(element) {

    const newMovies = element.map(function (value) {

        return `<div class="card">
        <img src="${value.imgLink}" class="card-img-top" alt="...">
        <div class="card-body">
        <div>
        <h5 class="card-title"><b>${value.name},${value.releaseYear}</b></h5>
        <!-- <span class="releaseYear"><b>releaseYear:-</b>${value.releaseYear}</span>-->
        <div class= "type-rating">
       <h6> <span class="type"> <b>type:-</b>${value.type}</h6>
        <h6><span class="rating"><b>rating:-</b>${value.rating}</span>
         <span class="material-symbols-outlined">
        star
        </span>
        </span>
        </h6>
        </div>
        <div>
        <h6><span class="director"> <b>director:-</b>${value.director}</span></h6>
        </div>
        </div>
        <p class="card-text decription">${value.description}</p>
         <button onclick="toggleDesc(this)" class="view-more-btn">View More</button>

        </div>
        </div>`
    });

    moviesListItem.innerHTML = newMovies.join("")
}


function searchMethod(element) {
    let user = search.value.toLowerCase()
    let notNumber = isNaN(search.value)
console.log(!notNumber)
    if(notNumber){
        filteredList = element.filter(function (value) {
            if (value.name.toLowerCase().includes(user) || value.type.toLowerCase().includes(user) || value. director.toLowerCase().includes(user) ) {
                console.log(value)
                return true;
            }
                return false;
            });
            renderMoivesCard(filteredList)
    }else{
        filteredList = element.filter(function(value){
            if((value.rating >= user) || (value.releaseYear ==  user)){
                return true
            }
                return false
        
        })
    }
    renderMoivesCard(filteredList)

 
}

search.addEventListener('input', function () {
    searchMethod(movies);
});

renderMoivesCard(movies);




