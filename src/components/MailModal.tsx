import classNames from "classnames";
import { useEffect, useState } from "react";

interface content {
  "modal-input-name": string;
  "modal-input-email": string;
  "modal-input-number": string;
  "modal-input-subject": string;
  "modal-input-message": string;
}

interface modalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  content: content;
}

const MailModal = ({ setShowModal, darkMode, content }: modalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [incomplete, setIncomplete] = useState(true);

  const closeModal = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("function_not_ready");
  };

  useEffect(() => {
    if (
      name.length > 7 &&
      email.length > 7 &&
      phoneNumber.length == 10 &&
      subject.length > 7 &&
      message.length > 10
    ) {
      setIncomplete(true);
    } else {
      setIncomplete(true);
    }
  }, [name, email, phoneNumber, subject, message]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
        <div
          className={classNames(
            "relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-md w-96 p-6 flex flex-col items-center align-middle justify-center z-50",
            {
              "bg-slate-800": darkMode,
            }
          )}
        >
          <div className="w-14">
            <img src="/logo.png" alt="" />
          </div>
          <form onSubmit={handleSubmit} className="p-5 text-">
            <div className="block w-full">
              <label
                className={classNames("w-full text-slate-800", {
                  "text-gray-100": darkMode,
                })}
                htmlFor="input-nombre"
              >
                {content["modal-input-name"]}
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="input-nombre"
                className={classNames(
                  "w-full bg-gray-100 rounded-md shadow-inner p-1",
                  {
                    "bg-slate-600 text-gray-100": darkMode,
                  }
                )}
                type="text"
              />
              <label
                className={classNames("w-full text-slate-800", {
                  "text-gray-100": darkMode,
                })}
                htmlFor="input-email"
              >
                {content["modal-input-email"]}
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="input-email"
                className={classNames(
                  "w-full bg-gray-100 rounded-md shadow-inner p-1",
                  {
                    "bg-slate-600 text-gray-100": darkMode,
                  }
                )}
                type="email"
              />
              <label
                className={classNames("w-full text-slate-800", {
                  "text-gray-100": darkMode,
                })}
                htmlFor="input-number"
              >
                {content["modal-input-number"]}
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="input-number"
                className={classNames(
                  "w-full bg-gray-100 rounded-md shadow-inner p-1",
                  {
                    "bg-slate-600 text-gray-100": darkMode,
                  }
                )}
                type="tel"
              />
              <label
                className={classNames("w-full text-slate-800", {
                  "text-gray-100": darkMode,
                })}
                htmlFor="input-subject"
              >
                {content["modal-input-subject"]}
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                name="input-subject"
                className={classNames(
                  "w-full bg-gray-100 rounded-md shadow-inner p-1",
                  {
                    "bg-slate-600 text-gray-100": darkMode,
                  }
                )}
                type="text"
              />
              <label
                className={classNames("w-full text-slate-800", {
                  "text-gray-100": darkMode,
                })}
                htmlFor="input-message"
              >
                {content["modal-input-message"]}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="input-message"
                className={classNames(
                  "w-full h-24 bg-gray-100 rounded-md shadow-inner p-1 resize-none",
                  {
                    "bg-slate-600 text-gray-100": darkMode,
                  }
                )}
              />
            </div>
            <div>
              <button
                className={classNames(
                  "w-32 bg-slate-50 rounded-md shadow-md p-2 m-2 cursor-pointer",
                  {
                    "bg-slate-500 text-gray-100": darkMode,
                  }
                )}
                onClick={(e) => closeModal(e)}
              >
                Cerrar
              </button>
              <button
                type="submit"
                className={classNames(
                  "w-32 bg-slate-50 rounded-md shadow-md p-2 m-2 cursor-pointer",
                  {
                    "bg-slate-500 text-gray-100": darkMode,
                    "text-gray-400 shadow-none pointer-events-none": incomplete,
                  }
                )}
                onClick={(e) => closeModal(e)}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailModal;
