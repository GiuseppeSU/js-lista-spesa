const listaSpesa=[
    'pere',
    'mele',
    'banane',
    'caffè',
    'carne',
    'pesce',
    'pasta',
    'coca-cola',
    'birra',
    'verdure',
];

const listaDom = document.getElementById('spesa');
let i = 0;
while (i < listaSpesa.length) {
    const listItems = document.createElement('li');
    listItems.innerHTML = listaSpesa[i];
    listaDom.append(listItems);
    i++;
}


