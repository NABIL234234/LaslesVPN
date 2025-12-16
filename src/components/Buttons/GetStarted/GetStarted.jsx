import './GetStarted.css'

function GetStarted({ children }) {
  return (
    <button className="btn">
      {children}
    </button>
  );
}

export default GetStarted;