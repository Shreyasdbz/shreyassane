type SectionContainerProps = {
  children: React.ReactElement | React.ReactElement[]
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <section className="flex h-screen w-screen flex-col items-center justify-center">{children}</section>
}

export default SectionContainer
