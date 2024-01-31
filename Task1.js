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
const studentsList = xmlDOMListStudents.querySelector("list")
const firstStudentNode = studentsList.firstElementChild
const firstStudentNameNode = firstStudentNode.querySelector("name")
const FirstStudentfirstName = firstStudentNameNode.querySelector("first")
const FirstStudentSecondName = firstStudentNameNode.querySelector("second")
const firstStudentAge = firstStudentNode.querySelector("age")
const firstStudentProf = firstStudentNode.querySelector("prof")

const firstStudentNameAttr = firstStudentNameNode.getAttribute("lang")

const result = {
  list: [
    {
      name: `${FirstStudentfirstName.textContent} ${FirstStudentSecondName.textContent}`,
      age: firstStudentAge.textContent,
      prof: firstStudentProf.textContent,
      lang: firstStudentNameAttr,
    },
  ],
}
console.log(result)
console.log(firstStudentNameAttr)

