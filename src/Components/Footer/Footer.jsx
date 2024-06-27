import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../img/Logo.png'
import Icons from '../../img/Icons.png'
export default function Footer() {
  return (
    <div className={styles.Footer}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex items-center flex-col'>
      <img src={Logo} alt="" className='mt-8 select-none' />
        <div className='mt-12 flex justify-between w-[320px]'>
            <a  href="/home"     className='hover:text-background' >Home</a>
            <a  href="/Blog"  className='hover:text-background' >Contacts</a>
            <a  href="/About"    className='hover:text-background' >About</a>
            <a  href="/Contact"  className='hover:text-background' >Contacts</a>
            
        </div>
        <img src={Icons} className='mt-12' alt="" />
        <hr className='w-full h-1 bg-background mt-12 select-none' />

        <h6 className='mt-10'>Copyright Ideapeel Inc © 2023. All Right Reserved</h6>
      </div>
  </div>
    </div>
  )
}
