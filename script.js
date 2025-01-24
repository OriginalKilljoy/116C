startUp()

function startUp(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Du er utenfor en leilighet</div>
    <button onclick="hallway()">Gå inn</button>
    `
}

function hallway(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Du er i gangen</div>
    <button onclick="startUp()">Gå ut</button>
    <button onclick="bathroom()">Gå inn på badet</button>
    <button onclick="livingroom()">Gå inn i stua</button>
    <button onclick="kitchen()">Gå in på kjøkkenet</button>
    `
}

function bathroom(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Du er på badet</div>
    <button onclick="hallway()">Gå tilbake til gangen</button>
    `
}

function livingroom(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Du er i stuen</div>
    <button onclick="hallway()">Gå tilbake til gangen</button>
    <button onclick="kitchen()">Gå in på kjøkkenet</button>
    `
}

function kitchen(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Du er på kjøkkenet</div>
    <button onclick="hallway()">Gå tilbake til gangen</button>
    <button onclick="livingroom()">Gå inn i stua</button>
    `
}