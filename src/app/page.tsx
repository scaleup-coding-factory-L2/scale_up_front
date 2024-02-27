import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl mb-10">Bouton pour rediriger sur page</h1>
        <Link href="/dashboard">
          <div className="px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4 mb-4">
            Dashboard
          </div>
        </Link>
        <Link href="/app/page">
        <div className="px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4">
            Historique
          </div>
        </Link>
      </div>
    </div>
  );
}


