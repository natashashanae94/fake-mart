import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(()=>{
            setLoading(true);
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products",

        }).then((res)=> {
            console.log(res.data);
            setData(res.data);
        })
        .catch(e=>console.log(e))
        .finally(()=>setLoading(false));

    }, [])
  return (
    <div className="products-container">
        {loading && (
            <div>
                {" "}
                <h1>Loading...</h1>
            </div>
        )}

        {/* PRODUCTS */}
        {data.map((product) => (
            <div key={product.id}>
                <div></div>
                <div></div>
            </div>
        ))}
        
    </div>
  );
}

export default Products;