import React, { useEffect, useState } from 'react'

export const Home = () => {

    const [infoData, setInfoData] = useState([])
    const [ nombre, setNombre ] = useState("Daniel")

    

    /*Pagina de la api https://jsonplaceholder.typicode.com/*/

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setInfoData(data))
            .catch(err => console.log(err))

    }, [])


    return (
        <div>
            <table border={1}>
                <thead>
                    <th>Title</th>
                    <th>Body</th>
                    
                </thead>
                <tbody>
                    {
                        infoData.map( data  => {
                            return(
                                <tr>
                                    <td>{data.title}</td>
                                    <td>{data.body}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
