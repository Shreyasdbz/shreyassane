type SectionContainerProps = {
  sectionId: string
  sectionBackgroundUrl: string
  mainBackgroundUrl?: string
  children: React.ReactElement | React.ReactElement[]
}

const SectionContainer = ({ sectionId, sectionBackgroundUrl, mainBackgroundUrl, children }: SectionContainerProps) => {
  let mainBg = ''
  if (mainBackgroundUrl) mainBg = mainBackgroundUrl
  return (
    <section
      className="flex min-h-screen w-screen items-center justify-center bg-cover"
      id={sectionId}
      style={{ backgroundImage: `url(${sectionBackgroundUrl})` }}
    >
      <main
        className="my-5 flex h-full w-full max-w-6xl flex-col items-center justify-start gap-4 bg-cover px-4 md:justify-center"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        {children}
      </main>
    </section>
  )
}

export default SectionContainer
