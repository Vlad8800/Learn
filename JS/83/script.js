// const jsonnames=`["Spongebob","Patric", "Squidward", "Sandy"]`
// const jsonperson =`{"name":"Spongebob","age":30,"isEmployed":true,"hobbies": ["Jellyfishing","Karate","Cooking"]}`

// const sjonpeoples = `[{"name":"Spongebob","age":30,"isEmployed":true},
//     {"name":"Patcrick","age":34,"isEmployed":false},
//     {"name":"Squidward","age":50,"isEmployed":true},
//     {"name":"Sandy","age":27,"isEmployed":false}]`
// // const jsonjString =JSON.stringify(peoples)

// console.log(jsonjString)
// const parseData = JSON.parse(sjonpeoples);
// console.log(parseData)

fetch("people.json")
.then(response=> response.json())
//.then(value=>console.log(value))
.then(values => values.forEach(value => console.log(value.name)))
.catch(error =>HTMLFormControlsCollection.log(error))