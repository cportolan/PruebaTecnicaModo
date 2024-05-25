import '../styles/Home.css'
import homeImg from '../assets/home.jpg'

export default function Home() {
    return(
        <section className="home" id="home">
            <div className="home-container">
                <main className="home-main">
                    <h1 className='home-title'>We build beautiful and reliable web solutions.</h1>
                    <h3 className='home-subtitle'>We strongly believe that communication, trust and transparency are the essential elements of successful business relationship. <br />Ready for the journey?</h3>
                    <div className="home-main_btns">
                        <a href="#about" className='home-btn_1'>Learn more</a>
                        <a href='#case-studies' className='home-btn_2'>Our Projects</a>
                    </div>
                </main>
                <img src={homeImg} alt="Home IMG" />
            </div>
        </section>
    )
}