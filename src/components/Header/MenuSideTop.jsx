import React from 'react'
import { navbarTop } from '../../utils/menu'
import { Link } from 'react-router-dom'
const MenuTop = () => {
  return (
    <div className='bg-black'>
        <div className='flex text-white justify-around w-full text-[14px]'>
            <div className='w-[50%] '>
                <ul className='flex'>
                    {
                        navbarTop?.map ((item, index) => (
                          <li className=' py-[15px] px-[22px]'>
                            <Link to={`${item.link}`} key={index}>
                                <span>{item.name}</span>
                            </Link>
                          </li>  
                        ))
                    }
                </ul>
            </div>
            <div className='w-[15%]  py-[15px] px-[22px]'>
                <span>PREMIUM AND FRIENDLY</span>
            </div>
        </div>
    </div>
  )
}

export default MenuTop