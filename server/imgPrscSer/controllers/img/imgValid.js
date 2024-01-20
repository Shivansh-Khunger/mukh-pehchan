import axois from 'axios'
import { Express } from 'express'
import bodyParser from 'body-parser'
const app = Express()
const arr = [0.2 , 0.3 , 0.5 , 0.1]
export async function SingleImgValid() {
    try{
      app.use(bodyParser.urlencoded({extended:true}));
        const formData = {};

      res.status(200).json(formData)
    }catch(err){

    }
}
export async function MultiImgValid() {
  try {

  } catch (err) {}
}
