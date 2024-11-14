import React from 'react';
import s from './Wipe.module.css';

const Wipe = () => {
	document.addEventListener('mousemove', event => {
		const customCursor = document.getElementById('customCursor');
		customCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
	});
	return (
		<div
			id='customCursor'
			className={s.wipeCursor}></div>
	);
};

export default Wipe;
