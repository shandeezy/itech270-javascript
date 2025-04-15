window.onload = ()=>{
    document.querySelector('#sunrise').addEventListener('click', setImgToSunrise);
    document.querySelector('#sunset').addEventListener('click', setImgToSunset);
    document.querySelector('#bg-color').addEventListener('click', toggleBackgroundColor);
    document.querySelector('#text-align').addEventListener('click', toggleTextAlignment);
    document.querySelector('#create-table').addEventListener('click', createDestroyTable);
}

const setImgToSunrise = () =>{
    const img = document.querySelector('#attributes-img');
    img.src = "images/sunrise.jpg";
}

const setImgToSunset = () =>{
    const img = document.querySelector('#attributes-img');
    img.src = "images/sunset.jpg";
}

const toggleBackgroundColor = () =>{
    const div = document.querySelector('.css');
    div.style.backgroundColor = (div.style.backgroundColor == 'rgb(247, 247, 247)') ? 'white' : 'rgb(247, 247, 247)';
}

const toggleTextAlignment = () =>{
    const tags = document.querySelector('.css').querySelectorAll('p');
    for(const tag of tags){
        tag.style.textAlign = (tag.style.textAlign == "center") ? 'left' : 'center';
    }
}

const createDestroyTable = () =>{
    const table = document.querySelector('#created-table');
    const button = document.querySelector('#create-table');
   
    if(table != null){
        _destoryTable();
        button.innerText = "Create a Table";
    }else{
        _createTable();
        button.innerText = "Destroy the Table";
    }
   

}

const _createTable = () =>{
    const data = [
        ['First Name', 'Last Name', 'Age'],
        ['Billy', 'Bob', 39],
        ['Julianne', 'Tarkington', 27],
        ['Frank', 'Tank', 33]
    ];

    const div = document.querySelector('#js-table');
    const table = document.createElement('TABLE');
    table.setAttribute('id', 'created-table');

    for(const item of data){
        const row = document.createElement('TR');
        for(const datum of item){
            const td = document.createElement('TD');
            td.innerText = datum;
            row.appendChild(td);
        }
        table.appendChild(row)
    }

    div.appendChild(table)
}

const _destoryTable = () =>{
    const table = document.querySelector('#created-table');
    table.remove()
}
 
