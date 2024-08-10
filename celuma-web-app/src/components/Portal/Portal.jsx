import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
    const portalRoot = document.getElementById('modal-root');
    return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default Portal;