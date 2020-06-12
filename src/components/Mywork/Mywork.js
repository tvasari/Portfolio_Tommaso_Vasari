import React, { Fragment } from 'react';
import './Mywork.css';


const Mywork = ( {immagine, titolo, paragrafo, appLink, frontLink, backLink} ) => {
	return(
		<Fragment>
			<div className='mywork-container'>
				<img src={immagine} alt='' className='proj-img'/>
			</div>
			<div className='mytext-container'>
				<h4 className='ma3'>{titolo}</h4>
				<p className='ma3'>{paragrafo}</p>
				<div className='ma3 linkstoproject flex justify-between'>
					<a href={appLink} >Try it</a>
					<a href={frontLink}>Source code front-end</a>
					<a href={backLink}>Source code back-end</a>
				</div>
			</div>
		</Fragment>
	);
}

export default Mywork;