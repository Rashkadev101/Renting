import React from "react"
import { price } from "../../data/Data"

const PriceCard = () => {
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            <div className='topbtn'>
              <button className='btnPrice'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text,  } = val
                return (
                  <li>
                    <label
                      
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='btn5'
              
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PriceCard
