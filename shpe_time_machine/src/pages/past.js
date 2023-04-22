import { Inter } from 'next/font/google';
import Header from './header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const mainStyle = {
    backgroundColor: '#D3D3D3',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '24px',
    borderTop: '2px solid black',
  };

  return (
    <>
      <div style={{ backgroundColor: '#D3D3D3', minHeight: '100vh' }} className='w-full'>
        <Header />
        <main style={mainStyle}>
          <p>wadup</p>
        </main>
      </div>
    </>
  );
}
