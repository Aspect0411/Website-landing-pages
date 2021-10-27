let data = [
    {
        name: 'Ameh',
        age: '17'
    },
    {
        name: 'JR',
        age: '17'
    },
    {
        name: 'Vabz',
        age: '17'
    },
    {
        name: 'Oliver',
        age: '16'
    },
    {
        name: 'Isaiah',
        age: '17'
    },
    {
        name: 'Hamzy',
        age: '17'
    },
    {
        name: 'Slee',
        age: '17'
    },
    {
        name: 'Bukar',
        age: '17'
    },
    {
        name: 'MR MO',
        age: '17'
    },
    {
        name: 'Illegal',
        age: '17'
    },
    {
        name: 'MID',
        age: '17'
    },
    {
        name: 'Otuh',
        age: '17'
    },
    {
        name: 'Primacy',
        age: '17'

    },
];

const info = document.querySelector('.info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
