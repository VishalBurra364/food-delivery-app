import React from 'react'
import  './exploremenu.css'
import {menu_list} from '../../images/assets'
function Exploremenu({categories,setCategories}){
  return (
    <div className="menu-list" id='explore-menu'>
        <h3>Explore our Menu</h3>
        <p>Explore the below menu to select the food item.</p>
        <div className="menu-item-list">
        {menu_list.map((items,text)=>{
          return(
            <div onClick={()=>{setCategories(prev=>prev===items.menu_name?"All":items.menu_name)}} className="menu-list-images">
               <img className={categories===items.menu_name?"active":" "} src={items.menu_image} alt="image" />
               <p>{items.menu_name}</p>
            </div>
          )
        })}
        </div>
        <hr></hr>
    </div>
  )
}

export default Exploremenu
