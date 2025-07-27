import { title, subtitle } from "@/components/primitives";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="inline-block max-w-xl text-center justify-center">
      <span className={title()}>Make&nbsp;</span>
      <span className={title({ color: "violet" })}>{text}&nbsp;</span>
      <br />
      <div className={subtitle({ class: "mt-4" })}>
        Beautiful, fast and modern React UI library.
      </div>
    </div>
  );
};

export default SectionTitle;

