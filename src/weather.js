import ReactWeather, { useOpenWeather } from 'react-open-weather';

const customStyles = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#0181C2',
	gradientMid:  '#04A7F9',
	gradientEnd:  '#4BC4F7',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  '#FFF',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#4BC4F7',
};

export const London = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'f8bf31f9487e785dfb7fc4c8a1b22be2',
    lat: '51.5072',
    lon: '0.1276',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="London"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export const Selling = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: 'f8bf31f9487e785dfb7fc4c8a1b22be2',
      lat: '51.277790',
      lon: '0.928415',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Selling"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    );
  };

  export const Colonno = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: 'f8bf31f9487e785dfb7fc4c8a1b22be2',
      lat: '45.9728333',
      lon: '9.1404767',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Colonno"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    );
  };

  export const StMartin = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: 'f8bf31f9487e785dfb7fc4c8a1b22be2',
      lat: '45.3804',
      lon: '6.5041',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="St Martin"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    );
  };


