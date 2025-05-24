import { useEffect, useState } from 'react';
import Item from '../Item/Item'
import { API } from '../../utils/config';

import './Related.css'
function Related() {
    const [data, setData] = useState(null)
    useEffect(() => {
        API.get("/flowers")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }, []);
    return <>
        <div className="container">
            <h3 className="related-title">
                Releted Products
            </h3>
            <div className="related-inner">
                {data?.slice(0, 5).map((item) => {
                    return (
                        <Item
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image[0]}
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    </>
}

export default Related