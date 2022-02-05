type ModalCloseButtonProps = {
  onClick: () => void
}

const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="hover-bounce rounded-full bg-tertiary-500 px-10 py-2 text-xl font-semibold shadow-lg"
    >
      Close
    </button>
  )
}

export default ModalCloseButton
