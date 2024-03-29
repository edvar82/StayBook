import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    Adultos: 1,
    Crianças: 0,
    Quartos: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const headerRef = useRef(null);
  useEffect(() => {
    // Função que fecha o input e opções abertos
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDate(false);
        setOpenOptions(false);
      }
    };

    // Adiciona o event listener ao carregar o componente
    document.addEventListener('click', handleClickOutside);

    // Remove o event listener ao descarregar o componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchData = {
      destination,
      checkIn: date[0].startDate,
      checkOut: date[0].endDate,
      adults: options.Adultos,
      children: options.Crianças,
      rooms: options.Quartos,
    };
    const diaIn = format(searchData.checkIn, 'dd');
    const mesIn = format(searchData.checkIn, 'MM');
    const anoIn = format(searchData.checkIn, 'yyyy');

    const diaOut = format(searchData.checkOut, 'dd');
    const mesOut = format(searchData.checkOut, 'MM');
    const anoOut = format(searchData.checkOut, 'yyyy');
    localStorage.setItem('lugar', searchData.destination);
    localStorage.setItem('diaIn', diaIn);
    localStorage.setItem('mesIn', mesIn);
    localStorage.setItem('anoIn', anoIn);
    localStorage.setItem('diaOut', diaOut);
    localStorage.setItem('mesOut', mesOut);
    localStorage.setItem('anoOut', anoOut);
    localStorage.setItem('adultos', searchData.adults);
    localStorage.setItem('children', searchData.children);
    localStorage.setItem('rooms', searchData.rooms);
    navigate('/search');
  };
  return (
    <div
      className="headerSearch"
      ref={headerRef}
    >
      <div className="headerSearchItem">
        <FontAwesomeIcon
          icon={faBed}
          className="headerIcon"
        />
        <input
          id="search"
          type="text"
          placeholder="Aonde está indo?"
          className="headerSearchInput"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="headerSearchItem">
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="headerIcon"
        />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >{`${format(date[0].startDate, 'dd/MM/yyyy')} até ${format(
          date[0].endDate,
          'dd/MM/yyyy'
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="headerSearchItem">
        <FontAwesomeIcon
          icon={faPerson}
          className="headerIcon"
        />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="headerSearchText"
        >{`${options.Adultos} Adultos · ${options.Crianças} Crianças · ${options.Quartos} Quartos`}</span>
        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Adultos</span>
              <div className="optionCounter">
                <button
                  disabled={options.Adultos <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption('Adultos', 'd')}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.Adultos}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption('Adultos', 'i')}
                >
                  +
                </button>
              </div>
            </div>

            <div className="optionItem">
              <span className="optionText">Crianças</span>
              <div className="optionCounter">
                <button
                  disabled={options.Crianças <= 0}
                  className="optionCounterButton"
                  onClick={() => handleOption('Crianças', 'd')}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.Crianças}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption('Crianças', 'i')}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Quartos</span>
              <div className="optionCounter">
                <button
                  disabled={options.Quartos <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption('Quartos', 'd')}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.Quartos}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption('Quartos', 'i')}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="headerSearchItem">
        <button
          className="headerBtn"
          style={{ borderRadius: '10px 0px 0px 10px' }}
          onClick={handleSearch}
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
};

export default Header;
