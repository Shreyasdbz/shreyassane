type SectionHeader = {
  children: React.ReactElement | React.ReactElement[] | string
}

const SectionHeader = ({ children }: SectionHeader) => {
  return <div className="flex w-full items-center justify-start text-6xl font-extrabold">{children}</div>
}

export default SectionHeader
