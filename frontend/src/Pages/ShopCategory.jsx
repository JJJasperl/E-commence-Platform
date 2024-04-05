import React, { useContext, useState, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


export const ShopCategory = (props) => {
  const {all_product, setSearchTerm, searchTerm} = useContext(ShopContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const filter = all_product.filter(item => 
      item.category === props.category && 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filter);
  }, [all_product, searchTerm, props.category]);
  
  
  
  return (
    <div className='shopCategory'>

      <div className='shopcategory-indexSort'>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
        <div className="shopcategory-search">
          <input 
            type="text" 
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
          />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => ( // Use filteredProducts instead of all_product
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      <div className="shopcatrgory-loadmore">
        Explore More
      </div>
    </div>
  )
}
