import Logout from './Logout'
import Tab from '../NavBar/Tab'
import style from '../NavBar/navbar.module.css'
import dashboard from './img/dashboard.svg'
import members from './img/members.svg'
import modules from './img/modules.svg'
import projects from './img/projects.svg'
import sprint from './img/sprint.svg'
import report from './img/report.svg'
import collapse from './img/collapse.svg'

const Navbar = () => {
    return (
        <nav>
            <div className={style.navlinks_wrapper}>
                <div className={style.logo}>
                    <div className="logo">ChirKuut</div>
                    <img className={style.collapse} src={collapse} />
                </div>
                <Tab activeTab={1}>
                    <Tab.Panel>  <div><img src={dashboard}></img>Dashboard</div></Tab.Panel>
                    <Tab.Panel> <div className={style.active}><img src={projects}></img>Projects</div></Tab.Panel>
                    <Tab.Panel><div><img src={modules}></img>Modules</div></Tab.Panel>
                    <Tab.Panel> <div><img src={sprint}></img>Sprint</div></Tab.Panel>
                    <Tab.Panel><div><img src={members}></img>Members</div></Tab.Panel>
                    <Tab.Panel> <div><img src={report}></img>Reports</div></Tab.Panel>
                </Tab>
            </div>
            <Logout />
        </nav>
    )
}

export default Navbar;