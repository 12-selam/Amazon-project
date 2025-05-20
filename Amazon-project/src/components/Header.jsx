import React from 'react'
import App from 'App.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <>
    <section>
    <div className={classes.header__container}>
            {/* /*logo section */ }
            <div className={classes.logo__container}>
            <a href='/'>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                  alt="amazon log" />
            </a>
            <div>
            {/* delivery */}
             <span>
                {SlLocationPin}
             </span>
             <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
             </div>
        </div>
        <div>
            {/* search  */}
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text"name="" id=""placeholder='search product'/>
            <BsSearch/>
        </div>
        {/*  right side link  */}
        <div>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/640px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="" />
            <section>
                <option value="">EN</option>
            </section>
        </div>
        {/* three components */}
        <a href="">
            <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
            </div>
        </a>
        {/* orders */}
        <a href="">
            <p>returns</p>
            <span>& Oreders</span>
        </a>
        {/* cart */}
        <a>
        <BiCart/>
        <span>0</span>
        </a>
        </div>
     </div>
    </div>
</section>
</>
  )
}

export default Header



