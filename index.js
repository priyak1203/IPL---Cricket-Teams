console.log("Script Loaded!!");


// Team Info Data 
const teamInfo = [
    {   
        id: 1,
        key: 'CSK',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Chennai-Super-Kings-logo-design-IPL-300x300.jpg", 
        title: "Chennai Super Kings", 
        topBatsman: "Suresh Raina",
        topBowler: "Dwayne Bravo",
        championCount : 3
 
    }, 

    {   
        id: 2,
        key: 'RCB',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/RCB-logo-design-IPL-300x300.jpg", 
        title: "Royal Challengers Bangalore",
        topBatsman: "Virat Kohli",
        topBowler: "Harshal Patel",
        championCount : 0

    }, 

    {   
        id: 3,
        key: 'MI',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Mumbai-Indians-logo-design-IPL-300x300.jpg", 
        title: "Mumbai Indians",
        topBatsman: "Rohit Sharma",
        topBowler: "Jasprit Bumrah",
        championCount : 5

    }, 

    {   
        id: 4,
        key: 'RR',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Rajasthan-Royals-logo-design-IPL-300x300.jpg", 
        title: "Rajastan Royals",
        topBatsman: "Sanju Samson",
        topBowler: "Jayadev Unadkat",
        championCount : 1

    }, 

    {   
        id: 5,
        key: 'KKR',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/KKR-logo-design-IPL-300x300.jpg", 
        title: "Kolkata Knight Riders",
        topBatsman: "Andre Russel",
        topBowler: "Sunil Narine",
        championCount : 2

    }, 

    {   
        id: 6,
        key: 'SRH',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/SunRisers-Hyderabad-logo-design-IPL-300x300.jpg", 
        title: "Sun Risers Hyderabad",
        topBatsman: "David Warner",
        topBowler: "Bhuvaneshwar Kumar",
        championCount : 1

    }, 

    {   
        id: 7,
        key: 'PK',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Punjab-Kings-logo-design-IPL-300x300.jpg", 
        title: "Punjab Kings",
        topBatsman: "KL Rahul",
        topBowler: "Mohammad Shami",
        championCount : 0

    }, 

    {   
        id: 8,
        key: 'DC',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Delhi-Capitals-logo-design-IPL-300x300.jpg", 
        title: "Delhi Capitals",
        topBatsman: "Shikar Dhawan",
        topBowler: "Avesh Khan",
        championCount : 0

    }, 


]

const playerList = {
    CSK : [
        {
            plyId: 0,
            fullName: "Mahendra Singh Dhoni",
            photoURL : "https://static.iplt20.com/players/284/1.png",
            team : "Chennai Super Kings",
            price: "5 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },
    
        {
            plyId: 1,
            fullName: "Ambati Rayadu",
            photoURL : "https://static.iplt20.com/players/284/100.png",
            team : "Chennai Super Kings",
            price: "1 Cr",
            isPlaying: false,
            role: "Batsman"
            
        },
    
        {
            plyId: 2,
            fullName: "Faf du Plessis",
            photoURL : "https://static.iplt20.com/players/284/24.png",
            team : "Chennai Super Kings",
            price: "2.5 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },

        {
            plyId: 3,
            fullName: "Ravindra Jadeja",
            photoURL : "https://static.iplt20.com/players/284/9.png",
            team : "Chennai Super Kings",
            price: "2 Cr",
            isPlaying: true,
            role: "All-rounder"
            
        },

        {
            plyId: 4,
            fullName: "Dwayne Bravo",
            photoURL : "https://static.iplt20.com/players/284/25.png",
            team : "Chennai Super Kings",
            price: "1 Cr",
            isPlaying: false,
            role: "All-rounder"
            
        },

        {
            plyId: 5,
            fullName: "Deepak Chahar",
            photoURL : "https://static.iplt20.com/players/284/140.png",
            team : "Chennai Super Kings",
            price: "1 Cr",
            isPlaying: true,
            role: "Bowler"
            
        },

        

    ], 

    RCB : [
        {
            plyId: 0,
            fullName: "Virat Kohli",
            photoURL : "https://static.iplt20.com/players/284/164.png",
            team : "Royal Challengers Bangalore",
            price: "4 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },
    
        {
            plyId: 1,
            fullName: "AB de Villiers",
            photoURL : "https://static.iplt20.com/players/284/233.png",
            team : "Royal Challengers Bangalore",
            price: "3 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },
    
        {
            plyId: 2,
            fullName: "Daniel Sams",
            photoURL : "https://static.iplt20.com/players/284/4649.png",
            team : "Royal Challengers Bangalore",
            price: "1 Cr",
            isPlaying: false,
            role: "All-Rounder"
            
        },

        {
            plyId: 3,
            fullName: "Harshal Patel",
            photoURL : "https://static.iplt20.com/players/284/157.png",
            team : "Royal Challengers Bangalore",
            price: "1 Cr",
            isPlaying: false,
            role: "Bowler"
            
        },

        {
            plyId: 4,
            fullName: "Devdutt Padikkal",
            photoURL : "https://static.iplt20.com/players/284/5430.png",
            team : "Royal Challengers Bangalore",
            price: "1 Cr",
            isPlaying: false,
            role: "Batsman"
            
        },
    
    ], 

    MI : [
        {
            plyId: 0,
            fullName: "Rohit Sharma",
            photoURL : "https://static.iplt20.com/players/284/107.png",
            team : "Mumbai Indians",
            price: "4 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },

        {
            plyId: 1,
            fullName: "Jasprit Bumrah",
            photoURL : "https://static.iplt20.com/players/284/1124.png",
            team : "Mumbai Indians",
            price: "2 Cr",
            isPlaying: true,
            role: "Bowler"
            
        },

        {
            plyId: 2,
            fullName: "Hardik Pandya",
            photoURL : "https://static.iplt20.com/players/284/2740.png",
            team : "Mumbai Indians",
            price: "2 Cr",
            isPlaying: true,
            role: "All-rounder"
            
        },

    ], 

    RR : [
        {
            plyId: 0,
            fullName: "Sanju Samson",
            photoURL : "https://static.iplt20.com/players/284/258.png",
            team : "Rajasthan Royals",
            price: "2 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },

        {
            plyId: 1,
            fullName: "Jayadev Unadkat",
            photoURL : "https://static.iplt20.com/players/284/86.png",
            team : "Rajasthan Royals",
            price: "1 Cr",
            isPlaying: true,
            role: "Bowler"
            
        },
    ], 

    KKR: [
        {
            plyId: 0,
            fullName: "Andre Russel ",
            photoURL : "https://static.iplt20.com/players/284/177.png",
            team : "Kolkata Knight Riders",
            price: "2 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },

        {
            plyId: 1,
            fullName: "Sunil Narine ",
            photoURL : "https://static.iplt20.com/players/284/203.png",
            team : "Kolkata Knight Riders",
            price: "1 Cr",
            isPlaying: true,
            role: "Bowler"
            
        },
    ], 

    SRH : [
        {
            plyId: 0,
            fullName: "David Warner",
            photoURL : "https://static.iplt20.com/players/284/170.png",
            team : "Sun Risers Hyderabad",
            price: "3 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },
        {
            plyId: 1,
            fullName: "Bhuvaneshwar Kumar",
            photoURL : "https://static.iplt20.com/players/284/116.png",
            team : "Sun Risers Hyderabad",
            price: "1.5 Cr",
            isPlaying: true,
            role: "Bowler"
            
        },
    ], 

    PK : [
        {
            plyId: 0,
            fullName: "KL Rahul",
            photoURL : "https://static.iplt20.com/players/284/1125.png",
            team : "Punjab Kings",
            price: "3 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },
        {
            plyId: 1,
            fullName: "Mohammad Shami",
            photoURL : "https://static.iplt20.com/players/284/94.png",
            team : "Punjab Kings",
            price: "2 Cr",
            isPlaying: true,
            role: "Bowler"
            
        },


    ], 

    DC : [
        {
            plyId: 0,
            fullName: "Shikhar Dhawan",
            photoURL : "https://static.iplt20.com/players/284/41.png",
            team : "Delhi Capitals",
            price: "3 Cr",
            isPlaying: true,
            role: "Batsman"
            
        },  

        {
            plyId: 1,
            fullName: "Avesh Khan",
            photoURL : "https://static.iplt20.com/players/284/1561.png",
            team : "Delhi Capitals",
            price: "1 Cr",
            isPlaying: true,
            role: "Bowler"
            
        }, 
    ]


}

// ============== Storing the Player List to Local Storage ======== / 

var checkStorage = localStorage.getItem("player-list"); 

if (checkStorage === null ) {
    localStorage.setItem("player-list", JSON.stringify(playerList));
} else {
    var list = JSON.parse(localStorage.getItem("player-list"));
    localStorage.setItem("player-list", JSON.stringify(list));
}
// localStorage.setItem("player-list", JSON.stringify(playerList));

// console.log(localStorage.getItem("team-list"));

var playerListLocal = JSON.parse(localStorage.getItem("player-list"));
// console.log(localList);

//================== Function to create homepage team logo cards 

// structure of the card 
{/* <div class="team-card">
        <a class="logo-link" href="./teamdetails.html">
            <img class="team-logo" src="https://cricnerds.com/wp-content/uploads/2020/02/rcb-new.jpg">
            <h3 class="team-title">Royal Challengers Bangalore</h3>
        </a> 
    </div>
*/}

function createLogoCard(obj) {
    var logoCard = document.createElement('div');
    logoCard.classList.add("team-card");

    var logoLink = document.createElement('a');
    logoLink.classList.add("logo-link");
    logoLink.href="./teamdetails.html?t="+obj.id;
    logoCard.appendChild(logoLink);

    var logoImage = document.createElement('img');
    logoImage.classList.add('team-logo');
    logoImage.src = obj.logoURL;
    logoLink.appendChild(logoImage);

    var logoTitle = document.createElement('h3');
    logoTitle.classList.add("team-title"); 
    var titleText = document.createTextNode(obj.title);
    logoTitle.appendChild(titleText); 
    logoLink.appendChild(logoTitle); 

    // console.log(logoCard); 

    return logoCard;
}



// select teams - grid 
var teamGrid = document.getElementById('teams-container')

for (var i=0; i<teamInfo.length; i++) {
    var card = createLogoCard(teamInfo[i]);
    teamGrid.appendChild(card); 
}


// ======================= Implementing Search Function ======================================================

// Selecting the form element to prevent default action
var formElement = document.getElementById('form');
// console.log(formElement)

formElement.onsubmit = function(eObj) {
    eObj.preventDefault();
}

var searchinput = document.getElementById("search-input");
console.log(searchinput); 


function getPlayerList(val) {
    console.log('Print Player List');
    // console.log(playerList[val])
    // return playerList[val];
    return playerListLocal[val];

}

// === Function to create Player card is search Results section =====/ 
function createPlayerCard(obj) {
    var playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    
    var playerLink = document.createElement('a');
    playerLink.classList.add("player-link");
    // playerLink.href = "./playerdetails.html?t="+teamId+"="+obj.plyId;
    playerCard.appendChild(playerLink); 

    var playerImage = document.createElement('img');
    playerImage.classList.add('player-image');
    playerImage.src = obj.photoURL;
    playerLink.appendChild(playerImage);

    var playerName = document.createElement('h2');
    playerName.innerHTML = obj.fullName;
    playerLink.appendChild(playerName);

    // var teamName = document.createElement('h3');
    // teamName.innerHTML = obj.team;
    // playerLink.appendChild(teamName);

    var playerRole = document.createElement('h4');
    playerRole.innerHTML = "Role: <span>" + obj.role + "</span>";
    playerLink.appendChild(playerRole);
    
    var playerPrice = document.createElement('h4');
    playerPrice.innerHTML = "Price : <span>" + obj.price + "</span>";
    playerLink.appendChild(playerPrice);

    var playerStatus = document.createElement('h4');
    var check;
    if (obj.isPlaying ===  true) {
        check = "Playing";
    } else {
        check = "On-Bench";
    }

    playerStatus.innerHTML = "Status: <span>" + check + "</span>";
    playerLink.appendChild(playerStatus);
    
    // console.log(playerLink);
    return playerCard;
}

var sResult = document.getElementById('search-result');
var pGrid = document.getElementById('player-grid');

searchinput.onkeyup = function(eObj) {
    // var val = eObj.key;
    // alert(val);
    if (eObj.key === 'Enter') {
        var val = searchinput.value;
        val = val.toUpperCase();
        // alert(val);
        if (val.length > 0 ) {
        var pl =  getPlayerList(val);
        //    console.log("search", pl)
            if (pl !== undefined) {
                location.assign("./index.html#search-result");
                sResult.style.display = "block";
                for(var i=0; i<pl.length; i++) {
                    var pItem = createPlayerCard(pl[i]);
                    pGrid.appendChild(pItem);
                }
               
            } else if(pl === undefined) {
                alert('Please Enter Correct Team Code => CSK/RCB/MI/RR/KKR/SRH/PK/DC');
                sResult.style.display = "none";
            }
        } else if(val.length === 0) {
            sResult.innerHTML ="";
            sResult.style.display = "none";
        }
    }
}