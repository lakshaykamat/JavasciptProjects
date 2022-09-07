const array = [
    {firstName: "Elon", lastName: "Musk"},
    {firstName: "Mark", lastName: "Zukerberg"},
    {firstName: "Jeff", lastName: "bezoz"},
    {firstName: "Steve", lastName: "Jobs"}
]
const arrayMapping = array.map(function(newArray){
    return newArray.firstName
})
console.log(arrayMapping)