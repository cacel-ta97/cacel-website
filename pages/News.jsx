import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Product Launch",
      date: "2024-01-15",
      excerpt: "We are excited to announce the launch of our latest product that will revolutionize the industry.",
      category: "Product"
    },
    {
      id: 2,
      title: "Company Expansion",
      date: "2024-01-10",
      excerpt: "Our company is expanding to new markets, bringing our services to more customers worldwide.",
      category: "Company"
    },
    {
      id: 3,
      title: "Award Recognition",
      date: "2024-01-05",
      excerpt: "We are proud to announce that we have received the Innovation Award for 2024.",
      category: "Awards"
    },
    {
      id: 4,
      title: "Partnership Announcement",
      date: "2024-01-01",
      excerpt: "We have formed a strategic partnership with a leading technology company.",
      category: "Partnership"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Latest News
        </h1>
        
        <div className="space-y-6">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <time className="text-gray-500 text-sm">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.excerpt}
              </p>
              <div className="mt-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Load More News
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
