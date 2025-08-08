import AdmissionForm from "@/components/admissionForm";
import SubHero from "@/components/subhero";
import React from "react";

const AuPairVisaPage = () => {
  return (
    <div>
      <SubHero subHeroId="aupairvisa" />
      <div className="w-[90%] mx-auto m-8">
        <AdmissionForm />
      </div>
    </div>
  );
};

export default AuPairVisaPage;
