import React from 'react';

const SignInModal = ({ handleClose, showLogin, children, name }) => {
  const showHideClassName = showLogin ? "modal display" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <br></br>
        <div className="closeModal">
          <br></br>

        </div>
        <div className="modalClose">
          <button type="button" className="closeModalButton" name={name} onClick={handleClose}> Close

          </button>
        </div>
      </section>
    </div>
  );
};

export default SignInModal;