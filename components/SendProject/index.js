import Link from 'next/link'
import styleSendProjet from '../../styles/Akwaba/SendProject.module.css'
export default function SendProject(){
    return (
        <div className={styleSendProjet.layout_send_project}>
            <h1 className={styleSendProjet.send_project_title}>Démarrer un projet avec nous</h1>
            <p>Nous allons faire de votre idée quelque <br></br>chose de vraiment spécial.</p>
            <div className={styleSendProjet.btn}><Link className={styleSendProjet.link_send_project} href="/contact">Contact</Link></div>
        </div>
    )
}