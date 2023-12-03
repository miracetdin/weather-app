export default function weatherCaseFunction (value) {
    switch (value) {
    case 'Thunderstorm':
      return 'Gök Gürültülü Fırtına';
    case 'Drizzle':
      return 'Çiseleme';
    case 'Rain':
      return 'Yağmur';
    case 'Snow':
      return 'Kar';
    case 'Clear':
      return 'Açık';
    case 'Clouds':
      return 'Bulutlu';
    case 'Fog':
      return 'Sisli';
    case 'Sand':
      return 'Kum Fırtınası';
    case 'Mist':
      return 'Hafif Sis';
    case 'Smoke':
      return 'Dumanlı';
    case 'Haze':
      return 'Duman';
    case 'Dust':
      return 'Tozlu';
    case 'Ash':
      return 'Kül';
    case 'Squall':
      return 'Şiddetli Fırtına';
    case 'Tornado':
      return 'Tornado';      
    default:
      return 'Bilinmiyor'
    }
  }