import React from 'react';

const SectionQuiSommesNous = () => {
  return (
    <div style={{flexDirection:'column', alignItems:'center', justifyContent:'center',overflowX :'hidden',fontFamily:'Montserrat',padding:'40px'}}>
      <h1 style={{fontSize:'38px', fontFamily:'AsgardTrial', textAlign:'center'}} >
        Qui sommes nous ?
      </h1>
      <p style={{lineHeight: '1.7',fontWeight:'regular',fontSize:'20px',textAlign:'center'}}>
      Nous sommes une agence de communication 360° qui accompagne ses clients dans le développement de leur image de marque.<br/> 
      Notre objectif est d'aider les petites, moyennes et grandes entreprises à mieux se faire connaître et à résoudre l'ensemble de leurs besoins et problématiques de communication.     </p>
    </div>
  );
};

export default SectionQuiSommesNous; 