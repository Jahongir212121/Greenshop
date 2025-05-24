import { useEffect, useState } from 'react';
import Item from '../Item/Item'
import { API } from '../../utils/config';

function All() {
    const [data, setData] = useState(null)
    useEffect(() => {
        API.get("/flowers")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }, []);
    return <>
        {data?.map((item) => {
            return <Item
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image[0]}
                price={item.price}
            />;
        })}
    </>
}

export default All

