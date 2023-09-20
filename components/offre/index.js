import styleOffre from '@/styles/offre.module.css'

export function Offre({type,prix,children}) {
    return(
        <div className={styleOffre.layout_offre}>
            <h1 className={styleOffre.titre}>{type}</h1>
            <div className={styleOffre.layout_prix}>
                FCFA <div className={styleOffre.prix}>{prix}</div>
            </div>
            <ul>
                {children}
            </ul>
        </div>
    )
}


export default function SectionOffre () {
    return (
        <div className={styleOffre.layout_section}>
            <h1 className={styleOffre.layout_section_title}>NOS OFFRES</h1>
            <div className={styleOffre.layout_bottom}>
                <Offre type={"DEBUTANT"} prix={"300 000"}>
                   <li>STRATEGIE SOCIAL MEDIA OFFERTE</li> 
                   <li>STRATEGIE PUBLICITAIRE ET GESTION DES PUBLICITES</li>
                   <li>GESTION D’1 COMPTE SUR LES RESEAUX</li>
                   <li>PLANNING DE PUBLICATION 02 PUBLICATIONS (IMAGE,TEXTE,GIFTS) PAR SEMAINE</li>
                   <li>VEILLE ET CONTROLE DE SA E-REPUTATION</li>
                   <li>GESTION DES CRISES ET `&quot;`BAD BUZZ`&quot;`</li>
                   <li>REPORTING MENSUEL ET SUGGESTIONS</li>
                </Offre>


                <Offre type={"START-UP"} prix={"350 000"}>
                   <li>STRATEGIE SOCIAL MEDIA OFFERTE</li> 
                   <li>STRATEGIE PUBLICITAIRE ET GESTION DES PUBLICITES</li>
                   <li>GESTION DE 2 COMPTE SUR LES RESEAUX</li>
                   <li>PLANNING DE PUBLICATION 03 PUBLICATIONS (IMAGE,TEXTE,GIFTS) PAR SEMAINE</li>
                   <li>VEILLE ET CONTROLE DE SA E-REPUTATION</li>
                   <li>GESTION DES CRISES ET `&quot;`BAD BUZZ`&quot;`</li>
                   <li>REPORTING MENSUEL ET SUGGESTIONS</li>
                </Offre>


                <Offre type={"PROFESSIONNEL"} prix={"430 000"}>
                   <li>STRATEGIE SOCIAL MEDIA OFFERTE</li> 
                   <li>STRATEGIE PUBLICITAIRE ET GESTION DES PUBLICITES</li>
                   <li>GESTION DES COMPTES SUR LES RESEAUX</li>
                   <li>PLANNING DE PUBLICATION NEWSJACKING, JEUX CONCOURS,QUIZZ...</li>
                   <li>05 PUBLICATIONS (IMAGE,TEXTE,GIFTS) PAR SEMAINE</li>
                   <li>02 STORIES PAR SEMAINE</li>
                   <li>VEILLE ET CONTROLE DE SA E-REPUTATION</li>
                   <li>GESTION DES CRISES ET `&quot;`BAD BUZZ`&quot;`</li>
                   <li>REPORTING MENSUEL ET SUGGESTIONS</li>
                </Offre>


                <Offre type={"ENTREPRISE CONFIRME"} prix={"550 000"}>
                   <li>STRATEGIE SOCIAL MEDIA OFFERTE</li> 
                   <li>STRATEGIE PUBLICITAIRE ET GESTION DES PUBLICITES</li>
                   <li>GESTION DES COMPTES SUR LES RESEAUX SOCIAUX</li>
                   <li>PLANNING DE PUBLICATION NEWSJACKING, JEUX CONCOURS,QUIZZ...</li>
                   <li>05 A 07 PUBLICATIONS (IMAGE,TEXTE,GIFTS) PAR SEMAINE</li>
                   <li>03 STORIES PAR SEMAINE</li>
                   <li>01 SEANCE PHOTO OFFERTE (10 PHOTOS) MENSUELLEMENT</li>
                   <li>VEILLE ET CONTROLE DE SA E-REPUTATION</li>
                   <li>GESTION DES CRISES ET `&quot;`BAD BUZZ`&quot;`</li>
                   <li>REPORTING MENSUEL ET SUGGESTIONS</li>
                   <li>DEPLOYEMENT DE MATERIELS</li>
                </Offre>



                <Offre type={"GRANDE ENTREPRISE"} prix={"780 000"}>
                    <li>STRATEGIE SOCIAL MEDIA OFFERTE</li> 
                   <li>STRATEGIE PUBLICITAIRE ET GESTION DES PUBLICITES</li>
                   <li>GESTION DES COMPTES SUR LES RESEAUX SOCIAUX</li>
                   <li>PLANNING DE PUBLICATION NEWSJACKING, JEUX CONCOURS,QUIZZ...</li>
                   <li>07 PUBLICATIONS (IMAGE,TEXTE,GIFT, CARROUSSEL) PAR SEMAINE</li>
                   <li>07 STORIES PAR SEMAINE</li>
                   <li>01 SEANCE PHOTO OFFERTE (30 PHOTOS) MENSUELLEMENT</li>
                   <li>04 SHORT CONTENT VIDEO (15s A 30s) MENSUELLEMENT</li>
                   <li>VEILLE ET CONTROLE DE SA E-REPUTATION</li>
                   <li>GESTION DES CRISES ET `&quot;`BAD BUZZ`&quot;`</li>
                   <li>REPORTING MENSUEL ET SUGGESTIONS</li>
                   <li>DEPLOYEMENT DE MATERIELS + GESTION DU PERSONA BRANDING</li>
                </Offre>


                <Offre type={"MULTINATIONAL"} prix={"1 250 000"}>
                    <li>STRATEGIE SOCIAL MEDIA OFFERTE</li> 
                   <li>STRATEGIE PUBLICITAIRE ET GESTION DES PUBLICITES</li>
                   <li>GESTION DES COMPTES SUR LES RESEAUX SOCIAUX</li>
                   <li>PLANNING DE PUBLICATION NEWSJACKING, JEUX CONCOURS,QUIZZ...</li>
                   <li>07 PUBLICATIONS (IMAGE,TEXTE,GIFT, CARROUSSEL) PAR SEMAINE</li>
                   <li>07 STORIES PAR SEMAINE</li>
                   <li>01 SEANCE PHOTO OFFERTE (40 PHOTOS) MENSUELLEMENT</li>
                   <li>04 SHORT CONTENT VIDEO (15s A 30s) MENSUELLEMENT</li>
                   <li>VEILLE ET CONTROLE DE SA E-REPUTATION</li>
                   <li>GESTION DES CRISES ET `&quot;`BAD BUZZ`&quot;`</li>
                   <li>REPORTING MENSUEL ET SUGGESTIONS</li>
                   <li>DEPLOYEMENT DE MATERIELS + GESTION DU PERSONA BRANDING</li>
                   <li>CHARGE DE COMMUNICATION</li>
                </Offre>
            </div>
        </div>
    )
}