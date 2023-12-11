import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link href="/hourlyrates" passHref>
        <button style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          padding: '20px 40px',
          fontSize: '1.5em',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          zIndex: 1000,
        }}>
          Add Hourly Rate
        </button>
      </Link>
    </div>
  );
}
