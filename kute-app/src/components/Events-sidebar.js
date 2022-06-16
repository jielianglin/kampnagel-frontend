import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import './Events-sidebar.css';
export default function Sidebar() {
    return (
        <ProSidebar className="sidebar" width="800px" collapsedWidth="50px" rtl="true">
            <Menu iconShape="square">
                <MenuItem >Dashboard</MenuItem>
                <SubMenu title="Components">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>)
};