import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { client, urlFor } from './sanity';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export interface BookDetailData {
  title: string;
  author?: string;
  price?: number;
  description?: string;
  cover?: any;
  gallery?: { _key: string; asset: any }[];
  videoUrl?: string;
}

export default function BookDetail() {
  const { slug } = useParams();
  const [book, setBook] = useState<BookDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On récupère le fichier vidéo via son asset pour avoir l'URL directe
    const query = `*[_type == "book" && slug.current == $slug][0]{
      title,
      author,
      price,
      description,
      cover,
      gallery,
      "videoUrl": videoUrl.asset->url
    }`;

    client
      .fetch(query, { slug })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-serif italic opacity-20">Chargement...</div>;
  if (!book) return <div className="min-h-screen flex items-center justify-center font-serif italic">Ouvrage non trouvé.</div>;

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Navbar backTo="/shop" backLabel="Retour" />

      <main className="flex-grow pt-32 px-6 md:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left: Primary Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div className="aspect-[3/4] bg-black/5 overflow-hidden">
                {book.cover && (
                  <img 
                    src={urlFor(book.cover).width(1200).url()} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {book.videoUrl && (
                <div className="aspect-video bg-black flex items-center justify-center">
                  <video 
                    src={book.videoUrl} 
                    controls 
                    className="w-full h-full"
                    poster={book.cover ? urlFor(book.cover).width(800).url() : undefined}
                  />
                </div>
              )}
            </motion.div>

            {/* Right: Info & Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <header className="border-b border-black/5 pb-8">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-4xl md:text-6xl font-serif italic">{book.title}</h1>
                  <span className="text-xl font-light opacity-40">{book.price}€</span>
                </div>
                {book.author && (
                  <p className="text-sm uppercase tracking-[0.3em] font-bold opacity-40">Par {book.author}</p>
                )}
              </header>

              <div className="space-y-6">
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-20">Description</h2>
                <p className="text-lg font-light leading-relaxed text-black/70 italic">
                  {book.description}
                </p>
              </div>

              {book.gallery && book.gallery.length > 0 && (
                <div className="space-y-6 pt-12">
                  <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-20">Détails de l'ouvrage</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {book.gallery.map((img, idx) => (
                      <div key={idx} className="aspect-square bg-black/5 overflow-hidden group">
                        <img 
                          src={urlFor(img).width(600).url()} 
                          alt={`Detail ${idx}`}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button className="w-full py-6 border border-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-black hover:text-white transition-all duration-500">
                Demander un exemplaire
              </button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
