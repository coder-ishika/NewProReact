import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'tailwindcss/tailwind.css'; 
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdFlightTakeoff } from "react-icons/md";

const UserTable = () => {
  const columnDefs = [
    { headerName: 'Name', field: 'name', checkboxSelection: true, filterParams: { buttons: ['reset', 'apply'] } },
    { headerName: 'Email Id', field: 'email',  filterParams: { buttons: ['reset', 'apply'] } },
    { headerName: 'Roles', field: 'roles',  cellRenderer: renderRoles },
    { headerName: 'Workspace', field: 'workspace',  filter: 'agTextColumnFilter', filterParams: { buttons: ['reset', 'apply'] } },
    { headerName: 'Action', field: 'action', cellRenderer: renderActions }
  ];

  const rowData = [
    { name: 'Esther Howard', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { name: 'Cameron Williamson', email: 'dolores.chambers@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_02' },
    { name: 'Esther Howard', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { name: 'Esther Howard', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { name: 'Esther Howard', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { name: 'Cameron Williamson', email: 'dolores.chambers@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_02' },
    { name: 'Esther Howard', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { name: 'Esther Howard', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    
  ];
  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true
};

const roleColors = {
  Design: 'bg-green-300 ',
  Product: 'bg-sky-300 ',
  Marketing:'bg-purple-300 '
};

const roleBackground = {
  Design: 'border border-green-600',
  Product: 'border border-sky-600',
  Marketing: 'border border-purple-600'
}

function renderRoles(params) {
  return (
    <div className="flex gap-2">
      {params.value.map((role, index) => (
        <span key={index} className={`${roleColors[role]} ${roleBackground[role]} text-white text-xs mt-2 px-4 py-1 rounded-xl`}>{role}</span>
      ))}
    </div>
  );
}

  function renderActions() {
    return (
      <div className="flex gap-2">
        <button className="text-sky-700  bg-white border border-sky-700 px-8 py-1 mt-2 ml-1 rounded text-sm">Edit<TbEdit className="inline-block mr-1 ml-1 items-center mb-1" /></button>
        <button className="bg-sky-700 text-white border border-white px-8 py-1  mt-2 ml-1 rounded text-sm">Delete<RiDeleteBinLine className='inline-block mr-1 ml-1 items-center mb-1'/></button>
      </div>
    );
  }

  return (
    <div className="flex">
      <aside className="w-64 min-h-screen p-4 bg-white mt-5">
        <h1 className="text-4xl font-bold mb-4 text-sky-700">fin<span className='text-black font-light'>kraft</span><span className='text-sky-700'>.</span></h1>
        <h2 className='text-xl text-sky-700 mt-11 font-semibold '>Menus</h2>
        <nav className='mt-5'>
          <ul>  
            <li className="mb-2 ">
              <a href="#" className="text-sky-700 pl-2 text-xl bg-sky-100 px-28 rounded py-2 " ><MdFlightTakeoff className='inline-block mr-3 ml-1 items-center mb-1'/>Home</a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-grow p-8 bg-gray-100">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="ag-theme-alpine" style={{ height: '600px', width: '100%', flex:1 }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              defaultColDef={defaultColDef}
              domLayout="autoHeight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;