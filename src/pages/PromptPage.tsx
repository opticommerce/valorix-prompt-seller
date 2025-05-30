import React from "react";
import Navbar from "../components/Navbar";
import PromptForm from "../components/PromptGenerator/PromptForm";
import PromptOutput from "../components/PromptGenerator/PromptOutput";
import AuthGate from "../components/AuthGate";

const PromptPage = () => {
  const [unlocked, setUnlocked] = React.useState(false);
  const [generatedPrompt, setGeneratedPrompt] = React.useState("");

  if (!unlocked) {
    return <AuthGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <>
      <Navbar logoText="ValorixAI Listing Assistant" />
      <div className="bg-[#F5F5F5] dark:bg-[#0F0F0F] text-center px-4 sm:px-8 md:px-16 pt-36 pb-12 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Create Your Optimized Listing Text
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Generate structured, high-quality listing content effortlessly.
        </p>
      </div>
      <main className="flex flex-col bg-[#F5F5F5] dark:bg-[#0F0F0F] min-h-screen pt-8 px-4 sm:px-8 md:px-16 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
            <div className="space-y-5">
              <PromptForm onGeneratePrompt={(data) => setGeneratedPrompt(data.generatedPrompt)} />
            </div>
            <div className="w-full h-full min-h-[300px]">
              <PromptOutput generatedPrompt={generatedPrompt} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PromptPage;