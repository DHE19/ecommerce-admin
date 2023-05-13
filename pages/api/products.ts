// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Database from '@/lib/Database';
import product from '@/models/product.model';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //working in the new db's version
  Database.createConnection(process.env.MONGODB_URI as string);

  const {method}  = req;

  if(method === 'POST'){
    //retrive all the data that comes from the user form products
    const {title, description, price} = req.body;
    
    //create a new product object
    const productDoc = await product.create({title, description, price});

    res.status(201).json(productDoc);
  }
}
