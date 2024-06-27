import React from 'react'
import styles from './Contacts.module.css'
import Adress from '../../img/Adress.png'
import Phone from '../../img/Phone.png'
import Email from '../../img/Email.png'

export default function Contacts() {
    return (
        <div className={styles.about}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='select-none'>
                    <h6 className={`mt-16 text-center text-text-grey ${styles.about_title}`}>CONTACTS</h6>
                    <h3 className={`mt-8 font-bold text-center mx-auto w-[60%] ${styles.font}`}>Get in Touch</h3>
                    <p className={`my-10 mx-auto text-center text-text-grey w-[30%] ${styles.font}`}>Contact us to publish your content and show ads to our website and get a good reach.</p>
                </div>
                <div className="mt-8 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className='h-[250px] flex items-center flex-col bg-slate-100 rounded-[18px]'>
                        <img className='mt-8 select-none' src={Adress} alt="" />
                        <h6 className='mt-6 text-background font-bold'>Office</h6>
                        <h6 className='mt-6 text-text-grey '>EXPO Block C4.6</h6>
                    </div>
                    <div className='h-[250px] flex items-center flex-col bg-slate-100 rounded-[18px]'>
                        <img className='mt-8 select-none' src={Email} alt="" />
                        <h6 className='mt-6 text-background font-bold'>Email</h6>
                        <h6 className='mt-6 text-text-grey '>

                            info@astanahub.com</h6>
                    </div>
                    <div className='h-[250px] flex items-center flex-col bg-slate-100 rounded-[18px]'>
                        <img className='mt-8 select-none' src={Phone} alt="" />
                        <h6 className='mt-6 text-background font-bold'>Phone</h6>
                        <h6 className='mt-6 text-text-grey '> +7 7172 73 50 89</h6>
                    </div>
                
                </div>
                <div className='w-[100%] mb-8'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.088883953597!2d71.41039666420264!3d51.088367133856245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585875bc02a17%3A0x573dd2c7f135d8af!2sAstana%20Hub!5e0!3m2!1sru!2skz!4v1719499073659!5m2!1sru!2skz" width="100%" height="450" title="3" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
            </div>
        </div>
    )
}
