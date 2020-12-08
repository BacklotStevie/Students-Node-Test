import axios from 'axios'
import { useEffect, useState } from 'react'


//useState is a function assigned to students and setStudents
const Students = () => {

    let [students, setStudents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/students')
            .then((response) => {
                setStudents(response.data)
            })
            .catch(err => {
                console.log('err')
            })
    }, [])


    return (
        <div>
            {students.map((student) => (
                <>
                    <h1>{student.firstname} {student.lastname}</h1>
                    <img src={student.img} alt='' />
                </>
            ))}
        </div>
    );
};

export default Students;