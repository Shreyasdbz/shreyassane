type SectionCaption = {
  children: React.ReactElement | React.ReactElement[] | string
}

const SectionCaption = ({ children }: SectionCaption) => {
  return (
    <div className="flex w-full items-center justify-start text-2xl font-extrabold text-slate-800 dark:text-slate-100 md:text-3xl">
      {children}
    </div>
  )
}

export default SectionCaption
