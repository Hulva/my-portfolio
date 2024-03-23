import { Inter } from 'next/font/google';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Luva.Hua 的个人简历',
  description: '这是 Luva.Hua 的个人简历. 我是一名全栈开发者. 我喜欢学习新的事物，我喜欢和别人合作.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn">
      <head>
        <script async src="http://74.120.173.186:9002/tracker.js" data-ackee-server="http://74.120.173.186:9002" data-ackee-domain-id="b85b88ef-7fb6-440a-89b2-ba0b4b6fa2bd"></script>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};
