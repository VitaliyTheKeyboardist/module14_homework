
const xmlStudents = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
    <student>
     <name lang="ru">
       <first>Петр</first>
       <second>Петров</second>
     </name>
     <age>58</age>
     <prof>driver</prof>
   </student>
</list>`
const parser = new DOMParser()

const xmlDOMListStudents = parser.parseFromString(xmlStudents, "text/xml")
const studentsList = xmlDOMListStudents.querySelectorAll("student")

let students = {}
let arr = []
studentsList.forEach((student) => {
  arr.push(students = {
  name: `${student.querySelector('first').textContent} ${student.querySelector('second').textContent}`,
    age: student.querySelector('age').textContent,
    prof: student.querySelector('prof').textContent,
    lang: student.querySelector('name').getAttribute('lang')
})
})

let result = {
  list: arr
}

console.log(result)
console.log(firstStudentNameAttr)

