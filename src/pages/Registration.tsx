import { useState } from "react";
import { Link } from "react-router-dom";
import BrandSvg from "../assets/svgs/brand.svg";
import CloseSvg from "../assets/svgs/close.svg";
import RegistrationForm from "../components/Registration/RegistrationForm";
import RegistrationSuccess from "../components/Registration/RegistrationSuccess";

export default function Registration() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center">
        <img src={BrandSvg} alt="brand" className="h-10" />
        {!registrationSuccess && (
          <Link
            to="/"
            className="border border-gray-300 rounded-full py-2 px-2 font-bold"
          >
            <img src={CloseSvg} alt="brand" className="" />
          </Link>
        )}
      </header>
      {!registrationSuccess ? (
        <RegistrationForm onRegistration={setRegistrationSuccess} />
      ) : (
        <>
          <RegistrationSuccess />
        </>
      )}
    </>
  );
}
