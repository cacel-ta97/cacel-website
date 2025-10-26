import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            革新的なソリューションで
            <br />
            ビジネスを変革する
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            CACELは、最新のテクノロジーを活用して
            <br />
            お客様のビジネス成長をサポートします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              サービスを見る
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">私たちのサービス</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              お客様のニーズに合わせた多様なソリューションを提供しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">システム開発</h3>
              <p className="text-gray-600 mb-6">
                お客様のビジネスに最適化されたシステムを設計・開発いたします。
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                詳細を見る →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">コンサルティング</h3>
              <p className="text-gray-600 mb-6">
                デジタル変革をサポートし、ビジネスプロセスの改善を提案します。
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                詳細を見る →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">セキュリティ</h3>
              <p className="text-gray-600 mb-6">
                高度なセキュリティ対策で、お客様のデータを保護します。
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 会社の特徴セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                なぜCACELを選ぶのか
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                私たちは、お客様のビジネス成功を最優先に考え、
                最新のテクノロジーと豊富な経験を活かして
                最適なソリューションを提供します。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">豊富な実績</h3>
                    <p className="text-gray-600">10年以上の経験と500件以上のプロジェクト実績</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">24時間サポート</h3>
                    <p className="text-gray-600">いつでもお客様をサポートする体制を整えています</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">カスタマイズ対応</h3>
                    <p className="text-gray-600">お客様のニーズに合わせた柔軟な対応が可能</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">C</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">CACEL</h3>
                <p className="text-gray-600">
                  革新的なテクノロジーで<br />
                  ビジネスの未来を創造します
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            お客様のビジネスに最適なソリューションをご提案いたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              無料相談を申し込む
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              資料をダウンロード
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
