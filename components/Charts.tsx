
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Cell
} from 'recharts';
import { PLACEMENT_HISTORY, DEPARTMENTS } from '../constants';

export const PlacementLineChart: React.FC = () => (
  <div className="h-64 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={PLACEMENT_HISTORY}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="offers" stroke="#1e40af" strokeWidth={3} dot={{ r: 6, fill: '#1e40af' }} name="Job Offers" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const SalaryBarChart: React.FC = () => (
  <div className="h-64 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={PLACEMENT_HISTORY}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="medianSalary" fill="#10b981" name="Median Salary (LPA)" />
        <Bar dataKey="highestPackage" fill="#3b82f6" name="Highest (LPA)" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const COLORS = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe', '#eff6ff'];

export const DepartmentIntakeChart: React.FC = () => (
  <div className="h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={DEPARTMENTS} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={100} />
        <Tooltip />
        <Bar dataKey="intake" name="Seat Intake">
          {DEPARTMENTS.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);
