import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { client, urlFor } from './sanity';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export interface Book {
  _id: string;
  title: string;
  price?: number;
  cover?: any;
  slug: {
    current: string;
  };
  description?: string;
}

export default function Shop() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "book"]{_id, title, price, cover, slug, description}`)
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 px-6 md:px-24">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4">The Shop.</h1>
          <p className="text-black/40 text-xs uppercase tracking-[0.3em]">Limited Editions & Books</p>
        </header>

        {loading ? (
          <div className="flex justify-center py-24 opacity-20">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {books.map((book) => (
              <motion.div 
                key={book._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group"
              >
                <Link to={`/shop/${book.slug.current}`} className="aspect-[3/4] block overflow-hidden bg-black/5 mb-6">
                  {book.cover && (
                    <img 
                      src={urlFor(book.cover).width(600).url()} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </Link>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <Link to={`/shop/${book.slug.current}`} className="text-lg font-serif italic hover:opacity-60 transition-opacity">{book.title}</Link>
                    <span className="text-sm font-light opacity-60">{book.price}€</span>
                  </div>
                  <p className="text-xs text-black/40 leading-relaxed line-clamp-2">{book.description}</p>
                  <Link to={`/shop/${book.slug.current}`} className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold pt-4 border-b border-black/10 pb-1 hover:border-black transition-colors">
                    Discover the book
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}