"use client";

import FindAgreementsButton from "@/components/FindAgreementsButton";
import Footer from "@/components/Footer";
import LPHeader from "@/components/LPHeader";
import LPMain from "@/components/LPMain";
import Trust from "@/components/Trust";
import Lenders from "@/components/LendersComponent";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen bg-white">
        <div className="flex flex-col space-y-[10px]">
          <LPHeader />
          <LPMain />
          <FindAgreementsButton />
          <Trust />
          <Lenders />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
