interface modalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailModal = ({ setShowModal }: modalProps) => {
  const closeModal = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-10/12 p-6 flex flex-col items-center align-middle justify-center z-50">
      <h2 className="text-gray-900">Modal</h2>
      <div>
        <form action="">
          <div className="block">
            <label className="w-full" htmlFor="">
              Input
            </label>
            <input className="w-full border-gray-800 " type="text" />
          </div>
        </form>
      </div>
      <button onClick={(e) => closeModal(e)}>close</button>
    </div>
  );
};

export default MailModal;
