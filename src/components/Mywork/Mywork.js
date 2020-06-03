import React from 'react';
import './Mywork.css';


const Mywork = ( {immagine, titolo, paragrafo, appLink, frontLink, backLink} ) => {
	return(
		<div className='mywork-container'>
			<img src={immagine} alt=''/>
			<h4 className='ma3'>{titolo}</h4>
			<p className='ma3'>{paragrafo}</p>
			<div className='ma3 linkstoproject flex justify-between'>
				<a href={appLink} >Try it</a>
				<a href={frontLink}>Source code front-end</a>
				<a href={backLink}>Source code back-end</a>
			</div>
		</div>
	);
}

export default Mywork;