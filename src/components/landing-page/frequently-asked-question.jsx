import {
  CurlyArrow,
  CurlyArrow2,
  CurlyArrow4,
  CurlyArrow5,
} from "@/constants/Icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="relative w-full max-w-5xl">
      <span className="hidden md:block absolute z-10 top-28 text-neutral-600 left-0 w-[140px] h-[140px] -rotate-[75deg]">
        {CurlyArrow}
      </span>
      <span className="hidden md:block absolute z-10 bottom-20 text-neutral-600 left-24 w-[110px] h-[110px] -rotate-[75deg]">
        {CurlyArrow2}
      </span>
      <span className="hidden md:block absolute z-10 top-28 text-neutral-600 right-0 w-[150px] h-[150px] -rotate-[160deg]">
        {CurlyArrow5}
      </span>
      <span className="hidden md:block absolute z-10 bottom-20 text-neutral-600 right-0 w-[130px] h-[130px] -rotate-[110deg]">
        {CurlyArrow4}
      </span>
      <div className="w-full m-auto max-w-xl h-fit py-24 flex items-center justify-center flex-col">
        <div className="max-w-[720px] w-full flex flex-col ite justify-center">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight md:max-w-[550px] m-auto text-pretty">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-md sm:text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-400 px-4 text-pretty">
            Need help with something? Here are some of the most common questions
            we get.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full px-6 mt-8 sm:mt-4 sm:px-0">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Automation?</AccordionTrigger>
            <AccordionContent>
              Automation is a powerful SaaS platform that helps businesses
              automate customer engagement, marketing, and messaging workflows
              without coding.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do I need coding skills to use Automation?
            </AccordionTrigger>
            <AccordionContent>
              No, Automation is built for everyone! Our drag-and-drop interface
              allows you to create powerful workflows with zero coding
              knowledge.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              What platforms does Automation support?
            </AccordionTrigger>
            <AccordionContent>
              Automation supports multiple platforms, including WhatsApp,
              Facebook Messenger, Instagram DM, Email, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is there a free plan available?</AccordionTrigger>
            <AccordionContent>
              Yes! We offer a free plan with basic features. You can upgrade
              anytime to access advanced automation and integrations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How secure is my data?</AccordionTrigger>
            <AccordionContent>
              Security is our top priority. We use encryption and follow
              industry-best security practices to ensure your data is safe.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can I cancel my subscription anytime?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time. Your account
              will remain active until the end of the billing period.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Do you provide customer support?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We offer 24/7 customer support via live chat and email
              to assist you whenever you need help.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
