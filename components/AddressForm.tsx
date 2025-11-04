"use client";

import { useState } from "react";
import PostcodeSearch from "./PostcodeSearch";
import AddressEntry from "./AddressEntry";

const AddressForm: React.FC = () => {
  const [displayAddress, setDisplayAddress] = useState(false);

  return (
    <>
      <PostcodeSearch onPostcodeSubmit={() => setDisplayAddress(true)} />
      {displayAddress && <AddressEntry />}
    </>
  );
};

export default AddressForm;
