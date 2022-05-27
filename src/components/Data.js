import React, { createContext, useState } from 'react'
 
export const data = createContext()

const Data = (props) => {
    const [student, setStudent] = useState([
        {

            "Name": "Dinesh",
            "Age": "23",
            "Course": "MERN",
            "Batch": "January",
            "id": "1"

        },

        {

            "Name": "Babu",
            "Age": "24",
            "Course": "MEAN",
            "Batch": "February",
            "id": "2"

        },
        {

            "Name": "Sasi",
            "Age": "24",
            "Course": "React",
            "Batch": "December",
            "id": "3"

        },

        {

            "Name": "Balaji",
            "Age": "23",
            "Course": "Nodejs",
            "Batch": "March",
            "id": "4"

        },
        {

            "Name": "Kumar",
            "Age": "25",
            "Course": "Javascript",
            "Batch": "January",
            "id": "5"

        },
    ])
    return (<>
        <data.Provider value={[student, setStudent]}>
            {props.children}
        </data.Provider>
    </>
    )
}

export default Data