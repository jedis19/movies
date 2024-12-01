import { useEffect, useRef, useState } from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { IDropdownItem } from '../types';

interface DropdownProps {
  options: IDropdownItem[];
  selectedOption: string | undefined;
  changeSelectedOption: (option: IDropdownItem) => void;
}

export function Dropdown({
  options,
  selectedOption,
  changeSelectedOption,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownEl.current &&
        !dropdownEl.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleSelect = (option: IDropdownItem) => {
    changeSelectedOption(option);
    setIsOpen(false);
  };

  let renderedOptions = options.map((option) => {
    return (
      <p
        key={option.key}
        className='text-xl w-full p-1.5 border-b hover:bg-gray-200 hover:text-blue-700 hover:font-bold'
        onClick={() => handleSelect(option)}
      >
        {option.value}
      </p>
    );
  });

  let optionsContent;
  if (isOpen) {
    optionsContent = (
      <div className='absolute w-full max-h-80 overflow-y-scroll flex flex-col bg-white border border-black mt-1 cursor-pointer'>
        {renderedOptions}
      </div>
    );
  }

  return (
    <div className='w-48 relative' ref={dropdownEl}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex bg-white items-center justify-between border border-black p-1.5 cursor-pointer'
      >
        <p className='text-xl'>
          {selectedOption ? selectedOption : 'Select...'}
        </p>
        {isOpen ? <GoArrowUp /> : <GoArrowDown />}
      </div>
      {optionsContent}
    </div>
  );
}
