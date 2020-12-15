const fs = require('fs')
const path = require('path')


const basePath = process.cwd()


let dirMale = path.join(basePath, '20:00')
let dirFemale = path.join(basePath, '18:00')


let arrFemale = fs.readdirSync(dirFemale)

let arrMale = fs.readdirSync(dirMale)


transferFiles = (gender) => {
    let arr = eval('arr' + gender)
    console.log(arr);
    arr.forEach(file => {
        let student = eval('(' + fs.readFileSync(path.join(eval('dir' + gender), file)) + ')')
        console.log(student.gender)
        if (student.gender.toLowerCase() !== gender.toLowerCase()) {
            if (student.gender.toLowerCase() !== 'male'.toLowerCase()) {
                fs.renameSync(path.join(dirMale, file), path.join(dirFemale, file))
            } else {
                fs.renameSync(path.join(dirFemale, file), path.join(dirMale, file))
            }
        }
    })
}


transferFiles('Male')
transferFiles('Female')
