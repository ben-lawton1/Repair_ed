fetch('contentTextFiles/servicesDescription/renovation.txt')
.then(response => response.text()) 
.then(data => {
document.getElementById('renovationDescription').innerText = data;
})
.catch(error => console.error('Error loading text file:', error));

fetch('contentTextFiles/servicesDescription/carpentry.txt')
.then(response => response.text()) 
.then(data => {
document.getElementById('carpentryDescription').innerText = data;
})
.catch(error => console.error('Error loading text file:', error));

fetch('contentTextFiles/servicesDescription/floorTile.txt')
.then(response => response.text()) 
.then(data => {
document.getElementById('floorTileDescription').innerText = data;
})
.catch(error => console.error('Error loading text file:', error));

fetch('contentTextFiles/servicesDescription/electric.txt')
.then(response => response.text()) 
.then(data => {
document.getElementById('electricalDescription').innerText = data;
})
.catch(error => console.error('Error loading text file:', error));

fetch('contentTextFiles/servicesDescription/plumbing.txt')
.then(response => response.text()) 
.then(data => {
document.getElementById('plumbingDescription').innerText = data;
})
.catch(error => console.error('Error loading text file:', error));

fetch('contentTextFiles/servicesDescription/drywall.txt')
.then(response => response.text()) 
.then(data => {
document.getElementById('drywallDescription').innerText = data;
})
.catch(error => console.error('Error loading text file:', error));


