import React from "react";
import { GradientButton } from "../../components";
import resume from "../../assets/pdf/resume.pdf";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "StevensBougaultResume"; // Customize the downloaded file name
    link.click();
    console.log("Downloaded");
  };
  return (
    <div className="resume">
      <div className="projectPage__container mx-auto max-w-7xl py-[4rem] md:px-[2rem] px-[1rem]">
        <h1 className="text-[5rem] sm:text-[7rem] font-semibold">Resume</h1>
        <div className="flex justify-between items-center pb-8">
          <div onClick={handleDownload}>
            <GradientButton content="Download" onClick={handleDownload} />
          </div>
        </div>
        <div className="h-full">
          <iframe
            className="rounded-[.9rem] w-full h-[750px]"
            src={resume}
            type="application/pdf"
            title="My Resume PDF"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Resume;
