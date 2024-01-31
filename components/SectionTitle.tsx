interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="font-titleFont text-2x1 font-semibold flex items-center">
      {title}
      <span className="hidden md:inline-flex md:w-60 1gl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
