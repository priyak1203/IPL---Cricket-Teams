const teamInfo = [
    {   
        id: 1,
        key: 'CSK',
        logoURL: "./logo_CSK.jpg", 
        title: "Chennai Super Kings", 
        topBatsman: "Suresh Raina",
        topBowler: "Dwayne Bravo",
        championCount : 3
 
    }, 

    {   
        id: 2,
        key: 'RCB',
        logoURL: "./logo_RCB.jpg", 
        title: "Royal Challengers Bangalore",
        topBatsman: "Virat Kohli",
        topBowler: "Harshal Patel",
        championCount : 0

    }, 

    {   
        id: 3,
        key: 'MI',
        logoURL: "./logo_MI.jpg", 
        title: "Mumbai Indians",
        topBatsman: "Rohit Sharma",
        topBowler: "Jasprit Bumrah",
        championCount : 5

    }, 

    {   
        id: 4,
        key: 'RR',
        logoURL: "./logo_RR.jpg", 
        title: "Rajastan Royals",
        topBatsman: "Sanju Samson",
        topBowler: "Jayadev Unadkat",
        championCount : 1

    }, 

    {   
        id: 5,
        key: 'KKR',
        logoURL: "./logo_KKR.jpg", 
        title: "Kolkata Knight Riders",
        topBatsman: "Andre Russel",
        topBowler: "Sunil Narine",
        championCount : 2

    }, 

    {   
        id: 6,
        key: 'SRH',
        logoURL: "./logo_SRH.jpg", 
        title: "Sun Risers Hyderabad",
        topBatsman: "David Warner",
        topBowler: "Bhuvaneshwar Kumar",
        championCount : 1

    }, 

    {   
        id: 7,
        key: 'PK',
        logoURL: "./logo_PK.jpg", 
        title: "Punjab Kings",
        topBatsman: "KL Rahul",
        topBowler: "Mohammad Shami",
        championCount : 0

    }, 

    {   
        id: 8,
        key: 'DC',
        logoURL: "./logo_DC.jpg", 
        title: "Delhi Capitals",
        topBatsman: "Shikar Dhawan",
        topBowler: "Avesh Khan",
        championCount : 0

    }, 


]



// Player list 

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


// {
//     plyId: 0,
//     fullName: "",
//     photoURL : "",
//     team : "Mumbai Indians",
//     price: "4 Cr",
//     isPlaying: true,
//     role: "Batsman"
    
// },