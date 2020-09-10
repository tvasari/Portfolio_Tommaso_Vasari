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
				<p className='ma3'>{ paragrafo }</p>
				<div className='ma3 linkstoproject flex justify-between'>
					{
						paragrafoIsEng === true ?
						<Fragment>
							<a rel="noopener noreferrer" className='bot-link' href={appLink} target="_blank">Go to the project</a>
							<a rel="noopener noreferrer" className='bot-link' href={frontLink} target="_blank">Source code front-end</a>
							<a rel="noopener noreferrer" className='bot-link' href={backLink} target="_blank">Source code back-end</a>
						</Fragment> :
						<Fragment>
							<a rel="noopener noreferrer" className='bot-link' href={appLink} target="_blank">Vai al progetto</a>
							<a rel="noopener noreferrer" className='bot-link' href={frontLink} target="_blank">Codice front-end</a>
							<a rel="noopener noreferrer" className='bot-link' href={backLink} target="_blank">Codice back-end</a>
						</Fragment>
					}
				</div>
			</div>
		</Fragment>
	);
}

export default Mywork;