const ErrorSection = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 overflow-x-hidden overflow-y-hidden">
      <div>
        <p className="text-4xl font-extrabold dark:text-slate-200 md:text-6xl">Shreyas Sane</p>
      </div>
      <div
        className="h-20 w-20 animate-spin md:h-56 md:w-56"
        style={{ backgroundImage: 'url(/svgAssets/RadialColorCircle.svg)' }}
      />
      <div className="animate-pulse">
        <p className="text-2xl font-semibold dark:text-slate-200 md:text-4xl">Loading the website ...</p>
      </div>
    </div>
  )
}

export default ErrorSection
