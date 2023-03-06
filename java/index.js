let nameAndSurname="Aleksandra Basarovska"
let age=38;
let jobTitle="no job";
let gender="female"
let liveInSkopje=false;

let person={
    name1:nameAndSurname,
    age1:age,
    jobTitle1:jobTitle,
    gender1:gender,
    liveInSkopje1:liveInSkopje
}

console.log(person); 

function showVariable(){

    alert(person.nameAndSurname+person.age+person.jobTitle+person.gender+person.liveInSkopje
    )
}

