import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function UserDashboardheader() {
    return (
        
        <div className="dashboard">
            <div className="header-inner">
            <Header />
            </div>
                     <h2>Dashboard</h2> 
           <div className="footer-section">
            <Footer />
           </div>         
        </div>
    );
  }
  
  export default UserDashboardheader;