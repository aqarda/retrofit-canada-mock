import { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'north-glenora-net-zero',
    slug: 'north-glenora-net-zero',
    title: 'North Glenora Net-Zero Retrofit',
    location: 'Edmonton, Alberta',
    city: 'Edmonton',
    province: 'AB',
    climateZone: 'Zone 7B (5,120 HDD)',
    vintage: '1954',
    buildingType: 'Single-family bungalow',
    structure: 'Wood-frame on concrete foundation',
    floorAreaSqFt: 1450,
    floorAreaM2: 134.7,
    retrofitType: 'Envelope & Mechanical',
    performanceLevel: 'Net-Zero',
    beforeGj: 112.51,
    afterGj: 39.55,
    energyReductionPercent: 64.8,
    beforeAch50: 7.2,
    afterAch50: 0.95,
    ghgReductionPercent: 88,
    summary: 'A transformative 1950s Edmonton bungalow deep retrofit achieving Net-Zero performance with continuous exterior insulation, cold-climate air-source heat pump, and a 12.24 kW DC solar array.',
    story: `The North Glenora Net-Zero Retrofit demonstrated how mid-century Canadian bungalows can be decoupled from fossil fuels while remaining comfortable through Edmonton winters. The homeowners wanted to eliminate natural gas and safeguard their home against rising utility rates.

Working with an integrated project team, the build sequenced exterior wall continuous EPS insulation, an attic insulation upgrade to R-60 with blown cellulose, and AeroBarrier air sealing. Space heating and cooling was replaced by a centrally ducted cold-climate heat pump with an electric resistance plenum heater for sub -30°C peak loads. The remaining annual electricity demand is completely offset by a 12.24 kW DC rooftop solar array.`,
    lessonsLearned: [
      'Prioritize air sealing before finalizing mechanical sizing to avoid oversized heat pumps.',
      'AeroBarrier automated air sealing brought airtightness down from 7.2 ACH to 0.95 ACH in a single day.',
      'Exterior continuous insulation eliminated thermal bridging across all existing 2x4 framing members.'
    ],
    specs: {
      atticRsi: 'RSI 10.5 (R-60 blown cellulose)',
      wallRsi: 'RSI 5.3 (R-30 effective with 4" exterior EPS)',
      basementRsi: 'RSI 3.5 (R-20 2" continuous interior polyiso)',
      windows: 'Triple-pane argon-filled PVC (U-value 0.18)',
      spaceHeating: 'Cold-climate inverter air-source heat pump (rated down to -30°C)',
      heatPumpCop: '2.8 COP seasonal average',
      backupHeating: '10 kW electric resistance staging coil',
      domesticHotWater: 'Hybrid heat pump water heater (Rheem ProTerra 65 gal)',
      ventilation: '78% SRE Heat Recovery Ventilator (HRV) with ECM motors',
      solarPvKwDc: 12.24,
    },
    financials: {
      totalGrossCost: 86000,
      grantRebatesTotal: 18500,
      netCost: 67500,
      annualUtilitySavings: 3450,
      fundingPrograms: [
        'Canada Greener Homes Grant ($5,000)',
        'City of Edmonton Change Homes for Climate Plan ($4,000)',
        'Canada Greener Homes Loan ($40,000 interest-free financing)'
      ]
    },
    contractor: 'Habitat Studio & Decarbonize Construction',
    energyAdvisor: '4-Elements Energy Advising Ltd.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'windhaven-airdrie-nze',
    slug: 'windhaven-airdrie-nze',
    title: 'Windhaven No Demo NZE Retrofit',
    location: 'Airdrie, Alberta',
    city: 'Airdrie',
    province: 'AB',
    climateZone: 'Zone 7A (4,950 HDD)',
    vintage: '2010',
    buildingType: 'Single-family bungalow',
    structure: 'Standard 2x6 wood-frame',
    floorAreaSqFt: 1600,
    floorAreaM2: 148.6,
    retrofitType: 'Envelope & Mechanical',
    performanceLevel: 'Net-Zero Ready',
    beforeGj: 143.0,
    afterGj: 28.8,
    energyReductionPercent: 79.8,
    beforeAch50: 4.8,
    afterAch50: 0.85,
    ghgReductionPercent: 84,
    summary: 'A 2010 Alberta home that achieved 79.8% annual energy savings without any exterior demolition or siding removal, utilizing interior AeroBarrier sealing and ground-source geothermal technology.',
    story: `The Windhaven project set out to prove that deep energy retrofits can be accomplished without destructive siding demolition. By focusing on non-invasive air sealing, mechanical electrification, and optimizing existing thermal cavities, the project drastically curtailed operational costs.

The team deployed AeroBarrier mist-sealant throughout the building envelope, followed by retrofitting the existing furnace with a variable-speed geothermal heat pump connected to two vertical boreholes. Domestic hot water was coupled directly to the heat pump desuperheater.`,
    lessonsLearned: [
      'Deep retrofits are feasible on 2000s and 2010s construction without replacing siding.',
      'Eliminating air infiltration is far more cost-effective per GJ saved than solely adding insulation thickness.',
      'Geothermal ground loops provide stable, high-COP heating even during -35°C polar vortex events.'
    ],
    specs: {
      atticRsi: 'RSI 10.5 (R-60 blown fiberglass)',
      wallRsi: 'RSI 3.5 (R-20 existing 2x6 cavity, dense packed)',
      basementRsi: 'RSI 2.8 (R-16 framed wall with batts)',
      windows: 'Double-pane low-E argon (original)',
      spaceHeating: 'Water-to-air geothermal heat pump (3-ton inverter)',
      heatPumpCop: '3.6 COP heating',
      backupHeating: 'Internal staged electric auxiliary',
      domesticHotWater: 'Geothermal desuperheater preheat + electric tank',
      ventilation: 'Existing HRV rebalanced and commissioned',
      solarPvKwDc: 8.4,
    },
    financials: {
      totalGrossCost: 64000,
      grantRebatesTotal: 10000,
      netCost: 54000,
      annualUtilitySavings: 2850,
      fundingPrograms: [
        'Canada Greener Homes Grant ($5,000)',
        'Clean Energy Improvement Program (CEIP) Airdrie Financing'
      ]
    },
    contractor: 'EchoHaven Green Builders',
    energyAdvisor: 'Eco-Performance Testing Calgary',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'woodbine-calgary-net-zero',
    slug: 'woodbine-calgary-net-zero',
    title: 'Woodbine Net-Zero Retrofit',
    location: 'Calgary, Alberta',
    city: 'Calgary',
    province: 'AB',
    climateZone: 'Zone 7A (5,050 HDD)',
    vintage: '1981',
    buildingType: 'Split-level',
    structure: 'Split-level wood frame on concrete',
    floorAreaSqFt: 2150,
    floorAreaM2: 199.7,
    retrofitType: 'Envelope & Mechanical',
    performanceLevel: 'Net-Zero',
    beforeGj: 203.0,
    afterGj: 53.0,
    energyReductionPercent: 73.9,
    beforeAch50: 5.6,
    afterAch50: 1.1,
    ghgReductionPercent: 86,
    summary: 'A 1980s Calgary split-level home slashing annual energy consumption from 203 GJ down to 53 GJ before offsetting all remaining loads with a 14.0 kW DC solar photovoltaic array.',
    story: `Split-level homes are notoriously difficult to heat in Calgary due to multiple floor transitions, cold cantilevers, and complex rooflines that drive substantial stack effect. The Woodbine Net-Zero Retrofit tackled these structural weak points systematically.

The exterior envelope was wrapped in 3 inches of continuous graphite-infused polystyrene (GPS) during a planned re-siding project. Cantilevers and crawlspaces were spray-foamed to prevent frozen pipes and cold floors. Heating was fully transitioned from an old 78% efficiency gas furnace to a multi-zone cold-climate heat pump system.`,
    lessonsLearned: [
      'Split-level cantilevers must be completely air-sealed and insulated from underneath.',
      'Timing envelope upgrades with exterior re-roofing or re-siding saves up to 40% in labor costs.',
      'City of Calgary CEIP financing made the large upfront capital expenditure manageable via property tax installments.'
    ],
    specs: {
      atticRsi: 'RSI 10.5 (R-60 cellulose top-up)',
      wallRsi: 'RSI 4.4 (R-25 effective with 3" GPS continuous)',
      basementRsi: 'RSI 3.5 (R-20 framed interior + rim joist spray foam)',
      windows: 'ENERGY STAR Most Efficient Triple Pane (U-0.16)',
      spaceHeating: 'Cold-Climate Heat Pump (Mitsubishi Zuba-Central)',
      heatPumpCop: '2.6 COP at -15°C',
      backupHeating: 'Electric resistance coil',
      domesticHotWater: 'Heat Pump Water Heater (Bradford White AeroTherm)',
      ventilation: 'Lifebreath 155 Max HRV (82% SRE)',
      solarPvKwDc: 14.0,
    },
    financials: {
      totalGrossCost: 98000,
      grantRebatesTotal: 15000,
      netCost: 83000,
      annualUtilitySavings: 4200,
      fundingPrograms: [
        'City of Calgary Clean Energy Improvement Program (CEIP) ($48,000 financing)',
        'Canada Greener Homes Grant ($5,000)'
      ]
    },
    contractor: 'Bow Valley Energy Renovations',
    energyAdvisor: 'Sun Ridge Residential Energy Advisory',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'north-van-net-zero',
    slug: 'north-van-net-zero',
    title: 'North Van Net Zero',
    location: 'North Vancouver, British Columbia',
    city: 'North Vancouver',
    province: 'BC',
    climateZone: 'Zone 5 (2,900 HDD)',
    vintage: '1973',
    buildingType: 'Single-family bungalow',
    structure: 'Post-and-beam and 2x4 framing',
    floorAreaSqFt: 2280,
    floorAreaM2: 211.8,
    retrofitType: 'Envelope & Mechanical',
    performanceLevel: 'Net-Zero',
    beforeGj: 185.0,
    afterGj: 41.0,
    energyReductionPercent: 77.8,
    beforeAch50: 9.37,
    afterAch50: 1.08,
    ghgReductionPercent: 94,
    summary: 'A 2-time award-winning West Coast whole-home retrofit slashing annual energy consumption by ~80% and drastically reducing air infiltration from 9.37 ACH down to 1.08 ACH.',
    story: `This 1973 North Vancouver home had poor thermal comfort, excessive drafts, and high gas heating costs. The objective was to modernize the architectural aesthetic while achieving the highest tier of BC Energy Step Code compliance.

The renovation included stripping exterior cladding to apply self-adhered vapour-permeable air barriers, installing high-performance triple-glazed tilt-and-turn windows, and replacing the atmospheric natural gas boiler with a ductless multi-split heat pump system.`,
    lessonsLearned: [
      'Self-adhered weather resistive barriers (WRB) provide both rainscreen drainage and an airtight exterior membrane.',
      'Detailed window flashing sequencing prevents both water penetration and perimeter air leakage.',
      'Ductless mini-splits offered individual room zoning, resolving historic temperature imbalances.'
    ],
    specs: {
      atticRsi: 'RSI 8.8 (R-50 rockwool batts)',
      wallRsi: 'RSI 4.9 (R-28 effective with exterior mineral wool)',
      basementRsi: 'RSI 2.1 (R-12 below slab insulation)',
      windows: 'Triple-pane European tilt-and-turn (U-0.14)',
      spaceHeating: 'Ductless multi-split heat pump system (Fujitsu Halcyon)',
      heatPumpCop: '3.4 COP',
      backupHeating: 'None (100% heat pump heating)',
      domesticHotWater: 'Sanden CO2 heat pump water heater',
      ventilation: 'Zehnder ComfoAir 70 ERV',
      solarPvKwDc: 10.2,
    },
    financials: {
      totalGrossCost: 110000,
      grantRebatesTotal: 17000,
      netCost: 93000,
      annualUtilitySavings: 3100,
      fundingPrograms: [
        'CleanBC Better Homes Rebates ($11,000)',
        'Canada Greener Homes Grant ($5,000)',
        'District of North Vancouver Energy Rebate ($1,000)'
      ]
    },
    contractor: 'Kindred Construction & Decarbonize BC',
    energyAdvisor: 'E3 Eco Group',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'sundance-housing-coop',
    slug: 'sundance-housing-coop',
    title: 'Sundance Housing Co-op Panelized Retrofit',
    location: 'Edmonton, Alberta',
    city: 'Edmonton',
    province: 'AB',
    climateZone: 'Zone 7B (5,120 HDD)',
    vintage: '1977',
    buildingType: 'Row house / Townhome',
    structure: 'Multi-unit residential townhomes',
    floorAreaSqFt: 58000,
    floorAreaM2: 5388,
    retrofitType: 'Prefabricated Panelization',
    performanceLevel: 'Net-Zero Ready',
    beforeGj: 185.0,
    afterGj: 32.0,
    energyReductionPercent: 82.7,
    beforeAch50: 6.5,
    afterAch50: 0.8,
    ghgReductionPercent: 85,
    summary: 'A national flagship project demonstrating industrialized, off-site panelized exterior retrofits across 59 co-operative housing units in Edmonton with Natural Resources Canada backing.',
    story: `The Sundance Housing Co-operative in Edmonton is one of North America's landmark deep retrofit projects. Facing aging building envelopes and escalating energy bills across 59 townhome units, the co-op worked with Butterwick Projects and SAIT to pioneer off-site digital laser-scanning and factory-prefabricated panelized facades.

Pre-manufactured insulated wall and roof panels with pre-installed triple-pane windows were craned into place over the existing siding while residents remained safely inside their homes. Centralized heat pump mechanical pods were introduced to replace individual gas furnaces.`,
    lessonsLearned: [
      '3D LiDAR scanning of existing facades ensures millimeter precision for off-site manufactured panel erection.',
      'Residents can remain in place throughout construction when using exterior panelized retrofit technology.',
      'Industrializing deep retrofits is the key pathway to scale up building decarbonization across thousands of Canadian multi-unit properties.'
    ],
    specs: {
      atticRsi: 'RSI 14.1 (R-80 panelized roof insulation)',
      wallRsi: 'RSI 7.0 (R-40 effective prefabricated panels with mineral wool)',
      basementRsi: 'RSI 3.5 (R-20 exterior foundation insulation)',
      windows: 'Casement triple-pane high performance (U-0.15)',
      spaceHeating: 'Centralized air-to-water heat pump chiller system',
      heatPumpCop: '2.7 COP at design conditions',
      backupHeating: 'Central electric boiler staging',
      domesticHotWater: 'Central commercial heat pump water heating loop',
      ventilation: 'Centralized energy recovery ventilation (ERV) with 84% recovery',
      solarPvKwDc: 280.0,
    },
    financials: {
      totalGrossCost: 4500000,
      grantRebatesTotal: 2500000,
      netCost: 2000000,
      annualUtilitySavings: 185000,
      fundingPrograms: [
        'Natural Resources Canada Greener Neighbourhoods Pilot Program (GNPP)',
        'Smart Sustainable Resilient Infrastructure Association (SSRIA)',
        'Federation of Canadian Municipalities (FCM) Green Municipal Fund'
      ]
    },
    contractor: 'Butterwick Projects & SAIT Applied Research',
    energyAdvisor: 'Building Energy Advisors AB',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'brentwood-calgary-bungalow',
    slug: 'brentwood-calgary-bungalow',
    title: 'Brentwood 1968 Bungalow Deep Retrofit',
    location: 'Calgary, Alberta',
    city: 'Calgary',
    province: 'AB',
    climateZone: 'Zone 7A (5,050 HDD)',
    vintage: '1968',
    buildingType: 'Single-family bungalow',
    structure: 'Standard wood frame on poured concrete foundation',
    floorAreaSqFt: 1350,
    floorAreaM2: 125.4,
    retrofitType: 'Envelope & Mechanical',
    performanceLevel: 'Deep Energy Reduction',
    beforeGj: 158.0,
    afterGj: 44.0,
    energyReductionPercent: 72.1,
    beforeAch50: 6.9,
    afterAch50: 1.4,
    ghgReductionPercent: 74,
    summary: 'A classic NW Calgary bungalow transformed into an ultra-low emission residence through air sealing, attic insulation to R-60, and a cold-climate heat pump supported by Calgary CEIP financing.',
    story: `Built in 1968, this NW Calgary bungalow exhibited classic characteristics of older prairie construction: uninsulated 2x4 exterior walls, less than 5 inches of original vermiculite attic insulation, and an aging mid-efficiency gas furnace.

The owners utilized the City of Calgary Clean Energy Improvement Program (CEIP) to finance 100% of the qualifying improvements through their property taxes. The project sealed all major attic thermal bypasses, blew in cellulose to achieve R-60, replaced drafty basement slider windows, and installed a cold-climate air-source heat pump.`,
    lessonsLearned: [
      'Comprehensive air sealing at the ceiling plane before adding attic insulation prevented warm, moist air from migrating into the roof cavity.',
      'CEIP property-assessed financing removed the financial barrier of upfront cash requirements.',
      'Indoor comfort improved dramatically, completely eliminating the chilly winter floor effect.'
    ],
    specs: {
      atticRsi: 'RSI 10.5 (R-60 blown cellulose over sealed drywall)',
      wallRsi: 'RSI 2.3 (R-13 cavity dense pack)',
      basementRsi: 'RSI 2.8 (R-16 framed wall with interior XPS)',
      windows: 'Triple-pane low-E argon vinyl sliders',
      spaceHeating: 'Cold-Climate Air-Source Heat Pump (Moovair Central Ducted)',
      heatPumpCop: '2.5 COP at -10°C',
      backupHeating: '10 kW staging electric element',
      domesticHotWater: 'Heat Pump Water Heater (AO Smith Voltex)',
      ventilation: 'Venmar AVS Solo HRV (75% SRE)',
      solarPvKwDc: 9.6,
    },
    financials: {
      totalGrossCost: 52000,
      grantRebatesTotal: 10000,
      netCost: 42000,
      annualUtilitySavings: 2750,
      fundingPrograms: [
        'City of Calgary Clean Energy Improvement Program (CEIP) ($42,000 financing)',
        'Canada Greener Homes Grant ($5,000)'
      ]
    },
    contractor: 'Calgary Retrofit Specialists Inc.',
    energyAdvisor: 'Prairie Thermal Diagnostics',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'banff-trail-heritage',
    slug: 'banff-trail-heritage',
    title: 'Banff Trail 1952 Heritage Retrofit',
    location: 'Calgary, Alberta',
    city: 'Calgary',
    province: 'AB',
    climateZone: 'Zone 7A (5,050 HDD)',
    vintage: '1952',
    buildingType: 'Heritage home',
    structure: '1.5-storey wood frame on concrete block foundation',
    floorAreaSqFt: 1720,
    floorAreaM2: 159.8,
    retrofitType: 'Envelope & Mechanical',
    performanceLevel: 'Deep Energy Reduction',
    beforeGj: 196.0,
    afterGj: 68.0,
    energyReductionPercent: 65.3,
    beforeAch50: 8.4,
    afterAch50: 1.8,
    ghgReductionPercent: 68,
    summary: 'A 1.5-storey heritage Calgary home overcoming complex cathedral ceilings and kneewall draft points to slash energy use by 65% with a dual-fuel heat pump system.',
    story: `Story-and-a-half homes built in the 1950s suffer from notorious 'kneewall' cold spots where second-floor bedrooms sit above unconditioned exterior eaves. The Banff Trail project systematically corrected these envelope defects.

The contractor created continuous thermal barriers along the second-floor kneewalls and roof rafters using spray foam and mineral wool. The basement rim joists were sealed with closed-cell polyurethane. Heating was updated to a cold-climate hybrid dual-fuel heat pump that automatically utilizes existing natural gas only when ambient temperatures drop below -25°C.`,
    lessonsLearned: [
      'Story-and-a-half rooflines require strict attention to ventilation baffles to avoid moisture accumulation while insulating kneewalls.',
      'Hybrid dual-fuel heat pumps offer an ideal transition for homeowners with standard 100-amp electrical panels who want to avoid panel upgrade costs.',
      'Air sealing the basement rim joist immediately raised the main floor surface temperature by 3.5°C.'
    ],
    specs: {
      atticRsi: 'RSI 8.8 (R-50 kneewall and rafter insulation)',
      wallRsi: 'RSI 2.5 (R-14 cavity blown cellulose)',
      basementRsi: 'RSI 2.8 (R-16 framed wall + rim joist sealed)',
      windows: 'Double-hung historic replica triple-glazed wood-clad windows',
      spaceHeating: 'Cold-Climate Dual-Fuel Heat Pump (Bosch IDS 2.0)',
      heatPumpCop: '2.8 COP',
      backupHeating: 'High-efficiency natural gas furnace (96% AFUE)',
      domesticHotWater: 'Power-vent high-efficiency gas tank',
      ventilation: 'Fantech VHR 150 Heat Recovery Ventilator',
      solarPvKwDc: 7.2,
    },
    financials: {
      totalGrossCost: 48000,
      grantRebatesTotal: 7500,
      netCost: 40500,
      annualUtilitySavings: 2350,
      fundingPrograms: [
        'City of Calgary Clean Energy Improvement Program (CEIP)',
        'Alberta Ecotrust Climate Innovation Grant'
      ]
    },
    contractor: 'Heritage Decarbonization Calgary',
    energyAdvisor: 'Enerspec Energy Consultants',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'southeastern-ontario-phased',
    slug: 'southeastern-ontario-phased',
    title: 'Southeastern Ontario Phased Deep Retrofit',
    location: 'Kingston, Ontario',
    city: 'Kingston',
    province: 'ON',
    climateZone: 'Zone 6 (4,200 HDD)',
    vintage: '1962',
    buildingType: 'Single-family bungalow',
    structure: 'Brick veneer on wood frame',
    floorAreaSqFt: 1850,
    floorAreaM2: 171.8,
    retrofitType: 'Envelope & Mechanical',
    performanceLevel: 'Net-Zero Ready',
    beforeGj: 168.0,
    afterGj: 48.0,
    energyReductionPercent: 71.4,
    beforeAch50: 6.2,
    afterAch50: 1.2,
    ghgReductionPercent: 79,
    summary: 'A phased deep retrofit over a 3-year timeline proving that homeowners can systematically budget and execute whole-home decarbonization without taking on excessive debt.',
    story: `Many homeowners cannot afford to undertake a $75,000 deep retrofit all at once. The Southeastern Ontario Phased Deep Retrofit project created a step-by-step master plan with an Energy Advisor in Year 1.

Phase 1 focused strictly on low-cost high-ROI air sealing and attic insulation to R-60. Phase 2 replaced failing single-pane windows with high-efficiency triple pane units. Phase 3 completed the mechanical transition, decommissioning the oil furnace in favor of a cold-climate heat pump.`,
    lessonsLearned: [
      'Having an upfront comprehensive Retrofit Roadmap prevents wasted investment during phased renovations.',
      'Sizing the heat pump was delayed until after envelope upgrades were complete, allowing the owner to install a 2.5-ton unit instead of a 4-ton unit.',
      'Replacing fuel oil with an electric heat pump reduced home insurance premiums and eliminated fuel spill liabilities.'
    ],
    specs: {
      atticRsi: 'RSI 10.5 (R-60 loose-fill cellulose)',
      wallRsi: 'RSI 2.3 (R-13 cavity insulation)',
      basementRsi: 'RSI 3.5 (R-20 continuous closed-cell spray foam)',
      windows: 'Triple-pane vinyl ENERGY STAR Most Efficient',
      spaceHeating: 'Cold-Climate Air Source Heat Pump (Daikin SkyAir)',
      heatPumpCop: '2.9 COP',
      backupHeating: 'Electric resistance auxiliary strip',
      domesticHotWater: 'Heat pump water heater (Bradford White)',
      ventilation: 'Venmar ERV with HEPA filtration',
      solarPvKwDc: 8.8,
    },
    financials: {
      totalGrossCost: 59000,
      grantRebatesTotal: 12000,
      netCost: 47000,
      annualUtilitySavings: 3200,
      fundingPrograms: [
        'Enbridge Home Efficiency Plus Program ($7,000)',
        'Canada Greener Homes Grant ($5,000)'
      ]
    },
    contractor: 'Eastern Ontario Decarbonization Collective',
    energyAdvisor: 'Quinte Energy Ratings',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];
