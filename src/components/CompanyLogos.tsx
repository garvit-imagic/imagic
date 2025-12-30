export default function CompanyLogos() {
  const companies = [
    { name: 'Company 1', width: 80 },
    { name: 'Company 2', width: 100 },
    { name: 'Company 3', width: 90 },
    { name: 'Company 4', width: 85 },
    { name: 'Company 5', width: 95 },
    { name: 'Company 6', width: 80 },
    { name: 'Company 7', width: 100 },
    { name: 'Company 8', width: 90 },
    { name: 'Company 9', width: 85 },
    { name: 'Company 10', width: 95 },
    { name: 'Company 11', width: 80 },
    { name: 'Company 12', width: 100 },
    { name: 'Company 13', width: 90 },
    { name: 'Company 14', width: 85 },
    { name: 'Company 15', width: 95 },
    { name: 'Company 16', width: 80 },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div 
                className="bg-gray-200 rounded-lg flex items-center justify-center"
                style={{ width: company.width, height: 40 }}
              >
                <span className="text-xs text-gray-400 font-semibold">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

