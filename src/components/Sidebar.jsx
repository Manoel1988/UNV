import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './Sidebar.css';

    const Sidebar = () => {
      const [collapsed, setCollapsed] = useState(false);

      const toggleSidebar = () => {
        setCollapsed(!collapsed);
      };

      return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {collapsed ? '>' : '<'}
          </button>
          {!collapsed && (
            <>
              <h2>Menu</h2>
              <ul>
                <li>
                  <Link to="/">Cadastrar Empresa</Link>
                </li>
                <li>
                  <Link to="/cadastrar-team-leader">Cadastrar Team Leader</Link>
                </li>
                <li>
                  <Link to="/lista">Empresas</Link>
                </li>
                <li>
                  <Link to="/lista-team-leader">Team Leader</Link>
                </li>
              </ul>
            </>
          )}
        </div>
      );
    };

    export default Sidebar;
