type SectionHeader = {
  children: React.ReactElement | React.ReactElement[] | string
}

const SectionHeader = ({ children }: SectionHeader) => {
  return <div className="flex w-full items-center justify-start text-5xl font-extrabold md:text-6xl">{children}</div>
}

export default SectionHeader
