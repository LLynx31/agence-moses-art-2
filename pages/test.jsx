import { Banner } from "@/components/components-descrption-service";
import { Description } from "@/components/components-descrption-service";
import Header from "@/components/Header";
import { Service } from "@/components/components-descrption-service";
import { Offre } from "@/components/components-descrption-service";
import ProgressBar from "@/components/ProgressBar";

export default function Test(){
    return(
        <>
            <Header headerColor="black"></Header> 
            <ProgressBar></ProgressBar>
            <Banner titre={'Marketing Digital'} imgService={'/assets/logos_service/marketing.svg'}>Développez votre activité grâce au <br></br><span>Marketing Digital*</span>.</Banner>
            

            <Description>Le marketing digital, c&apos;est la clé de votre succès.Moses Art vous accompagne dans votre stratégie digitale pour développer votre présence en ligne, améliorer votre notoriété et atteindre vos objectifs commerciaux.Nos experts vous proposeront les solutions adaptées à votre entreprise et à vos besoins.</Description>

            <Service titre={'Titre'}>petite description du processus lorem ipsum dolor sit amet</Service>

            <Offre offre_head={'Offre Standard'}></Offre>
        </>
        
    )
}