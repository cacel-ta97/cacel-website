import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CACEL</h3>
            <p className="text-gray-300 mb-4">
              革新的なテクノロジーで<br />
              ビジネスの未来を創造します
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">システム開発</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">コンサルティング</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">セキュリティ</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">クラウド移行</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">保守・運用</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">研修・教育</Link></li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">会社概要</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">代表メッセージ</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">企業理念</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">沿革</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">アクセス</Link></li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-gray-300">
              <p>〒100-0001</p>
              <p>東京都千代田区千代田1-1-1</p>
              <p>CACELビル 10F</p>
              <p className="mt-4">TEL: 03-1234-5678</p>
              <p>Email: info@cacel.jp</p>
              <div className="mt-4">
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; 2024 CACEL Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">プライバシーポリシー</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">利用規約</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
