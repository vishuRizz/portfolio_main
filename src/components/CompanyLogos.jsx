import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 text-center tagline text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        <div className="flex items-center justify-center flex-1 h-[8.5rem]">
      <span className="mr-52">
              website development
            </span>
            <span>
              SaaS
            </span>
            </div>
      </ul>
    </div>
  );
};

export default CompanyLogos;
