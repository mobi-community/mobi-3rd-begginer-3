import React from "react";
import { styled } from "styled-components";
import { DIALOG_STATE } from '../constants';

const Dialog = React.forwardRef(
  ({ type, text, onConfirm, onCancel, onClose, position }, ref) => {
    return (
      <S.Wrapper ref={ref} $position={position}>
        <button onClick={onClose}>x</button>
        {text}
        <S.Button onClick={onConfirm}>확인</S.Button>
        {type === DIALOG_STATE.CONFIRM && (
          <S.Button onClick={onCancel}>취소</S.Button>
        )}
      </S.Wrapper>
    );
  }
);
Dialog.displayName = "Dialog";
export default Dialog;

const Wrapper = styled.dialog`
  width: 400px;
  position: absolute;
  left: ${({ $position }) => $position.x}%;
  top: ${({ $position }) => $position.y}%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: 1px solid #888;
  ::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Button = styled.button`
  padding: 8px;
`;

const BackDrop = styled.div`
  width: 100%;
`;

const S = {
  Wrapper,
  Button,
  BackDrop,
};
