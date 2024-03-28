var btn1 = document.querySelector('.generate')
var btn2 = document.querySelector('.X')
// const apiUrl = 'https://api.quotable.io/random'

var quote = document.querySelector('.quote')
var author = document.querySelector('.author')
async function fetchData() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        // Now you can use the 'data' variable outside of the fetch
        console.log(data);
        quote.innerHTML = data.content
        author.innerHTML = data.author
        author.setAttribute('class', 'name')
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

btn1.addEventListener('click', fetchData)

btn2.addEventListener('click', function(){
    window.open('https://twitter.com/intent/tweet?text='+'"'+quote.innerHTML+'"', 'Tweet Window', 'width=600px, height=400px')
});