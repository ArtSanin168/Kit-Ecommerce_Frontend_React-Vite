import React from 'react';
import Select from 'react-select';

const provinceOptions = [
  { value: 'Banteay Meanchey', label: 'Banteay Meanchey' },
  { value: 'Battambang', label: 'Battambang' },
  { value: 'Kampong Cham', label: 'Kampong Cham' },
  { value: 'Kampong Chhnang', label: 'Kampong Chhnang' },
  { value: 'Kampong Speu', label: 'Kampong Speu' },
  { value: 'Kampong Thom', label: 'Kampong Thom' },
  { value: 'Kampot', label: 'Kampot' },
  { value: 'Kandal', label: 'Kandal' },
  { value: 'Kep', label: 'Kep' },
  { value: 'Koh Kong', label: 'Koh Kong' },
  { value: 'Kratie', label: 'Kratie' },
  { value: 'Mondulkiri', label: 'Mondulkiri' },
  { value: 'Oddar Meanchey', label: 'Oddar Meanchey' },
  { value: 'Pailin', label: 'Pailin' },
  { value: 'Phnom Penh', label: 'Phnom Penh' },
  { value: 'Preah Vihear', label: 'Preah Vihear' },
  { value: 'Prey Veng', label: 'Prey Veng' },
  { value: 'Pursat', label: 'Pursat' },
  { value: 'Ratanakiri', label: 'Ratanakiri' },
  { value: 'Siem Reap', label: 'Siem Reap' },
  { value: 'Sihanoukville', label: 'Sihanoukville' },
  { value: 'Stung Treng', label: 'Stung Treng' },
  { value: 'Svay Rieng', label: 'Svay Rieng' },
  { value: 'Takeo', label: 'Takeo' },
  { value: 'Tboung Khmum', label: 'Tboung Khmum' },
];

const ProvinceSelect = () => {
  return (
    <Select
      options={provinceOptions}
      placeholder="Select a Province"
      isSearchable
      className="w-full"
      styles={{
        control: (base) => ({
          ...base,
          border: 'gray-300',
          borderRadius: '0.375rem', // rounded
          padding: '0.375rem 0.875rem', // py-1.5 px-3.5
        }),
      }}
    />
  );
};

export default ProvinceSelect;
