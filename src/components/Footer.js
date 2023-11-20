import signature from "../assets/signature.png";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="footerContainer" style={styles.container}>
        <div style={styles.logo}>
          <img
            style={{ width: "100px" }}
            src={signature}
            alt="Pranav Jadhav"
          ></img>
        </div>
        <span style={styles.logoText}>
          Made with <span style={{ fontSize: "30px" }}>❤️️</span> in India{" "}
          <span style={{ fontSize: "30px" }}>🇮🇳</span>
        </span>
        <div style={styles.copyRight}>
          <p>
            No &copy; issues. Feel free to copy and learn. Ping me if you need
            help.
          </p>
        </div>
        <div style={styles.social}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png"
              alt="Twitter"
              style={styles.socialIcon}
            />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-2038471-1718509.png"
              alt="Facebook"
              style={styles.socialIcon}
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HAOi0O13N7MxHfvSD7EPGo9NCNFOhCNeThXMmFZav-6Y0w8BHW32TltoolodZP9mZJs&usqp=CAU"
              alt="LinkedIn"
              style={styles.socialIcon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    Color: "#333",
    backgroundColor: "#fff",
    padding: "10px 0",
    marginTop: "5px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "100px",
    height: "100px",
    marginRight: "20px",
  },
  logoText: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  social: {
    display: "flex",
    justifyContent: "center",
  },
  socialIcon: {
    width: "40px",
    height: "40px",
    margin: "0 10px",
  },
  copyRight: {
    marginTop: "10px",
  },
};

export default Footer;
