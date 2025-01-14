import React from 'react'

const flowers = () => {

  const flowersData =[
    {id: 1, name: " White Rose" , price: 500, description: ' Specially for Brides ' ,image: '/flower2.png'},
    {id: 2, name: "Real Rose" , price: 800, description: ' Made with Real Roses' ,image: '/flower2.png'},
    {id: 3, name: "Rose" , price: 500, description: 'Rose' ,image: '/flower2.png'},
    {id: 4, name: "Rose" , price: 500, description: 'Rose' ,image: '/flower2.png'},
    {id: 5, name: "Rose" , price: 500, description: 'Rose' ,image: '/flower2.png'},
    {id: 6, name: "Rose" , price: 500, description: 'Rose' ,image: '/flower2.png'},
  ]
  return (
    <div>
      <div className='flowers'>
        {flowersData.map((flowers) => (
          <div key={flowers.id} className='flowers-card'>
            <img src={flowers.image} alt={flowers.name}/>
            <h3>{flowers.name}</h3>
            <p>{flowers.description}</p>
            <div className='price'>${flowers.price} </div>
            <button>Add to Cart</button>

          </div>
        )
      )}
      </div>
      
    </div>
  )
}

export default flowers
