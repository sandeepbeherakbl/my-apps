function navbar(){
    return `
    <div id="head">
            <h2><a href="home.html">WELCOME TO</a></h2>
            <h3>FOOD ZONE</h3>
        </div>
        <div id="inputs">
            <input type="search" id="search" placeholder="search receipe">
            <button id="btn">Search</button>
        </div>
        <div id="options">
            <p><a href="receipe.html">Receipe of the Day</a></p>
            <p><a href="latest.html">Show Latest Receipe</a></p>
        </div>
    `
}

export default navbar
