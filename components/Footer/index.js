import styleFooter from '../../styles/Footer.module.css'
import Image from 'next/image'


export default function Footer(){
    const styleLine = {width: '50px', height:'5px', marginBottom: '20px',position:'relative'}
    const styleReseau = {width: '30px',height: '30px', position:'relative',display:'inline-block'}

    const logo = '/assets/logofooter.png'
    const lineFooter = '/assets/LineFooter.svg'
    const facebook = '/assets/FacebookFooter.svg'
    const instagram = '/assets/InstagramFooter.svg'
    const linkedin = '/assets/LinkedInFooter.svg'
    return(
        <div className={styleFooter.layout_footer}>
            <div className={styleFooter.layout_info}>
                <Image loading='lazy' className={styleFooter.logo} alt="Moses Agence Moses" width={230} height={100} src={logo}></Image >
                <div className={styleFooter.contact}>
                    <h1 className={styleFooter.title}>Nos contacts</h1>
                    <div style={styleLine}><Image loading='lazy' fill alt="illustration"  src={lineFooter} ></Image ></div>
                    <div className={styleFooter.number}>27 35 99 28 12</div>
                    <div className={styleFooter.number}>+225 07 87 444 029</div>
                    <div className={styleFooter.number}>+225 01 42 666 360</div>
                </div>

                <div className={styleFooter.localiation}>
                    <h1 className={styleFooter.title}>localisation</h1>
                    <div style={styleLine}><Image loading='lazy' fill alt="illustration" src={lineFooter} ></Image ></div>
                    <div className={styleFooter.lieu}>Abidjan, Koumassi</div>
                </div>

                <div className={styleFooter.suivez_nous}>
                    <h1 className={styleFooter.title}>reseau</h1>
                    <div style={styleLine}><Image loading='lazy' fill alt="reseau" src={lineFooter} ></Image ></div>
                    <div className='reseau'>
                        <div style={styleReseau}><a href=''><Image loading='lazy' fill alt="facebook" className='facebook' src={facebook}  ></Image></a></div>
                        <div style={styleReseau}><a href=''><Image loading='lazy' fill alt="instagram" className='instagram' src={instagram}></Image></a></div>
                        <div style={styleReseau}><a href=''><Image loading='lazy' fill alt="linkedin" className='linkedin' src={linkedin} ></Image></a></div>
                    </div>
                </div>
            </div>

            <div className={styleFooter.layout_copyright}>
                <div className={styleFooter.copyright}>Agence Moses Art 2023</div>
            </div>
        </div>
    )
}