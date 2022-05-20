import CompanyHeader from "./CompanyHeader.jsx";
const CompanyColumn = ({ id, name, type }) => {
  return (
    <div>
      <CompanyHeader
        name={name}
        logo={`https://loremflickr.com/120/120/logo,company?lock=${54 + id}`}
        type={type}
      />
    </div>
  );
};

export default CompanyColumn;
