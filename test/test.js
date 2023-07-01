window.addEventListener('DOMContentLoaded', () => {
    const leaderboard = document.getElementById('leaderboard');
    const addUserForm = document.getElementById('add-user-form');
    const nameInput = document.getElementById('name-input');
    const addPointsBtn = document.getElementById('add-points-btn');
    //const levelCell = document.createElement('more-info');
    

    // Initial leaderboard data (replace with your actual data source)
    let leaderboardData = [
      {rank:'RANK',name:'NAME',score:'SCORE',water:'WATER COUNT',cotton:'COTTON COUNT'},
      { name: 'Bojack', score: 0, water: 0, cotton:0 },
      { name: 'Freddy', score: 0, water: 0, cotton:0},
      { name: 'Guts', score: 0, water: 0, cotton:0},
      { name: 'Eren', score: 0, water: 0, cotton:0},
      { name: 'James', score: 0, water: 0, cotton:0}
    ];
  
    // Set amount of points to move position
    const POINTS_TO_MOVE = 50;
    const COTTON_COUNT = 40;
    const WATER_COUNT = 10;
  
    // Function to update the leaderboard
    const updateLeaderboard = () => {
      // Sort the leaderboard data based on score in descending order
      leaderboardData.sort((a, b) => b.score - a.score);
      

      // Clear the leaderboard
      leaderboard.innerHTML = '';
  
      // Rebuild the leaderboard
      leaderboardData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index}</td><td>${entry.name}</td><td>${entry.score}</td><td>${entry.water}</td><td>${entry.cotton}</td>`;
        if(index==0){
            row.innerHTML=`<td>${entry.rank}</td><td>${entry.name}</td><td>${entry.score}</td><td>${entry.water}</td><td>${entry.cotton}</td>`
        }
        leaderboard.appendChild(row);
      });
    };
  
    // Function to add random points to a user
    const addRandomPoints = () => {
      const randomIndex = Math.floor(Math.random() * leaderboardData.length);
      leaderboardData[randomIndex].score += POINTS_TO_MOVE;
      leaderboardData[randomIndex].cotton += COTTON_COUNT;
      leaderboardData[randomIndex].water += WATER_COUNT;

      updateLeaderboard();
    };
  
    // Function to add a new user
    const addUser = (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      if (name !== '') {
        leaderboardData.push({ name: name, score: 0, water: 0, cotton:0 });
        nameInput.value = '';
        updateLeaderboard();
      }
      
    };
  
    // Add event listener to the "Add User" form
    addUserForm.addEventListener('submit', addUser);
  
    // Add event listener to the "Add Random Points" button
    addPointsBtn.addEventListener('click', addRandomPoints);
  
    // Initial population of the leaderboard
    updateLeaderboard();
  });
  