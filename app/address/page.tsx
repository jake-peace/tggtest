import Footer from "@/components/Footer";
import AddressHeader from "@/components/AddressHeader";
import AddressTitle from "@/components/AddressTitle";
import AddressForm from "@/components/AddressForm";

export default function Address() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col space-y-[10px]">
        <AddressHeader />
        {/* main content */}
        <div className="space-y-[10px] justify-items-center">
          <AddressTitle />
          <AddressForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
