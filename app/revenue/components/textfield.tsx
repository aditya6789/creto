
'use client';
import React, { useState } from 'react';
// import {useClient} from 'next/'

interface TextFieldProps {
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({ label }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-blue-800 pb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        
        className="mt-1 p-2 border rounded-md w-full"
      />
    </div>
  );
};

export default TextField;
