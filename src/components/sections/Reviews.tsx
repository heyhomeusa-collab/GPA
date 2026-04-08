import React, { useState, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';
import { assets } from '../../config/assets';
import { useTranslation } from '../../hooks/useTranslation';
import Papa from 'papaparse';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface ReviewData {
  name: string;
  country: string;
  quote: string;
  fullReview: string;
  img: string;
}

const TestimonialBubble = ({ t }: { t: ReviewData; key?: React.Key }) => {
  const imageUrl = t.img ? `https://pe7rgoqwih1pjfz0.public.blob.vercel-storage.com/6rev/${t.img}.jpg` : '';
  
  return (
    <div className="relative group/bubble mx-3 hover:z-50 min-w-max">
      <div className="bg-white rounded-3xl p-4 pr-8 flex items-center gap-4 shadow-sm border border-outline-variant/10 min-w-[300px] cursor-pointer hover:shadow-md transition-shadow">
        <div className="w-14 h-14 rounded-full bg-[#a8d5d1] overflow-hidden flex-shrink-0 flex items-center justify-center">
          {imageUrl && <img src={imageUrl} alt={t.name} className="w-12 h-12 object-cover" />}
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-1">
            <span className="font-bold text-primary font-headline text-lg">{t.name}</span>
            <span className="bg-[#000040] text-[#fcd400] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{t.country}</span>
          </div>
          <span className="text-on-surface-variant text-sm italic truncate whitespace-normal line-clamp-2">"{t.quote}"</span>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-outline-variant/10 p-6 opacity-0 invisible group-hover/bubble:opacity-100 group-hover/bubble:visible transition-all duration-300 z-[60] translate-y-2 group-hover/bubble:translate-y-0 pointer-events-none whitespace-normal">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#a8d5d1] overflow-hidden flex-shrink-0 flex items-center justify-center">
            {imageUrl && <img src={imageUrl} alt={t.name} className="w-10 h-10 object-cover" />}
          </div>
          <div>
            <div className="font-bold text-primary font-headline">{t.name}</div>
            <div className="text-xs text-on-surface-variant uppercase tracking-wider">{t.country}</div>
          </div>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed">"{t.fullReview}"</p>
        
        {/* Triangle pointer */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-outline-variant/10 rotate-45"></div>
      </div>
    </div>
  );
};

export function Reviews() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://pe7rgoqwih1pjfz0.public.blob.vercel-storage.com/6rev/reviews.csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const validData = (results.data as ReviewData[]).filter(row => row.name && row.country);
            setReviews(validData);
            setLoading(false);
          },
          error: (error: Error) => {
            console.error('Error parsing CSV:', error);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const row1Count = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, row1Count);
  const row2 = reviews.slice(row1Count);

  const createMarqueeContent = (arr: ReviewData[]) => {
    if (arr.length === 0) return null;
    
    // Duplicate arrays to ensure marquee looping is seamless.
    // Ensure we have enough items to span the screen.
    const repetitions = Math.max(4, Math.ceil(12 / arr.length));
    const finalArr = Array.from({ length: repetitions }, () => arr).flat();

    return finalArr.map((review, i) => (
      <TestimonialBubble key={`${review.name}-${i}`} t={review} />
    ));
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-24" id="reviews">
      <div className="text-center mb-16">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block -mt-[35px]">{t.reviews.badge}</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight">{t.reviews.title}</h2>
      </div>
      
      <div className="relative mb-20 overflow-visible flex flex-col gap-6 group -mt-[30px] min-h-[300px] justify-center">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : reviews.length > 0 ? (
          <>
            {row1.length > 0 && (
              <div className="flex animate-marquee whitespace-nowrap items-center w-max">
                {createMarqueeContent(row1)}
              </div>
            )}
            {row2.length > 0 && (
              <div className="flex animate-marquee-reverse whitespace-nowrap items-center w-max">
                {createMarqueeContent(row2)}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant font-medium">
            No reviews available right now.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Video Card 1 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high">
          <img alt="Mateo Silva" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={assets.interviews[0].thumbnail} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Mateo Silva</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">{t.reviews.interviews.brazil}</span>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high md:scale-105 z-10">
          <img alt="Yuki Tanaka" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={assets.interviews[1].thumbnail} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Yuki Tanaka</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">{t.reviews.interviews.japan}</span>
          </div>
        </div>

        {/* Video Card 3 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high">
          <img alt="Isabella Rossi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={assets.interviews[2].thumbnail} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Isabella Rossi</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">{t.reviews.interviews.italy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
