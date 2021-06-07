console.log("Team Details Script Loaded!!!"); 

var teamId = window.location.search.split('=')[1];
console.log(teamId);

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


// class Player {
//     constructor(fullName, photoURL, team, price, plyId, isPlaying, role) {
//         this.fullName = fullName;
//         this.photoURL = 
//     }

// }


const teamNames = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"]; 
var selectedTeam = teamNames[teamId-1];



var playerListLocal = JSON.parse(localStorage.getItem("player-list"));
// console.log(playerListLocal);




//=================  function to create teams details 
// Structure is as follows 
{/* <div>
        <div class="image-part">
            <img>
        </div>  
        <div class="details-part">
            <h1>Team Title</h1>

            <h4>No of Players: 4</h4>
            <h3>Top Batsman</h3>
            <h3>Top Bowler</h3>
            <h3>Championship Won: 3</h3> 
        </div>
    </div>   
 */}


function createTeamDetails(obj) {
    var len = playerListLocal[selectedTeam].length;
    var detailsContainer = document.createElement('div'); 

    var imagePart = document.createElement('div'); 
    imagePart.classList.add('image-part');
     
    var teamLogo = document.createElement('img');
    teamLogo.src = obj.logoURL;
    teamLogo.classList.add('t-image');
    imagePart.appendChild(teamLogo);

    detailsContainer.appendChild(imagePart); 

    
    var detailsPart = document.createElement('div'); 
    detailsPart.classList.add('details-part');

   
    var teamName = document.createElement('h1');
    teamName.classList.add('t-title');
    teamName.innerHTML = obj.title;
    detailsPart.appendChild(teamName);
    

    var playerCount = document.createElement('h4');
    playerCount.innerHTML = "No of Players : <span>"+ len + "</span>"; 
    detailsPart.appendChild(playerCount);

    var topBatsman = document.createElement('h3');
    topBatsman.innerHTML = "Top Batsman : <span>" + obj.topBatsman + "</span>";
    detailsPart.appendChild(topBatsman);

    var topBowler = document.createElement('h3');
    topBowler.innerHTML = "Top Bowler : <span>" + obj.topBowler + "</span>";
    detailsPart.appendChild(topBowler)

    var champCount = document.createElement('h3'); 
    champCount.innerHTML = "Championship Won : <span> " + obj.championCount + "</span>"; 
    detailsPart.appendChild(champCount);

    detailsContainer.appendChild(detailsPart);

    // console.log(detailsContainer);
    return detailsContainer;

}


// Selecting team-details 

var teamDetails = document.getElementById('team-details');
var item = createTeamDetails(teamInfo[teamId-1]); 
teamDetails.appendChild(item);


//========== create Players cards 


//function to create Player Cards 
// Structure of the card is 
{/* <div class="player-card">
        <a class="player-link">
       
            <img class="player-image"> 
            <h2>Player Name</h2>
            <h3>Team Name</h3>
            <h4>Role</h4>
            <h4>Price</h4>
            <h4>Playing status</h4>
        
        </a>
</div>  */}

function createPlayerCard(obj) {
    var playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    
    var playerLink = document.createElement('a');
    playerLink.classList.add("player-link");
    playerLink.href = "./playerdetails.html?t="+teamId+"="+obj.plyId;
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

// Selecting the player Grid 
var playerGrid = document.getElementById('player-grid'); 

for(var i=0; i<playerListLocal[selectedTeam].length; i++) {
    var playerItem = createPlayerCard(playerListLocal[selectedTeam][i]);
    playerGrid.appendChild(playerItem);
}


// // ====================== Adding players ========= 

var btnAddPlayer = document.getElementById("btn-add-player");
var playerFormWrapper = document.getElementById("player-form-wrapper");

btnAddPlayer.onclick = function() {
      playerFormWrapper.style.display = "block";
      location.assign('#player-form-wrapper')
}

// Selecting the form 
var registerForm = document.getElementById('register-form');

// preventing the default behaviour 
registerForm.onsubmit = function(e) {
    e.preventDefault();

    var fullName = document.getElementById('fullName');
    var photoURL = document.getElementById('photoURL');
    var key = document.getElementById('key');
    var price = document.getElementById('price');
    var isPlaying = document.getElementById('status');
    var role = document.getElementById('role'); 
    
    var teamKey = key.value;
    teamKey = teamKey.toUpperCase();
    var id = playerListLocal[teamKey].length;

    var playerData = {
        plyId: id,
        fullName: fullName.value,
        photoURL: photoURL.value,
        price: price.value,
        isPlaying: isPlaying.value,
        role: role.value
    }

    // console.log(playerData); 

    playerListLocal[teamKey].push(playerData);
    console.log(playerListLocal);

    // Save the updated List in local Storage 
    localStorage.setItem("player-list", JSON.stringify(playerListLocal));

    alert('Player Registered Successfully!');
    playerFormWrapper.style.display = "none";
    location.assign('./index.html');

   

}