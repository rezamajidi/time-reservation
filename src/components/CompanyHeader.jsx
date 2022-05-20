const CompanyHeader = ({ name, logo, type }) => {
  return (
    <div className="flex items-center p-4 border border-blue-100 rounded-full bg-blue-50">
      <img className="w-24 h-24 rounded-full" src={logo} alt={`${name} logo`} />
      <figcaption className="ml-4">
        <p className="mb-1 text-xl font-bold text-gray-700">{name}</p>
        <p className="text-sm text-gray-600">Type: {type}</p>
      </figcaption>
    </div>
  );
};

export default CompanyHeader;
