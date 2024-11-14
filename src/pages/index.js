import localFont from 'next/font/local';
import Link from 'next/link';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export default function Home() {
	return (
		<div
			className={`${geistSans.variable} ${geistMono.variable} flex justify-center items-center  min-h-screen font-[family-name:var(--font-geist-sans)]`}>
			<Link
				className='btn btn-circle btn-outline w-60 h-60 text-2xl hover:text-blue-500 active:text-blue-600'
				href='/bathroom'>
				Go to bathroom
			</Link>
		</div>
	);
}
