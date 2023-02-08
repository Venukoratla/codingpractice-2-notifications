const Notification = (props) => {
  //  Write your code here.
  const { name, className, src } = props;
  return (
    <div className={className}>
      <img src={src} className="image" />
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-color">
    <h1 className="heading">Notifications</h1>
    <Notification
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      name="Information Message"
      className="information-container"
    />
    <Notification
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      name="Success Message"
      className="success-container"
    />
    <Notification
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      name="Warning Message"
      className="warning"
    />
    <Notification
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      name="Error Message"
      className="error"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
