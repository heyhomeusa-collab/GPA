import React from 'react';
import { motion } from 'motion/react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface PremiumButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function PremiumButton({ onClick, children, className = '' }: PremiumButtonProps) {
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      className={`relative group ${className}`}
    >
      {/* Outer Glow on Hover */}
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { opacity: 0.4, scale: 1.05 }
        }}
        className="absolute -inset-4 bg-primary/30 blur-2xl rounded-full pointer-events-none z-0"
      />
      
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 w-full sm:w-auto bg-primary hover:bg-primary/50 backdrop-blur-md text-white px-14 py-5 rounded-full font-bold tracking-wide shadow-2xl transition-all duration-500 overflow-hidden border border-white/10"
      >
        {/* Glassy Highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        
        {/* Shimmer Sweep Effect */}
        <motion.div
          variants={{
            initial: { x: '-150%', skewX: -20 },
            hover: { x: '250%', skewX: -20 }
          }}
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/3 pointer-events-none"
        />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
          <span className="group-hover:text-amber-400 transition-colors duration-300">
            {children}
          </span>
        </span>
      </motion.button>
    </motion.div>
  );
}
