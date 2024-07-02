import React from 'react'
import styles from './About.module.css'
import aboutImg from '../../img/About.png'
export default function About() {
    return (
        <div className={styles.about}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h6 className={`mt-16 text-center text-text-grey ${styles.about_title}`}>ABOUT US</h6>
                <h3 className={`mt-16 font-bold text-center mx-auto w-[60%] ${styles.font}`}>Creative Blog Writting and publishing site</h3>
                <p className='my-10 text-text-grey mx-auto text-center w-[85%]'><span className='ml-6'>Leverage</span> agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <img src={aboutImg} alt="" />
                <div className="my-10">
                    <h6 className={`mt-16 text-text-grey ${styles.title}`}>HOW WE WORK</h6>
                    <h3 className={`my-16 font-bold text-left w-[60%] ${styles.font}`}>I will show you how our team works</h3>
                    <div className={`my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 `}>
                        <div className={`h-[400px] min-w-400px px-4 rounded-[18px] cursor-pointer select-none  ${styles.about_card}`}>
                             <h1>01</h1>
                             <h4>Brainstorming</h4>
                             <h6>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated</h6>
                        </div> 
                        <div className={`h-[400px] min-w-400px px-4 rounded-[18px] cursor-pointer select-none   ${styles.about_card}`}>
                        <h1>02</h1>
                             <h4>Analysing</h4>
                             <h6>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.</h6>
                        </div>
                        <div className={`h-[400px] min-w-400px px-4 rounded-[18px] cursor-pointer select-none   ${styles.about_card}`}>
                        <h1>03</h1>
                             <h4>News Publishing</h4>
                             <h6>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
