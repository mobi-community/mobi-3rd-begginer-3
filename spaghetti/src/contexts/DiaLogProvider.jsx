import { createContext, useContext, useRef, useState } from "react";
import Dialog from "../components/Dialog";
import { DIALOG_STATE } from '../constants';

const DiaLogContext = createContext();

export const useDiaLogStore = () => useContext(DiaLogContext);

const DiaLogProvider = ({ children }) => {
  const diaLogRef = useRef();
  const [diaLogAttribute, setDiaLogAttribute] = useState({
    type: DIALOG_STATE.ALERT,
    text: "",
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
    position: {
      x: 50,
      y: 10,
    },
  });

  const onOpenDiaLog = (args) => {
    diaLogRef.current.showModal();
    setDiaLogAttribute((prev) => ({
      ...prev,
      ...args,
      isOpen: true
    }));
  }

  const onCloseDiaLog = () => {
    // 이미 닫힌 상태라면 이후의 로직을 수행하지 않습니다.
    if (!diaLogAttribute.isOpen) return
    diaLogRef.current.close();
    setDiaLogAttribute((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <DiaLogContext.Provider
      value={[diaLogAttribute, onOpenDiaLog]}
    >
      {children}
      <Dialog
        {...{ ...diaLogAttribute }}
        ref={diaLogRef}
        onClose={onCloseDiaLog}
      />
    </DiaLogContext.Provider>
  );
};
export default DiaLogProvider;
