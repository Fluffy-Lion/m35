import { useState } from 'react'

import Card from './Components/Card'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
const Map = () => {
    const [arr, setArr] = useState([
        { image: img1, text: "cabins" },
        { image: img2, text: "water cabin" },
        { image: img3, text: "flat ground cabin" },
        { image: img4, text: "cabin with dogs" }
    ])
    return (
        <div>
            {arr.map((item, index) => {
                return <Card key={index} image={item.image} text={item.text} />
            })}
        </div>
    )
}

export default Map