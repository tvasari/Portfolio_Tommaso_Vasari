import React, { Fragment } from 'react';
import './Mywork.css';


const Mywork = ( {immagine, titolo, paragrafo, appLink, frontLink, backLink, changeLang, paragrafoIsEng } ) => {
	return(
		<Fragment>
			<div className='mywork-container'>
				<img src={immagine} alt='' className='proj-img'/>
			</div>
			<div className='mytext-container relative'>
				<h4 className='ma3'>{titolo}</h4>
				<div className='flex justify-end absolute' style={{margin: '15px', right: '0', top:'0'}}>
					<button className='langchange' onClick={() => changeLang()}>IT</button>
					<p className='ma0'>/</p>
					<button className='langchange' onClick={() => changeLang()}>ENG</button>
				</div>
				<p className='ma3'>{paragrafo}</p>
				<div className='ma3 linkstoproject flex justify-between'>
					{
						paragrafoIsEng === true ?
						<Fragment>
							<a href={appLink} >Go to the project</a>
							<a href={frontLink}>Source code front-end</a>
							<a href={backLink}>Source code back-end</a>
						</Fragment> :
						<Fragment>
							<a href={appLink} >Vai al progetto</a>
							<a href={frontLink}>Codice front-end</a>
							<a href={backLink}>Codice back-end</a>
						</Fragment>
					}
				</div>
			</div>
		</Fragment>
	);
}

export default Mywork;