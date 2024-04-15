import { Banner, Description, Block, Offre  } from "@/components/components-descrption-service"
import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import style from "@/styles/Marketing.module.css"
import ContatezNous from "@/components/Akwaba/ContactezNous"

export default function Marketing(){
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <title>Agence MOSES ART</title>
            </Head>

            <Header headerColor="black" service scroll={'black'}></Header>
            <ProgressBar></ProgressBar>
            <Banner titre={'Impression'} imgService={'/assets/detail_logos_service/impression.png'}> La solution d&quot;<span>impression</span> qui répond à tous vos besoins.</Banner>

            <Description>Vous souhaitez imprimer des flyers, des brochures ou des cartes de visite pour promouvoir votre entreprise ? Nous vous aidons à créer des supports de communication efficaces.</Description>

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Les avantages de l&apos;utilisation de notre service d&apos;impression sur tout support peuvent inclure :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Qualité professionnelle"} color="#F6AA06">  Nous disposons des équipements et des compétences nécessaires pour produire des impressions de haute qualité, avec une attention aux détails et une finition professionnelle.</Block>
                    <Block titre={"Options de personnalisation "} color="#F6AA06">Vous pouvez personnaliser vos supports imprimés selon vos besoins et préférences, que ce soit en termes de design, de taille, de couleur ou de matériau. Cela vous permet de créer des supports uniques et adaptés à votre marque ou événement.</Block>
                    <Block titre={"Large gamme de supports"} color="#F6AA06"> Nous vous offrons une variété de choix en termes de supports d&apos;impression, que ce soit du papier, du textile, du métal, du plastique, etc. Vous pouvez choisir le support qui convient le mieux à votre projet.</Block>
                    <Block titre={"Gain de temps "} color="#F6AA06"> Externaliser vos besoins d&apos;impression à notre agence vous permet de vous concentrer sur d&apos;autres aspects de votre entreprise ou de votre événement, car nous nous chargeons de la gestion de la production et de la livraison des supports imprimés.</Block>
                    <Block titre={"Expertise et conseil"} color="#F6AA06">Nous avons une connaissance approfondie des différentes techniques d&apos;impression et nous pouvons vous conseiller sur les meilleures options en fonction de vos besoins et de votre budget.</Block>
                    <Block titre={"Service clé en main "} color="#F6AA06">De la conception à la livraison, nous gérons l&apos;ensemble du processus pour vous, en vous offrant un service complet et pratique.</Block>
                    <Block titre={"Impression à grande échelle"} color="#F6AA06">Si vous avez besoin d&apos;une grande quantité d&apos;impressions, nous répondons à vos besoins et nous vous offrons des tarifs avantageux pour les commandes en gros.</Block>
                    
                </div>

                <div className={style.avantage_conclusion}>En utilisant notre service d&apos;impression sur tout support, vous pouvez obtenir des supports imprimés de haute qualité, personnalisés et adaptés à vos besoins, tout en vous libérant du temps et de l&apos;effort nécessaires pour les produire vous-même.</div>
                
            </div> 


            <div className={style.processus}>
                <h1 className={style.processus_titre} style={{marginTop: '100px', marginBottom: '50px'}}>Processus d&apos;utlisation</h1>   
                <p className={style.avantage_description}>Le processus d&apos;utilisation de notre agence événementielle :</p>

                <div className={style.processus_block_layout}>
                    <Block titre={"Sélectionnez votre support "} color="#0F8383CF"> Choisissez le type de support sur lequel vous souhaitez faire imprimer votre design, que ce soit du papier, du textile, du métal, du plastique, etc.</Block>
                    <Block titre={"Concevez votre design"} color="#0F8383CF"> Créez ou fournissez le design que vous souhaitez faire imprimer. Assurez-vous de respecter les spécifications de l&apos;agence en termes de format, de résolution et de couleurs.</Block>
                    <Block titre={"Soumettez votre commande"} color="#0F8383CF">Envoyez-nous votre design, en précisant les quantités, les tailles et les autres détails spécifiques de votre commande. Vous pouvez également soumettre votre commande en ligne.</Block>
                    <Block titre={" Vérification et confirmation "} color="#0F8383CF"> Nous vérifierons votre design et nous vous fournirons une confirmation de votre commande, y compris les détails de prix et de délai de livraison.</Block>
                    <Block titre={" Production"} color="#0F8383CF"> Une fois que vous avez confirmé votre commande, nous procéderons à la production de vos supports imprimés. Cela peut inclure des étapes telles que l&apos;impression, la découpe, le pliage, etc.</Block>
                    <Block titre={"Contrôle qualité "} color="#0F8383CF"> Avant l&apos;expédition, nous effectuerons un contrôle qualité pour s&apos;assurer que vos supports imprimés répondent aux normes établies.</Block>
                    <Block titre={"Livraison "} color="#0F8383CF">Vos supports imprimés seront expédiés à l&apos;adresse que vous avez fournie lors de la commande. Assurez-vous de fournir les informations de livraison correctes et de vérifier les délais de livraison estimés.</Block>
                </div>
                
            </div>

            <div className={style.layout_offre}>
                <div className={style.offre}>
                    <Offre offre_head={"standard"}></Offre>
                    <Offre offre_head={"standard"}></Offre>
                    <Offre offre_head={"standard"}></Offre>
                </div>
            </div>

            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

