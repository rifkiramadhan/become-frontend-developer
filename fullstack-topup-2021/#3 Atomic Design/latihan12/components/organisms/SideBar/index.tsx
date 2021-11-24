import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

export default function SideBar() {
  return (
        <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
                <MenuItem title="Overview" icon="ic-menu-overview" active />
                <MenuItem title="Transaction" icon="ic-menu-transaction" />
                <MenuItem title="Messages" icon="ic-menu-messages" />
                <MenuItem title="Card" icon="ic-menu-card" />
                <MenuItem title="Reward" icon="ic-menu-reward" />
                <MenuItem title="Settings" icon="ic-menu-setting" />
                <MenuItem title="Log Out" icon="ic-menu-logout" />
            </div>
            <Footer />
        </div>
        </section>
  );
}
