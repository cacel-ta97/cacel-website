import React from 'react';

const Services = () => {
  const services = [
    {
      title: "システム開発",
      description: "お客様のビジネスに最適化されたシステムを設計・開発いたします。",
      features: [
        "Webアプリケーション開発",
        "モバイルアプリ開発",
        "API開発・統合",
        "データベース設計"
      ],
      icon: "💻"
    },
    {
      title: "コンサルティング",
      description: "デジタル変革をサポートし、ビジネスプロセスの改善を提案します。",
      features: [
        "IT戦略立案",
        "プロセス改善",
        "システム選定支援",
        "導入支援"
      ],
      icon: "📊"
    },
    {
      title: "セキュリティ",
      description: "高度なセキュリティ対策で、お客様のデータを保護します。",
      features: [
        "セキュリティ診断",
        "脆弱性対策",
        "セキュリティ監視",
        "インシデント対応"
      ],
      icon: "🔒"
    },
    {
      title: "クラウド移行",
      description: "クラウド環境への移行をサポートし、コスト削減と効率化を実現します。",
      features: [
        "クラウド戦略立案",
        "移行計画策定",
        "データ移行",
        "運用サポート"
      ],
      icon: "☁️"
    },
    {
      title: "保守・運用",
      description: "システムの安定稼働をサポートし、継続的な改善を行います。",
      features: [
        "24時間監視",
        "定期メンテナンス",
        "障害対応",
        "パフォーマンス改善"
      ],
      icon: "🔧"
    },
    {
      title: "研修・教育",
      description: "お客様のスタッフのスキルアップをサポートします。",
      features: [
        "技術研修",
        "システム操作研修",
        "セキュリティ教育",
        "認定取得支援"
      ],
      icon: "🎓"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">サービス</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お客様のビジネス成長をサポートする多様なサービスを提供しています。
            最新のテクノロジーと豊富な経験を活かして、最適なソリューションをご提案いたします。
          </p>
        </div>

        {/* サービス一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTAセクション */}
        <div className="bg-blue-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            お客様に最適なソリューションをご提案
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            お客様のビジネス課題やご要望をお聞かせください。
            専門スタッフが最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              無料相談を申し込む
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              資料をダウンロード
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
