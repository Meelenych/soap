'use client';
import React, { useState, useEffect } from 'react';
import bathImage from '../../public/bathroom.webp';
import Wipe from './Wipe';

const Bathroom = () => {
	const [dropsCount, setDropsCount] = useState(Math.floor(Math.random() * 100));
	const [dropsVisibility, setDropsVisibility] = useState(
		Array(dropsCount).fill(true), // All drops start as visible
	);
	const [level, setLevel] = useState(1);
	const [score, setScore] = useState(0);
	const [win, setWin] = useState(false);

	const checkWin = () => {
		if (dropsVisibility.every(visible => !visible)) {
			setWin(true); // If all drops are hidden, the player wins
		}
	};

	useEffect(() => {
		checkWin();
	}, [dropsVisibility]);

	// Function to reset drops
	const nextLevel = () => {
		const newCount = Math.floor(Math.random() * 100);
		setDropsCount(newCount);
		setDropsVisibility(Array(newCount).fill(true)); // Reset visibility for each drop
		if (win) {
			setLevel(prevLevel => prevLevel + 1);
			setWin(false);
		}
		console.log('next level');
	};

	// Function to hide individual drops
	const hideDrop = index => {
		setDropsVisibility(prevVisibility => {
			const newVisibility = [...prevVisibility];
			newVisibility[index] = false; // Set the specific drop's visibility to false
			if (prevVisibility[index]) {
				setScore(score + 1);
			}
			return newVisibility;
		});
		console.log('drop hidden', index);
		console.log('drops', dropsVisibility);
	};

	return (
		<div className='w-[1300px] h-[900px] ml-auto mr-auto'>
			<div className='p-2 flex justify-around items-center'>
				<h2 className='text-3xl'>Level {level}</h2>
				<h2 className='text-3xl'>Score {score}</h2>
				<button
					onClick={nextLevel}
					disabled={!win}
					className={`w-40 h-15 p-4 bg-blue-400 rounded-lg active:scale-95 active:bg-blue-500 ${
						!win && 'btn-disabled'
					}`}>
					Next level
				</button>
				{win ? (
					<p className='text-3xl text-green-500'>You won!</p>
				) : (
					<p className='text-3xl'>Keep wiping!</p>
				)}
			</div>
			<div
				style={{ backgroundImage: `url(${bathImage.src})` }}
				className={`bg-cover bg-center p-40 grid grid-cols-12 gap-3 h-[800px] rounded-xl border-4 ${
					win ? 'border-green-400' : 'border-blue-400'
				} `}>
				{/* <Wipe /> */}
				{/* Render each drop based on visibility status */}
				{Array.from({ length: dropsCount }).map((_, index) => (
					<button
						key={index}
						className={`w-10 h-10 rounded-full bg-blue-500/50 border m-2 transition-opacity duration-200`}
						style={{ opacity: dropsVisibility[index] ? 1 : 0 }} // Control visibility with opacity
						onMouseOver={() => hideDrop(index)}></button>
				))}
			</div>
		</div>
	);
};

export default Bathroom;
