import Layout from "@/components/Layout"
import axios from "axios";
import { useState } from "react"

const NewProduct = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0)

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const data = {title, description, price};
        await axios.post('/api/products', data);
    }
    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <h1> New Product</h1>
                <label>Product Name:</label>
                <input 
                    type="text" 
                    placeholder="Product name" 
                    value={title}
                    onChange={ ev => setTitle(ev.target.value)}
                />
                <label>Description:</label>
                <textarea 
                    placeholder="Description"
                    value={description}
                    onChange={ ev => setDescription(ev.target.value)}
                    ></textarea>
                <label>Price:</label>
                <input 
                    type="number" 
                    placeholder="Price"
                    value={price}
                    onChange={ ev => setPrice(Number(ev.target.value))}
                    />
                <button type="submit" className="btn-primary"> Save</button>
            </form>
        </Layout>

    )
}

export default NewProduct
