import DhirajMe from "../../../assets/images/DhirajMe.png";
import './Logo.scss'

const Logo = () => {

   return (
     <div className="logo-container">
       <img
         className="profile-portrait"
         src={DhirajMe}
         alt="JavaScript,  Developer"
       />
     </div>
   );
}

export default Logo