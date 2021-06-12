import "./sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import ExploreIcon from '@material-ui/icons/Explore';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <ExploreIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Posts</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
        </ul>
        <button className="sidebarButton">Explore</button>
        <hr className="sidebarHr"/>
        
      </div>
    </div>
  )
}
