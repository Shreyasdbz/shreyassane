type ModalProps = {
  children: React.ReactElement
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal fixed z-10 flex h-screen w-screen items-start justify-center overflow-x-hidden overflow-y-scroll px-5 py-20">
      {children}
    </div>
  )
}

export default Modal
