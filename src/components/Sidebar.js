import React, { useState } from "react"
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar"
import { FaTachometerAlt, FaGem, FaList } from "react-icons/fa"
import 'react-pro-sidebar/dist/css/styles.css';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { Container } from "react-bootstrap";

function Sidebar() {

  const [sidebarToggle, setSidebarToggle] = useState(true)

  return (
    <div style={{
      position: "absolute",
      height: window.innerHeight
    }}>
      <ProSidebar
        image="statue.png"
        rtl={false}
        collapsed={sidebarToggle}
        toggled={false}
        //breakPoint="md"
        onToggle={setSidebarToggle}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            {sidebarToggle ? "" : "Slogan"}
            {sidebarToggle ? (
              <i style={{
                alignContent: "center",
                fontSize: 16,
              }} onClick={() => setSidebarToggle(!sidebarToggle)}>
                <AiOutlineMenuUnfold />
              </i>
            ) : (
              <i style={{
                position: "absolute",
                right: 10,
                fontSize: 16,
              }} onClick={() => setSidebarToggle(!sidebarToggle)}>
                <AiOutlineMenuFold />
              </i>
            )}
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
            >
              Dashboard
            </MenuItem>
            <MenuItem icon={<FaGem />}> Components</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu title="multiLevel" icon={<FaList />}>
              <MenuItem>submenu 1 </MenuItem>
              <MenuItem>submenu 2 </MenuItem>
              <SubMenu title={`submenu 3`}>
                <MenuItem>submenu 3.1 </MenuItem>
                <MenuItem>submenu 3.2 </MenuItem>
                <SubMenu title={`submenu 3.3`}>
                  <MenuItem>submenu 3.3.1 </MenuItem>
                  <MenuItem>submenu 3.3.2 </MenuItem>
                  <MenuItem>submenu 3.3.3 </MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div>
            Footer
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div >

  );
};

export default Sidebar