import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    subsets: ['latin'], // Specify subsets as needed
    weight: ['400', '700'], // Include weights you plan to use
  });