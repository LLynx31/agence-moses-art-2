import Link from 'next/link'
import styleSendProjet from '../../styles/Akwaba/SendProject.module.css'
import { baseUrl } from '@/config/config'
import Markdown from 'react-markdown'
export default function SendProject({titre, textSipmle, image}){
    return (
        <div style={{backgroundImage: `url(${baseUrl + image})`}} className={styleSendProjet.layout_send_project}>
            <h1 className={styleSendProjet.send_project_title}><Markdown>{titre}</Markdown></h1>
            <p><Markdown>{textSipmle}</Markdown></p>
            <div className={styleSendProjet.btn}><Link className={styleSendProjet.link_send_project} href="/contact">Contact</Link></div>
        </div>
    )
}