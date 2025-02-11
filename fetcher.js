fetch('contentTextFiles/aboutPage/mainAbout.txt')
.then(response => response.text()) 
.then(data => {
document.getElementById('aboutMain').innerText = data;
})
.catch(error => console.error('Error loading text file:', error));
