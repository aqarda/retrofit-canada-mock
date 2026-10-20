import { RoadmapStepData } from '@/types';

export const ROADMAP_STEPS: RoadmapStepData[] = [
  {
    stepNumber: '01',
    title: 'Get a Ballpark Estimate',
    subtitle: 'Overcome Initial Cost Uncertainty',
    summary: 'Before spending money on comprehensive design or drawings, establish an initial high-level budget and feasibility scope based on verified regional data.',
    description: `Every building is unique, but deep retrofits across similar building vintages share consistent physical and economic benchmarks. By exploring completed case studies from your climate zone and building style (such as a 1960s Prairie bungalow or a 1980s split-level), you can establish realistic expectations for total investment, potential energy bill reductions, and available incentives.

Rather than looking at upgrades as isolated expenses, calculate the total cost of ownership—including anticipated savings on rising carbon levies and avoiding replacement costs for end-of-life furnaces and air conditioners.`,
    keyActionItems: [
      'Identify your home’s construction era, square footage, and current heating fuel type.',
      'Explore matching projects in the Retrofit Canada Case Study Library.',
      'Check local municipal Clean Energy Improvement Program (CEIP) and PACE financing availability.',
      'Establish your core goals: utility savings, eliminating winter drafts, or cutting carbon emissions.'
    ],
    tipsForSuccess: [
      'Plan around planned maintenance: combine siding replacement with exterior continuous insulation to cut labor overhead in half.',
      'Don’t rush to purchase a furnace during a breakdown; having a pre-planned roadmap avoids panic-buying fossil fuel equipment.'
    ],
    commonPitfalls: [
      'Assuming that a heat pump or solar alone constitutes a deep retrofit without addressing the building envelope.',
      'Relying on generic rules of thumb from warmer US or coastal climate zones for cold Canadian winters.'
    ]
  },
  {
    stepNumber: '02',
    title: 'Choose a Project Team',
    subtitle: 'Assemble Certified Expertise',
    summary: 'Partner with registered professionals who understand building science, cold-climate air-source heat pump sizing, and whole-building envelopes.',
    description: `A successful deep energy retrofit requires a collaborative team that views your home as a single unified thermodynamic system. Engaging an independent Natural Resources Canada (NRCan) registered Energy Advisor is the cornerstone of the process.

Your Energy Advisor conducts an initial blower door test and constructs a thermodynamic computer model (HOT2000) of your home. Depending on the scale of your project, you may also work with a specialized general contractor, a mechanical HVAC designer, and an architect.`,
    keyActionItems: [
      'Book a pre-retrofit EnerGuide Home Energy Assessment through a licensed Service Organization.',
      'Interview contractors with proven experience in airtight construction, heat pumps, and continuous insulation.',
      'Confirm contractor familiarity with City of Calgary CEIP or provincial rebate documentation standards.',
      'Establish a single point of responsibility for building airtightness and mechanical commissioning.'
    ],
    tipsForSuccess: [
      'Ask prospective contractors for blower door test results from their previously completed projects.',
      'Involve your HVAC contractor early before window or insulation specifications are finalized.'
    ],
    commonPitfalls: [
      'Hiring trades who use outdated sizing rules (like 500 sq ft per ton of cooling) that result in severely oversized heat pumps.'
    ]
  },
  {
    stepNumber: '03',
    title: 'Conduct Energy Audit & Baseline Modeling',
    subtitle: 'Measure, Don’t Guess',
    summary: 'Diagnose exact air leakage pathways, thermal bridging, and baseline energy consumption using calibrated diagnostic tools.',
    description: `You cannot improve what you cannot measure. The certified Energy Advisor performs an on-site blower door depressurization test to calculate your home’s exact air changes per hour (ACH@50) and uses infrared thermography to identify hidden thermal bridges and insulation voids.

This diagnostic baseline is entered into NRCan’s HOT2000 software to simulate different renovation packages. The model produces a custom EnerGuide Rating System (ERS) report that forecasts energy consumption in gigajoules (GJ/year) and outlines the most cost-effective upgrade sequence.`,
    keyActionItems: [
      'Complete the official baseline blower door depressurization audit.',
      'Locate primary infiltration points (attic penetrations, rim joists, electrical boxes, cantilevers).',
      'Review your EnerGuide Renovation Upgrade Report (RUR) with your project team.',
      'Register for applicable federal and municipal incentive portals before starting any demolition.'
    ],
    tipsForSuccess: [
      'Ensure the audit measures both heated basement area and exterior envelope surface areas accurately.',
      'Share 12–24 months of actual natural gas and electricity billing history with your advisor for calibration.'
    ],
    commonPitfalls: [
      'Starting construction before the baseline audit is officially registered, which forfeits eligibility for CEIP and federal grants.'
    ]
  },
  {
    stepNumber: '04',
    title: 'Envelope First Sequencing',
    subtitle: 'Super-Insulation & Air Barrier Continuity',
    summary: 'Shrink your home’s peak heat loss by eliminating drafts and topping up insulation before installing mechanical equipment.',
    description: `The single most important principle in Canadian building science is 'Envelope First'. Air leakage and conductive heat loss through walls and ceilings represent the vast majority of space heating demand in winter.

By comprehensively air sealing the ceiling plane, topping up attic insulation to R-60, sealing basement rim joists, and installing exterior continuous insulation, you reduce the home’s peak heat demand by 30% to 50%. This enables subsequent mechanical systems to be dramatically smaller, less costly, and more efficient.`,
    keyActionItems: [
      'Air seal attic flats, plumbing chases, electrical penetrations, and attic access hatches.',
      'Top up attic insulation to minimum RSI 10.5 (R-60) using blown cellulose or mineral wool.',
      'Seal and insulate basement rim joists with continuous closed-cell spray foam or rigid polyiso.',
      'Upgrade windows to ENERGY STAR Most Efficient triple-glazed units when replacing fenestration.'
    ],
    tipsForSuccess: [
      'Always address attic air leaks before blowing in cellulose; insulation slows heat conduction but does not stop air currents.',
      'Verify proper attic ventilation baffles to maintain airflow from soffit to ridge and avoid ice dams.'
    ],
    commonPitfalls: [
      'Replacing windows first under the misconception that windows are the primary source of whole-home heat loss.'
    ]
  },
  {
    stepNumber: '05',
    title: 'Electrify & Clean Mechanicals',
    subtitle: 'Modern Cold-Climate Heat Pumps',
    summary: 'Replace fossil gas heating with an inverter-driven cold-climate heat pump rated for Canadian winters down to -30°C.',
    description: `Once your building envelope has been tightened and insulated, your home requires far less heat to maintain comfortable indoor temperatures. Now is the ideal time to transition away from fossil natural gas.

Modern cold-climate air-source heat pumps (ccASHPs) utilize variable-speed inverter compressors and advanced refrigerants to extract heat from outdoor air even at -25°C or -30°C with seasonal efficiencies 200% to 300% higher than gas furnaces. Pair your heat pump with a balanced Heat Recovery Ventilator (HRV) for fresh indoor air and a hybrid heat pump water heater.`,
    keyActionItems: [
      'Select an NRCan-listed cold-climate air-source heat pump (ccASHP) sized strictly to the new post-retrofit envelope load.',
      'Decide between an all-electric system with auxiliary electric staging or a hybrid dual-fuel backup.',
      'Install a high-efficiency Heat Recovery Ventilator (HRV) or Energy Recovery Ventilator (ERV).',
      'Replace atmospheric gas domestic water tanks with an ENERGY STAR hybrid heat pump water heater.'
    ],
    tipsForSuccess: [
      'Ensure the outdoor unit is elevated 18–24 inches above expected snow lines and protected from roof runoff.',
      'Verify that existing ductwork has adequate cross-sectional area to handle the heat pump’s airflow requirements.'
    ],
    commonPitfalls: [
      'Oversizing the heat pump, which causes short-cycling in mild weather and degrades dehumidification and comfort.'
    ]
  },
  {
    stepNumber: '06',
    title: 'On-Site Renewables & Verification',
    subtitle: 'Close The Loop with Rooftop Solar',
    summary: 'Offset remaining clean electricity consumption with solar photovoltaic (PV) generation and complete the post-retrofit audit.',
    description: `With your envelope super-insulated and mechanicals fully electrified, your home’s total annual energy consumption will be a fraction of its former baseline. Rooftop solar photovoltaic (PV) systems can now be sized to offset 100% of your remaining annual electrical consumption.

The project concludes with an official post-retrofit EnerGuide audit and blower door test. The Energy Advisor records your newly achieved airtightness, issues an updated EnerGuide Rating label, and submits the final documentation for municipal CEIP financing closeout and federal grant disbursement.`,
    keyActionItems: [
      'Size rooftop solar PV based on your home’s new electrified annual kilowatt-hour demand.',
      'Perform the official post-retrofit blower door test and HOT2000 verification model.',
      'Submit final receipts and EnerGuide certificates to municipal CEIP and federal grant administrators.',
      'Submit your completed project data to the Retrofit Canada Case Study Library to help other Canadians.'
    ],
    tipsForSuccess: [
      'Calgary and Southern Alberta offer among the highest solar photovoltaic yields in Canada—take advantage of micro-generation net billing.',
      'Celebrate your newly transformed home: whisper-quiet comfort, zero indoor combustion gases, and resilient low bills.'
    ],
    commonPitfalls: [
      'Installing solar before completing envelope upgrades, which leads to overpaying for an unnecessarily large solar array.'
    ]
  }
];
