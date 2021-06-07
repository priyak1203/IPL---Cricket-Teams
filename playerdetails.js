console.log("Player Details Script Loaded"); 



var teamId = window.location.search.split('=')[1]
console.log("Team Id --> " + teamId);

var playerId = window.location.search.split('=')[2];
console.log("Player Id --> " + playerId);

const teamNames = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"]; 
var selectedTeam = teamNames[teamId-1];

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


var playerListLocal = JSON.parse(localStorage.getItem("player-list"));

// Function to create player details 
// structure is : 
{/* <div class="image">
        <img class="player-picture"> 
    </div>
    <div class="description">
    <div class="meta"> 
        <h2>Player Name</h2>
        <h3>Team Name</h3>
        <h4>Role</h4>
        <h4>Price</h4>
        <h4>Playing status</h4>
    </div>
</div> */}



function createPlayerDetails(obj) {
    
    var playerInfo = document.getElementById("player-info"); 

    var imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image');
    
    var playerPic = document.createElement('img');
    playerPic.src = obj.photoURL;
    imageWrapper.appendChild(playerPic);

    playerInfo.appendChild(imageWrapper);

    var detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('description'); 

    // var metadetails = document.createElement('div');
    // metadetails.classList.add("meta");

    var plName = document.createElement('h2');
    plName.innerHTML = obj.fullName;
    detailsWrapper.appendChild(plName)
    
    var tName = document.createElement('h3');
    tName.innerHTML ="Team: <span>" + teamInfo[teamId-1].title + "</span>";
    detailsWrapper.appendChild(tName);

    var plRole = document.createElement('h4');
    plRole.innerHTML = "Role: <span>" + obj.role +  "</span>" ;
    detailsWrapper.appendChild(plRole);
    
    var plPrice = document.createElement('h4');
    plPrice.innerHTML = "Price : <span> " + obj.price +  "</span>";
    detailsWrapper.appendChild(plPrice);

    var plStatus = document.createElement('h4');
    var check;
    if (obj.isPlaying ===  true) {
        check = "Playing";
    } else {
        check = "On-Bench";
    }

    plStatus.innerHTML ="Status : <span>"+ check +  "</span>";
    detailsWrapper.appendChild(plStatus);

    playerInfo.appendChild(detailsWrapper);
    // console.log(playerInfo)
    
}

createPlayerDetails(playerListLocal[selectedTeam][playerId]);
// console.log(playerList[selectedTeam][playerId]); 