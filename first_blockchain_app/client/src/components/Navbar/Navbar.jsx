import "./Navbar.css";

const Navbar = () => {
  // Navbar list item

  const data = ["Market", "Exchange", "Tutorials", "Wallets"];

  const NavbarListItem = ({ title, classProps }) => {
    // console.log(title);
    return <li className={`listStyle ${classProps}`}>{title}</li>;
  };

  return (
    <div className="navbar">
      <div className="logo">D-App</div>
      <div className="list">
        {data.map((item, index) => (
          <NavbarListItem key={item + index} title={item} />
        ))}

        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
