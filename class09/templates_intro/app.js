var ourClass = [
    {
        name: 'Chandler',
        role: 'Instructor',
    },
    {
        name: 'Matt',
        role: 'Student',
    },
    {
        name: 'Rachel',
        role: 'Student',
    },
    {
        name: 'Ari',
        role: 'Student',
    },
    {
        name: 'Rish',
        role: 'Student',
    },
    {
        name: 'Jessie',
        role: 'Student',
    },
    {
        name: 'Yogi',
        role: 'Student',
    },
    {
        name: 'Lewis',
        role: 'Student',
    },
    {
        name: 'Sino',
        role: 'Student',
    },
    {
        name: 'Desmond',
        role: 'Student',
    },
]

// ourClass.forEach(function(person){
//     $('#class-list')
//         .append('<h4>' + person.name + '</h4>')
//         .append('<h6>' + person.name + '</h6')
//         .append('</hr>')
// })



    //finds the template's sourse
    var source = $('#person-template').html()
    
    // turns sourse into Handlebards template
    var template= Handlebars.compile(source)

    // 3 generate HTML using the complied Handlebars template
    var classTemplate = template(ourClass)

    // 4 
    $('#person').append(classTemplate)

