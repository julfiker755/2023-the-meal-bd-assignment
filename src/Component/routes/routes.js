import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import About from '../About/About';
import Home from '../Home/Home';
import Singleproduct from '../Home/Singleproduct';
import Layout from '../Layout/Layout';
import Product from '../Product/Product';
import Singleitem from '../Product/Singleitem';

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/home',
                loader:async()=>{
                 return fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f")
                },
                element:<Home></Home>
            },{
                path:'/home/:productid',
                loader:async({params})=>{
                    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productid}`)
                },
                element:<Singleproduct></Singleproduct>
            },{
                path:'/product',
                loader:async()=>{
                 return fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f")
                },
                element:<Product></Product>,
                children:[
                    {
                        path:'/product/:proid',
                        loader:async({params})=>{
                            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.proid}`)
                        },
                        element:<Singleitem></Singleitem>
                    }
                ]
            },{
                path:'/about',
                element:<About></About>
            }
        ]
        
    },{
        path:'*',
        element:'Your page not found 404??'
    }
])

export default routes;