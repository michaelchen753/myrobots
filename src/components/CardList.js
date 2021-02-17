import React  from 'react';
import Card from './Card';


// 遍历卡片并提取必要信息
const CardList = ({robots}) => {
    
    //'robots' here can be a outer argument and a dynamic argument as well.
     return (
     robots.map((el, i) => {
     return (
            < Card 
            key = {i}
            id = {robots[i].id} 
            name = {robots[i].name} 
            username ={robots[i].username} 
            email ={robots[i].email}
            />
            )    
    })   
    )   
}
export default CardList;