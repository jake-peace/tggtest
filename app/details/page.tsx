import DetailsForm from "@/components/DetailsForm";
import DetailsHeader from "@/components/DetailsHeader";
import Footer from "@/components/Footer";

export default function Details() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col space-y-[10px]">
        <DetailsHeader />
        {/* main content */}
        <div className="space-y-[10px] justify-items-center">
          <DetailsForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
