

import React from 'react';
import '../App.css';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

const drivers = [
  { name: 'Lewis Hamilton', team: 'Mercedes', country: 'UK', championships: 7 },
  { name: 'Max Verstappen', team: 'Red Bull Racing', country: 'Netherlands', championships: 3 },
  { name: 'Sebastian Vettel', team: 'Retired', country: 'Germany', championships: 4 },
  { name: 'Fernando Alonso', team: 'Aston Martin', country: 'Spain', championships: 2 },
  { name: 'Charles Leclerc', team: 'Ferrari', country: 'Monaco', championships: 0 },
  { name: 'Lando Norris', team: 'McLaren', country: 'UK', championships: 0 },
  { name: 'Sergio Pérez', team: 'Red Bull Racing', country: 'Mexico', championships: 0 },
  { name: 'George Russell', team: 'Mercedes', country: 'UK', championships: 0 },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('team', {
    header: 'Team',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('country', {
    header: 'Country',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('championships', {
    header: 'Championships',
    cell: info => info.getValue(),
  }),
];

const F1Page = () => {
  const table = useReactTable({
    data: drivers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="f1-content">
      <h1 className="text-3xl">F1 Drivers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-10">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="py-3 px-4 border-b text-center">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-2 px-4 border-b">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default F1Page;
