import signature from "../assets/signature.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer flex m-10 sm:my-0 flex-col sm:flex-row sm:justify-between items-center">
        <div>
          <img
            className="w-28 h:28 my-2"
            src={signature}
            alt="Pranav Jadhav"
          ></img>
        </div>
        <span className="text-xl my-2">Made with ❤️ in India 🇮🇳</span>
        <div>
          <p className="text-xl my-2">
            No ©️ issues. Feel free to copy and learn. Ping me if you need help
            😊
          </p>
        </div>
        <div className="flex flex-wrap m-2 p-2">
          <a
            className="mx-3"
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a
            className="mx-3"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={githubLogo} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// const styles = {
//   footer: {
//     Color: "#333",
//     backgroundColor: "#fff",
//     padding: "10px 0",
//     marginTop: "5px",
//     textAlign: "center",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   logo: {
//     display: "flex",
//     alignItems: "center",
//   },
//   logoImage: {
//     width: "100px",
//     height: "100px",
//     marginRight: "20px",
//   },
//   logoText: {
//     fontSize: "1.5em",
//     fontWeight: "bold",
//   },
//   social: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   socialIcon: {
//     width: "40px",
//     height: "40px",
//     margin: "0 10px",
//   },
//   copyRight: {
//     marginTop: "10px",
//   },
// };

export default Footer;
