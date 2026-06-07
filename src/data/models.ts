export interface ModelSpec {
  power: string
  acceleration: string
  topSpeed: string
  engine: string
}

export interface Model {
  id: string
  name: string
  number: string
  tagline: string
  category: string
  image: string
  color: string
  accentColor: string
  specs: ModelSpec
  description: string
  fullSpecs: Record<string, string>
}

export const models: Model[] = [
  {
    id: 'huracan',
    name: 'HURACÁN STO',
    number: '01',
    tagline: 'TRACK-BORN. STREET-LEGAL.',
    category: 'SUPER SPORT',
    image: '/assets/model-huracan.jpg',
    color: '#1a0a00',
    accentColor: '#ff6b1a',
    specs: { power: '640 CV', acceleration: '3.0S', topSpeed: '310 KM/H', engine: 'V10 5.2L' },
    description: 'Born from Super Trofeo and GT3 EVO racing programmes. The STO transfers motorsport DNA directly to the road — a pure, unfiltered connection between driver and machine.',
    fullSpecs: {
      Engine: 'Naturally Aspirated V10 5.2L',
      Power: '640 CV at 8,000 rpm',
      Torque: '565 Nm at 6,500 rpm',
      '0–100 km/h': '3.0 seconds',
      'Top Speed': '310 km/h',
      Transmission: '7-speed LDF dual-clutch',
      Drivetrain: 'RWD',
      Weight: '1,339 kg dry',
      'Aero Downforce': '420 kg at 280 km/h',
      Brakes: 'Carbon Ceramic (CCB)',
    },
  },
  {
    id: 'urus',
    name: 'URUS PERFORMANTE',
    number: '02',
    tagline: 'THE SUPER-SUV. REDEFINED.',
    category: 'SUPER SUV',
    image: '/assets/model-urus.jpg',
    color: '#050a14',
    accentColor: '#e8a020',
    specs: { power: '666 CV', acceleration: '3.3S', topSpeed: '306 KM/H', engine: 'V8 TWIN-TURBO' },
    description: 'The world\'s first Super Sport Utility Vehicle, now sharper, lighter, and more aggressive. 10 kg lighter than the standard Urus with an upgraded suspension tune and widened track.',
    fullSpecs: {
      Engine: 'Twin-Turbocharged V8 4.0L',
      Power: '666 CV at 6,000 rpm',
      Torque: '850 Nm at 2,300 rpm',
      '0–100 km/h': '3.3 seconds',
      'Top Speed': '306 km/h',
      Transmission: '8-speed Torque Converter',
      Drivetrain: 'AWD',
      Weight: '2,150 kg',
      Ground: '185 mm clearance',
      Towing: '3,500 kg',
    },
  },
  {
    id: 'revuelto',
    name: 'REVUELTO',
    number: '03',
    tagline: 'THE NEW V12 HYBRID FLAGSHIP.',
    category: 'HYBRID GT',
    image: '/assets/model-revuelto.jpg',
    color: '#0a0a14',
    accentColor: '#93c5fd',
    specs: { power: '1015 CV', acceleration: '2.5S', topSpeed: '350 KM/H', engine: 'V12 + 3 MOTORS' },
    description: 'The Lamborghini Revuelto is the world\'s most powerful production V12 hybrid. Three electric motors augment the naturally aspirated V12 to produce a total system output that redefines supercar physics.',
    fullSpecs: {
      Engine: 'Naturally Aspirated V12 6.5L + 3 Electric Motors',
      Power: '1,015 CV combined',
      Torque: '730 Nm',
      '0–100 km/h': '2.5 seconds',
      'Top Speed': '350 km/h',
      Transmission: '8-speed LDF single-clutch',
      Drivetrain: 'AWD with e-front axle',
      Battery: '3.8 kWh lithium-ion',
      'EV Range': '6 km city mode',
      Weight: '1,772 kg dry',
    },
  },
  {
    id: 'sian',
    name: 'SIÁN ROADSTER',
    number: '04',
    tagline: 'NATURE. ELEVATED TO ART.',
    category: 'LIMITED EDITION',
    image: '/assets/model-sian.jpg',
    color: '#030d08',
    accentColor: '#22c55e',
    specs: { power: '819 CV', acceleration: '2.8S', topSpeed: '350 KM/H', engine: 'V12 + SUPERCAPACITOR' },
    description: 'Only 19 units exist. The Sián Roadster combines a 6.5L V12 with a 48V mild-hybrid supercapacitor system, charging three times faster than a conventional battery. Each is unique. None are for sale.',
    fullSpecs: {
      Engine: 'V12 6.5L + Supercapacitor',
      Power: '819 CV',
      Units: '19 worldwide',
      Status: 'Sold out',
      '0–100 km/h': '2.8 seconds',
      'Top Speed': '350 km/h',
      Hybrid: '48V supercapacitor',
      Charging: '3× faster than Li-Ion',
      Weight: '1,595 kg',
      'Body Material': 'Full carbon fibre',
    },
  },
]
