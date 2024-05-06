import Accordion from "./UI/Accordion";
import Unionsvg from "../assets/svgs/union.svg";

export default function FAQs() {
  return (
    <div className="bg-[#E8EEE7] px-10 rounded-3xl mt-24 flex">
      <div className="w-1/2 p-10">
        <h2 className="font-coveredByYourGrace font-medium text-3xl text-[#9E9D9D]">
          What's on your mind
        </h2>
        <h2 className="font-bold text-5xl">Ask Questions</h2>
        <img
          src={Unionsvg}
          alt="stars"
          className="relative -bottom-10 -left-20 p-0 pt-10 max-w-[450px]"
        />
      </div>
      <div className="w-1/2 space-y-4 pt-20">
        <Accordion
          question="Do you offer freelancers?"
          answer="Yes, our company offers freelance opportunities for individuals looking to work independently on various projects and assignments."
        />
        <Accordion
          question="What’s the guarantee that I will be satisfied with the hired talent?"
          answer="We strive to ensure satisfaction by carefully matching talents to your needs and offering support throughout the project."
        />
        <Accordion
          question="Can I hire multiple talents at once?"
          answer="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
        <Accordion
          question="Why should I not go to an agency directly?"
          answer="Choosing us ensures personalized attention, competitive rates, and direct communication with talents, enhancing flexibility and project customization."
        />
        <Accordion
          question="Who can help me pick a right skillset and duration for me?"
          answer="Our experienced team can assist in selecting the ideal skillset and duration tailored to your project requirements and goals."
        />
      </div>
    </div>
  );
}
