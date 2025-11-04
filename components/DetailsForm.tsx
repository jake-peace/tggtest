"use client";

import { useState } from "react";
import NameDOBForm from "./NameDobForm";
import MobileEmailForm from "./MobileEmailForm";

const DetailsForm: React.FC = () => {
  const [detailsStage, setDetailsStage] = useState(1);

  return detailsStage === 1 ? (
    <NameDOBForm onFormComplete={() => setDetailsStage(2)} />
  ) : (
    <MobileEmailForm />
  );
};

export default DetailsForm;
