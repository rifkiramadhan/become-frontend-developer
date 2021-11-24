import OverviewContent from '../../components/organisms/OverviewContent';
import SideBar from '../../components/organisms/SideBar';

/* eslint-disable jsx-a11y/alt-text */
export default function Member() {
  return (
        <section className="overview overflow-auto">
          <SideBar />
          <OverviewContent />
        </section>
  );
}
